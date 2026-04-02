/**
 * 轨迹数据合并器 v2 - GPS坐标匹配
 * - 几何: 使用 GPX 真实坐标
 * - 元数据: 通过GPS坐标最近点匹配
 */

const fs = require('fs');
const path = require('path');

// ── 1. 读取并解析 GPX ───────────────────────────────────────────────
const gpxPath = path.join(__dirname, '1041365gpx.txt');
const gpxContent = fs.readFileSync(gpxPath, 'utf8');
const trkptRegex = /<trkpt lat="([^"]+)" lon="([^"]+)">\s*<time>([^<]+)Z?<\/time>/g;
const gpxPoints = [];
let m;
while ((m = trkptRegex.exec(gpxContent)) !== null) {
  gpxPoints.push({ lat: parseFloat(m[1]), lon: parseFloat(m[2]), time: new Date(m[3]) });
}
console.log(`📊 GPX: ${gpxPoints.length} 点`);

// ── 2. 采样 GPX 并计算 Canvas 坐标 ─────────────────────────────────
const CW = 1100, CH = 770, OFFSET_X = 160, OFFSET_Y = 60, MARGIN_X = 40, MARGIN_Y = 40;
let minLat = Infinity, maxLat = -Infinity, minLon = Infinity, maxLon = -Infinity;
for (const p of gpxPoints) {
  if (p.lat < minLat) minLat = p.lat;
  if (p.lat > maxLat) maxLat = p.lat;
  if (p.lon < minLon) minLon = p.lon;
  if (p.lon > maxLon) maxLon = p.lon;
}
const scale = Math.min((CW - 2 * MARGIN_X) / (maxLon - minLon), (CH - 2 * MARGIN_Y) / (maxLat - minLat));

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371000, dLat = (lat2 - lat1) * Math.PI / 180, dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const SAMPLE_RATE = 10;
const sampledGpx = [];
let cumDist = 0;
for (let i = 0; i < gpxPoints.length; i += SAMPLE_RATE) {
  const p = gpxPoints[i];
  if (i > 0) cumDist += haversine(gpxPoints[i - SAMPLE_RATE].lat, gpxPoints[i - SAMPLE_RATE].lon, p.lat, p.lon);
  sampledGpx.push({
    x: Math.round(MARGIN_X + (p.lon - minLon) * scale + OFFSET_X),
    y: Math.round(CH - MARGIN_Y - (p.lat - minLat) * scale + OFFSET_Y),
    km: cumDist / 1000, lat: p.lat, lon: p.lon
  });
}
const TOTAL_KM = cumDist / 1000;
console.log(`📐 采样: ${sampledGpx.length} 点, 总距: ${TOTAL_KM.toFixed(2)}km`);

// ── 3. 读取旧 trajectoryData.js ────────────────────────────────────
const oldPath = path.join(__dirname, 'src', 'js', 'trajectoryData.js');
const oldContent = fs.readFileSync(oldPath, 'utf8');

// 提取 waypoints（逐行解析，避免正则问题）
const oldWaypoints = [];
const wpLines = oldContent.split('\n');
let inWaypoints = false, braceCount = 0;
let wpBlock = '';
for (const line of wpLines) {
  if (line.includes('export const waypoints')) { inWaypoints = true; braceCount = 0; continue; }
  if (inWaypoints) {
    braceCount += (line.match(/\{/g) || []).length;
    braceCount -= (line.match(/\}/g) || []).length;
    wpBlock += line + '\n';
    if (braceCount <= 0 && line.includes('];')) { inWaypoints = false; break; }
  }
}

// 逐个解析 waypoint 对象
const wpEntryRegex = /\{\s*x:\s*(\d+)[^}]*?name:\s*'([^']+)'[^}]*?km:\s*([0-9.]+)[^}]*?elev:\s*([0-9.]+)/g;
let wm;
while ((wm = wpEntryRegex.exec(wpBlock)) !== null) {
  const entry = wpBlock.substring(wm.index, wpBlock.indexOf('}', wm.index) + 1);
  const isCheckMatch = /isCheck:\s*(\d+)/.exec(entry);
  const roadMatch = /road:\s*'([^']*)'/.exec(entry);
  const checkNameMatch = /checkName:\s*'([^']*)'/.exec(entry);
  const challengeMatch = /challenge:\s*true/.exec(entry);
  const gpsMatch = /gps:\s*'([^']+)'/.exec(entry);

  let lat = 0, lon = 0;
  if (gpsMatch) {
    const gm = gpsMatch[1].match(/([0-9.]+)°N,\s*([0-9.]+)°E/);
    if (gm) { lat = parseFloat(gm[1]); lon = parseFloat(gm[2]); }
  }

  oldWaypoints.push({
    x: parseInt(wm[1]), name: wm[2], km: parseFloat(wm[3]), elev: parseFloat(wm[4]),
    isCheck: isCheckMatch ? parseInt(isCheckMatch[1]) : 0,
    road: roadMatch ? roadMatch[1] : '',
    checkName: checkNameMatch ? checkNameMatch[1] : '',
    challenge: !!challengeMatch,
    lat, lon
  });
}
console.log(`📋 旧 waypoints: ${oldWaypoints.length}`);

