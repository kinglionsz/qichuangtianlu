const fs = require('fs');

// 读取新GPX
const gpxContent = fs.readFileSync('X:/Download/995778gpx.txt', 'utf8');

// 解析所有轨迹点
const trkptRegex = /<trkpt\s+lat="([\d.]+)"\s+lon="([\d.]+)">/g;
const gpxPoints = [];
let m;
while ((m = trkptRegex.exec(gpxContent)) !== null) {
  gpxPoints.push({ lat: +m[1], lon: +m[2] });
}

console.log('新GPX总点数:', gpxPoints.length);

// 计算累计距离
const R = 6371;
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
console.log('总里程:', totalKm.toFixed(2), 'km');

// 输出起点和终点
console.log('起点:', gpxPoints[0].lat, gpxPoints[0].lon, 'km:', gpxPoints[0].km);
console.log('终点:', gpxPoints[gpxPoints.length-1].lat, gpxPoints[gpxPoints.length-1].lon, 'km:', gpxPoints[gpxPoints.length-1].km.toFixed(2));

// 找几个关键位置的近似km值
// 根据路书描述，需要找到:
// - 杨梅坑 (最东端，lat应该较大)
// - 西涌 (南端)
// - 鹅公湾 (西南端，lat最小)
// - 坝光 (东北端)

let maxLat = -Infinity, minLat = Infinity;
let maxLatIdx = 0, minLatIdx = 0;
for (let i = 0; i < gpxPoints.length; i++) {
  if (gpxPoints[i].lat > maxLat) { maxLat = gpxPoints[i].lat; maxLatIdx = i; }
  if (gpxPoints[i].lat < minLat) { minLat = gpxPoints[i].lat; minLatIdx = i; }
}

console.log('\n最北端(可能接近坝光):', 'lat:', maxLat.toFixed(6), 'km:', gpxPoints[maxLatIdx].km.toFixed(2));
console.log('最南端(可能接近鹅公湾/西涌):', 'lat:', minLat.toFixed(6), 'km:', gpxPoints[minLatIdx].km.toFixed(2));

// 保存解析结果供后续使用
fs.writeFileSync('gpx-points-new.json', JSON.stringify(gpxPoints, null, 2));
console.log('\n已保存到 gpx-points-new.json');
