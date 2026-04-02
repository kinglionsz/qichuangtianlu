/**
 * 轨迹数据加载模块
 * 从 JSON 文件加载 GPS 数据并转换为 Canvas 坐标
 */
import { gpsToCanvas, convertPoints } from './coordinateUtils.js';

// 直接导入 JSON 数据
import routeData from '../../data/routes/route-995778.json';

// 转换轨迹点
export const trajectoryPts = convertPoints(routeData.trajectory);

// 转换打卡点
export const checkpoints = routeData.checkpoints.map(cp => {
  const { x, y } = gpsToCanvas(cp.lat, cp.lon);
  return { ...cp, x, y };
});

// 虐点（需要根据 km 找到对应的 waypoint 坐标）
// 从 trajectoryPts 中找到最近的距离点获取坐标
export const challengePoints = routeData.challengePoints.map(cp => {
  // 找到最近的轨迹点
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
    y: closest.y
  };
});

// 最高海拔点
export const maxElevPoint = (() => {
  const p = routeData.maxElevPoint;
  const { x, y } = gpsToCanvas(p.lat, p.lon);
  return { ...p, x, y };
})();

// 转换海岸线点
// 注意：coastline 数据当前是 Canvas 坐标，需要先添加 GPS 坐标
// 暂时使用原始数据，稍后可以从 GPX 文件补充
export const coastPts = routeData.coastline.map(p => {
  // 如果有 lat/lon 则转换，否则保留原样
  if (p.lat !== undefined && p.lon !== undefined) {
    const { x, y } = gpsToCanvas(p.lat, p.lon);
    return { ...p, x, y };
  }
  return p;
});

// 元数据
export const TOTAL_KM = routeData.metadata.totalDistance;
export const MAX_ELEV = routeData.metadata.maxElevation;
export const ROUTE_BOOK_ID = routeData.metadata.routeBookId;

// 导出 waypoints（从 checkpoints 和 trajectory 组合）
// 用于保持与原有代码的兼容性
export const waypoints = routeData.trajectory.filter((_, i) => i % 30 === 0).map((p, i, arr) => ({
  km: p.km,
  x: p.x,
  y: p.y,
  name: i === 0 ? '起点' : i === arr.length - 1 ? '终点' : '',
  isCheck: 0,
  elev: p.elev || 0,
  lat: p.lat,
  lon: p.lon,
  road: ''
}));