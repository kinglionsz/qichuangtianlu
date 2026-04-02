/**
 * 轨迹数据加载模块
 * 直接使用原有的 Canvas 坐标（已人工调整好）
 */
import routeData from '../../data/routes/route-995778.json';

// 直接使用原有的 Canvas 坐标
export const trajectoryPts = routeData.trajectory.map(p => ({
  km: p.km,
  x: p.x,
  y: p.y,
  lat: p.lat,
  lon: p.lon,
  elev: p.elev || 0
}));

// 打卡点
export const checkpoints = routeData.checkpoints.map((cp) => {
  let closest = trajectoryPts[0];
  let minDist = Math.abs(trajectoryPts[0].km - cp.km);
  for (let i = 1; i < trajectoryPts.length; i++) {
    const dist = Math.abs(trajectoryPts[i].km - cp.km);
    if (dist < minDist) {
      minDist = dist;
      closest = trajectoryPts[i];
    }
  }
  return {
    km: cp.km,
    name: cp.name,
    elev: cp.elev,
    color: cp.color,
    lat: cp.lat,
    lon: cp.lon,
    type: cp.type,
    x: closest.x,
    y: closest.y
  };
});

// 虐点 - 直接使用原有 waypoints 中的坐标
// 原始 waypoints 数据 (km -> x, y 映射)
const waypointCoords = {
  0: { x: 331, y: 179 },
  11.07: { x: 507, y: 299 },
  22.21: { x: 514, y: 511 },
  33.30: { x: 506, y: 398 },
  44.40: { x: 605, y: 565 },
  55.40: { x: 583, y: 457 },
  66.47: { x: 710, y: 342 },
  77.50: { x: 512, y: 303 },
  88.60: { x: 329, y: 184 },
  99.60: { x: 490, y: 102 },
  110.70: { x: 753, y: 69 },
  121.80: { x: 490, y: 102 },
  132.86: { x: 330, y: 179 }
};

export const challengePoints = routeData.challengePoints.map(cp => {
  const coord = waypointCoords[cp.km] || trajectoryPts.find(p => Math.abs(p.km - cp.km) < 0.5) || trajectoryPts[0];
  const x = coord.x || trajectoryPts[0].x;
  const y = coord.y || trajectoryPts[0].y;
  return {
    ...cp,
    lat: 0,
    lon: 0,
    x: x,
    y: y,
    elev: cp.elev || 0
  };
});

// 最高海拔点 - 使用原有坐标
export const maxElevPoint = {
  km: 99.60,
  name: '径心水库',
  elev: 265,
  lat: 22.638564,
  lon: 114.482453,
  x: 490,
  y: 102
};

// 海岸线点
export const coastPts = routeData.coastline.map(p => ({
  x: p.x,
  y: p.y
}));

// 元数据
export const TOTAL_KM = routeData.metadata.totalDistance;
export const MAX_ELEV = routeData.metadata.maxElevation;
export const ROUTE_BOOK_ID = routeData.metadata.routeBookId;

// 构建 waypoints - 包含所有 6 个打卡点
const checkpointData = [
  { km: 0, isCheck: 1 },
  { km: 22.21, isCheck: 2 },
  { km: 44.40, isCheck: 3 },
  { km: 66.47, isCheck: 4 },
  { km: 110.70, isCheck: 5 },
  { km: 132.86, isCheck: 6 }
];

export const waypoints = checkpointData.map(cp => {
  const coord = waypointCoords[cp.km] || trajectoryPts[0];
  const cpData = routeData.checkpoints.find(c => Math.abs(c.km - cp.km) < 1);
  return {
    km: cp.km,
    x: coord.x,
    y: coord.y,
    name: cpData ? cpData.name : '',
    isCheck: cp.isCheck,
    elev: cpData ? cpData.elev : 0,
    lat: cpData ? cpData.lat : 0,
    lon: cpData ? cpData.lon : 0,
    road: ''
  };
});