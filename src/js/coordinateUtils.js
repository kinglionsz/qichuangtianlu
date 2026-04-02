/**
 * GPS 坐标到 Canvas 坐标转换工具
 * 用于将 GPS (lat, lon) 坐标转换为 Canvas (x, y) 坐标
 */

// 大鹏半岛 GPS 边界（根据 995778gpx.txt 数据范围校准）
const GPS_BOUNDS = {
  minLat: 22.47,
  maxLat: 22.70,
  minLon: 114.42,
  maxLon: 114.60
};

// Canvas 配置
const CANVAS_CONFIG = {
  width: 1100,
  height: 770,
  padding: 30
};

/**
 * GPS 坐标转换为 Canvas 坐标
 * @param {number} lat - 纬度
 * @param {number} lon - 经度
 * @returns {object} { x, y } Canvas 坐标
 */
export function gpsToCanvas(lat, lon) {
  const usableWidth = CANVAS_CONFIG.width - CANVAS_CONFIG.padding * 2;
  const usableHeight = CANVAS_CONFIG.height - CANVAS_CONFIG.padding * 2;

  const x = CANVAS_CONFIG.padding +
    ((lon - GPS_BOUNDS.minLon) / (GPS_BOUNDS.maxLon - GPS_BOUNDS.minLon)) * usableWidth;

  const y = CANVAS_CONFIG.padding +
    ((GPS_BOUNDS.maxLat - lat) / (GPS_BOUNDS.maxLat - GPS_BOUNDS.minLat)) * usableHeight;

  return {
    x: Math.round(x),
    y: Math.round(y)
  };
}

/**
 * 将数组中的所有点从 GPS 转换为 Canvas 坐标
 * @param {array} points - 包含 lat, lon 的点数组
 * @returns {array} 转换后的点数组（保留原字段并添加 x, y）
 */
export function convertPoints(points) {
  return points.map(p => {
    const { x, y } = gpsToCanvas(p.lat, p.lon);
    return { ...p, x, y };
  });
}

/**
 * 设置自定义 GPS 边界（用于调试或不同区域）
 * @param {object} bounds - { minLat, maxLat, minLon, maxLon }
 */
export function setGPSBounds(bounds) {
  Object.assign(GPS_BOUNDS, bounds);
}

/**
 * 获取当前 GPS 边界配置
 * @returns {object} 当前边界配置
 */
export function getGPSBounds() {
  return { ...GPS_BOUNDS };
}

export { GPS_BOUNDS, CANVAS_CONFIG };