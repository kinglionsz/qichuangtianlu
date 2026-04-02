/**
 * 轨迹数据加载模块
 * 使用与部署版本相同的完整 waypoints 数据
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

// 打卡点 - 从 waypoints 提取
const waypointsFull = [
  {x:144,y:96,name:"满京华艺术村",km:0,elev:35,isCheck:1},
  {x:176,y:124,name:"葵鹏路",km:2,elev:42},
  {x:216,y:156,name:"葵涌",km:5,elev:58},
  {x:256,y:192,name:"迭福路",km:8,elev:108},
  {x:296,y:228,name:"S360",km:11,elev:152},
  {x:336,y:256,name:"S360南",km:13,elev:130},
  {x:304,y:296,name:"迎宾路",km:16,elev:95},
  {x:264,y:328,name:"葵南路",km:18,elev:62},
  {x:224,y:360,name:"水头路",km:21,elev:38},
  {x:184,y:392,name:"坪西路",km:24,elev:28},
  {x:148,y:420,name:"海滨北路",km:27,elev:22},
  {x:124,y:440,name:"同富路",km:30,elev:25},
  {x:100,y:408,name:"富民路",km:33,elev:55,challenge:true},
  {x:76,y:388,name:"鹅公湾",km:36,elev:12,isCheck:2},
  {x:100,y:408,name:"富民路返",km:39,elev:55},
  {x:124,y:440,name:"同富路",km:41,elev:25},
  {x:108,y:460,name:"南西公路",km:44,elev:48},
  {x:92,y:480,name:"S359沿海",km:47,elev:75},
  {x:80,y:500,name:"南西公路",km:50,elev:55},
  {x:72,y:524,name:"西涌入口",km:53,elev:35},
  {x:68,y:544,name:"西涌",km:57,elev:8,isCheck:3},
  {x:72,y:520,name:"西涌返程",km:60,elev:45,challenge:true},
  {x:88,y:496,name:"新丰路",km:62,elev:52},
  {x:104,y:472,name:"南澳社区",km:64,elev:48},
  {x:128,y:448,name:"东西涌路口",km:66,elev:42},
  {x:160,y:424,name:"新大路北",km:68,elev:38},
  {x:208,y:400,name:"新大村",km:70,elev:32},
  {x:272,y:376,name:"新大市场",km:72,elev:28},
  {x:336,y:352,name:"新东路",km:75,elev:22},
  {x:400,y:328,name:"东山码头",km:78,elev:18},
  {x:480,y:304,name:"桔钓沙",km:81,elev:15},
  {x:560,y:284,name:"鹿嘴山庄",km:83,elev:12},
  {x:624,y:272,name:"杨梅坑",km:84,elev:12,isCheck:4},
  {x:624,y:248,name:"杨梅坑返",km:87,elev:18},
  {x:576,y:224,name:"新大路西",km:90,elev:35},
  {x:520,y:208,name:"葵南路",km:93,elev:55},
  {x:464,y:200,name:"迎宾路",km:96,elev:75},
  {x:408,y:188,name:"S360",km:99,elev:95},
  {x:360,y:168,name:"迭福路",km:102,elev:118},
  {x:320,y:140,name:"葵鹏路",km:105,elev:88},
  {x:384,y:120,name:"金业大道",km:107,elev:75},
  {x:448,y:104,name:"银葵路",km:109,elev:70},
  {x:520,y:92,name:"葵坝公路",km:111,elev:95},
  {x:584,y:104,name:"径心水库",km:113,elev:265,challenge:true},
  {x:640,y:92,name:"坝核公路",km:115,elev:210},
  {x:704,y:76,name:"坝核公路北",km:118,elev:170},
  {x:760,y:64,name:"坝光",km:120,elev:145,isCheck:5},
  {x:720,y:76,name:"坝光返程",km:122,elev:155},
  {x:648,y:92,name:"径心水库返",km:124,elev:265,challenge:true},
  {x:576,y:104,name:"葵坝公路",km:126,elev:120},
  {x:504,y:116,name:"银葵路",km:128,elev:72},
  {x:432,y:132,name:"金业大道",km:129,elev:65},
  {x:360,y:148,name:"葵鹏路",km:130,elev:50},
  {x:280,y:128,name:"葵鹏路北",km:131,elev:42},
  {x:144,y:96,name:"满京华终点",km:131.4,elev:35,isCheck:6}
];

// 导出完整 waypoints
export const waypoints = waypointsFull;

// 打卡点
export const checkpoints = waypointsFull.filter(p => p.isCheck).map(p => ({
  km: p.km,
  name: p.name,
  elev: p.elev,
  color: p.km === 0 || p.km === 131.4 ? '#00f0ff' : '#ff00ff',
  x: p.x,
  y: p.y,
  type: p.km === 0 ? 'start' : p.km === 131.4 ? 'end' : 'checkpoint'
}));

// 一级虐点
export const challengePoints = [
  { km: 33, name: '富民路', elev: 55, x: 100, y: 408 },
  { km: 60, name: '西涌返程', elev: 45, x: 72, y: 520 },
  { km: 113, name: '径心水库', elev: 265, x: 584, y: 104 },
  { km: 124, name: '径心水库返', elev: 265, x: 648, y: 92 }
];

// 最高海拔点
export const maxElevPoint = { km: 113, elev: 265, name: '径心水库', x: 584, y: 104 };

// 海岸线点
export const coastPts = routeData.coastline.map(p => ({
  x: p.x,
  y: p.y
}));

// 元数据
export const TOTAL_KM = 131.4;
export const MAX_ELEV = 300;
export const ROUTE_BOOK_ID = '#1387571';