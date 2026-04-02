/**
 * 基于新 GPX 完整更新所有数据
 */
const fs = require('fs');

const gpxContent = fs.readFileSync('X:/Download/995778gpx.txt', 'utf8');
const gpxPoints = [];
let totalDist = 0;
const lineRegex = /<trkpt lat="([\d.]+)" lon="([\d.]+)">/g;
let match;

while ((match = lineRegex.exec(gpxContent)) !== null) {
  const lat = parseFloat(match[1]);
  const lon = parseFloat(match[2]);
  if (gpxPoints.length > 0) {
    const prev = gpxPoints[gpxPoints.length - 1];
    totalDist += haversine(prev.lat, prev.lon, lat, lon);
  }
  gpxPoints.push({ lat, lon, km: totalDist });
}

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function findClosestPoint(targetKm) {
  let closest = gpxPoints[0];
  let minDiff = Math.abs(gpxPoints[0].km - targetKm);
  for (const p of gpxPoints) {
    const diff = Math.abs(p.km - targetKm);
    if (diff < minDiff) { minDiff = diff; closest = p; }
  }
  return closest;
}

function mapToCanvas(lat, lon) {
  const pad = 10;
  const minLat = Math.min(...gpxPoints.map(p=>p.lat));
  const maxLat = Math.max(...gpxPoints.map(p=>p.lat));
  const minLon = Math.min(...gpxPoints.map(p=>p.lon));
  const maxLon = Math.max(...gpxPoints.map(p=>p.lon));
  const lonSpan = maxLon - minLon || 1;
  const latSpan = maxLat - minLat || 1;
  const targetW = 1024 - 40, targetH = 600 - 60;
  const scale = Math.min(targetW / lonSpan, targetH / latSpan);
  const baseX = 40 + (targetW - lonSpan * scale) / 2;
  const baseY = 60 + (targetH - latSpan * scale) / 2;
  return { x: Math.round(baseX + (lon - minLon) * scale), y: Math.round(baseY + (maxLat - lat) * scale) };
}

// 基于新 GPX 的 km 分布，确定各打卡点的实际 km
// 从 GPX 分析：满京华(0) → 鹅公湾(~22km) → 西涌(~44km) → 杨梅坑(~66km) → 满京华(~89km) → 径心水库(~100km) → 坝光(~111km) → 径心水库返(~122km) → 满京华终点(~133km)

const cpData = [
  { name: '满京华艺术村', km: 0, elev: 35, color: '#00f0ff' },
  { name: '鹅公湾', km: 22.21, elev: 12, color: '#ff00ff' },
  { name: '西涌', km: 44.40, elev: 8, color: '#ff00ff' },
  { name: '杨梅坑', km: 66.47, elev: 12, color: '#ff00ff' },
  { name: '坝光', km: 110.70, elev: 145, color: '#ff00ff' },
  { name: '满京华终点', km: totalDist, elev: 35, color: '#00f0ff' },
];

// 虐点 - 基于新 GPX 的 km
const challengeData = [
  { name: '富民路', km: 33.43, elev: 55 },   // 在鹅公湾(22km)和西涌(44km)之间
  { name: '西涌返', km: 60.76, elev: 45 },   // 在西涌(44km)和杨梅坑(66km)之间
  { name: '径心水库', km: 99.60, elev: 265 },
  { name: '径心水库返', km: 121.80, elev: 265 },
];

// 验证打卡点位置
console.log('=== 打卡点 (基于新GPX) ===');
const checkpoints = cpData.map(cp => {
  const pt = findClosestPoint(cp.km);
  const canvas = mapToCanvas(pt.lat, pt.lon);
  return { ...cp, lat: pt.lat, lon: pt.lon, x: canvas.x, y: canvas.y };
});
checkpoints.forEach(cp => console.log(`${cp.name}: km=${cp.km.toFixed(2)}, x=${cp.x}, y=${cp.y}, elev=${cp.elev}`));

// 验证虐点位置
console.log('\n=== 虐点 ===');
const challenges = challengeData.map(cp => {
  const pt = findClosestPoint(cp.km);
  const canvas = mapToCanvas(pt.lat, pt.lon);
  return { ...cp, lat: pt.lat, lon: pt.lon, x: canvas.x, y: canvas.y };
});
challenges.forEach(cp => console.log(`${cp.name}: km=${cp.km.toFixed(2)}, x=${cp.x}, y=${cp.y}, elev=${cp.elev}`));

