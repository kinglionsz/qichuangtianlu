/**
 * 轨迹数据合并器 v3 - km距离匹配 + 正确转移元数据
 * 策略:
 * - 每个新GPX点用 km 匹配到最近的旧waypoint → 继承其 elev/name/road/isCheck/challenge
 * - checkpoints/challengePoints/maxElevPoint 用 km 匹配更新坐标
 */
const fs = require('fs');
const path = require('path');

// ── GPX 解析 ──────────────────────────────────────────────────────────
const gpxContent = fs.readFileSync(path.join(__dirname, '1041365gpx.txt'), 'utf8');
const trkptRegex = /<trkpt lat="([^"]+)" lon="([^"]+)">\s*<time>([^<]+)Z?<\/time>/g;
const gpxPoints = [];
let m;
while ((m = trkptRegex.exec(gpxContent)) !== null) gpxPoints.push({ lat: parseFloat(m[1]), lon: parseFloat(m[2]) });

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371000, dLat = (lat2-lat1)*Math.PI/180, dLon = (lon2-lon1)*Math.PI/180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

const CW=1100, CH=770, OX=160, OY=60, MX=40, MY=40;
let minLat=Infinity,maxLat=-Infinity,minLon=Infinity,maxLon=-Infinity;
for(const p of gpxPoints){if(p.lat<minLat)minLat=p.lat;if(p.lat>maxLat)maxLat=p.lat;if(p.lon<minLon)minLon=p.lon;if(p.lon>maxLon)maxLon=p.lon;}
const scale=Math.min((CW-2*MX)/(maxLon-minLon),(CH-2*MY)/(maxLat-minLat));

const SAMPLE=10, sampledGpx=[]; let dist=0;
for(let i=0;i<gpxPoints.length;i+=SAMPLE){
  const p=gpxPoints[i];
  if(i>0) dist+=haversine(gpxPoints[i-SAMPLE].lat,gpxPoints[i-SAMPLE].lon,p.lat,p.lon);
  sampledGpx.push({x:Math.round(MX+(p.lon-minLon)*scale+OX),y:Math.round(CH-MY-(p.lat-minLat)*scale+OY),km:dist/1000,lat:p.lat,lon:p.lon});
}
const TOTAL_KM = dist/1000;
console.log(`GPX: ${gpxPoints.length}pt -> ${sampledGpx.length} sampled, ${TOTAL_KM.toFixed(2)}km, 范围: ${(maxLat-minLat).toFixed(4)}°x${(maxLon-minLon).toFixed(4)}°`);

// ── 读取原文件 ─────────────────────────────────────────────────────────
const old = fs.readFileSync(path.join(__dirname, 'src/js/trajectoryData.js'), 'utf8');

// 解析 checkpoints 数组
const checkpoints = [];
const cpRe = /export const checkpoints = \[\s*([\s\S]*?)\];/;
const cpMatch = cpRe.exec(old);
if (cpMatch && cpMatch[1].trim()) {
  const entryRe = /\{\s*name:\s*'([^']+)',\s*km:\s*([0-9.]+),\s*elev:\s*([0-9.]+),\s*color:\s*'([^']+)'/g;
  let em;
  while ((em = entryRe.exec(cpMatch[1])) !== null) checkpoints.push({name:em[1],km:parseFloat(em[2]),elev:parseFloat(em[3]),color:em[4]});
}

// 解析 challengePoints 数组
const challengePoints = [];
const chalRe = /export const challengePoints = \[\s*([\s\S]*?)\];/;
const chalMatch = chalRe.exec(old);
if (chalMatch && chalMatch[1].trim()) {
  const entryRe = /\{\s*name:\s*'([^']+)',\s*km:\s*([0-9.]+),\s*elev:\s*([0-9.]+)[,\s]*\}/g;
  let em;
  while ((em = entryRe.exec(chalMatch[1])) !== null) challengePoints.push({name:em[1],km:parseFloat(em[2]),elev:parseFloat(em[3])});
}

// maxElevPoint
const maxRe = /export const maxElevPoint = \{[\s\S]*?name:\s*'([^']+)'[\s\S]*?km:\s*([0-9.]+)[\s\S]*?elev:\s*([0-9.]+)/;
const maxMatch = maxRe.exec(old);
const maxElevName = maxMatch ? maxMatch[1] : '径心水库';
const maxElevKm = maxMatch ? parseFloat(maxMatch[2]) : 113;
const maxElevElev = maxMatch ? parseFloat(maxMatch[3]) : 265;

// ── 解析 waypoints 逐对象 ───────────────────────────────────────────────
const wpStart = old.indexOf('export const waypoints');
const wpEndIdx = old.indexOf('];', wpStart);
const wpBlock = old.substring(wpStart, wpEndIdx + 2);

const oldWaypoints = [];
let inObj = false, objStart = 0, depth = 0;
for (let i = 0; i < wpBlock.length; i++) {
  const ch = wpBlock[i];
  if (ch === '{' && !inObj) { inObj = true; objStart = i; depth = 1; }
  else if (ch === '{' && inObj) depth++;
  else if (ch === '}' && inObj) {
    depth--;
    if (depth === 0) {
      const objStr = wpBlock.substring(objStart, i + 1);
      const nameM = /name:\s*'([^']+)'/.exec(objStr);
      const kmM = /km:\s*([0-9.]+)/.exec(objStr);
      const elevM = /elev:\s*([0-9.]+)/.exec(objStr);
      const isCheckM = /isCheck:\s*(\d+)/.exec(objStr);
      const roadM = /road:\s*'([^']*)'/.exec(objStr);
      const checkNameM = /checkName:\s*'([^']+)'/.exec(objStr);
      const challengeM = /challenge:\s*true/.exec(objStr);
      if (nameM && kmM && elevM) {
        oldWaypoints.push({
          name: nameM[1], km: parseFloat(kmM[1]), elev: parseFloat(elevM[1]),
          isCheck: isCheckM ? parseInt(isCheckM[1]) : 0,
          road: roadM ? roadM[1] : '',
          checkName: checkNameM ? checkNameM[1] : '',
          challenge: !!challengeM
        });
      }
      inObj = false;
    }
  }
}
console.log(`旧waypoints: ${oldWaypoints.length}, checkpoints: ${checkpoints.length}, challenges: ${challengePoints.length}`);

