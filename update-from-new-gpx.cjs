/**
 * 用新 GPX 轨迹数据更新 trajectoryData.js
 * - 轨迹几何用新 GPX 的 lat/lon
 * - 海拔/打卡点/虐点 复用元数据（因为新 GPX 没有海拔）
 * - 但需要根据新 GPX 的实际 km 重新校准打卡点位置
 */
const fs = require('fs');

// ── 1. 读取新 GPX ───────────────────────────────────────────────────────────
const gpxContent = fs.readFileSync('X:/Download/995778gpx.txt', 'utf8');

// 解析轨迹点 (新GPX没有海拔)
const gpxPoints = [];
let totalDist = 0;

const lineRegex = /<trkpt lat="([\d.]+)" lon="([\d.]+)">/g;
let lat = null, lon = null;
let lastIdx = 0;

while ((match = lineRegex.exec(gpxContent)) !== null) {
  lat = parseFloat(match[1]);
  lon = parseFloat(match[2]);

  if (gpxPoints.length > 0) {
    const prev = gpxPoints[gpxPoints.length - 1];
    totalDist += haversine(prev.lat, prev.lon, lat, lon);
  }

  gpxPoints.push({ lat, lon, km: totalDist });
}

console.log(`GPX点数: ${gpxPoints.length}, 总里程: ${totalDist.toFixed(2)}km`);

// ── 2. 辅助函数 ─────────────────────────────────────────────────────────────
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// 在轨迹上找到最接近目标 km 的点
function findClosestPoint(targetKm) {
  let closest = gpxPoints[0];
  let minDiff = Math.abs(gpxPoints[0].km - targetKm);
  for (const p of gpxPoints) {
    const diff = Math.abs(p.km - targetKm);
    if (diff < minDiff) { minDiff = diff; closest = p; }
  }
  return closest;
}

// ── 3. 坐标映射函数 (保持和 merge-new-gpx.cjs 一致) ──────────────────────────
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

// ── 4. 更新 checkpoints ──────────────────────────────────────────────────────
// 基于新 GPX 的实际 km，找到每个打卡点在轨迹上的位置
const checkpointTargets = [
  { name: '满京华艺术村', km: 0 },
  { name: '鹅公湾', km: 36.5 },
  { name: '西涌', km: 57.7 },
  { name: '杨梅坑', km: 86.2 },
  { name: '坝光', km: 122.9 },
  { name: '满京华终点', km: totalDist }
];

console.log('\n打卡点更新:');
const updatedCheckpoints = checkpointTargets.map(cp => {
  const pt = findClosestPoint(cp.km);
  const canvas = mapToCanvas(pt.lat, pt.lon);
  console.log(`  ${cp.name}: km ${pt.km.toFixed(2)} (原本:${cp.km}) → x:${canvas.x}, y:${canvas.y}`);
  return {
    km: Math.round(pt.km * 100) / 100,
    name: cp.name,
    elev: 0, // 复用元数据的海拔
    color: cp.name.includes('满京华') ? '#00f0ff' : '#ff00ff',
    lat: pt.lat,
    lon: pt.lon,
    x: canvas.x,
    y: canvas.y
  };
});

// ── 5. 更新 waypoints ───────────────────────────────────────────────────────
// 重新生成 waypoints，保持原有元数据但用新 GPX 的 km 和坐标
console.log('\n生成新 waypoints...');

// 原有元数据的参考点 (从 trajectoryData.js 的结构提取)
// 保持原有 waypoints 的名称/类型/elev 数据，只更新 km/坐标
const oldWaypoints = [
  { name: '起点满京华艺象', isCheck: 1, elev: 35, road: '' },
  { name: '鹅宫码头', elev: 12, road: '' },
  { name: '鹅公湾', isCheck: 1, elev: 12, road: '海港路' },
  { name: '折返点1', elev: 0, road: '' },
  { name: '西涌', isCheck: 1, elev: 8, road: '南西公路' },
  { name: '折返点2', elev: 0, road: '' },
  { name: '杨梅坑', isCheck: 1, elev: 12, road: '新东路' },
  { name: '折返点3', elev: 0, road: '' },
  { name: '返回满京华', elev: 0, road: '' },
  { name: '径心水库', elev: 265, road: '葵坝公路' },
  { name: '坝光', isCheck: 1, elev: 145, road: '核坝公路' },
  { name: '径心水库返', elev: 265, road: '葵坝公路' },
  { name: '终点满京华艺象', isCheck: 1, elev: 35, road: '' },
];

// 根据 km 比例映射旧 waypoints 到新 GPX
const oldTotalKm = 133.05; // 旧总里程
const newTotalKm = totalDist;

const updatedWaypoints = oldWaypoints.map((wp, i) => {
  // 按比例计算在新 GPX 中的 km
  const oldKm = (i / (oldWaypoints.length - 1)) * oldTotalKm;
  const newKm = (oldKm / oldTotalKm) * newTotalKm;
  const pt = findClosestPoint(newKm);
  const canvas = mapToCanvas(pt.lat, pt.lon);
  
  return {
    ...wp,
    km: Math.round(pt.km * 100) / 100,
    lat: pt.lat,
    lon: pt.lon,
    x: canvas.x,
    y: canvas.y
  };
});