// 生成 waypoints
const wpKms = [0, 11.07, 22.21, 33.30, 44.40, 55.40, 66.47, 77.50, 88.60, 99.60, 110.70, 121.80, totalDist];
const wpData = [
  ['起点满京华艺象', 1, 35, ''],
  ['鹅宫码头', 0, 12, ''],
  ['鹅公湾', 1, 12, '海港路'],
  ['折返点1', 0, 0, ''],
  ['西涌', 1, 8, '南西公路'],
  ['折返点2', 0, 0, ''],
  ['杨梅坑', 1, 12, '新东路'],
  ['折返点3', 0, 0, ''],
  ['返回满京华', 0, 0, ''],
  ['径心水库', 0, 265, '葵坝公路'],
  ['坝光', 1, 145, '核坝公路'],
  ['径心水库返', 0, 265, '葵坝公路'],
  ['终点满京华艺象', 1, 35, ''],
];

const waypoints = wpKms.map((km, i) => {
  const pt = findClosestPoint(km);
  const canvas = mapToCanvas(pt.lat, pt.lon);
  return { km, name: wpData[i][0], isCheck: wpData[i][1], elev: wpData[i][2], road: wpData[i][3], lat: pt.lat, lon: pt.lon, x: canvas.x, y: canvas.y };
});

// trajectoryPts
const SAMPLE_INTERVAL = 0.4;
const trajectoryPts = [];
for (let km = 0; km <= totalDist; km += SAMPLE_INTERVAL) {
  const pt = findClosestPoint(km);
  const canvas = mapToCanvas(pt.lat, pt.lon);
  trajectoryPts.push({ x: canvas.x, y: canvas.y, km: Math.round(pt.km * 100) / 100, lat: pt.lat, lon: pt.lon, road: '' });
}
const lastPt = gpxPoints[gpxPoints.length - 1];
const lastCanvas = mapToCanvas(lastPt.lat, lastPt.lon);
trajectoryPts.push({ x: lastCanvas.x, y: lastCanvas.y, km: Math.round(totalDist * 100) / 100, lat: lastPt.lat, lon: lastPt.lon, road: '' });

// JS 输出
const checkpointsJS = `// 6个打卡点汇总
export const checkpoints = [
${checkpoints.map(cp => `  { km: ${cp.km}, name: '${cp.name}', elev: ${cp.elev}, color: '${cp.color}', lat: ${cp.lat.toFixed(6)}, lon: ${cp.lon.toFixed(6)} }`).join(',\n')}
];`;

const waypointsJS = `// 轨迹路书 (基于GPX 995778gpx.txt)
export const waypoints = [
${waypoints.map(wp => `  { km: ${wp.km.toFixed(2)}, x: ${wp.x}, y: ${wp.y}, name: '${wp.name}', isCheck: ${wp.isCheck || 0}, elev: ${wp.elev}, lat: ${wp.lat.toFixed(6)}, lon: ${wp.lon.toFixed(6)}, road: '${wp.road || ''}' }`).join(',\n')}
];
export const TOTAL_KM = ${totalDist.toFixed(2)};`;

const challengeJS = `// 最高海拔点
export const maxElevPoint = { km: ${challenges[2].km}, elev: 265, name: '径心水库', lat: ${challenges[2].lat.toFixed(6)}, lon: ${challenges[2].lon.toFixed(6)} };

// 一级虐点
export const challengePoints = [
  { km: ${challenges[0].km}, name: '富民路', elev: 55 },
  { km: ${challenges[1].km}, name: '西涌返', elev: 45 },
  { km: ${challenges[2].km}, name: '径心水库', elev: 265 },
  { km: ${challenges[3].km}, name: '径心水库返', elev: 265 },
];`;

const trajectoryPtsJS = `// GPX高精度轨迹点
// 共${trajectoryPts.length}个点，总里程${totalDist.toFixed(2)}km
export const trajectoryPts = [
${trajectoryPts.map(p => `  { x: ${p.x}, y: ${p.y}, km: ${p.km.toFixed(2)}, lat: ${p.lat.toFixed(6)}, lon: ${p.lon.toFixed(6)}, road: '' }`).join(',\n')}
];`;

fs.writeFileSync('new-trajectory-data.js', `${waypointsJS}\n\n${checkpointsJS}\n\n${challengeJS}\n\n${trajectoryPtsJS}`);
console.log('\n✅ 已保存到 new-trajectory-data.js');
