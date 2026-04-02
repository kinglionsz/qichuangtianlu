/**
 * GPX 解析器 - 将 GPX XML 转换为轨迹数据
 * 输入: 1041365gpx.txt (2017 骑闯天路资格赛深圳站)
 * 输出: 适合 Canvas 绑定的轨迹点数组
 */

const fs = require('fs');

// 读取 GPX 文件
const gpxPath = 'D:/ampa_migra/G/CodeSources/ai_project/mimo/bike-project/1041365gpx.txt';
const gpxContent = fs.readFileSync(gpxPath, 'utf8');

// 解析所有 trkpt 节点
const trkptRegex = /<trkpt lat="([^"]+)" lon="([^"]+)">\s*<time>([^<]+)Z?<\/time>/g;
const points = [];
let match;

while ((match = trkptRegex.exec(gpxContent)) !== null) {
  points.push({
    lat: parseFloat(match[1]),
    lon: parseFloat(match[2]),
    time: new Date(match[3])
  });
}

console.log(`📊 GPX 解析结果:`);
console.log(`  总点数: ${points.length}`);
console.log(`  开始时间: ${points[0].time.toISOString()}`);
console.log(`  结束时间: ${points[points.length - 1].time.toISOString()}`);
console.log(`  骑行时长: ${((points[points.length - 1].time - points[0].time) / 60000).toFixed(1)} 分钟`);

// 计算地理范围
let minLat = Infinity, maxLat = -Infinity;
let minLon = Infinity, maxLon = -Infinity;
let totalDist = 0;

for (let i = 0; i < points.length; i++) {
  const p = points[i];
  if (p.lat < minLat) minLat = p.lat;
  if (p.lat > maxLat) maxLat = p.lat;
  if (p.lon < minLon) minLon = p.lon;
  if (p.lon > maxLon) maxLon = p.lon;

  // 计算累计距离（米）
  if (i > 0) {
    const prev = points[i - 1];
    totalDist += haversine(prev.lat, prev.lon, p.lat, p.lon);
  }
}

console.log(`\n🗺️ 地理范围:`);
console.log(`  纬度: ${minLat.toFixed(4)} ~ ${maxLat.toFixed(4)} (跨度 ${(maxLat - minLat).toFixed(4)}°)`);
console.log(`  经度: ${minLon.toFixed(4)} ~ ${maxLon.toFixed(4)} (跨度 ${(maxLon - minLon).toFixed(4)}°)`);
console.log(`  总距离: ${(totalDist / 1000).toFixed(2)} km`);

// Haversine 距离计算
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Canvas 尺寸
const CW = 1100;
const CH = 770;
const OFFSET_X = 160;
const OFFSET_Y = 60;

// 留边距
const MARGIN_X = 40;
const MARGIN_Y = 40;

// 计算缩放
const availableW = CW - 2 * MARGIN_X;
const availableH = CH - 2 * MARGIN_Y;
const scaleX = availableW / (maxLon - minLon);
const scaleY = availableH / (maxLat - minLat);
const scale = Math.min(scaleX, scaleY);

console.log(`\n📐 Canvas 映射:`);
console.log(`  Canvas: ${CW}x${CH}`);
console.log(`  缩放系数: ${scale.toFixed(2)} px/°`);

// 生成轨迹点（每 N 个点采样一次，减少数据量）
const SAMPLE_RATE = 10; // 每10个点取1个
const sampledPoints = [];
let cumDist = 0;

for (let i = 0; i < points.length; i += SAMPLE_RATE) {
  const p = points[i];
  const prev = i > 0 ? points[i - SAMPLE_RATE] : points[0];

  if (i > 0) {
    cumDist += haversine(prev.lat, prev.lon, p.lat, p.lon);
  }

  // 映射到 Canvas 坐标
  const x = MARGIN_X + (p.lon - minLon) * scale;
  const y = CH - MARGIN_Y - (p.lat - minLat) * scale; // Y轴翻转

  sampledPoints.push({
    x: Math.round(x + OFFSET_X),
    y: Math.round(y + OFFSET_Y),
    km: cumDist / 1000,
    lat: p.lat,
    lon: p.lon,
    time: p.time
  });
}

console.log(`\n📍 采样轨迹点: ${sampledPoints.length} 个 (原始 ${points.length} 点，每隔 ${SAMPLE_RATE} 点取1个)`);

// 生成 JS 导出
const routePoints = sampledPoints.map((p, i) => {
  const isFirst = i === 0;
  const isLast = i === sampledPoints.length - 1;
  return `  { x: ${p.x}, y: ${p.y}, km: ${p.km.toFixed(2)}, elev: 0,${isFirst ? " road: '起点'," : ""}${isLast ? " road: '终点'," : ""} lat: ${p.lat}, lon: ${p.lon} }`;
}).join(',\n');

const jsExport = `/**
 * 骑行轨迹数据 - 从 GPX 自动生成
 * 源文件: 1041365gpx.txt
 * 活动时间: ${points[0].time.toISOString().slice(0, 10)}
 * 总距离: ${(totalDist / 1000).toFixed(2)} km
 * 总时长: ${((points[points.length - 1].time - points[0].time) / 60000).toFixed(0)} 分钟
 * 轨迹点数: ${sampledPoints.length} (采样自 ${points.length})
 * 注意: 此版本无海拔数据，海拔显示为 0
 */

export const coastPts = [
  { x: 304, y: 100 }, { x: 400, y: 70 }, { x: 500, y: 60 }, { x: 700, y: 60 }, { x: 904, y: 110 },
  { x: 944, y: 140 }, { x: 976, y: 200 }, { x: 1000, y: 280 }, { x: 1024, y: 360 },
  { x: 1008, y: 440 }, { x: 968, y: 510 }, { x: 896, y: 560 },
  { x: 792, y: 580 }, { x: 656, y: 600 }, { x: 500, y: 600 }, { x: 350, y: 580 },
  { x: 200, y: 550 }, { x: 100, y: 520 }, { x: 50, y: 500 },
  { x: 40, y: 400 }, { x: 50, y: 300 }, { x: 80, y: 200 }, { x: 150, y: 130 },
  { x: 250, y: 90 }, { x: 304, y: 100 },
];

export const waypoints = [
${routePoints}
];

export const checkpoints = [
];

export const challengePoints = [
];

export const maxElevPoint = { name: '最高点', km: 0, elev: 0 };

export const TOTAL_KM = ${(totalDist / 1000).toFixed(2)};
export const MAX_ELEV = 100;  // 无海拔数据，使用默认值
`;

const outputPath = 'D:/ampa_migra/G/CodeSources/ai_project/mimo/bike-project/src/js/trajectoryData-gpx.js';
fs.writeFileSync(outputPath, jsExport, 'utf8');
console.log(`\n✅ 已生成: ${outputPath}`);

// 同时输出一些统计信息
console.log(`\n📈 统计摘要:`);
console.log(`  总里程: ${(totalDist / 1000).toFixed(2)} km`);
console.log(`  轨迹点数: ${sampledPoints.length}`);
console.log(`  地理范围: ${(maxLat - minLat).toFixed(4)}° x ${(maxLon - minLon).toFixed(4)}°`);