// ── 6. 更新 challengePoints ──────────────────────────────────────────────────
console.log('\n虐点更新:');
// 径心水库虐点 - 根据 km 位置在新 GPX 上找到实际坐标
const jingxinKm = 115.7;
const jingxinPt = findClosestPoint(jingxinKm);
const jingxinCanvas = mapToCanvas(jingxinPt.lat, jingxinPt.lon);

const jingxinReturnKm = 127.1;
const jingxinReturnPt = findClosestPoint(jingxinReturnKm);
const jingxinReturnCanvas = mapToCanvas(jingxinReturnPt.lat, jingxinReturnPt.lon);

console.log(`  径心水库: km ${jingxinPt.km.toFixed(2)} → x:${jingxinCanvas.x}, y:${jingxinCanvas.y}`);
console.log(`  径心水库返: km ${jingxinReturnPt.km.toFixed(2)} → x:${jingxinReturnCanvas.x}, y:${jingxinReturnCanvas.y}`);

// ── 7. 生成 trajectoryPts (密集采样) ──────────────────────────────────────────
console.log('\n生成 trajectoryPts...');
const SAMPLE_INTERVAL = 0.4; // 每 0.4km 一个点
const trajectoryPts = [];
for (let km = 0; km <= totalDist; km += SAMPLE_INTERVAL) {
  const pt = findClosestPoint(km);
  const canvas = mapToCanvas(pt.lat, pt.lon);
  trajectoryPts.push({
    x: canvas.x,
    y: canvas.y,
    km: Math.round(pt.km * 100) / 100,
    lat: pt.lat,
    lon: pt.lon,
    road: ''
  });
}
// 确保终点被包含
const lastPt = gpxPoints[gpxPoints.length - 1];
const lastCanvas = mapToCanvas(lastPt.lat, lastPt.lon);
trajectoryPts.push({
  x: lastCanvas.x,
  y: lastCanvas.y,
  km: Math.round(totalDist * 100) / 100,
  lat: lastPt.lat,
  lon: lastPt.lon,
  road: ''
});

console.log(`  trajectoryPts: ${trajectoryPts.length} 点`);

// ── 8. 输出 JS 代码 ─────────────────────────────────────────────────────────
console.log('\n生成 JS 代码...');

// 生成 waypoints JS
let waypointsJS = '// 轨迹路书 (基于GPX 995778gpx.txt)\n';
waypointsJS += '// 里程已根据新GPX校准\n';
waypointsJS += 'export const waypoints = [\n';
updatedWaypoints.forEach(wp => {
  waypointsJS += `  { km: ${wp.km.toFixed(2)}, x: ${wp.x}, y: ${wp.y}, name: '${wp.name}', isCheck: ${wp.isCheck || 0}, elev: ${wp.elev}, lat: ${wp.lat.toFixed(6)}, lon: ${wp.lon.toFixed(6)}, road: '${wp.road || ''}' },\n`;
});
waypointsJS += '];\n';
waypointsJS += `export const TOTAL_KM = ${totalDist.toFixed(2)};\n`;

// 生成 checkpoints JS
let checkpointsJS = '// 6个打卡点汇总\n';
checkpointsJS += 'export const checkpoints = [\n';
updatedCheckpoints.forEach(cp => {
  checkpointsJS += `  { km: ${cp.km}, name: '${cp.name}', elev: ${cp.elev}, color: '${cp.color}', lat: ${cp.lat.toFixed(6)}, lon: ${cp.lon.toFixed(6)} },\n`;
});
checkpointsJS += '];\n';

// 生成 challengePoints JS
let challengeJS = `// 最高海拔点\nexport const maxElevPoint = { km: ${jingxinPt.km.toFixed(2)}, elev: 265, name: '径心水库', lat: ${jingxinPt.lat.toFixed(6)}, lon: ${jingxinPt.lon.toFixed(6)} };\n\n`;
challengeJS += '// 一级虐点\nexport const challengePoints = [\n';
challengeJS += `  { km: 33.43, name: '富民路', elev: 55 },\n`;
challengeJS += `  { km: 60.76, name: '西涌返', elev: 45 },\n`;
challengeJS += `  { km: ${jingxinPt.km.toFixed(2)}, name: '径心水库', elev: 265 },\n`;
challengeJS += `  { km: ${jingxinReturnPt.km.toFixed(2)}, name: '径心水库返', elev: 265 },\n`;
challengeJS += '];\n';

// 生成 trajectoryPts JS
let trajectoryPtsJS = '// GPX高精度轨迹点\n';
trajectoryPtsJS += `// 共${trajectoryPts.length}个点，总里程${totalDist.toFixed(2)}km\n`;
trajectoryPtsJS += 'export const trajectoryPts = [\n';
trajectoryPts.forEach((p, i) => {
  trajectoryPtsJS += `  { x: ${p.x}, y: ${p.y}, km: ${p.km.toFixed(2)}, lat: ${p.lat.toFixed(6)}, lon: ${p.lon.toFixed(6)}, road: '' }${i < trajectoryPts.length - 1 ? ',' : ''}\n`;
});
trajectoryPtsJS += '];\n';

// 合并输出
const output = `${waypointsJS}\n${checkpointsJS}\n${challengeJS}\n${trajectoryPtsJS}`;

fs.writeFileSync('new-trajectory-data.js', output);
console.log('✅ 新数据已保存到 new-trajectory-data.js');
console.log('\n下一步：将 new-trajectory-data.js 的内容合并到 src/js/trajectoryData.js');
