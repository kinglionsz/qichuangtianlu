/**
 * 合并脚本 v4: GPX真实GPS几何 + 原有路书元数据
 * 策略: 用km距离匹配，将GPX的lat/lon/x/y替换到旧waypoint
 */
const fs = require('fs');
const path = require('path');

// ── 1. 解析 GPX ──────────────────────────────────────────────────
const gpxContent = fs.readFileSync('1041365gpx.txt', 'utf8');
const trkptRegex = /<trkpt\s+lat="([\d.]+)"\s+lon="([\d.]+)">/g;
const timeRegex = /<time>([^<]+)<\/time>/g;

const gpxPoints = [];
let m;
while ((m = trkptRegex.exec(gpxContent)) !== null) {
  gpxPoints.push({ lat: +m[1], lon: +m[2] });
}

console.log(`✓ GPX解析: ${gpxPoints.length} 个GPS点`);

// ── 2. 计算每个GPX点的累计距离(km) ──────────────────────────────
const R = 6371; // 地球半径 km
function haversine(a, b) {
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLon = (b.lon - a.lon) * Math.PI / 180;
  const s = Math.sin(dLat/2)**2 + Math.cos(a.lat*Math.PI/180) * Math.cos(b.lat*Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1-s));
}

gpxPoints[0].km = 0;
for (let i = 1; i < gpxPoints.length; i++) {
  gpxPoints[i].km = gpxPoints[i-1].km + haversine(gpxPoints[i-1], gpxPoints[i]);
}

const totalKm = gpxPoints[gpxPoints.length - 1].km;
console.log(`✓ GPX总里程: ${totalKm.toFixed(2)} km`);

// ── 3. 坐标映射: lat/lon → Canvas x/y ────────────────────────────
// 匹配原有海岸线的大致范围 (x:40~1024, y:60~600)
function mapToCanvas(lat, lon) {
  const pad = 10;
  const minLat = Math.min(...gpxPoints.map(p=>p.lat));
  const maxLat = Math.max(...gpxPoints.map(p=>p.lat));
  const minLon = Math.min(...gpxPoints.map(p=>p.lon));
  const maxLon = Math.max(...gpxPoints.map(p=>p.lon));

  const lonSpan = maxLon - minLon || 1;
  const latSpan = maxLat - minLat || 1;

  // 目标区域（匹配海岸线的大致范围，留出边距）
  const targetW = 1024 - 40;  // ~984
  const targetH = 600 - 60;   // ~540
  const scaleX = targetW / lonSpan;
  const scaleY = targetH / latSpan;
  const scale = Math.min(scaleX, scaleY);

  // 基点: 匹配旧坐标系偏移
  const baseX = 40 + (targetW - lonSpan * scale) / 2;
  const baseY = 60 + (targetH - latSpan * scale) / 2;

  // 经度→x, 纬度→y(反转, 北上=小y)
  const cx = baseX + (lon - minLon) * scale;
  const cy = baseY + (maxLat - lat) * scale;
  return { x: Math.round(cx), y: Math.round(cy) };
}

// ── 4. 找GPX中km最接近的点 ──────────────────────────────────────
function nearestGpxByKm(targetKm) {
  let best = null, bestDiff = Infinity;
  for (const p of gpxPoints) {
    const diff = Math.abs(p.km - targetKm);
    if (diff < bestDiff) { bestDiff = diff; best = p; }
  }
  return best;
}

// ── 5. 解析旧 trajectoryData.js ──────────────────────────────────
const oldFile = fs.readFileSync('src/js/trajectoryData.js', 'utf8');

// 提取 waypoints 数组内容
const wpStart = oldFile.indexOf('export const waypoints');
const wpBracketStart = oldFile.indexOf('[', wpStart);
// 找匹配的 ]
let depth = 0, wpEnd = wpBracketStart;
for (let i = wpBracketStart; i < oldFile.length; i++) {
  if (oldFile[i] === '[') depth++;
  else if (oldFile[i] === ']') { depth--; if (depth === 0) { wpEnd = i; break; } }
}
const wpBlock = oldFile.substring(wpBracketStart + 1, wpEnd);

// 用 eval 提取 waypoint 对象数组 (安全: 只在本地运行)
// 先构造合法 JS: 去掉注释
const wpClean = wpBlock.replace(/\/\/.*$/gm, '');
const wpObjects = eval('[' + wpClean + ']');
console.log(`✓ 旧waypoints: ${wpObjects.length} 个`);

// 提取注释行（段标题）
const wpCommentLines = [];
const wpLines = oldFile.substring(wpBracketStart, wpEnd + 1).split('\n');
for (const line of wpLines) {
  const trimmed = line.trim();
  if (trimmed.startsWith('//')) {
    wpCommentLines.push({ indent: line.search(/\S/), text: trimmed });
  }
}

