/**
 * 从新 GPX 数据中提取打卡点、虐点、海拔数据
 */
const fs = require('fs');

// 读取新 GPX
const gpxContent = fs.readFileSync('X:/Download/995778gpx.txt', 'utf8');

// 解析所有轨迹点
const points = [];
let totalDist = 0;
const trkptRegex = /<trkpt lat="([\d.]+)" lon="([\d.]+)">[\s\S]*?<ele>([\d.]+)<\/ele>[\s\S]*?<\/trkpt>/g;
let match;

while ((match = trkptRegex.exec(gpxContent)) !== null) {
  const lat = parseFloat(match[1]);
  const lon = parseFloat(match[2]);
  const ele = parseFloat(match[3]);
  
  if (points.length > 0) {
    const prev = points[points.length - 1];
    const d = haversine(prev.lat, prev.lon, lat, lon);
    totalDist += d;
  }
  
  points.push({
    lat,
    lon,
    ele,
    km: totalDist
  });
}

console.log(`总点数: ${points.length}`);
console.log(`总里程: ${totalDist.toFixed(2)} km`);
console.log(`\n海拔范围: ${Math.min(...points.map(p=>p.ele)).toFixed(0)}m - ${Math.max(...points.map(p=>p.ele)).toFixed(0)}m`);

// 找到最高海拔点
const maxElePoint = points.reduce((max, p) => p.ele > max.ele ? p : max, points[0]);
console.log(`\n最高海拔点: ${maxElePoint.ele.toFixed(0)}m @ km ${maxElePoint.km.toFixed(2)}`);

// 找到径心水库附近的高海拔区域 (根据新路书，径心水库在 115-128km 之间)
const jingxinArea = points.filter(p => p.km >= 115 && p.km <= 128);
const jingxinHigh = jingxinArea.filter(p => p.ele >= 250);
console.log(`\n径心水库区域高海拔点 (${jingxinHigh.length}个):`);
jingxinHigh.forEach(p => {
  console.log(`  km ${p.km.toFixed(2)}: ${p.ele.toFixed(0)}m`);
});

// 找到两个高海拔峰值（去程和返程）
const peaks = findPeaks(jingxinArea, 250);
console.log(`\n径心水库虐点峰值:`);
peaks.forEach((p, i) => {
  console.log(`  ${i+1}. km ${p.km.toFixed(2)}: ${p.ele.toFixed(0)}m, lat: ${p.lat.toFixed(6)}, lon: ${p.lon.toFixed(6)}`);
});

// 打卡点目标 km (基于新路书)
const targetCheckpoints = [
  { name: '满京华艺术村', targetKm: 0 },
  { name: '鹅公湾', targetKm: 36.5 },
  { name: '西涌', targetKm: 57.7 },
  { name: '杨梅坑', targetKm: 86.2 },
  { name: '坝光', targetKm: 122.9 },
  { name: '满京华终点', targetKm: 132.9 }
];

console.log(`\n打卡点位置 (从GPX中提取):`);
const checkpoints = targetCheckpoints.map(cp => {
  // 找到最接近目标 km 的点
  const pt = points.reduce((closest, p) => 
    Math.abs(p.km - cp.targetKm) < Math.abs(closest.km - cp.targetKm) ? p : closest
  , points[0]);
  
  console.log(`  ${cp.name}:`);
  console.log(`    km: ${pt.km.toFixed(2)} (目标: ${cp.targetKm})`);
  console.log(`    elev: ${pt.ele.toFixed(0)}m`);
  console.log(`    lat: ${pt.lat.toFixed(6)}, lon: ${pt.lon.toFixed(6)}`);
  
  return {
    name: cp.name,
    km: pt.km,
    elev: Math.round(pt.ele),
    lat: pt.lat,
    lon: pt.lon
  };
});

// 保存提取的数据
const output = {
  totalKm: totalDist,
  maxElevPoint: {
    km: maxElePoint.km,
    elev: Math.round(maxElePoint.ele),
    lat: maxElePoint.lat,
    lon: maxElePoint.lon
  },
  challengePoints: peaks.map((p, i) => ({
    name: i === 0 ? '径心水库' : '径心水库返',
    km: p.km,
    elev: Math.round(p.ele)
  })),
  checkpoints,
  // 采样海拔数据用于海拔曲线 (每 0.5km 一个点)
  elevationProfile: sampleElevation(points, 0.5)
};

fs.writeFileSync('gpx-extracted-data.json', JSON.stringify(output, null, 2));
console.log(`\n✅ 数据已保存到 gpx-extracted-data.json`);

// 辅助函数
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function findPeaks(points, threshold) {
  const peaks = [];
  for (let i = 1; i < points.length - 1; i++) {
    const p = points[i];
    const prev = points[i-1];
    const next = points[i+1];
    if (p.ele >= threshold && p.ele > prev.ele && p.ele > next.ele) {
      peaks.push(p);
    }
  }
  return peaks.sort((a, b) => a.km - b.km);
}

function sampleElevation(points, interval) {
  const samples = [];
  const maxKm = points[points.length - 1].km;
  for (let km = 0; km <= maxKm; km += interval) {
    const pt = points.reduce((closest, p) => 
      Math.abs(p.km - km) < Math.abs(closest.km - km) ? p : closest
    , points[0]);
    samples.push({ km: Math.round(km * 10) / 10, elev: Math.round(pt.ele) });
  }
  return samples;
}