// ── km 最近匹配 ────────────────────────────────────────────────────────
function nearestOld(km) {
  let best = null, bestDiff = Infinity;
  for (const wp of oldWaypoints) {
    const d = Math.abs(wp.km - km);
    if (d < bestDiff) { bestDiff = d; best = wp; }
  }
  return best;
}

function nearestGpxByKm(km) {
  let best = null, bestDiff = Infinity;
  for (const p of sampledGpx) {
    const d = Math.abs(p.km - km);
    if (d < bestDiff) { bestDiff = d; best = p; }
  }
  return best;
}

// ── 合并 waypoints ─────────────────────────────────────────────────────
// 关键: 跟踪上一个匹配的waypoint，避免重复assignments
// 当km增加时，才更新"当前"匹配
let lastMatchedOld = null;
const mergedWaypoints = sampledGpx.map((gp, idx) => {
  const isFirst = idx === 0, isLast = idx === sampledGpx.length - 1;
  const nearest = nearestOld(gp.km);
  if (nearest && (!lastMatchedOld || nearest.km !== lastMatchedOld.km)) {
    lastMatchedOld = nearest;
  }
  return {
    x: gp.x, y: gp.y, km: parseFloat(gp.km.toFixed(2)),
    elev: lastMatchedOld ? lastMatchedOld.elev : 0,
    name: lastMatchedOld ? lastMatchedOld.name : '',
    road: lastMatchedOld ? (lastMatchedOld.road || (isFirst ? '起点' : isLast ? '终点' : '')) : (isFirst ? '起点' : isLast ? '终点' : ''),
    isCheck: lastMatchedOld ? lastMatchedOld.isCheck : 0,
    checkName: lastMatchedOld ? lastMatchedOld.checkName : '',
    challenge: lastMatchedOld ? lastMatchedOld.challenge : false,
    lat: gp.lat, lon: gp.lon
  };
});

// checkpoints 坐标更新
const mergedCheckpoints = checkpoints.map(cp => {
  const gp = nearestGpxByKm(cp.km);
  return { ...cp, lat: gp ? gp.lat : 0, lon: gp ? gp.lon : 0 };
});

// challengePoints 坐标更新
const mergedChallengePoints = challengePoints.map(cp => {
  const gp = nearestGpxByKm(cp.km);
  return { ...cp, lat: gp ? gp.lat : 0, lon: gp ? gp.lon : 0 };
});

// maxElevPoint
const maxElevGpx = nearestGpxByKm(maxElevKm);
const MAX_ELEV = Math.max(...mergedWaypoints.map(p => p.elev));