// 提取 checkpoints
const cpBlockMatch = /export const checkpoints = \[\s*([\s\S]*?)\];/.exec(oldContent);
const oldCheckpoints = [];
if (cpBlockMatch) {
  const cpEntryRe = /\{\s*km:\s*([0-9.]+)[^}]*?name:\s*'([^']+)'[^}]*?elev:\s*([0-9.]+)[^}]*?color:\s*'([^']+)'/g;
  let cm;
  while ((cm = cpEntryRe.exec(cpBlockMatch[1])) !== null) {
    oldCheckpoints.push({ km: parseFloat(cm[1]), name: cm[2], elev: parseFloat(cm[3]), color: cm[4] });
  }
}
console.log(`📋 checkpoints: ${oldCheckpoints.length}`);

// 提取 challengePoints
const chalBlockMatch = /export const challengePoints = \[\s*([\s\S]*?)\];/.exec(oldContent);
const oldChallenges = [];
if (chalBlockMatch && chalBlockMatch[1].trim()) {
  const chalRe = /\{\s*name:\s*'([^']+)'[^}]*?km:\s*([0-9.]+)[^}]*?elev:\s*([0-9.]+)/g;
  let chm;
  while ((chm = chalRe.exec(chalBlockMatch[1])) !== null) {
    oldChallenges.push({ name: chm[1], km: parseFloat(chm[2]), elev: parseFloat(chm[3]) });
  }
}
console.log(`📋 虐点: ${oldChallenges.length}`);

// maxElevPoint
const maxElevMatch = /export const maxElevPoint = \{[^}]*name:\s*'([^']+)'[^}]*?km:\s*([0-9.]+)[^}]*?elev:\s*([0-9.]+)/.exec(oldContent);
const maxElevName = maxElevMatch ? maxElevMatch[1] : '径心水库';
const maxElevKm = maxElevMatch ? parseFloat(maxElevMatch[2]) : 113;
const maxElevElev = maxElevMatch ? parseFloat(maxElevMatch[3]) : 265;
console.log(`📋 最高海拔: ${maxElevName}, ${maxElevElev}m @ km ${maxElevKm}`);

// ── 4. 用 GPS 坐标找最近的 GPX 点 ──────────────────────────────────
function nearestGpxByGps(lat, lon) {
  let best = null, minD = Infinity;
  for (const p of sampledGpx) {
    const d = haversine(lat, lon, p.lat, p.lon);
    if (d < minD) { minD = d; best = p; }
  }
  return { point: best, dist: minD };
}

// ── 5. 合并 waypoints ───────────────────────────────────────────────
const mergedWaypoints = sampledGpx.map((gp, idx) => {
  // 找 GPS 最近的旧 waypoint
  const { point: nearestWp } = nearestGpxByGps(gp.lat, gp.lon);
  const isFirst = idx === 0;
  const isLast = idx === sampledGpx.length - 1;

  if (nearestWp) {
    return {
      x: gp.x, y: gp.y, km: parseFloat(gp.km.toFixed(2)),
      elev: nearestWp.elev,
      road: nearestWp.road || (isFirst ? '起点' : isLast ? '终点' : ''),
      name: nearestWp.name,
      isCheck: nearestWp.isCheck,
      checkName: nearestWp.checkName,
      challenge: nearestWp.challenge,
      lat: gp.lat, lon: gp.lon
    };
  }
  return {
    x: gp.x, y: gp.y, km: parseFloat(gp.km.toFixed(2)),
    elev: 0, road: isFirst ? '起点' : isLast ? '终点' : '', name: '', isCheck: 0, checkName: '', challenge: false,
    lat: gp.lat, lon: gp.lon
  };
});

// 合并 checkpoints - 找 GPX 最近点更新坐标
const mergedCheckpoints = oldCheckpoints.map(cp => {
  // 找 km 最接近的 GPX 点
  let best = null, bestDiff = Infinity;
  for (const p of sampledGpx) {
    const diff = Math.abs(p.km - cp.km);
    if (diff < bestDiff) { bestDiff = diff; best = p; }
  }
  return { ...cp, lat: best ? best.lat : 0, lon: best ? best.lon : 0 };
});

// 合并 challengePoints - 同样用 km 匹配
const mergedChallenges = oldChallenges.map(cp => {
  let best = null, bestDiff = Infinity;
  for (const p of sampledGpx) {
    const diff = Math.abs(p.km - cp.km);
    if (diff < bestDiff) { bestDiff = diff; best = p; }
  }
  return { ...cp, lat: best ? best.lat : 0, lon: best ? best.lon : 0 };
});

