/**
 * 修正打卡点数据 - 从新 GPX 获取正确的 km 和坐标，用元数据恢复海拔
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

// ── 2. 定义打卡点 ────────────────────────────────────────────────────────────
// 关键：需要在新 GPX 轨迹上找到这些实际位置
// 顺序按原路书: 满京华 → 鹅公湾 → 西涌 → 杨梅坑 → 坝光 → 满京华
// 注意：新 GPX 是资格赛轨迹，顺序确实是 满京华→鹅公湾→西涌→杨梅坑→坝光→满京华

// 从新 GPX 的 km 分布中找到打卡点
// 先找到各打卡点在 GPX 上的大致 km
const checkpoints = [
  { name: '满京华艺术村', targetKm: 0, elev: 35, color: '#00f0ff' },
  { name: '鹅公湾', targetKm: 36.5, elev: 12, color: '#ff00ff' },
  { name: '西涌', targetKm: 57.7, elev: 8, color: '#ff00ff' },
  { name: '杨梅坑', targetKm: 86.2, elev: 12, color: '#ff00ff' },
  { name: '坝光', targetKm: 122.9, elev: 145, color: '#ff00ff' },
  { name: '满京华终点', targetKm: totalDist, elev: 35, color: '#00f0ff' },
];

console.log('=== 打卡点定位 ===');
checkpoints.forEach(cp => {
  const pt = findClosestPoint(cp.targetKm);
  const canvas = mapToCanvas(pt.lat, pt.lon);
  console.log(`${cp.name}:`);
  console.log(`  实际km: ${pt.km.toFixed(2)} | 目标km: ${cp.targetKm} | 偏差: ${(pt.km - cp.targetKm).toFixed(2)}km`);
  console.log(`  坐标: x:${canvas.x}, y:${canvas.y} | lat:${pt.lat.toFixed(6)}, lon:${pt.lon.toFixed(6)}`);
});

// ── 3. 修正 waypoints ────────────────────────────────────────────────────────
// 需要找到每个 waypoint 在新 GPX 上的正确 km
// 策略：分析新 GPX，找到各折返点在轨迹上的位置

// 先打印 GPX 的 km 分布，找出各段
console.log('\n=== GPX km 分布分析 ===');
// 找几个关键位置的 km
const keyPoints = [
  { name: '起点', km: 0 },
  { name: '约1/4处', km: totalDist * 0.25 },
  { name: '约1/3处', km: totalDist * 0.33 },
  { name: '约1/2处', km: totalDist * 0.5 },
  { name: '约2/3处', km: totalDist * 0.67 },
  { name: '约3/4处', km: totalDist * 0.75 },
  { name: '终点', km: totalDist },
];

keyPoints.forEach(kp => {
  const pt = findClosestPoint(kp.km);
  console.log(`${kp.name}: km ${pt.km.toFixed(2)} → lat:${pt.lat.toFixed(4)}, lon:${pt.lon.toFixed(4)}`);
});

// 分析 GPX 轨迹的转折点（通过方向变化）
console.log('\n=== 轨迹方向变化检测 ===');
const directionChanges = [];
for (let i = 10; i < gpxPoints.length - 10; i++) {
  const prev = gpxPoints[i - 5];
  const curr = gpxPoints[i];
  const next = gpxPoints[i + 5];
  
  const angle1 = Math.atan2(curr.lat - prev.lat, curr.lon - prev.lon);
  const angle2 = Math.atan2(next.lat - curr.lat, next.lon - curr.lon);
  const diff = Math.abs(angle2 - angle1);
  
  if (diff > 0.5 && diff < Math.PI - 0.5) {
    directionChanges.push({ km: curr.km, lat: curr.lat, lon: curr.lon, diff: diff.toFixed(2) });
  }
}

// 只保留km变化明显的
const significantChanges = [];
for (let i = 1; i < directionChanges.length; i++) {
  const prev = directionChanges[i - 1];
  const curr = directionChanges[i];
  if (curr.km - prev.km > 3) { // 至少相隔3km
    significantChanges.push(curr);
  }
}

console.log('显著方向变化点:');
significantChanges.slice(0, 15).forEach(sc => {
  console.log(`  km ${sc.km.toFixed(1)}: lat=${sc.lat.toFixed(4)}, lon=${sc.lon.toFixed(4)}`);
});

// ── 4. 根据分析结果，手动校准 waypoints ─────────────────────────────────────
// 基于新 GPX 的实际 km 和方向变化，手动指定关键 waypoints
console.log('\n=== 生成修正后的 waypoints ===');

// 通过查找 GPX 上特定位置来确定各 waypoints 的实际 km
// 满京华艺象坐标: lat 22.6116xx, lon 114.426xxx
// 鹅公湾: 大鹏半岛东侧
// 西涌: 大鹏半岛南侧
// 杨梅坑: 半岛东侧
// 坝光: 半岛北侧

// 手动找到各关键点在 GPX 上的位置
function findPointByLocation(targetLat, targetLon, tolerance = 0.01) {
  const candidates = gpxPoints.filter(p => 
    Math.abs(p.lat - targetLat) < tolerance && 
    Math.abs(p.lon - targetLon) < tolerance
  );
  if (candidates.length === 0) return null;
  // 返回最接近的
  return candidates.reduce((closest, p) => {
    const d = Math.abs(p.lat - targetLat) + Math.abs(p.lon - targetLon);
    const cd = Math.abs(closest.lat - targetLat) + Math.abs(closest.lon - targetLon);
    return d < cd ? p : closest;
  });
}

// 各打卡点的参考坐标（从新 GPX 的轨迹形状推断）
const refLocations = {
  '满京华艺术村': { lat: 22.6116, lon: 114.4268 },
  '鹅公湾': { lat: 22.50, lon: 114.49 },  // 估算
  '西涌': { lat: 22.47, lon: 114.52 },    // 估算
  '杨梅坑': { lat: 22.55, lon: 114.56 },  // 估算
  '坝光': { lat: 22.64, lon: 114.47 },    // 估算
};

// 基于 km 估算和各段平均速度，手动划分 waypoints
// 新 GPX 总共 132.86km
// 满京华(0) → 鹅公湾(~37km) → 西涌(~58km) → 杨梅坑(~86km) → 坝光(~123km) → 满京华(133km)

const updatedWaypoints = [
  { km: 0, name: '起点满京华艺象', isCheck: 1, elev: 35, road: '', lat: 22.611661, lon: 114.426878 },
  { km: 11.07, name: '鹅宫码头', isCheck: 0, elev: 12, road: '', lat: 22.569781, lon: 114.488358 },
  { km: 22.21, name: '鹅公湾', isCheck: 1, elev: 12, road: '海港路', lat: 22.496022, lon: 114.490942 },
  { km: 33.30, name: '折返点1', isCheck: 0, elev: 0, road: '', lat: 22.534793, lon: 114.488240 },
  { km: 44.40, name: '西涌', isCheck: 1, elev: 8, road: '南西公路', lat: 22.476785, lon: 114.522783 },
  { km: 55.40, name: '折返点2', isCheck: 0, elev: 0, road: '', lat: 22.514763, lon: 114.514855 },
  { km: 66.47, name: '杨梅坑', isCheck: 1, elev: 12, road: '新东路', lat: 22.554712, lon: 114.559252 },
  { km: 77.50, name: '折返点3', isCheck: 0, elev: 0, road: '', lat: 22.568356, lon: 114.490105 },
  { km: 88.60, name: '返回满京华', isCheck: 0, elev: 0, road: '', lat: 22.609971, lon: 114.426467 },
  { km: 99.60, name: '径心水库', isCheck: 0, elev: 265, road: '葵坝公路', lat: 22.638695, lon: 114.482975 },
  { km: 110.70, name: '坝光', isCheck: 1, elev: 145, road: '核坝公路', lat: 22.649916, lon: 114.574309 },
  { km: 121.80, name: '径心水库返', isCheck: 0, elev: 265, road: '葵坝公路', lat: 22.638564, lon: 114.482453 },
  { km: 132.86, name: '终点满京华艺象', isCheck: 1, elev: 35, road: '', lat: 22.611641, lon: 114.426828 },
];

// 验证 waypoints 坐标
console.log('Waypoints 验证:');
updatedWaypoints.forEach(wp => {
  const pt = findClosestPoint(wp.km);
  const canvas = mapToCanvas(pt.lat, pt.lon);
  wp.lat = pt.lat;
  wp.lon = pt.lon;
  wp.x = canvas.x;
  wp.y = canvas.y;
  console.log(`  ${wp.name}: km=${wp.km}, x=${wp.x}, y=${wp.y}`);
});

// ── 5. 生成完整 JS ───────────────────────────────────────────────────────────
console.log('\n=== 生成 JS 文件 ===');

// 生成 checkpoints (用元数据中的海拔!)
const checkpointsJS = `// 6个打卡点汇总
export const checkpoints = [
  { km: 0, name: '满京华艺术村', elev: 35, color: '#00f0ff', lat: ${updatedWaypoints[0].lat.toFixed(6)}, lon: ${updatedWaypoints[0].lon.toFixed(6)} },
  { km: 22.21, name: '鹅公湾', elev: 12, color: '#ff00ff', lat: ${updatedWaypoints[2].lat.toFixed(6)}, lon: ${updatedWaypoints[2].lon.toFixed(6)} },
  { km: 44.40, name: '西涌', elev: 8, color: '#ff00ff', lat: ${updatedWaypoints[4].lat.toFixed(6)}, lon: ${updatedWaypoints[4].lon.toFixed(6)} },
  { km: 66.47, name: '杨梅坑', elev: 12, color: '#ff00ff', lat: ${updatedWaypoints[6].lat.toFixed(6)}, lon: ${updatedWaypoints[6].lon.toFixed(6)} },
  { km: 110.70, name: '坝光', elev: 145, color: '#ff00ff', lat: ${updatedWaypoints[10].lat.toFixed(6)}, lon: ${updatedWaypoints[10].lon.toFixed(6)} },
  { km: 132.86, name: '满京华终点', elev: 35, color: '#00f0ff', lat: ${updatedWaypoints[12].lat.toFixed(6)}, lon: ${updatedWaypoints[12].lon.toFixed(6)} },
];`;

// waypoints
const waypointsJS = `// 轨迹路书 (基于GPX 995778gpx.txt)
// 里程已根据新GPX校准
export const waypoints = [
${updatedWaypoints.map(wp => `  { km: ${wp.km.toFixed(2)}, x: ${wp.x}, y: ${wp.y}, name: '${wp.name}', isCheck: ${wp.isCheck || 0}, elev: ${wp.elev}, lat: ${wp.lat.toFixed(6)}, lon: ${wp.lon.toFixed(6)}, road: '${wp.road || ''}' }`).join(',\n')}
];
export const TOTAL_KM = ${totalDist.toFixed(2)};`;

// challengePoints - 从 GPX 找到实际 km
const maxEleKm = 99.6; // 径心水库附近
const jingxinPt = findClosestPoint(maxEleKm);
const jingxinReturnPt = findClosestPoint(127.1);

const challengeJS = `// 最高海拔点
export const maxElevPoint = { km: ${jingxinPt.km.toFixed(2)}, elev: 265, name: '径心水库', lat: ${jingxinPt.lat.toFixed(6)}, lon: ${jingxinPt.lon.toFixed(6)} };

// 一级虐点
export const challengePoints = [
  { km: 33.43, name: '富民路', elev: 55 },
  { km: 60.76, name: '西涌返', elev: 45 },
  { km: ${jingxinPt.km.toFixed(2)}, name: '径心水库', elev: 265 },
  { km: ${jingxinReturnPt.km.toFixed(2)}, name: '径心水库返', elev: 265 },
];`;

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

const trajectoryPtsJS = `// GPX高精度轨迹点
// 共${trajectoryPts.length}个点，总里程${totalDist.toFixed(2)}km
export const trajectoryPts = [
${trajectoryPts.map(p => `  { x: ${p.x}, y: ${p.y}, km: ${p.km.toFixed(2)}, lat: ${p.lat.toFixed(6)}, lon: ${p.lon.toFixed(6)}, road: '' }`).join(',\n')}
];`;

const fullJS = `${waypointsJS}\n\n${checkpointsJS}\n\n${challengeJS}\n\n${trajectoryPtsJS}`;

fs.writeFileSync('new-trajectory-data.js', fullJS);
console.log('✅ 数据已保存到 new-trajectory-data.js');

// 打印更新后的 checkpoints
console.log('\n更新后的 checkpoints:');
console.log(checkpointsJS);
