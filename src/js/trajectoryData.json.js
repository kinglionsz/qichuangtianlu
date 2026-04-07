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
// P1-2: 添加边界检查，防止空数组导致崩溃
function findNearestPoint(km) {
  if (!trajectoryPts || trajectoryPts.length === 0) {
    console.error('[trajectoryData] trajectoryPts 为空，返回默认值');
    return { km: 0, x: 331, y: 179, elev: 35 };  // 起点默认值
  }
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

// P1-3: 预排序的海拔数据，避免每次调用都排序
// 使用 route-995778.json 原始路书数据（checkpoints + challengePoints）
const ELEVATION_BASE_POINTS = [
  // checkpoints
  { km: 0, elev: 35 },
  { km: 22.21, elev: 12 },
  { km: 44.40, elev: 8 },
  { km: 66.47, elev: 12 },
  { km: 110.70, elev: 145 },
  { km: 132.86, elev: 35 },
  // 一级虐点（从 route-995778.json 原始数据）
  { km: 33.43, elev: 55 },   // 富民路
  { km: 60.76, elev: 45 },   // 西涌返
  { km: 99.60, elev: 265 },  // 径心水库
  { km: 121.80, elev: 265 }  // 径心水库返
].sort((a, b) => a.km - b.km);  // 模块加载时排序一次

// 从 checkpoints + challengePoints 数据获取海拔插值
// P1-3: 使用预排序数据，避免重复排序
function getInterpolatedElevation(km) {
  if (km <= ELEVATION_BASE_POINTS[0].km) return ELEVATION_BASE_POINTS[0].elev;
  if (km >= ELEVATION_BASE_POINTS[ELEVATION_BASE_POINTS.length - 1].km) {
    return ELEVATION_BASE_POINTS[ELEVATION_BASE_POINTS.length - 1].elev;
  }

  let left = ELEVATION_BASE_POINTS[0], right = ELEVATION_BASE_POINTS[ELEVATION_BASE_POINTS.length - 1];
  for (let i = 0; i < ELEVATION_BASE_POINTS.length - 1; i++) {
    if (ELEVATION_BASE_POINTS[i].km <= km && ELEVATION_BASE_POINTS[i + 1].km >= km) {
      left = ELEVATION_BASE_POINTS[i];
      right = ELEVATION_BASE_POINTS[i + 1];
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

// 一级虐点（从 route-995778.json 原始路书数据导入）
export const challengePoints = routeData.challengePoints.map(cp => {
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

// P1-1: 预计算的 elevationPoints（133个采样点）
// 通过 node scripts/generate-elevation.cjs 生成，避免运行时计算
// P1-3: 使用预排序数据，避免重复排序
export const elevationPoints = [
  {
    "km": 0,
    "x": 331,
    "y": 179,
    "elev": 35
  },
  {
    "km": 1,
    "x": 330,
    "y": 204,
    "elev": 34
  },
  {
    "km": 2,
    "x": 339,
    "y": 223,
    "elev": 33
  },
  {
    "km": 3,
    "x": 359,
    "y": 240,
    "elev": 32
  },
  {
    "km": 4,
    "x": 377,
    "y": 240,
    "elev": 31
  },
  {
    "km": 5,
    "x": 403,
    "y": 219,
    "elev": 30
  },
  {
    "km": 6,
    "x": 420,
    "y": 205,
    "elev": 29
  },
  {
    "km": 7,
    "x": 449,
    "y": 217,
    "elev": 28
  },
  {
    "km": 8,
    "x": 465,
    "y": 231,
    "elev": 27
  },
  {
    "km": 9,
    "x": 477,
    "y": 250,
    "elev": 26
  },
  {
    "km": 10,
    "x": 488,
    "y": 277,
    "elev": 25
  },
  {
    "km": 11,
    "x": 508,
    "y": 300,
    "elev": 24
  },
  {
    "km": 12,
    "x": 505,
    "y": 317,
    "elev": 23
  },
  {
    "km": 13,
    "x": 491,
    "y": 330,
    "elev": 22
  },
  {
    "km": 14,
    "x": 478,
    "y": 359,
    "elev": 21
  },
  {
    "km": 15,
    "x": 494,
    "y": 385,
    "elev": 19
  },
  {
    "km": 16,
    "x": 502,
    "y": 399,
    "elev": 18
  },
  {
    "km": 17,
    "x": 500,
    "y": 418,
    "elev": 17
  },
  {
    "km": 18,
    "x": 489,
    "y": 441,
    "elev": 16
  },
  {
    "km": 19,
    "x": 479,
    "y": 463,
    "elev": 15
  },
  {
    "km": 20,
    "x": 480,
    "y": 479,
    "elev": 14
  },
  {
    "km": 21,
    "x": 498,
    "y": 488,
    "elev": 13
  },
  {
    "km": 22,
    "x": 515,
    "y": 507,
    "elev": 12
  },
  {
    "km": 23,
    "x": 527,
    "y": 533,
    "elev": 15
  },
  {
    "km": 24,
    "x": 512,
    "y": 537,
    "elev": 19
  },
  {
    "km": 25,
    "x": 514,
    "y": 538,
    "elev": 23
  },
  {
    "km": 26,
    "x": 526,
    "y": 530,
    "elev": 27
  },
  {
    "km": 27,
    "x": 516,
    "y": 513,
    "elev": 30
  },
  {
    "km": 28,
    "x": 501,
    "y": 493,
    "elev": 34
  },
  {
    "km": 29,
    "x": 478,
    "y": 478,
    "elev": 38
  },
  {
    "km": 30,
    "x": 481,
    "y": 461,
    "elev": 42
  },
  {
    "km": 31,
    "x": 489,
    "y": 438,
    "elev": 46
  },
  {
    "km": 32,
    "x": 501,
    "y": 422,
    "elev": 50
  },
  {
    "km": 33,
    "x": 499,
    "y": 406,
    "elev": 53
  },
  {
    "km": 34,
    "x": 515,
    "y": 386,
    "elev": 53
  },
  {
    "km": 35,
    "x": 539,
    "y": 406,
    "elev": 48
  },
  {
    "km": 36,
    "x": 551,
    "y": 421,
    "elev": 44
  },
  {
    "km": 37,
    "x": 564,
    "y": 436,
    "elev": 40
  },
  {
    "km": 38,
    "x": 581,
    "y": 456,
    "elev": 35
  },
  {
    "km": 39,
    "x": 599,
    "y": 467,
    "elev": 31
  },
  {
    "km": 40,
    "x": 612,
    "y": 484,
    "elev": 27
  },
  {
    "km": 41,
    "x": 628,
    "y": 493,
    "elev": 23
  },
  {
    "km": 42,
    "x": 640,
    "y": 516,
    "elev": 18
  },
  {
    "km": 43,
    "x": 631,
    "y": 532,
    "elev": 14
  },
  {
    "km": 44,
    "x": 611,
    "y": 555,
    "elev": 10
  },
  {
    "km": 45,
    "x": 599,
    "y": 585,
    "elev": 9
  },
  {
    "km": 46,
    "x": 611,
    "y": 597,
    "elev": 12
  },
  {
    "km": 47,
    "x": 612,
    "y": 600,
    "elev": 14
  },
  {
    "km": 48,
    "x": 600,
    "y": 590,
    "elev": 16
  },
  {
    "km": 49,
    "x": 603,
    "y": 569,
    "elev": 18
  },
  {
    "km": 50,
    "x": 621,
    "y": 546,
    "elev": 21
  },
  {
    "km": 51,
    "x": 634,
    "y": 531,
    "elev": 23
  },
  {
    "km": 52,
    "x": 638,
    "y": 507,
    "elev": 25
  },
  {
    "km": 53,
    "x": 615,
    "y": 489,
    "elev": 27
  },
  {
    "km": 54,
    "x": 613,
    "y": 477,
    "elev": 30
  },
  {
    "km": 55,
    "x": 587,
    "y": 460,
    "elev": 32
  },
  {
    "km": 56,
    "x": 572,
    "y": 445,
    "elev": 34
  },
  {
    "km": 57,
    "x": 554,
    "y": 427,
    "elev": 36
  },
  {
    "km": 58,
    "x": 548,
    "y": 410,
    "elev": 39
  },
  {
    "km": 59,
    "x": 569,
    "y": 399,
    "elev": 41
  },
  {
    "km": 60,
    "x": 572,
    "y": 382,
    "elev": 43
  },
  {
    "km": 61,
    "x": 585,
    "y": 367,
    "elev": 44
  },
  {
    "km": 62,
    "x": 601,
    "y": 358,
    "elev": 38
  },
  {
    "km": 63,
    "x": 624,
    "y": 337,
    "elev": 32
  },
  {
    "km": 64,
    "x": 649,
    "y": 337,
    "elev": 26
  },
  {
    "km": 65,
    "x": 668,
    "y": 334,
    "elev": 20
  },
  {
    "km": 66,
    "x": 700,
    "y": 336,
    "elev": 15
  },
  {
    "km": 67,
    "x": 717,
    "y": 348,
    "elev": 16
  },
  {
    "km": 68,
    "x": 710,
    "y": 342,
    "elev": 24
  },
  {
    "km": 69,
    "x": 688,
    "y": 334,
    "elev": 31
  },
  {
    "km": 70,
    "x": 657,
    "y": 337,
    "elev": 39
  },
  {
    "km": 71,
    "x": 635,
    "y": 334,
    "elev": 47
  },
  {
    "km": 72,
    "x": 606,
    "y": 348,
    "elev": 54
  },
  {
    "km": 73,
    "x": 596,
    "y": 365,
    "elev": 62
  },
  {
    "km": 74,
    "x": 563,
    "y": 372,
    "elev": 70
  },
  {
    "km": 75,
    "x": 544,
    "y": 361,
    "elev": 77
  },
  {
    "km": 76,
    "x": 532,
    "y": 335,
    "elev": 85
  },
  {
    "km": 77,
    "x": 513,
    "y": 310,
    "elev": 92
  },
  {
    "km": 78,
    "x": 503,
    "y": 295,
    "elev": 100
  },
  {
    "km": 79,
    "x": 489,
    "y": 278,
    "elev": 108
  },
  {
    "km": 80,
    "x": 478,
    "y": 250,
    "elev": 115
  },
  {
    "km": 81,
    "x": 466,
    "y": 231,
    "elev": 123
  },
  {
    "km": 82,
    "x": 443,
    "y": 214,
    "elev": 131
  },
  {
    "km": 83,
    "x": 421,
    "y": 205,
    "elev": 138
  },
  {
    "km": 84,
    "x": 396,
    "y": 224,
    "elev": 146
  },
  {
    "km": 85,
    "x": 371,
    "y": 245,
    "elev": 154
  },
  {
    "km": 86,
    "x": 352,
    "y": 241,
    "elev": 161
  },
  {
    "km": 87,
    "x": 335,
    "y": 216,
    "elev": 169
  },
  {
    "km": 88,
    "x": 329,
    "y": 197,
    "elev": 176
  },
  {
    "km": 89,
    "x": 338,
    "y": 170,
    "elev": 184
  },
  {
    "km": 90,
    "x": 339,
    "y": 152,
    "elev": 192
  },
  {
    "km": 91,
    "x": 312,
    "y": 156,
    "elev": 199
  },
  {
    "km": 92,
    "x": 319,
    "y": 138,
    "elev": 207
  },
  {
    "km": 93,
    "x": 339,
    "y": 134,
    "elev": 215
  },
  {
    "km": 94,
    "x": 359,
    "y": 131,
    "elev": 222
  },
  {
    "km": 95,
    "x": 380,
    "y": 129,
    "elev": 230
  },
  {
    "km": 96,
    "x": 401,
    "y": 122,
    "elev": 238
  },
  {
    "km": 97,
    "x": 421,
    "y": 124,
    "elev": 245
  },
  {
    "km": 98,
    "x": 448,
    "y": 110,
    "elev": 253
  },
  {
    "km": 99,
    "x": 480,
    "y": 103,
    "elev": 260
  },
  {
    "km": 100,
    "x": 500,
    "y": 99,
    "elev": 261
  },
  {
    "km": 101,
    "x": 509,
    "y": 82,
    "elev": 250
  },
  {
    "km": 102,
    "x": 529,
    "y": 92,
    "elev": 239
  },
  {
    "km": 103,
    "x": 556,
    "y": 85,
    "elev": 228
  },
  {
    "km": 104,
    "x": 586,
    "y": 74,
    "elev": 217
  },
  {
    "km": 105,
    "x": 609,
    "y": 67,
    "elev": 207
  },
  {
    "km": 106,
    "x": 634,
    "y": 72,
    "elev": 196
  },
  {
    "km": 107,
    "x": 667,
    "y": 73,
    "elev": 185
  },
  {
    "km": 108,
    "x": 688,
    "y": 67,
    "elev": 174
  },
  {
    "km": 109,
    "x": 708,
    "y": 65,
    "elev": 163
  },
  {
    "km": 110,
    "x": 741,
    "y": 60,
    "elev": 153
  },
  {
    "km": 111,
    "x": 744,
    "y": 60,
    "elev": 148
  },
  {
    "km": 112,
    "x": 723,
    "y": 65,
    "elev": 159
  },
  {
    "km": 113,
    "x": 693,
    "y": 68,
    "elev": 170
  },
  {
    "km": 114,
    "x": 672,
    "y": 74,
    "elev": 181
  },
  {
    "km": 115,
    "x": 651,
    "y": 77,
    "elev": 191
  },
  {
    "km": 116,
    "x": 616,
    "y": 66,
    "elev": 202
  },
  {
    "km": 117,
    "x": 599,
    "y": 74,
    "elev": 213
  },
  {
    "km": 118,
    "x": 570,
    "y": 82,
    "elev": 224
  },
  {
    "km": 119,
    "x": 544,
    "y": 85,
    "elev": 235
  },
  {
    "km": 120,
    "x": 519,
    "y": 92,
    "elev": 246
  },
  {
    "km": 121,
    "x": 507,
    "y": 88,
    "elev": 256
  },
  {
    "km": 122,
    "x": 484,
    "y": 102,
    "elev": 261
  },
  {
    "km": 123,
    "x": 457,
    "y": 111,
    "elev": 240
  },
  {
    "km": 124,
    "x": 436,
    "y": 118,
    "elev": 219
  },
  {
    "km": 125,
    "x": 416,
    "y": 122,
    "elev": 198
  },
  {
    "km": 126,
    "x": 386,
    "y": 124,
    "elev": 178
  },
  {
    "km": 127,
    "x": 364,
    "y": 131,
    "elev": 157
  },
  {
    "km": 128,
    "x": 347,
    "y": 123,
    "elev": 136
  },
  {
    "km": 129,
    "x": 329,
    "y": 134,
    "elev": 115
  },
  {
    "km": 130,
    "x": 316,
    "y": 148,
    "elev": 94
  },
  {
    "km": 131,
    "x": 321,
    "y": 151,
    "elev": 74
  },
  {
    "km": 132,
    "x": 342,
    "y": 160,
    "elev": 53
  }
];