// 最高海拔点
let bestMaxElev = null, bestMaxDiff = Infinity;
for (const p of sampledGpx) {
  const diff = Math.abs(p.km - maxElevKm);
  if (diff < bestMaxDiff) { bestMaxDiff = diff; bestMaxElev = p; }
}

// ── 6. 生成 JS ───────────────────────────────────────────────────────
function fmt(n) { return typeof n === 'number' ? n : parseFloat(n); }

function genWaypoints() {
  return mergedWaypoints.map((p, i) => {
    const isFirst = i === 0, isLast = i === mergedWaypoints.length - 1;
    const parts = [`x: ${p.x}`, `y: ${p.y}`, `km: ${p.km}`, `elev: ${p.elev}`];
    if (p.name) parts.push(`name: '${p.name}'`);
    if (p.isCheck) parts.push(`isCheck: ${p.isCheck}`);
    if (p.checkName) parts.push(`checkName: '${p.checkName}'`);
    if (p.challenge) parts.push(`challenge: true`);
    if (p.road) parts.push(`road: '${p.road}'`);
    parts.push(`lat: ${p.lat}`, `lon: ${p.lon}`);
    return `  { ${parts.join(', ')} }`;
  }).join(',\n');
}

function genCheckpoints() {
  return mergedCheckpoints.map(cp => `  { name: '${cp.name}', km: ${cp.km}, elev: ${cp.elev}, color: '${cp.color}', lat: ${cp.lat}, lon: ${cp.lon} }`).join(',\n');
}

function genChallenges() {
  return mergedChallenges.map(cp => `  { name: '${cp.name}', km: ${cp.km}, elev: ${cp.elev}, lat: ${cp.lat}, lon: ${cp.lon} }`).join(',\n');
}

const MAX_ELEV = Math.max(...mergedWaypoints.map(p => p.elev));

const output = `/**
 * 骑行轨迹数据 - 合并版本
 * 几何来源: GPX 真实 GPS 数据 (1041365gpx.txt)
 * 元数据来源: 原有路书数据
 * 活动时间: 2017-04-19
 * 总距离: ${TOTAL_KM.toFixed(2)} km
 * 轨迹点数: ${mergedWaypoints.length} (采样自 ${gpxPoints.length})
 */

export const coastPts = [
  { x: 304, y: 100 }, { x: 400, y: 70 }, { x: 500, y: 60 }, { x: 700, y: 60 }, { x: 904, y: 110 },
  { x: 944, y: 140 }, { x: 976, y: 200 }, { x: 1000, y: 280 }, { x: 1024, y: 360 },
  { x: 1008, y: 440 }, { x: 968, y: 510 }, { x: 896, y: 560 },
  { x: 792, y: 580 }, { x: 656, y: 600 }, { x: 500, y: 600 }, { x: 350, y: 580 },
  { x: 200, y: 550 }, { x: 100, y: 520 }, { x: 50, y: 500 },
  { x: 40, y: 400 }, { x: 50, y: 300 }, { x: 80, y: 200 }, { x: 150, y: 130 },
  { x: 250, y: 90 }, { x: 304, y: 100 },
];

export const waypoints = [
${genWaypoints()}
];

export const checkpoints = [
${genCheckpoints()}
];

export const challengePoints = [
${genChallenges()}
];

export const maxElevPoint = {
  name: '${maxElevName}',
  km: ${bestMaxElev ? bestMaxElev.km.toFixed(2) : maxElevKm},
  elev: ${maxElevElev},
  lat: ${bestMaxElev ? bestMaxElev.lat : 0},
  lon: ${bestMaxElev ? bestMaxElev.lon : 0}
};

export const TOTAL_KM = ${TOTAL_KM.toFixed(2)};
export const MAX_ELEV = ${MAX_ELEV};
`;

const outPath = path.join(__dirname, 'src', 'js', 'trajectoryData.js');
fs.writeFileSync(outPath, output, 'utf8');
console.log(`\n✅ 已生成: ${outPath}`);
console.log(`\n📊 最终验证:`);
console.log(`  总里程: ${TOTAL_KM.toFixed(2)} km`);
console.log(`  轨迹点: ${mergedWaypoints.length}`);
console.log(`  有名称点: ${mergedWaypoints.filter(p => p.name).length}`);
console.log(`  打卡点: ${mergedWaypoints.filter(p => p.isCheck).length}`);
console.log(`  虐点: ${mergedWaypoints.filter(p => p.challenge).length}`);
console.log(`  checkpoints数组: ${mergedCheckpoints.length}`);
console.log(`  challengePoints数组: ${mergedChallenges.length}`);
console.log(`  最高海拔: ${MAX_ELEV} m`);