// ── 6. 合并: 用GPX坐标替换x/y, 添加lat/lon ──────────────────────
// 旧数据: 手工x/y, gps字符串如 "22.580°N, 114.475°E"
// 新数据: GPX匹配的真实lat/lon + 映射的x/y

// 按比例缩放km: GPX总里程 vs 旧路书131.4km
const oldTotalKm = 131.4;
const kmScale = totalKm / oldTotalKm;
console.log(`✓ km缩放比: ${kmScale.toFixed(4)} (GPX ${totalKm.toFixed(1)} / 旧 ${oldTotalKm})`);

const mergedWaypoints = wpObjects.map(wp => {
  // 用缩放后的km去匹配GPX
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

// ── 7. 生成 GPX 采样轨迹点 (替代旧的稀疏x/y) ──────────────────
// 每 ~0.5km 采样一个点，用所有采样点绘制平滑轨迹
const sampleInterval = 0.4; // km
const sampledPoints = [];
for (let km = 0; km <= totalKm; km += sampleInterval) {
  const pt = nearestGpxByKm(km);
  if (pt) {
    const canvas = mapToCanvas(pt.lat, pt.lon);
    sampledPoints.push({ x: canvas.x, y: canvas.y, km: +pt.km.toFixed(2), lat: pt.lat, lon: pt.lon });
  }
}
console.log(`✓ 采样点: ${sampledPoints.length} 个 (间隔 ${sampleInterval}km)`);

// ── 8. 更新 checkpoints 的km ─────────────────────────────────────
const checkpointsOld = [
  { km: 0,     name: '满京华艺术村', elev: 35,  color: '#00f0ff' },
  { km: 36,    name: '鹅公湾',       elev: 12,  color: '#ff00ff' },
  { km: 57,    name: '西涌',         elev: 8,   color: '#ff00ff' },
  { km: 84,    name: '杨梅坑',       elev: 12,  color: '#ff00ff' },
  { km: 120,   name: '坝光',         elev: 145, color: '#ff00ff' },
  { km: 131.4, name: '满京华终点',   elev: 35,  color: '#00f0ff' },
];
const newCheckpoints = checkpointsOld.map(cp => {
  const scaledKm = cp.km * kmScale;
  const gpxPt = nearestGpxByKm(scaledKm);
  return {
    km: gpxPt ? +gpxPt.km.toFixed(2) : cp.km,
    name: cp.name,
    elev: cp.elev,
    color: cp.color,
    lat: gpxPt ? +gpxPt.lat.toFixed(6) : 0,
    lon: gpxPt ? +gpxPt.lon.toFixed(6) : 0,
  };
});

// 更新 challengePoints
const challengesOld = [
  { km: 33,  name: '富民路',     elev: 55  },
  { km: 60,  name: '西涌返',     elev: 45  },
  { km: 113, name: '径心水库',   elev: 265 },
  { km: 124, name: '径心水库返', elev: 265 },
];
const newChallenges = challengesOld.map(cp => {
  const scaledKm = cp.km * kmScale;
  const gpxPt = nearestGpxByKm(scaledKm);
  return {
    km: gpxPt ? +gpxPt.km.toFixed(2) : cp.km,
    name: cp.name,
    elev: cp.elev,
  };
});

// maxElevPoint
const maxElevScaledKm = 113 * kmScale;
const maxElevGpx = nearestGpxByKm(maxElevScaledKm);

// ── 9. 输出新的 trajectoryData.js ────────────────────────────────
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

// 重建注释 + waypoint 交替输出
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
 * 几何: GPX真实GPS (1041365gpx.txt) | 元数据: 原有路书
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
${newCheckpoints.map(cp => `  { km: ${cp.km}, name: '${cp.name}', elev: ${cp.elev}, color: '${cp.color}', lat: ${cp.lat}, lon: ${cp.lon} },`).join('\n')}
];

// 最高海拔点
export const maxElevPoint = { km: ${maxElevGpx ? +maxElevGpx.km.toFixed(2) : 113}, elev: 265, name: '径心水库', lat: ${maxElevGpx ? maxElevGpx.lat.toFixed(6) : 0}, lon: ${maxElevGpx ? maxElevGpx.lon.toFixed(6) : 0} };

// 一级虐点
export const challengePoints = [
${newChallenges.map(cp => `  { km: ${cp.km}, name: '${cp.name}', elev: ${cp.elev} },`).join('\n')}
];

export const TOTAL_KM = ${totalKm.toFixed(1)};
export const MAX_ELEV  = 300;
`;

fs.writeFileSync('src/js/trajectoryData.js', newFile, 'utf8');
console.log(`\n✅ 合并完成!`);
console.log(`   - ${gpxPoints.length} GPS点 → ${sampledPoints.length} 采样轨迹点`);
console.log(`   - ${mergedWaypoints.length} waypoints (保留元数据)`);
console.log(`   - 总里程: ${totalKm.toFixed(1)} km`);
console.log(`   - 检查点/虐点数据已保留并按比例更新`);