// ── 验证关键点 ────────────────────────────────────────────────────────
console.log(`\n关键点验证:`);
console.log(`  km 0 -> name: ${mergedWaypoints[0].name}, elev: ${mergedWaypoints[0].elev}`);
const km10 = mergedWaypoints.find(p => Math.abs(p.km - 10) < 0.5);
if (km10) console.log(`  km 10 -> name: ${km10.name}, elev: ${km10.elev}`);
const km36 = mergedWaypoints.find(p => Math.abs(p.km - 36) < 0.5);
if (km36) console.log(`  km 36 (鹅公湾) -> name: ${km36 ? km36.name : 'NOT FOUND'}, isCheck: ${km36 ? km36.isCheck : 'N/A'}`);
const km57 = mergedWaypoints.find(p => Math.abs(p.km - 57) < 0.5);
if (km57) console.log(`  km 57 (西涌) -> name: ${km57 ? km57.name : 'NOT FOUND'}, isCheck: ${km57 ? km57.isCheck : 'N/A'}`);

// ── 生成 JS ────────────────────────────────────────────────────────────
const genWp = () => mergedWaypoints.map((p, i) => {
  const isFirst = i === 0, isLast = i === mergedWaypoints.length - 1;
  const parts = [`x: ${p.x}`, `y: ${p.y}`, `km: ${p.km}`, `elev: ${p.elev}`];
  if (p.name) parts.push(`name: '${p.name}'`);
  if (p.isCheck) parts.push(`isCheck: ${p.isCheck}`);
  if (p.checkName) parts.push(`checkName: '${p.checkName}'`);
  if (p.challenge) parts.push(`challenge: true`);
  if (p.road) parts.push(`road: '${p.road}'`);
  parts.push(`lat: ${p.lat}`, `lon: ${p.lon}`);
  return `  { ${parts.join(', ')} }`;
}).join(',\n');

const genCp = () => mergedCheckpoints.map(cp => `  { name: '${cp.name}', km: ${cp.km}, elev: ${cp.elev}, color: '${cp.color}', lat: ${cp.lat}, lon: ${cp.lon }`).join(',\n');
const genChal = () => mergedChallengePoints.length ? mergedChallengePoints.map(cp => `  { name: '${cp.name}', km: ${cp.km}, elev: ${cp.elev}, lat: ${cp.lat}, lon: ${cp.lon} }`).join(',\n') : '  { name: \'无虐点数据\', km: 0, elev: 0, lat: 0, lon: 0 }';

const out = `/**
 * 骑行轨迹数据 - 合并版本
 * 几何: GPX 真实 GPS (1041365gpx.txt) | 元数据: 原有路书
 * 活动时间: 2017-04-19 | 总距离: ${TOTAL_KM.toFixed(2)} km
 */

export const coastPts = [
  { x: 304, y: 100 }, { x: 400, y: 70 }, { x: 500, y: 60 }, { x: 700, y: 60 }, { x: 904, y: 110 },
  { x: 944, y: 140 }, { x: 976, y: 200 }, { x: 1000, y: 280 }, { x: 1024, y: 360 },
  { x: 1008, y: 440 }, { x: 968, y: 510 }, { x: 896, y: 560 },
  { x: 792, y: 580 }, { x: 656, y: 600 }, { x: 500, y: 600 }, { x: 350, y: 580 },
  { x: 200, y: 550 }, { x: 100, y: 520 }, { x: 50, y: 500 },
  { x: 40, y: 400 }, { x: 50, y: 300 }, { x: 80, y: 200 }, { x: 150, y: 130 },
  { x: 250, y: 90 }, { x: 304, y: 100 },
];

export const waypoints = [
${genWp()}
];

export const checkpoints = [
${genCp()}
];

export const challengePoints = [
${genChal()}
];

export const maxElevPoint = {
  name: '${maxElevName}',
  km: ${maxElevGpx ? maxElevGpx.km.toFixed(2) : maxElevKm},
  elev: ${maxElevElev},
  lat: ${maxElevGpx ? maxElevGpx.lat : 0},
  lon: ${maxElevGpx ? maxElevGpx.lon : 0}
};

export const TOTAL_KM = ${TOTAL_KM.toFixed(2)};
export const MAX_ELEV = ${MAX_ELEV};
`;

fs.writeFileSync(path.join(__dirname, 'src/js/trajectoryData.js'), out, 'utf8');
console.log(`\n✅ 已写入 trajectoryData.js`);
console.log(`\n统计: 总km=${TOTAL_KM.toFixed(2)}, 点=${mergedWaypoints.length}, 有name=${mergedWaypoints.filter(p=>p.name).length}, isCheck=${mergedWaypoints.filter(p=>p.isCheck).length}, challenge=${mergedWaypoints.filter(p=>p.challenge).length}`);
