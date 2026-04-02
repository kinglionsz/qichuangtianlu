/**
 * 数据提取脚本 - 从 trajectoryData.js 提取数据生成 JSON 文件
 * 运行: node extract-route-data.cjs
 */
const fs = require('fs');
const path = require('path');

// 读取 trajectoryData.js 文件
const filePath = path.join(__dirname, 'src/js/trajectoryData.js');
const content = fs.readFileSync(filePath, 'utf-8');

// 提取 trajectoryPts 数据
const trajectoryMatch = content.match(/export const trajectoryPts = \[([\s\S]*?)\];/);
const trajectoryPtsStr = trajectoryMatch ? trajectoryMatch[1] : '';

// 解析 trajectoryPts
const trajectoryPts = [];
const ptRegex = /\{ x:\s*(\d+),\s*y:\s*(\d+),\s*km:\s*([\d.]+),\s*lat:\s*([\d.]+),\s*lon:\s*([\d.]+) \}/g;
let match;
while ((match = ptRegex.exec(trajectoryPtsStr)) !== null) {
  trajectoryPts.push({
    x: parseInt(match[1]),
    y: parseInt(match[2]),
    km: parseFloat(match[3]),
    lat: parseFloat(match[4]),
    lon: parseFloat(match[5]),
    elev: 0 // 当前数据没有海拔，后续可从 GPX 补充
  });
}

console.log(`提取到 ${trajectoryPts.length} 个轨迹点`);

// 提取 coastPts
const coastMatch = content.match(/export const coastPts = \[([\s\S]*?)\];/);
const coastPtsStr = coastMatch ? coastMatch[1] : '';

const coastPts = [];
const coastRegex = /\{ x:\s*(\d+),\s*y:\s*(\d+) \}/g;
while ((match = coastRegex.exec(coastPtsStr)) !== null) {
  coastPts.push({
    x: parseInt(match[1]),
    y: parseInt(match[2])
  });
}

console.log(`提取到 ${coastPts.length} 个海岸线点`);

// 提取 checkpoints
const checkpointsMatch = content.match(/export const checkpoints = \[([\s\S]*?)\];/);
const checkpointsStr = checkpointsMatch ? checkpointsMatch[1] : '';

const checkpoints = [];
const cpRegex = /\{ km:\s*([\d.]+),\s*name:\s*'([^']*)',\s*elev:\s*(\d+),\s*color:\s*'([^']*)',\s*lat:\s*([\d.]+),\s*lon:\s*([\d.]+) \}/g;
while ((match = cpRegex.exec(checkpointsStr)) !== null) {
  checkpoints.push({
    km: parseFloat(match[1]),
    name: match[2],
    elev: parseInt(match[3]),
    color: match[4],
    lat: parseFloat(match[5]),
    lon: parseFloat(match[6])
  });
}

console.log(`提取到 ${checkpoints.length} 个打卡点`);

// 提取 challengePoints
const challengeMatch = content.match(/export const challengePoints = \[([\s\S]*?)\];/);
const challengeStr = challengeMatch ? challengeMatch[1] : '';

const challengePoints = [];
const chRegex = /\{ km:\s*([\d.]+),\s*name:\s*'([^']*)',\s*elev:\s*(\d+) \}/g;
while ((match = chRegex.exec(challengeStr)) !== null) {
  challengePoints.push({
    km: parseFloat(match[1]),
    name: match[2],
    elev: parseInt(match[3])
  });
}

console.log(`提取到 ${challengePoints.length} 个虐点`);

// 提取 maxElevPoint
const maxElevMatch = content.match(/export const maxElevPoint = \{ km:\s*([\d.]+),\s*elev:\s*(\d+),\s*name:\s*'([^']*)',\s*lat:\s*([\d.]+),\s*lon:\s*([\d.]+) \}/);
const maxElevPoint = maxElevMatch ? {
  km: parseFloat(maxElevMatch[1]),
  elev: parseInt(maxElevMatch[2]),
  name: maxElevMatch[3],
  lat: parseFloat(maxElevMatch[4]),
  lon: parseFloat(maxElevMatch[5])
} : null;

console.log('提取到最高海拔点:', maxElevPoint);

// 提取元数据
const totalKmMatch = content.match(/export const TOTAL_KM = ([\d.]+)/);
const maxElevMatch2 = content.match(/export const MAX_ELEV  = (\d+)/);

const metadata = {
  routeBookId: '#1387571',
  name: '2017 VAUDE 骑闯天路资格赛·深圳站',
  totalDistance: totalKmMatch ? parseFloat(totalKmMatch[1]) : 132.86,
  totalElevation: 3121,
  maxElevation: maxElevMatch2 ? parseInt(maxElevMatch2[1]) : 300,
  source: '995778gpx.txt',
  createdDate: '2017-03-16'
};

console.log('元数据:', metadata);

// 构建完整的 JSON 数据
const routeData = {
  metadata,
  trajectory: trajectoryPts,
  checkpoints: checkpoints.map((cp, index) => ({
    ...cp,
    type: index === 0 ? 'start' : index === checkpoints.length - 1 ? 'end' : 'checkpoint'
  })),
  challengePoints,
  maxElevPoint,
  coastline: coastPts
};

// 写入 JSON 文件
const outputPath = path.join(__dirname, 'data/routes/route-995778.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(routeData, null, 2), 'utf-8');

console.log(`\n✅ 数据已写入: ${outputPath}`);
console.log(`   - trajectory: ${routeData.trajectory.length} 点`);
console.log(`   - checkpoints: ${routeData.checkpoints.length} 点`);
console.log(`   - challengePoints: ${routeData.challengePoints.length} 点`);
console.log(`   - coastline: ${routeData.coastline.length} 点`);