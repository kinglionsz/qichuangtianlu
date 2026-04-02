/**
 * 轨迹数据加载模块
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

// 从 checkpoints + challengePoints 数据获取海拔插值
function getInterpolatedElevation(km) {
  // 合并 checkpoints 和 challengePoints 的海拔数据
  const elevPoints = [
    // checkpoints
    { km: 0, elev: 35 },
    { km: 22.21, elev: 12 },
    { km: 44.40, elev: 8 },
    { km: 66.47, elev: 12 },
    { km: 110.70, elev: 145 },
    { km: 132.86, elev: 35 },
    // 一级虐点
    { km: 21.65, elev: 185 },
    { km: 39.64, elev: 194 },
    { km: 46.48, elev: 94 },
    { km: 53.94, elev: 194 },
    { km: 95.56, elev: 103 },
    { km: 99.60, elev: 265 },  // 径心水库
    { km: 122.05, elev: 256 }
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

// 打卡点（6个）
export const checkpoints = routeData.checkpoints.map(cp => {
  const nearest = findNearestPoint(cp.km);
  return {
    km: cp.km,
    name: cp.name,
    elev: cp.elev,
    color: cp.color,
    x: nearest.x,
    y: nearest.y,
    type: cp.type
  };
});

// 一级虐点
export const challengePoints = [
  { km: 21.65, name: '虐点1', elev: 185 },
  { km: 39.64, name: '虐点2', elev: 194 },
  { km: 46.48, name: '虐点3', elev: 94 },
  { km: 53.94, name: '虐点4', elev: 194 },
  { km: 95.56, name: '虐点5', elev: 103 },
  { km: 122.05, name: '虐点6', elev: 256 }
].map(cp => {
  const nearest = findNearestPoint(cp.km);
  return {
    ...cp,
    x: nearest.x,
    y: nearest.y
  };
});

// 最高海拔点
const maxElev = findNearestPoint(99.60);
export const maxElevPoint = {
  km: 99.60,
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
export const TOTAL_KM = 132.86;
export const MAX_ELEV = 300;
export const ROUTE_BOOK_ID = '#1387571';

// 原始 waypoints（13个关键点，包含 isCheck 信息）- 用于打卡点标注
export const waypoints = [
  { km: 0, x: 331, y: 179, name: '起点满京华艺象', isCheck: 1, elev: 35, lat: 22.611661, lon: 114.426878, road: '' },
  { km: 11.07, x: 507, y: 299, name: '鹅宫码头', isCheck: 0, elev: 12, lat: 22.569781, lon: 114.488358, road: '' },
  { km: 22.21, x: 514, y: 511, name: '鹅公湾', isCheck: 2, elev: 12, lat: 22.495732, lon: 114.490872, road: '海港路' },
  { km: 33.30, x: 506, y: 398, name: '折返点1', isCheck: 0, elev: 0, lat: 22.535173, lon: 114.488230, road: '' },
  { km: 44.40, x: 605, y: 565, name: '西涌', isCheck: 3, elev: 8, lat: 22.476785, lon: 114.522783, road: '南西公路' },
  { km: 55.40, x: 583, y: 457, name: '折返点2', isCheck: 0, elev: 0, lat: 22.514763, lon: 114.514855, road: '' },
  { km: 66.47, x: 710, y: 342, name: '杨梅坑', isCheck: 4, elev: 12, lat: 22.554712, lon: 114.559252, road: '新东路' },
  { km: 77.50, x: 512, y: 303, name: '折返点3', isCheck: 0, elev: 0, lat: 22.568356, lon: 114.490105, road: '' },
  { km: 88.60, x: 329, y: 184, name: '返回满京华', isCheck: 0, elev: 0, lat: 22.609971, lon: 114.426467, road: '' },
  { km: 99.60, x: 490, y: 102, name: '径心水库', isCheck: 0, elev: 265, lat: 22.638564, lon: 114.482453, road: '葵坝公路' },
  { km: 110.70, x: 753, y: 69, name: '坝光', isCheck: 5, elev: 145, lat: 22.649916, lon: 114.574309, road: '核坝公路' },
  { km: 121.80, x: 490, y: 102, name: '径心水库返', isCheck: 0, elev: 265, lat: 22.638564, lon: 114.482453, road: '葵坝公路' },
  { km: 132.86, x: 330, y: 179, name: '终点满京华艺象', isCheck: 6, elev: 35, lat: 22.611641, lon: 114.426828, road: '' }
];

// elevationPoints（133个采样点，包含正确的 elev）- 用于海拔曲线
export const elevationPoints = [];
for (let km = 0; km <= 132.86; km += 1) {
  const nearest = findNearestPoint(km);
  elevationPoints.push({
    km: Math.round(km * 100) / 100,
    x: nearest.x,
    y: nearest.y,
    elev: getInterpolatedElevation(km)
  });
}