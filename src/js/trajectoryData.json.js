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
const ELEVATION_BASE_POINTS = [
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

// P1-1: 预计算的 elevationPoints（133个采样点）
// 通过 node scripts/generate-elevation.cjs 生成，避免运行时计算
// P1-3: 使用预排序数据，避免重复排序
export const elevationPoints = [
  {"km":0,"x":331,"y":179,"elev":35},
  {"km":1,"x":330,"y":204,"elev":42},
  {"km":2,"x":339,"y":223,"elev":49},
  {"km":3,"x":359,"y":240,"elev":56},
  {"km":4,"x":377,"y":249,"elev":63},
  {"km":5,"x":396,"y":258,"elev":70},
  {"km":6,"x":415,"y":267,"elev":77},
  {"km":7,"x":433,"y":276,"elev":84},
  {"km":8,"x":452,"y":285,"elev":91},
  {"km":9,"x":470,"y":293,"elev":98},
  {"km":10,"x":489,"y":302,"elev":105},
  {"km":11,"x":507,"y":299,"elev":112},
  {"km":12,"x":515,"y":296,"elev":119},
  {"km":13,"x":517,"y":297,"elev":128},
  {"km":14,"x":517,"y":301,"elev":140},
  {"km":15,"x":516,"y":308,"elev":153},
  {"km":16,"x":515,"y":318,"elev":165},
  {"km":17,"x":513,"y":328,"elev":175},
  {"km":18,"x":511,"y":338,"elev":183},
  {"km":19,"x":509,"y":347,"elev":186},
  {"km":20,"x":508,"y":355,"elev":185},
  {"km":21,"x":507,"y":361,"elev":185},
  {"km":22,"x":514,"y":511,"elev":12},
  {"km":23,"x":521,"y":524,"elev":14},
  {"km":24,"x":517,"y":531,"elev":18},
  {"km":25,"x":512,"y":534,"elev":26},
  {"km":26,"x":511,"y":529,"elev":38},
  {"km":27,"x":509,"y":519,"elev":54},
  {"km":28,"x":501,"y":507,"elev":74},
  {"km":29,"x":489,"y":493,"elev":98},
  {"km":30,"x":479,"y":480,"elev":124},
  {"km":31,"x":475,"y":466,"elev":150},
  {"km":32,"x":478,"y":452,"elev":172},
  {"km":33,"x":487,"y":441,"elev":189},
  {"km":34,"x":499,"y":432,"elev":195},
  {"km":35,"x":511,"y":424,"elev":193},
  {"km":36,"x":523,"y":417,"elev":185},
  {"km":37,"x":534,"y":411,"elev":172},
  {"km":38,"x":545,"y":406,"elev":156},
  {"km":39,"x":554,"y":401,"elev":142},
  {"km":40,"x":561,"y":397,"elev":131},
  {"km":41,"x":566,"y":393,"elev":123},
  {"km":42,"x":569,"y":390,"elev":118},
  {"km":43,"x":570,"y":387,"elev":115},
  {"km":44,"x":570,"y":384,"elev":113},
  {"km":45,"x":569,"y":382,"elev":111},
  {"km":46,"x":568,"y":380,"elev":109},
  {"km":47,"x":566,"y":378,"elev":107},
  {"km":48,"x":565,"y":376,"elev":105},
  {"km":49,"x":563,"y":374,"elev":103},
  {"km":50,"x":562,"y":372,"elev":101},
  {"km":51,"x":560,"y":370,"elev":99},
  {"km":52,"x":558,"y":368,"elev":97},
  {"km":53,"x":556,"y":366,"elev":95},
  {"km":54,"x":554,"y":364,"elev":94},
  {"km":55,"x":552,"y":362,"elev":94},
  {"km":56,"x":550,"y":360,"elev":94},
  {"km":57,"x":548,"y":358,"elev":94},
  {"km":58,"x":546,"y":356,"elev":94},
  {"km":59,"x":544,"y":354,"elev":94},
  {"km":60,"x":542,"y":352,"elev":94},
  {"km":61,"x":540,"y":350,"elev":94},
  {"km":62,"x":538,"y":348,"elev":94},
  {"km":63,"x":536,"y":346,"elev":94},
  {"km":64,"x":534,"y":344,"elev":94},
  {"km":65,"x":532,"y":342,"elev":94},
  {"km":66,"x":530,"y":340,"elev":12},
  {"km":67,"x":536,"y":338,"elev":13},
  {"km":68,"x":542,"y":336,"elev":14},
  {"km":69,"x":548,"y":334,"elev":15},
  {"km":70,"x":554,"y":332,"elev":16},
  {"km":71,"x":560,"y":330,"elev":17},
  {"km":72,"x":566,"y":328,"elev":18},
  {"km":73,"x":572,"y":326,"elev":19},
  {"km":74,"x":578,"y":324,"elev":20},
  {"km":75,"x":584,"y":322,"elev":21},
  {"km":76,"x":590,"y":320,"elev":22},
  {"km":77,"x":596,"y":318,"elev":23},
  {"km":78,"x":602,"y":316,"elev":24},
  {"km":79,"x":608,"y":314,"elev":25},
  {"km":80,"x":614,"y":312,"elev":26},
  {"km":81,"x":620,"y":310,"elev":27},
  {"km":82,"x":626,"y":308,"elev":28},
  {"km":83,"x":632,"y":306,"elev":29},
  {"km":84,"x":638,"y":304,"elev":30},
  {"km":85,"x":644,"y":302,"elev":31},
  {"km":86,"x":650,"y":300,"elev":32},
  {"km":87,"x":656,"y":298,"elev":33},
  {"km":88,"x":662,"y":296,"elev":35},
  {"km":89,"x":668,"y":294,"elev":37},
  {"km":90,"x":674,"y":292,"elev":39},
  {"km":91,"x":680,"y":290,"elev":42},
  {"km":92,"x":686,"y":288,"elev":46},
  {"km":93,"x":692,"y":286,"elev":52},
  {"km":94,"x":698,"y":284,"elev":62},
  {"km":95,"x":704,"y":282,"elev":78},
  {"km":96,"x":710,"y":280,"elev":103},
  {"km":97,"x":716,"y":278,"elev":138},
  {"km":98,"x":722,"y":276,"elev":185},
  {"km":99,"x":728,"y":274,"elev":235},
  {"km":100,"x":508,"y":92,"elev":265},
  {"km":101,"x":516,"y":89,"elev":265},
  {"km":102,"x":524,"y":93,"elev":265},
  {"km":103,"x":532,"y":97,"elev":265},
  {"km":104,"x":540,"y":101,"elev":265},
  {"km":105,"x":548,"y":105,"elev":265},
  {"km":106,"x":556,"y":109,"elev":265},
  {"km":107,"x":564,"y":113,"elev":265},
  {"km":108,"x":572,"y":117,"elev":265},
  {"km":109,"x":580,"y":121,"elev":265},
  {"km":110,"x":588,"y":125,"elev":145},
  {"km":111,"x":596,"y":129,"elev":145},
  {"km":112,"x":604,"y":133,"elev":145},
  {"km":113,"x":612,"y":137,"elev":145},
  {"km":114,"x":620,"y":141,"elev":145},
  {"km":115,"x":628,"y":145,"elev":145},
  {"km":116,"x":636,"y":149,"elev":145},
  {"km":117,"x":644,"y":153,"elev":145},
  {"km":118,"x":652,"y":157,"elev":145},
  {"km":119,"x":660,"y":161,"elev":145},
  {"km":120,"x":668,"y":165,"elev":145},
  {"km":121,"x":676,"y":169,"elev":145},
  {"km":122,"x":684,"y":173,"elev":256},
  {"km":123,"x":692,"y":177,"elev":255},
  {"km":124,"x":700,"y":181,"elev":250},
  {"km":125,"x":708,"y":185,"elev":241},
  {"km":126,"x":716,"y":189,"elev":228},
  {"km":127,"x":724,"y":193,"elev":211},
  {"km":128,"x":732,"y":197,"elev":190},
  {"km":129,"x":740,"y":201,"elev":165},
  {"km":130,"x":748,"y":205,"elev":136},
  {"km":131,"x":756,"y":209,"elev":103},
  {"km":132,"x":330,"y":179,"elev":66},
  {"km":133,"x":330,"y":179,"elev":35}
];