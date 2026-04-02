/**
 * 合并脚本: 新GPX (995778gpx.txt) + 原有路书元数据
 * 保持原版2017路书顺序: 满京华→鹅公湾→西涌→杨梅坑→坝光→满京华
 */
const fs = require('fs');

// ── 1. 读取新GPX数据 ──────────────────────────────────────────────
const gpxPoints = JSON.parse(fs.readFileSync('gpx-points-new.json', 'utf8'));
console.log(`✓ 新GPX: ${gpxPoints.length} 个点, 总里程 ${gpxPoints[gpxPoints.length-1].km.toFixed(2)} km`);

// ── 2. 坐标映射: lat/lon → Canvas x/y ────────────────────────────
// 匹配原有海岸线范围 (x:40~1024, y:60~600)
function mapToCanvas(lat, lon) {
  const pad = 10;
  const minLat = Math.min(...gpxPoints.map(p=>p.lat));
  const maxLat = Math.max(...gpxPoints.map(p=>p.lat));
  const minLon = Math.min(...gpxPoints.map(p=>p.lon));
  const maxLon = Math.max(...gpxPoints.map(p=>p.lon));

  const lonSpan = maxLon - minLon || 1;
  const latSpan = maxLat - minLat || 1;

  const targetW = 1024 - 40;
  const targetH = 600 - 60;
  const scaleX = targetW / lonSpan;
  const scaleY = targetH / latSpan;
  const scale = Math.min(scaleX, scaleY);

  const baseX = 40 + (targetW - lonSpan * scale) / 2;
  const baseY = 60 + (targetH - latSpan * scale) / 2;

  const cx = baseX + (lon - minLon) * scale;
  const cy = baseY + (maxLat - lat) * scale;
  return { x: Math.round(cx), y: Math.round(cy) };
}

// ── 3. 找GPX中km最接近的点 ──────────────────────────────────────
function nearestGpxByKm(targetKm) {
  let best = null, bestDiff = Infinity;
  for (const p of gpxPoints) {
    const diff = Math.abs(p.km - targetKm);
    if (diff < bestDiff) { bestDiff = diff; best = p; }
  }
  return best;
}

// ── 4. 读取旧 trajectoryData.js 提取元数据 ───────────────────────
const oldFile = fs.readFileSync('src/js/trajectoryData.js', 'utf8');

// 提取 waypoints
const wpStart = oldFile.indexOf('export const waypoints');
const wpBracketStart = oldFile.indexOf('[', wpStart);
let depth = 0, wpEnd = wpBracketStart;
for (let i = wpBracketStart; i < oldFile.length; i++) {
  if (oldFile[i] === '[') depth++;
  else if (oldFile[i] === ']') { depth--; if (depth === 0) { wpEnd = i; break; } }
}
const wpBlock = oldFile.substring(wpBracketStart + 1, wpEnd);
const wpClean = wpBlock.replace(/\/\/.*$/gm, '');
const wpObjects = eval('[' + wpClean + ']');
console.log(`✓ 旧waypoints: ${wpObjects.length} 个`);

// ── 5. 合并: 用新GPX坐标替换x/y, 保留元数据 ─────────────────────
const totalKm = gpxPoints[gpxPoints.length - 1].km;
const oldTotalKm = 131.4;
const kmScale = totalKm / oldTotalKm;
console.log(`✓ km缩放比: ${kmScale.toFixed(4)}`);

const mergedWaypoints = wpObjects.map(wp => {
  const scaledKm = wp.km * kmScale;
  const gpxPt = nearestGpxByKm(scaledKm);
  const canvas = gpxPt ? mapToCanvas(gpxPt.lat, gpxPt.lon) : { x: wp.x, y: wp.y };

  return {
    x: canvas.x,
    y: canvas.y,
    name: wp.name,
    km: gpxPt ? +gpxPt.km.toFixed(2) : wp.km,
    elev: wp.elev,
    ...(wp.isCheck ? { isCheck: wp.isCheck } : {}),
    ...(wp.checkName ? { checkName: wp.checkName } : {}),
    ...(wp.challenge ? { challenge: true } : {}),
    road: wp.road,
    lat: gpxPt ? +gpxPt.lat.toFixed(6) : 0,
    lon: gpxPt ? +gpxPt.lon.toFixed(6) : 0,
  };
});

// ── 6. 生成 GPX 采样轨迹点 ─────────────────────────────────────
const sampleInterval = 0.4;
const sampledPoints = [];
for (let km = 0; km <= totalKm; km += sampleInterval) {
  const pt = nearestGpxByKm(km);
  if (pt) {
    const canvas = mapToCanvas(pt.lat, pt.lon);
    sampledPoints.push({ x: canvas.x, y: canvas.y, km: +pt.km.toFixed(2), lat: pt.lat, lon: pt.lon });
  }
}
console.log(`✓ 采样点: ${sampledPoints.length} 个`);

// ── 7. 更新 checkpoints / challengePoints / maxElevPoint ────────
const checkpointsOld = [
  { km: 0, name: '满京华艺术村', elev: 35, color: '#00f0ff' },
  { km: 36, name: '鹅公湾', elev: 12, color: '#ff00ff' },
  { km: 57, name: '西涌', elev: 8, color: '#ff00ff' },
  { km: 84, name: '杨梅坑', elev: 12, color: '#ff00ff' },
  { km: 120, name: '坝光', elev: 145, color: '#ff00ff' },
  { km: 131.4, name: '满京华终点', elev: 35, color: '#00f0ff' },
];

