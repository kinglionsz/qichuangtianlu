/**
 * 轨迹数据加载模块
 * 使用与部署版本相同的方法：
 * 1. 海拔曲线：使用更多采样点（类似每1km一个）
 * 2. 一级虐点：在 trajectoryPts 中找最近点获取坐标
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

// 海拔数据插值函数 - 从 checkpoints 获取海拔数据做线性插值
function getInterpolatedElevation(km) {
  const elevPoints = [
    { km: 0, elev: 35 },
    { km: 22.21, elev: 12 },
    { km: 44.40, elev: 8 },
    { km: 66.47, elev: 12 },
    { km: 84, elev: 12 },
    { km: 113, elev: 265 },
    { km: 120, elev: 145 },
    { km: 124, elev: 265 },
    { km: 131.4, elev: 35 }
  ];
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

// 在 trajectoryPts 中找 km 最近的点
function findNearestPoint(km) {
  let closest = trajectoryPts[0];
  let minDist = Math.abs(trajectoryPts[0].km - km);
  for (let i = 1; i < trajectoryPts.length; i++) {
    const dist = Math.abs(trajectoryPts[i].km - km);
    if (dist < minDist) {
      minDist = dist;
      closest = trajectoryPts[i];
    }
  }
  return closest;
}

// 生成用于海拔曲线的 waypoints（每 1km 一个采样点 + 关键点）
// 这与部署版本方法相同：使用更多采样点来绘制更精确的海拔曲线
function generateElevationWaypoints() {
  const points = [];
  // 从 0 到 131.4，每 1km 一个点
  for (let km = 0; km <= 131.4; km += 1) {
    const nearest = findNearestPoint(km);
    points.push({
      km: km,
      x: nearest.x,
      y: nearest.y,
      elev: getInterpolatedElevation(km)
    });
  }
  return points;
}

// 基础 waypoints（6 个打卡点）
const baseWaypoints = [
  { km: 0, isCheck: 1 },
  { km: 22.21, isCheck: 2 },
  { km: 44.40, isCheck: 3 },
  { km: 66.47, isCheck: 4 },
  { km: 84, isCheck: 4 },  // 杨梅坑
  { km: 120, isCheck: 5 },
  { km: 131.4, isCheck: 6 }
];

// 打卡点
export const checkpoints = baseWaypoints.map(cp => {
  const nearest = findNearestPoint(cp.km);
  const cpData = routeData.checkpoints.find(c => Math.abs(c.km - cp.km) < 5);
  return {
    km: cp.km,
    name: cpData ? cpData.name : '',
    elev: cpData ? cpData.elev : getInterpolatedElevation(cp.km),
    color: cp.isCheck === 1 || cp.isCheck === 6 ? '#00f0ff' : '#ff00ff',
    x: nearest.x,
    y: nearest.y,
    type: cp.isCheck === 1 ? 'start' : cp.isCheck === 6 ? 'end' : 'checkpoint'
  };
});

// 一级虐点 - 使用与部署版本相同的方法：从 trajectoryPts 找最近点
export const challengePoints = [
  { km: 33, name: '富民路', elev: 55 },
  { km: 60, name: '西涌返程', elev: 45 },
  { km: 113, name: '径心水库', elev: 265 },
  { km: 124, name: '径心水库返', elev: 265 }
].map(cp => {
  const nearest = findNearestPoint(cp.km);
  return {
    ...cp,
    x: nearest.x,
    y: nearest.y
  };
});

// 最高海拔点
const maxElev = findNearestPoint(113);
export const maxElevPoint = {
  km: 113,
  name: '径心水库',
  elev: 265,
  x: maxElev.x,
  y: maxElev.y
};

// 海岸线点
export const coastPts = routeData.coastline.map(p => ({
  x: p.x,
  y: p.y
}));

// 元数据
export const TOTAL_KM = 131.4;
export const MAX_ELEV = 300;
export const ROUTE_BOOK_ID = '#1387571';

// 完整的 waypoints（用于海拔曲线 - 每 1km 一个采样点）
export const waypoints = generateElevationWaypoints();