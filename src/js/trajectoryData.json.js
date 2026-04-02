/**
 * 轨迹数据加载模块
 * 直接使用原有的 Canvas 坐标（已人工调整好）
 * 保留 GPS 坐标作为元数据
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

// 打卡点 - 找到对应的坐标
export const checkpoints = routeData.checkpoints.map((cp, index) => {
  // 从 trajectory 找到对应的坐标
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

// 虐点 - 从 trajectory 获取坐标
export const challengePoints = routeData.challengePoints.map(cp => {
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
    ...cp,
    lat: closest.lat,
    lon: closest.lon,
    x: closest.x,
    y: closest.y,
    elev: cp.elev || 0
  };
});

// 最高海拔点
export const maxElevPoint = (() => {
  const cp = routeData.maxElevPoint;
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
    lat: cp.lat,
    lon: cp.lon,
    x: closest.x,
    y: closest.y
  };
})();

// 海岸线点
export const coastPts = routeData.coastline.map(p => ({
  x: p.x,
  y: p.y
}));

// 元数据
export const TOTAL_KM = routeData.metadata.totalDistance;
export const MAX_ELEV = routeData.metadata.maxElevation;
export const ROUTE_BOOK_ID = routeData.metadata.routeBookId;

// 海拔插值函数
function getInterpolatedElevation(km) {
  const elevPoints = routeData.checkpoints.map(cp => ({ km: cp.km, elev: cp.elev }));
  elevPoints.sort((a, b) => a.km - b.km);

  if (km <= elevPoints[0].km) return elevPoints[0].elev;
  if (km >= elevPoints[elevPoints.length - 1].km) return elevPoints[elevPoints.length - 1].elev;

  let left = elevPoints[0], right = elevPoints[elevPoints.length - 1];
  for (let i = 0; i < elevPoints.length - 1; i++) {
    if (elevPoints[i].km <= km && elevPoints[i + 1].km >= km) {
      left = elevPoints[i];
      right = elevPoints[i + 1];
      break;
    }
  }

  if (right.km === left.km) return left.elev;
  const t = (km - left.km) / (right.km - left.km);
  return Math.round(left.elev + (right.elev - left.elev) * t);
}

// 找到 km 对应的坐标
function getCoordAtKm(km) {
  let closest = trajectoryPts[0];
  let minDist = Math.abs(trajectoryPts[0].km - km);
  for (let i = 1; i < trajectoryPts.length; i++) {
    const dist = Math.abs(trajectoryPts[i].km - km);
    if (dist < minDist) {
      minDist = dist;
      closest = trajectoryPts[i];
    }
  }
  return { x: closest.x, y: closest.y };
}

// 构建 waypoints - 包含所有 6 个打卡点
const checkpointData = [
  { km: 0, isCheck: 1, name: '满京华艺术村' },
  { km: 22.21, isCheck: 2, name: '鹅公湾' },
  { km: 44.40, isCheck: 3, name: '西涌' },
  { km: 66.47, isCheck: 4, name: '杨梅坑' },
  { km: 110.70, isCheck: 5, name: '坝光' },
  { km: 132.86, isCheck: 6, name: '满京华终点' }
];

export const waypoints = checkpointData.map(cp => {
  const coord = getCoordAtKm(cp.km);
  const cpData = routeData.checkpoints.find(c => Math.abs(c.km - cp.km) < 1);
  return {
    km: cp.km,
    x: coord.x,
    y: coord.y,
    name: cpData ? cpData.name : cp.name,
    isCheck: cp.isCheck,
    elev: cpData ? cpData.elev : getInterpolatedElevation(cp.km),
    lat: cpData ? cpData.lat : 0,
    lon: cpData ? cpData.lon : 0,
    road: ''
  };
});