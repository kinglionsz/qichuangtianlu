/**
 * 根据新 GPX 的实际 km，重新确定打卡点和虐点
 */
const fs = require('fs');

// ── 1. 读取新 GPX ───────────────────────────────────────────────────────────
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

console.log(`总里程: ${totalDist.toFixed(2)}km`);

// ── 2. 分析 GPX 轨迹特征，找到各打卡点 ──────────────────────────────────────
// 新 GPX 的 km 分布:
// - km 0-22: 满京华 → 鹅公湾
// - km 22-44: 鹅公湾 → 西涌
// - km 44-66: 西涌 → 杨梅坑
// - km 66-89: 杨梅坑 → 返回满京华
// - km 89-100: 满京华 → 径心水库
// - km 100-111: 径心水库 → 坝光
// - km 111-122: 坝光 → 径心水库返
// - km 122-133: 径心水库返 → 满京华终点

const checkpoints = [
  { name: '满京华艺术村', km: 0, elev: 35, color: '#00f0ff' },
  { name: '鹅公湾', km: 22.21, elev: 12, color: '#ff00ff' },
  { name: '西涌', km: 44.40, elev: 8, color: '#ff00ff' },
  { name: '杨梅坑', km: 66.47, elev: 12, color: '#ff00ff' },
  { name: '坝光', km: 110.70, elev: 145, color: '#ff00ff' },
  { name: '满京华终点', km: totalDist, elev: 35, color: '#00f0ff' },
];

// 虐点
const jingxinPt = findClosestPoint(99.6);
const jingxinReturnPt = findClosestPoint(121.8);

console.log('\n=== 打卡点 ===');
checkpoints.forEach(cp => {
  const pt = findClosestPoint(cp.km);
  const canvas = mapToCanvas(pt.lat, pt.lon);
  console.log(`${cp.name}: km=${pt.km.toFixed(2)}, elev=${cp.elev}, x=${canvas.x}, y=${canvas.y}`);
});

console.log('\n=== 虐点 ===');
console.log(`径心水库: km=${jingxinPt.km.toFixed(2)}, x=${mapToCanvas(jingxinPt.lat, jingxinPt.lon).x}`);
console.log(`径心水库返: km=${jingxinReturnPt.km.toFixed(2)}, x=${mapToCanvas(jingxinReturnPt.lat, jingxinReturnPt.lon).x}`);

// ── 3. 生成新的 trajectoryData.js ───────────────────────────────────────────
// 更新 checkpoints 的 lat/lon
const updatedCheckpoints = checkpoints.map(cp => {
  const pt = findClosestPoint(cp.km);
  return { ...cp, lat: pt.lat, lon: pt.lon };
});

// 生成 waypoints - 基于新 GPX 的 km 分布
const waypointKms = [0, 11.07, 22.21, 33.30, 44.40, 55.40, 66.47, 77.50, 88.60, 99.60, 110.70, 121.80, totalDist];
const waypointNames = ['起点满京华艺象', '鹅宫码头', '鹅公湾', '折返点1', '西涌', '折返点2', '杨梅坑', '折返点3', '返回满京华', '径心水库', '坝光', '径心水库返', '终点满京华艺象'];
const waypointIsCheck = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1];
const waypointElevs = [35, 12, 12, 0, 8, 0, 12, 0, 0, 265, 145, 265, 35];
const waypointRoads = ['', '', '海港路', '', '南西公路', '', '新东路', '', '', '葵坝公路', '核坝公路', '葵坝公路', ''];

const updatedWaypoints = waypointKms.map((km, i) => {
  const pt = findClosestPoint(km);
  const canvas = mapToCanvas(pt.lat, pt.lon);
  return {
    km,
    name: waypointNames[i],
    isCheck: waypointIsCheck[i],
    elev: waypointElevs[i],
    road: waypointRoads[i],
    lat: pt.lat,
    lon: pt.lon,
    x: canvas.x,
    y: canvas.y
  };
});

console.log('\n=== Waypoints ===');
updatedWaypoints.forEach(wp => {
  console.log(`${wp.name}: km=${wp.km.toFixed(2)}, x=${wp.x}, y=${wp.y}`);
});

// trajectoryPts
const SAMPLE_INTERVAL = 0.4;
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

// ── 4. 生成 JS ──────────────────────────────────────────────────────────────
const checkpointsJS = `// 6个打卡点汇总
export const checkpoints = [
${updatedCheckpoints.map(cp => `  { km: ${cp.km}, name: '${cp.name}', elev: ${cp.elev}, color: '${cp.color}', lat: ${cp.lat.toFixed(6)}, lon: ${cp.lon.toFixed(6)} }`).join(',\n')}
];`;

const waypointsJS = `// 轨迹路书 (基于GPX 995778gpx.txt)
// 里程已根据新GPX校准
export const waypoints = [
${updatedWaypoints.map(wp => `  { km: ${wp.km.toFixed(2)}, x: ${wp.x}, y: ${wp.y}, name: '${wp.name}', isCheck: ${wp.isCheck || 0}, elev: ${wp.elev}, lat: ${wp.lat.toFixed(6)}, lon: ${wp.lon.toFixed(6)}, road: '${wp.road || ''}' }`).join(',\n')}
];
export const TOTAL_KM = ${totalDist.toFixed(2)};`;

const challengeJS = `// 最高海拔点
export const maxElevPoint = { km: ${jingxinPt.km.toFixed(2)}, elev: 265, name: '径心水库', lat: ${jingxinPt.lat.toFixed(6)}, lon: ${jingxinPt.lon.toFixed(6)} };

// 一级虐点
export const challengePoints = [
  { km: 33.43, name: '富民路', elev: 55 },
  { km: 60.76, name: '西涌返', elev: 45 },
  { km: ${jingxinPt.km.toFixed(2)}, name: '径心水库', elev: 265 },
  { km: ${jingxinReturnPt.km.toFixed(2)}, name: '径心水库返', elev: 265 },
];`;

const trajectoryPtsJS = `// GPX高精度轨迹点
// 共${trajectoryPts.length}个点，总里程${totalDist.toFixed(2)}km
export const trajectoryPts = [
${trajectoryPts.map(p => `  { x: ${p.x}, y: ${p.y}, km: ${p.km.toFixed(2)}, lat: ${p.lat.toFixed(6)}, lon: ${p.lon.toFixed(6)}, road: '' }`).join(',\n')}
];`;

const fullJS = `${waypointsJS}\n\n${checkpointsJS}\n\n${challengeJS}\n\n${trajectoryPtsJS}`;

fs.writeFileSync('new-trajectory-data.js', fullJS);
console.log('\n✅ 数据已保存到 new-trajectory-data.js');
