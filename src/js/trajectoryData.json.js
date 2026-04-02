/**
 * 轨迹数据加载模块
 * 直接使用原有的 Canvas 坐标（已人工调整好）
 * 保留 GPS 坐标作为元数据
 *
 * 注意：此模块直接复用原有的 trajectoryData.js 数据
 * 只是作为 JSON 数据格式的适配层
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

// 打卡点 - 直接使用原有坐标，并包含海拔信息
export const checkpoints = routeData.checkpoints.map(cp => ({
  km: cp.km,
  name: cp.name,
  elev: cp.elev,
  color: cp.color,
  lat: cp.lat,
  lon: cp.lon,
  type: cp.type
}));

// 虐点 - 从 checkpoints 获取海拔信息
export const challengePoints = routeData.challengePoints.map(cp => {
  return {
    ...cp,
    elev: cp.elev || 0
  };
});

// 最高海拔点
export const maxElevPoint = routeData.maxElevPoint;

// 海岸线点 - 直接使用 Canvas 坐标
export const coastPts = routeData.coastline.map(p => ({
  x: p.x,
  y: p.y
}));

// 元数据
export const TOTAL_KM = routeData.metadata.totalDistance;
export const MAX_ELEV = routeData.metadata.maxElevation;
export const ROUTE_BOOK_ID = routeData.metadata.routeBookId;

// waypoints - 从 checkpoints 和 trajectory 组合生成
// 使用 checkpoints 的海拔数据
function getInterpolatedElevation(km) {
  // 从 checkpoints 获取海拔数据点
  const elevPoints = routeData.checkpoints.map(cp => ({ km: cp.km, elev: cp.elev }));
  elevPoints.push({ km: 0, elev: 35 }); // 起点
  elevPoints.sort((a, b) => a.km - b.km);

  // 找到最近的左右点
  let left = elevPoints[0];
  let right = elevPoints[elevPoints.length - 1];

  for (let i = 0; i < elevPoints.length - 1; i++) {
    if (elevPoints[i].km <= km && elevPoints[i + 1].km >= km) {
      left = elevPoints[i];
      right = elevPoints[i + 1];
      break;
    }
  }

  // 线性插值
  if (right.km === left.km) return left.elev;
  const t = (km - left.km) / (right.km - left.km);
  return Math.round(left.elev + (right.elev - left.elev) * t);
}

// 生成完整的 waypoints 数组，包含正确的海拔数据
export const waypoints = [
  // 起点
  { km: 0.00, x: 331, y: 179, name: '起点满京华艺象', isCheck: 1, elev: 35, lat: 22.611661, lon: 114.426878, road: '' },
  // 中间点（从 trajectory 采样，并使用 checkpoints 的海拔插值）
  ...trajectoryPts.filter((_, i) => i > 0 && i % 25 === 0 && i < trajectoryPts.length - 1).map(p => ({
    km: p.km,
    x: p.x,
    y: p.y,
    name: '',
    isCheck: 0,
    elev: getInterpolatedElevation(p.km),
    lat: p.lat,
    lon: p.lon,
    road: ''
  })),
  // 终点
  { km: 132.86, x: 330, y: 179, name: '终点满京华艺象', isCheck: 6, elev: 35, lat: 22.611641, lon: 114.426828, road: '' }
];