// 从 mergedWaypoints 中提取实际的打卡点数据
const newCheckpoints = checkpointsOld.map(cp => {
  const wp = mergedWaypoints.find(w => w.name.includes(cp.name.replace('满京华终点', '满京华').replace('满京华艺术村', '满京华')));
  return {
    km: wp ? wp.km : cp.km * kmScale,
    name: cp.name,
    elev: cp.elev,
    color: cp.color,
    lat: wp ? wp.lat : 0,
    lon: wp ? wp.lon : 0,
  };
});

// challengePoints
const challengesOld = [
  { km: 33, name: '富民路', elev: 55 },
  { km: 60, name: '西涌返', elev: 45 },
  { km: 113, name: '径心水库', elev: 265 },
  { km: 124, name: '径心水库返', elev: 265 },
];
const newChallenges = challengesOld.map(cp => {
  const wp = mergedWaypoints.find(w => w.name === cp.name);
  return {
    km: wp ? wp.km : cp.km * kmScale,
    name: cp.name,
    elev: cp.elev,
  };
});

// maxElevPoint
const maxElevWp = mergedWaypoints.find(w => w.name === '径心水库');

// ── 8. 生成新的 trajectoryData.js ───────────────────────────────
function formatWp(wp) {
  const parts = [`x: ${wp.x}`, `y: ${wp.y}`];
  parts.push(`name: '${wp.name}'`);
  parts.push(`km: ${wp.km}`);
  parts.push(`elev: ${wp.elev}`);
  if (wp.isCheck) parts.push(`isCheck: ${wp.isCheck}`);
  if (wp.checkName) parts.push(`checkName: '${wp.checkName}'`);
  if (wp.challenge) parts.push(`challenge: true`);
  parts.push(`road: '${wp.road}'`);
  parts.push(`lat: ${wp.lat}, lon: ${wp.lon}`);
  return `  { ${parts.join(', ')} },`;
}

const sectionComments = {
  0: '  // ─── 第一段: 满京华→鹅公湾 ───',
  14: '  // ─── 第二段: 鹅公湾→西涌 ───',
  27: '  // ─── 第三段: 西涌→杨梅坑 ───',
  41: '  // ─── 第四段: 杨梅坑→坝光 ───',
  54: '  // ─── 第五段: 坝光→满京华 ───',
};

let wpOutput = '';
for (let i = 0; i < mergedWaypoints.length; i++) {
  if (sectionComments[i]) wpOutput += sectionComments[i] + '\n';
  wpOutput += formatWp(mergedWaypoints[i]) + '\n';
}

const newFile = `/**
 * 骑闯天路轨迹数据
 * 几何: GPX真实GPS (995778gpx.txt) | 元数据: 原有路书
 * 路书: 2017 VAUDE骑闯天路资格赛·深圳站
 * 距离: ${totalKm.toFixed(1)}km | 爬升: 3121m
 */

// GPX采样轨迹点 (${sampledPoints.length}个，间隔~${sampleInterval}km)
export const trajectoryPts = [
${sampledPoints.map(p => `  { x: ${p.x}, y: ${p.y}, km: ${p.km}, lat: ${p.lat.toFixed(6)}, lon: ${p.lon.toFixed(6)} },`).join('\n')}
];

// 大鹏半岛海岸线轮廓
export const coastPts = [
  { x: 304, y: 100 }, { x: 400, y: 70 }, { x: 500, y: 60 }, { x: 700, y: 60 }, { x: 904, y: 110 },
  { x: 944, y: 140 }, { x: 976, y: 200 }, { x: 1000, y: 280 }, { x: 1024, y: 360 },
  { x: 1008, y: 440 }, { x: 968, y: 510 }, { x: 896, y: 560 },
  { x: 792, y: 580 }, { x: 656, y: 600 }, { x: 500, y: 600 }, { x: 350, y: 580 },
  { x: 200, y: 550 }, { x: 100, y: 520 }, { x: 50, y: 500 },
  { x: 40, y: 400 }, { x: 50, y: 300 }, { x: 80, y: 200 }, { x: 150, y: 130 },
  { x: 250, y: 90 }, { x: 304, y: 100 },
];

// 路书路径点 (GPS增强版)
// 6个打卡点: 满京华(起点) → 鹅公湾 → 西涌 → 杨梅坑 → 坝光 → 满京华(终点)
export const waypoints = [
${wpOutput}];

// 6个打卡点汇总
export const checkpoints = [
${newCheckpoints.map(cp => `  { km: ${cp.km.toFixed(2)}, name: '${cp.name}', elev: ${cp.elev}, color: '${cp.color}', lat: ${cp.lat.toFixed(6)}, lon: ${cp.lon.toFixed(6)} },`).join('\n')}
];

// 最高海拔点
export const maxElevPoint = { km: ${maxElevWp ? maxElevWp.km.toFixed(2) : 115.71}, elev: 265, name: '径心水库', lat: ${maxElevWp ? maxElevWp.lat.toFixed(6) : 22.650057}, lon: ${maxElevWp ? maxElevWp.lon.toFixed(6) : 114.529563} };

// 一级虐点
export const challengePoints = [
${newChallenges.map(cp => `  { km: ${cp.km.toFixed(2)}, name: '${cp.name}', elev: ${cp.elev} },`).join('\n')}
];

export const TOTAL_KM = ${totalKm.toFixed(1)};
export const MAX_ELEV  = 300;
`;

fs.writeFileSync('src/js/trajectoryData.js', newFile, 'utf8');
console.log(`\n✅ 合并完成!`);
console.log(`   - ${gpxPoints.length} GPS点 → ${sampledPoints.length} 采样轨迹点`);
console.log(`   - ${mergedWaypoints.length} waypoints (保留元数据)`);
console.log(`   - 总里程: ${totalKm.toFixed(1)} km`);
