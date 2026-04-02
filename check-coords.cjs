const fs = require('fs');
const c = fs.readFileSync('src/js/trajectoryData.js', 'utf8');

// 提取 trajectoryPts
const m1 = c.match(/export const trajectoryPts = \[([\s\S]*?)\];/);
const pts = eval('[' + m1[1] + ']');

console.log('杨梅坑附近 (km~86):');
pts.filter(p => p.km >= 85 && p.km <= 87).forEach(p => console.log('  km:', p.km, 'x:', p.x, 'y:', p.y));

console.log('坝光附近 (km~123):');
pts.filter(p => p.km >= 122 && p.km <= 123.5).forEach(p => console.log('  km:', p.km, 'x:', p.x, 'y:', p.y));

// 提取 waypoints
const m2 = c.match(/export const waypoints = \[([\s\S]*?)\];/);
const wps = eval('[' + m2[1] + ']');

console.log('\n打卡点坐标对比:');
console.log('杨梅坑 waypoints: x=347, y=237, km=86.17');
const ymk = pts.find(p => p.km >= 85.9 && p.km <= 86.3);
console.log('杨梅坑 trajectoryPts:', ymk ? `x=${ymk.x}, y=${ymk.y}, km=${ymk.km}` : 'not found');

console.log('\n坝光 waypoints: x=457, y=111, km=122.91');
const bg = pts.find(p => p.km >= 122.7 && p.km <= 123.1);
console.log('坝光 trajectoryPts:', bg ? `x=${bg.x}, y=${bg.y}, km=${bg.km}` : 'not found');
