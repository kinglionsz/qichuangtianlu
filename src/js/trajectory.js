/**
 * 骑行轨迹 Canvas 渲染引擎
 * 已优化：30fps帧率控制 + 脉冲值缓存
 */
import {
  coastPts, waypoints, trajectoryPts, checkpoints, challengePoints,
  maxElevPoint, TOTAL_KM, MAX_ELEV,
} from './trajectoryData.js';

// ── HUD 常量配置 ───────────────────────────────────────────────
const HUD = {
  ROUTE_BOOK_ID: '#1387571',         // 路书编号
  TOTAL_DISTANCE: 132.86,             // 总里程 (km)
  TOTAL_TIME_MINUTES: 525,           // 总耗时 (分钟)
  LABEL_OFFSET_X: 5,                 // 左侧标签 X 偏移
  LABEL_OFFSET_Y_1: 28,              // 第一行 Y 偏移
  LABEL_OFFSET_Y_2: 42,              // 第二行 Y 偏移
  LABEL_OFFSET_Y_3: 56,              // 第三行 Y 偏移
  VALUE_OFFSET_X: 70,                // 右侧数值 X 偏移
};

// ── Canvas 初始化 ──────────────────────────────────────────────
const canvas = document.getElementById('trajectory-canvas');
const ctx    = canvas.getContext('2d');
const CW = canvas.width;   // 1100
const CH = canvas.height;  // 770

// 轨迹偏移: 整体右移 +160px, 下移 +60px（避免被海拔图遮挡）
const OFFSET_X = 160;
const OFFSET_Y = 60;
const route = waypoints.map(p => ({ ...p, x: p.x + OFFSET_X, y: p.y + OFFSET_Y }));
const N = route.length;

// GPX 高精度轨迹 (333个密集采样点)
const smoothRoute = trajectoryPts.map(p => ({ ...p, x: p.x + OFFSET_X, y: p.y + OFFSET_Y }));
const SN = smoothRoute.length;

// ── 私有状态（封装全局变量）────────────────────────────────────
const _state = {
  progress: 0,
  playing: false,  // 默认暂停，降低CPU占用
  speed: 1,
  lastTime: 0
};

// ── 公开 API ────────────────────────────────────────────────────
export const TrajectoryEngine = {
  get progress() { return _state.progress; },
  get playing() { return _state.playing; },
  get speed() { return _state.speed; },

  setProgress(v) { _state.progress = v; },
  togglePlay() {
    _state.playing = !_state.playing;
    const b = document.getElementById('btn-play');
    if (b) {
      b.textContent = _state.playing ? 'PAUSE' : 'PLAY';
      b.classList.toggle('active', _state.playing);
    }
    return _state.playing;
  },
  cycleSpeed() {
    const ss = [1, 2, 4, .5];
    const ls = ['1x', '2x', '4x', '0.5x'];
    const i = (ss.indexOf(_state.speed) + 1) % ss.length;
    _state.speed = ss[i];
    const b = document.getElementById('btn-speed');
    if (b) b.textContent = ls[i];
  },
  reset() {
    _state.progress = 0;
    _state.playing = false; // 重置播放状态
    // 重置按钮状态
    const b = document.getElementById('btn-play');
    if (b) {
      b.textContent = 'PLAY';
      b.classList.remove('active');
    }
  }
};

// ── 内部函数使用的状态访问器 ─────────────────────────────────────
function getProgress() { return _state.progress; }
function getPlaying() { return _state.playing; }
function getSpeed() { return _state.speed; }
function setLastTime(v) { _state.lastTime = v; }
function getLastTime() { return _state.lastTime; }

// ── 性能优化：帧率控制 (30 fps) ───────────────────────────────
const TARGET_FRAME_INTERVAL = 1000 / 30;
let lastFrameTime = 0;

// ── 性能优化：脉冲值缓存（每10帧更新一次）────────────────────
let pulseValue      = 0.7;
let fastPulseValue  = 0.6;
let pulseFrameCounter = 0;

function updatePulseValues() {
  if (++pulseFrameCounter >= 10) {
    pulseFrameCounter  = 0;
    pulseValue      = 0.4 + Math.random() * 0.4;
    fastPulseValue  = 0.3 + Math.random() * 0.5;
  }
}

// 背景图现在由 CSS .route-map-layer 控制

// ── 工具函数 ──────────────────────────────────────────────────
function lerp(a, b, t) { return a + (b - a) * t; }

function posAt(t) {
  // 使用高精度 smoothRoute 做轨迹位置插值
  const sf = t * (SN - 1);
  const s  = Math.floor(sf);
  const f  = sf - s;
  if (s >= SN - 1) return { x: smoothRoute[SN-1].x, y: smoothRoute[SN-1].y, km: smoothRoute[SN-1].km, a: 0, r: '' };
  const a = smoothRoute[s], b = smoothRoute[s + 1];
  // 海拔从 route (waypoints) 插值获取
  const elevIdx = t * (N - 1);
  const es = Math.min(Math.floor(elevIdx), N - 1);
  const ef = elevIdx - es;
  const elev = es < N - 1 ? lerp(route[es].elev, route[es+1].elev, ef) : route[N-1].elev;
  // 路段名从最近的 waypoint 获取
  const road = a.road || (route[es] ? route[es].road : '');
  return {
    x:    lerp(a.x,    b.x,    f),
    y:    lerp(a.y,    b.y,    f),
    km:   lerp(a.km,   b.km,   f),
    elev: elev,
    a:    Math.atan2(b.y - a.y, b.x - a.x),
    r:    road,
  };
}

// ── 绘制函数 ──────────────────────────────────────────────────
function drawGrid() {
  ctx.strokeStyle = 'rgba(0,240,255,0.03)';
  ctx.lineWidth = 1;
  for (let x = 0; x < CW; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0);  ctx.lineTo(x, CH); ctx.stroke(); }
  for (let y = 0; y < CH; y += 50) { ctx.beginPath(); ctx.moveTo(0, y);  ctx.lineTo(CW, y); ctx.stroke(); }
}

function drawCoastline() {
  if (coastPts.length < 3) return;
  const mapped = coastPts.map(p => ({ x: p.x + OFFSET_X, y: p.y + OFFSET_Y }));

  ctx.beginPath();
  mapped.forEach((p, i) => { if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y); });
  ctx.closePath();

  // 性能优化：使用静态颜色替代渐变，减少 CPU 消耗
  ctx.fillStyle = 'rgba(0,240,255,0.03)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,240,255,0.15)';
  ctx.lineWidth = 2;
  ctx.stroke();
  // 移除 shadowBlur 优化性能

  // 海域标注
  ctx.fillStyle = 'rgba(0,240,255,0.1)';
  ctx.font = 'bold 14px Orbitron,monospace';
  ctx.fillText('大亚湾', CW * .85, CH * .30);
  ctx.fillText('大鹏湾', CW * .08, CH * .30);
  ctx.fillText('南海',   CW * .50, CH * .92);
  ctx.fillStyle = 'rgba(0,240,255,0.15)';
  ctx.font = 'bold 13px "Noto Sans SC",sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('大鹏半岛', CW * .50, CH * .48);
  ctx.textAlign = 'left';
}

function drawRouteFull() {
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255,34,68,0.15)';
  ctx.lineWidth   = 4;
  smoothRoute.forEach((p, i) => { if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y); });
  ctx.stroke();
}

function drawRouteActive() {
  const sf = getProgress() * (SN - 1);
  const s  = Math.floor(sf);
  const f  = sf - s;

  ctx.beginPath();
  const g = ctx.createLinearGradient(smoothRoute[0].x, 0, smoothRoute[SN-1].x, 0);
  g.addColorStop(0,   '#ff4466');
  g.addColorStop(.3,  '#ff00ff');
  g.addColorStop(.6,  '#ff2244');
  g.addColorStop(1,   '#ff4466');
  ctx.strokeStyle = g;
  ctx.lineWidth   = 6;
  // 性能优化：降低 shadowBlur 强度从 20 到 10
  ctx.shadowColor = '#ff2244';
  ctx.shadowBlur  = 10;
  for (let i = 0; i <= s && i < SN; i++) {
    if (i === 0) ctx.moveTo(smoothRoute[i].x, smoothRoute[i].y);
    else         ctx.lineTo(smoothRoute[i].x, smoothRoute[i].y);
  }
  if (s < SN - 1) ctx.lineTo(lerp(smoothRoute[s].x, smoothRoute[s+1].x, f), lerp(smoothRoute[s].y, smoothRoute[s+1].y, f));
  ctx.stroke();
  ctx.shadowBlur = 0;

  // 性能优化：移除轨迹光效的 shadowBlur
  for (let i = Math.max(0, s - 15); i <= s; i++) {
    const alpha = .3 + ((i - s + 15) / 15) * .5;
    ctx.beginPath();
    ctx.arc(smoothRoute[i].x, smoothRoute[i].y, 4, 0, Math.PI * 2);
    ctx.fillStyle  = `rgba(255,68,102,${alpha})`;
    // 移除 shadowBlur 优化性能
    ctx.fill();
  }
}

function drawCheckpoints() {
  const curKm    = getProgress() * TOTAL_KM;
  const pulse    = pulseValue;
  const fastPulse = fastPulseValue;

  route.forEach(p => {
    if (!p.isCheck) return;
    const px = p.x, py = p.y, passed = p.km <= curKm;

    // 最外圈脉冲光环
    ctx.beginPath();
    ctx.arc(px, py, 28, 0, Math.PI * 2);
    ctx.strokeStyle = passed ? `rgba(255,0,255,${fastPulse * 0.3})` : 'rgba(255,0,255,0.1)';
    ctx.lineWidth   = 2;
    ctx.stroke();

    // 中间光环
    ctx.beginPath();
    ctx.arc(px, py, 24, 0, Math.PI * 2);
    ctx.strokeStyle = passed ? `rgba(255,0,255,${pulse})` : 'rgba(255,0,255,0.2)';
    ctx.lineWidth   = 2;
    ctx.stroke();

    // 内圈填充 - 性能优化：降低 shadowBlur 从 25 到 10
    ctx.beginPath();
    ctx.arc(px, py, 18, 0, Math.PI * 2);
    ctx.fillStyle = passed ? 'rgba(255,0,255,0.95)' : 'rgba(255,0,255,0.15)';
    ctx.fill();
    if (passed) { ctx.shadowColor = '#ff00ff'; ctx.shadowBlur = 10; ctx.fill(); ctx.shadowBlur = 0; }

    // 最内层白圈
    ctx.beginPath();
    ctx.arc(px, py, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

    // 编号
    ctx.fillStyle      = passed ? '#ff00ff' : 'rgba(255,255,255,0.5)';
    ctx.font           = 'bold 14px Orbitron,monospace';
    ctx.textAlign      = 'center';
    ctx.textBaseline   = 'middle';
    ctx.fillText(p.isCheck, px, py);

    // 标签
    const isEndPoint = p.isCheck === 6;
    const labelY     = isEndPoint ? py + 55 : py - 36;
    const labelText  = p.checkName || p.name;
    ctx.font = 'bold 12px "Noto Sans SC",sans-serif';
    const tw = ctx.measureText(labelText).width;
    ctx.fillStyle   = passed ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.7)';
    ctx.fillRect(px - tw / 2 - 8, labelY - 12, tw + 16, 22);
    ctx.strokeStyle = passed ? 'rgba(255,0,255,0.8)' : 'rgba(255,0,255,0.3)';
    ctx.lineWidth   = 1;
    ctx.strokeRect(px - tw / 2 - 8, labelY - 12, tw + 16, 22);
    ctx.fillStyle   = passed ? '#fff' : 'rgba(255,255,255,0.5)';
    ctx.textAlign   = 'center';
    ctx.fillText(labelText, px, labelY);

    // 里程
    const kmY     = isEndPoint ? py - 15 : py + 38;
    const kmRectY = isEndPoint ? py - 28 : py + 26;
    ctx.font      = '11px Orbitron,monospace';
    const kmText  = p.km + 'km';
    const kmW     = ctx.measureText(kmText).width;
    ctx.fillStyle = 'rgba(0,240,255,0.9)';
    ctx.fillRect(px - kmW / 2 - 4, kmRectY, kmW + 8, 18);
    ctx.fillStyle = '#0a0a0f';
    ctx.textAlign = 'center';
    ctx.fillText(kmText, px, kmY);

    // 箭头
    if (passed) {
      ctx.beginPath();
      if (isEndPoint) {
        ctx.moveTo(px, labelY + 18); ctx.lineTo(px - 6, labelY + 24); ctx.lineTo(px + 6, labelY + 24);
      } else {
        ctx.moveTo(px, labelY - 18); ctx.lineTo(px - 6, labelY - 24); ctx.lineTo(px + 6, labelY - 24);
      }
      ctx.closePath();
      ctx.fillStyle = 'rgba(255,0,255,0.9)';
      ctx.fill();
    }
  });

  // 一级虐点
  route.forEach(p => {
    if (!p.challenge) return;
    const px = p.x, py = p.y, passed = p.km <= curKm;
    const cp = pulseValue; // 使用缓存值

    ctx.beginPath();
    ctx.arc(px, py, 22, 0, Math.PI * 2);
    ctx.strokeStyle = passed ? `rgba(255,107,0,${cp})` : 'rgba(255,107,0,0.15)';
    ctx.lineWidth   = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(px, py, 14, 0, Math.PI * 2);
    ctx.fillStyle = passed ? 'rgba(255,107,0,0.95)' : 'rgba(255,107,0,0.15)';
    ctx.fill();
    // 性能优化：降低 shadowBlur 从 20 到 10
    if (passed) { ctx.shadowColor = '#ff6b00'; ctx.shadowBlur = 10; ctx.fill(); ctx.shadowBlur = 0; }

    ctx.fillStyle    = '#fff';
    ctx.font         = '14px serif';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🔥', px, py);

    ctx.font = 'bold 11px "Noto Sans SC",sans-serif';
    const labelText = '一级虐点';
    const tw = ctx.measureText(labelText).width;
    ctx.fillStyle   = 'rgba(10,10,15,0.95)';
    ctx.fillRect(px - tw / 2 - 6, py + 20, tw + 12, 20);
    ctx.strokeStyle = 'rgba(255,107,0,0.6)';
    ctx.lineWidth   = 1;
    ctx.strokeRect(px - tw / 2 - 6, py + 20, tw + 12, 20);
    ctx.fillStyle   = '#ff6b00';
    ctx.textAlign   = 'center';
    ctx.fillText(labelText, px, py + 33);
  });

  ctx.textAlign    = 'left';
  ctx.textBaseline = 'alphabetic';
}

function drawChallengePointsOnRoute() {
  const curKm = getProgress() * TOTAL_KM;
  const pulse = pulseValue;

  challengePoints.forEach(cp => {
    // 根据 km 找到最近的 waypoint 获取 x, y 坐标
    let closest = route[0];
    let minDist = Math.abs(route[0].km - cp.km);
    for (let i = 1; i < route.length; i++) {
      const dist = Math.abs(route[i].km - cp.km);
      if (dist < minDist) {
        minDist = dist;
        closest = route[i];
      }
    }
    const px = closest.x, py = closest.y;
    const passed = cp.km <= curKm;

    // 外圈圆环 - 黄色
    ctx.beginPath();
    ctx.arc(px, py, 18, 0, Math.PI * 2);
    ctx.strokeStyle = passed ? `rgba(255,255,0,${pulse})` : 'rgba(255,255,0,0.25)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 内圈圆环
    ctx.beginPath();
    ctx.arc(px, py, 12, 0, Math.PI * 2);
    ctx.strokeStyle = passed ? `rgba(255,200,0,${pulse})` : 'rgba(255,200,0,0.2)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // 中心实心圆点 - 黄色
    ctx.beginPath();
    ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fillStyle = passed ? 'rgba(255,255,0,0.95)' : 'rgba(255,255,0,0.35)';
    ctx.fill();
    if (passed) {
      ctx.shadowColor = '#ffff00';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // 标签
    ctx.font = 'bold 11px "Noto Sans SC",sans-serif';
    const tw = ctx.measureText(cp.name).width;
    ctx.fillStyle = 'rgba(10,10,15,0.9)';
    ctx.fillRect(px - tw / 2 - 4, py - 30, tw + 8, 16);
    ctx.strokeStyle = 'rgba(255,255,0,0.6)';
    ctx.lineWidth = 1;
    ctx.strokeRect(px - tw / 2 - 4, py - 30, tw + 8, 16);
    ctx.fillStyle = '#ffff00';
    ctx.textAlign = 'center';
    ctx.fillText(cp.name, px, py - 18);

    // 海拔
    ctx.font = '9px Orbitron,monospace';
    ctx.fillStyle = passed ? 'rgba(255,255,0,0.9)' : 'rgba(255,255,255,0.4)';
    ctx.fillText(cp.elev + 'm', px, py + 28);
  });
}

// ── 骑行位置标注 ───────────────────────────────────────────
function drawBike(x, y, angle) {
  ctx.save();
  ctx.translate(x, y);
  const pulse = pulseValue;

  ctx.beginPath();
  ctx.arc(0, 0, 22, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(240,240,0,${pulse})`;
  ctx.lineWidth   = 3;
  ctx.stroke();

  // 性能优化：降低 shadowBlur 从 15 到 8
  ctx.shadowColor = '#f0f000';
  ctx.shadowBlur  = 8;
  ctx.fillStyle   = '#f0f000';
  ctx.font        = '24px serif';
  ctx.textAlign   = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🚴', 0, 0);
  ctx.shadowBlur  = 0;

  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(20, 0); ctx.lineTo(12, -5); ctx.lineTo(12, 5);
  ctx.closePath();
  ctx.fillStyle = '#f0f000';
  ctx.fill();
  ctx.restore();
}

function drawHUD(p) {
  const hx = 6, hy = 6, hw = 134, hh = 72;
  ctx.fillStyle   = 'rgba(10,10,15,0.92)';
  ctx.fillRect(hx, hy, hw, hh);
  ctx.strokeStyle = 'rgba(0,240,255,0.4)';
  ctx.lineWidth   = 1;
  ctx.strokeRect(hx, hy, hw, hh);

  ctx.fillStyle = '#00f0ff';
  ctx.font      = 'bold 9px Orbitron,monospace';
  ctx.textAlign = 'left';
  ctx.fillText('TELEMETRY', hx + 5, hy + 13);

  const spd     = (14 + Math.sin(getProgress() * 30) * 9).toFixed(1);
  const elapsed = Math.round(getProgress() * HUD.TOTAL_TIME_MINUTES);
  const hrs     = Math.floor(elapsed / 60);
  const mins    = elapsed % 60;

  ctx.fillStyle = '#fff';
  ctx.font      = '9px "Noto Sans SC",sans-serif';
  ctx.fillText(`里程:${p.km.toFixed(1)}/${HUD.TOTAL_DISTANCE}km`,  hx + HUD.LABEL_OFFSET_X,  hy + HUD.LABEL_OFFSET_Y_1);
  ctx.fillText(`海拔:${p.elev.toFixed(0)}m`,        hx + HUD.LABEL_OFFSET_X,  hy + HUD.LABEL_OFFSET_Y_2);
  ctx.fillText(`速度:${spd}km/h`,                   hx + HUD.LABEL_OFFSET_X,  hy + HUD.LABEL_OFFSET_Y_3);
  ctx.fillText(`耗时:${hrs}h${String(mins).padStart(2,'0')}m`, hx + HUD.VALUE_OFFSET_X, hy + HUD.LABEL_OFFSET_Y_1);
  ctx.fillText(HUD.ROUTE_BOOK_ID,                           hx + HUD.VALUE_OFFSET_X, hy + HUD.LABEL_OFFSET_Y_2);

  const bx = hx + 5, by = hy + hh + 5, bw = hw - 10, bh = 4;
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  ctx.fillRect(bx, by, bw, bh);
  const bg = ctx.createLinearGradient(bx, 0, bx + bw, 0);
  bg.addColorStop(0, '#ff4466');
  bg.addColorStop(1, '#ff00ff');
  ctx.fillStyle = bg;
  ctx.fillRect(bx, by, bw * getProgress(), bh);
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font      = '8px Orbitron,monospace';
  ctx.textAlign = 'right';
  ctx.fillText((getProgress() * 100).toFixed(0) + '%', bx + bw, by - 2);
  ctx.textAlign = 'left';
}

function drawElevation() {
  const cx = 30, cy = CH - 100, cw = CW - 60, ch = 60;
  ctx.fillStyle   = 'rgba(10,10,15,0.85)';
  ctx.fillRect(cx - 6, cy - 18, cw + 12, ch + 30);
  ctx.strokeStyle = 'rgba(0,240,255,0.15)';
  ctx.lineWidth   = 1;
  ctx.strokeRect(cx - 6, cy - 18, cw + 12, ch + 30);

  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font      = 'bold 10px Orbitron,monospace';
  ctx.textAlign = 'left';
  ctx.fillText('ELEV (m)', cx, cy - 6);
  ctx.fillText('0km',       cx,      cy + ch + 12);
  ctx.textAlign = 'right';
  ctx.fillText('132.9km',   cx + cw, cy + ch + 12);
  ctx.textAlign = 'left';
  ctx.fillText('0',         cx - 16, cy + ch);
  ctx.fillText(MAX_ELEV + '', cx - 20, cy + 6);

  // 海拔曲线填充
  ctx.beginPath();
  for (let i = 0; i < N; i++) {
    const px = cx + (route[i].km / TOTAL_KM) * cw;
    const py = cy + ch - (Math.min(route[i].elev, MAX_ELEV) / MAX_ELEV) * ch;
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.lineTo(cx + cw, cy + ch); ctx.lineTo(cx, cy + ch); ctx.closePath();
  const eg = ctx.createLinearGradient(0, cy, 0, cy + ch);
  eg.addColorStop(0, 'rgba(0,255,136,0.2)');
  eg.addColorStop(1, 'rgba(0,255,136,0)');
  ctx.fillStyle = eg; ctx.fill();

  // 海拔曲线
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0,255,136,0.8)';
  ctx.lineWidth   = 2;
  for (let i = 0; i < N; i++) {
    const px = cx + (route[i].km / TOTAL_KM) * cw;
    const py = cy + ch - (Math.min(route[i].elev, MAX_ELEV) / MAX_ELEV) * ch;
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.stroke();

  // 打卡点标注
  const curKm = getProgress() * TOTAL_KM;
  checkpoints.forEach(cp => {
    const px     = cx + (cp.km / TOTAL_KM) * cw;
    const py     = cy + ch - (cp.elev / MAX_ELEV) * ch;
    const passed = cp.km <= curKm;

    ctx.beginPath(); ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fillStyle = passed ? cp.color : 'rgba(255,255,255,0.3)';
    ctx.fill();
    // 性能优化：移除打卡点 shadowBlur

    ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, cy + ch + 1);
    ctx.strokeStyle = passed ? 'rgba(255,0,255,0.4)' : 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1; ctx.setLineDash([2, 2]); ctx.stroke(); ctx.setLineDash([]);

    ctx.font = 'bold 7px "Noto Sans SC",sans-serif';
    const nameText = cp.name;
    const tw = ctx.measureText(nameText).width;
    ctx.fillStyle = passed ? 'rgba(10,10,15,0.9)' : 'rgba(10,10,15,0.6)';
    ctx.fillRect(px - tw / 2 - 2, py - 20, tw + 4, 14);
    ctx.fillStyle = passed ? '#fff' : 'rgba(255,255,255,0.4)';
    ctx.textAlign = 'center';
    ctx.fillText(nameText, px, py - 10);

    ctx.font = '9px Orbitron,monospace';
    ctx.fillStyle = passed ? 'rgba(0,240,255,0.9)' : 'rgba(255,255,255,0.4)';
    ctx.fillText(cp.elev + 'm', px, py + 14);
  });

  // 一级虐点标注
  challengePoints.forEach(cp => {
    const px     = cx + (cp.km / TOTAL_KM) * cw;
    const py     = cy + ch - (Math.min(cp.elev, MAX_ELEV) / MAX_ELEV) * ch;
    const passed = cp.km <= curKm;
    const pulse  = pulseValue;

    ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2);
    ctx.strokeStyle = passed ? `rgba(255,107,0,${pulse})` : 'rgba(255,107,0,0.25)';
    ctx.lineWidth = 1.5; ctx.stroke();

    ctx.beginPath(); ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fillStyle = passed ? '#ff6b00' : 'rgba(255,107,0,0.35)'; ctx.fill();

    ctx.font = 'bold 9px "Noto Sans SC",sans-serif';
    const tw = ctx.measureText(cp.name).width;
    ctx.fillStyle = 'rgba(10,10,15,0.9)';
    ctx.fillRect(px - tw / 2 - 2, py - 18, tw + 4, 14);
    ctx.fillStyle = '#ff6b00';
    ctx.textAlign = 'center';
    ctx.fillText(cp.name, px, py - 8);
  });

  // 最高海拔点
  const maxPx     = cx + (maxElevPoint.km / TOTAL_KM) * cw;
  const maxPy     = cy + ch - (maxElevPoint.elev / MAX_ELEV) * ch;
  const maxPassed = maxElevPoint.km <= curKm;
  const maxPulse  = fastPulseValue;

  ctx.beginPath(); ctx.arc(maxPx, maxPy, 8, 0, Math.PI * 2);
  ctx.strokeStyle = maxPassed ? `rgba(255,107,0,${maxPulse})` : 'rgba(255,107,0,0.2)';
  ctx.lineWidth = 1.5; ctx.stroke();

  ctx.beginPath(); ctx.arc(maxPx, maxPy, 5, 0, Math.PI * 2);
  ctx.fillStyle = maxPassed ? 'rgba(255,107,0,0.95)' : 'rgba(255,107,0,0.3)'; ctx.fill();
  // 性能优化：移除最高海拔点 shadowBlur

  ctx.font = 'bold 7px "Noto Sans SC",sans-serif';
  const maxTw = ctx.measureText(maxElevPoint.name).width;
  ctx.fillStyle = 'rgba(10,10,15,0.9)';
  ctx.fillRect(maxPx - maxTw / 2 - 2, maxPy - 16, maxTw + 4, 12);
  ctx.fillStyle = '#ff6b00'; ctx.textAlign = 'center';
  ctx.fillText(maxElevPoint.name, maxPx, maxPy - 7);
  ctx.font = '7px Orbitron,monospace';
  ctx.fillText(maxElevPoint.elev + 'm', maxPx, maxPy + 14);

  ctx.beginPath(); ctx.moveTo(maxPx, maxPy); ctx.lineTo(maxPx, cy + ch);
  ctx.strokeStyle = maxPassed ? 'rgba(255,107,0,0.6)' : 'rgba(255,107,0,0.2)';
  ctx.lineWidth = 1; ctx.setLineDash([3, 3]); ctx.stroke(); ctx.setLineDash([]);

  // 当前骑行位置
  const cp  = posAt(getProgress());
  const mx  = cx + (cp.km / TOTAL_KM) * cw;
  const my  = cy + ch - (Math.min(cp.elev, MAX_ELEV) / MAX_ELEV) * ch;
  ctx.beginPath(); ctx.arc(mx, my, 4, 0, Math.PI * 2);
  ctx.fillStyle  = '#f0f000';
  // 性能优化：移除当前位置 shadowBlur
  ctx.fill();
  ctx.beginPath(); ctx.strokeStyle = 'rgba(240,240,0,0.3)'; ctx.setLineDash([2, 2]);
  ctx.moveTo(mx, cy); ctx.lineTo(mx, cy + ch); ctx.stroke(); ctx.setLineDash([]);
}

function drawSegLabels() {
  const segs = [
    { km: 18,  y: .12, label: '①→鹅公湾',   color: 'rgba(0,240,255,0.4)'  },
    { km: 47,  y: .08, label: '②→西涌',      color: 'rgba(0,240,255,0.4)'  },
    { km: 70,  y: .08, label: '③→杨梅坑',   color: 'rgba(0,240,255,0.4)'  },
    { km: 103, y: .35, label: '④→坝光',      color: 'rgba(255,107,0,0.5)'  },
    { km: 126, y: .12, label: '⑤→满京华',   color: 'rgba(255,34,68,0.5)'  },
  ];
  segs.forEach(s => {
    const px = (s.km / TOTAL_KM) * CW;
    const py = s.y * CH;
    ctx.fillStyle   = s.color;
    ctx.font        = 'bold 7px "Noto Sans SC",sans-serif';
    ctx.textAlign   = 'center';
    ctx.fillText(s.label, px, py);
  });
  ctx.textAlign = 'left';
}

// ── 主循环 ────────────────────────────────────────────────────
function frame(ts) {
  // 性能优化：暂停时降低帧率到 10fps，播放时保持 30fps
  const IDLE_FRAME_INTERVAL = 100;  // 暂停时 10fps
  const currentInterval = getPlaying() ? TARGET_FRAME_INTERVAL : IDLE_FRAME_INTERVAL;
  
  // 帧率节流
  const elapsed = ts - lastFrameTime;
  if (elapsed < currentInterval) { requestAnimationFrame(frame); return; }
  lastFrameTime = ts - (elapsed % currentInterval);

  const dt = ts - getLastTime(); setLastTime(ts);

  // 性能优化：只在播放时更新进度和重绘，暂停时完全停止渲染
  if (getPlaying()) {
    try {
      _state.progress += 0.00035 * getSpeed();
      if (_state.progress > 1) _state.progress = 0;

      // 更新脉冲缓存
      updatePulseValues();

      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, CW, CH);
      drawGrid();
      drawCoastline();
      drawSegLabels();
      drawRouteFull();
      drawRouteActive();
      drawCheckpoints();
      drawChallengePointsOnRoute();

      const p = posAt(getProgress());
      drawBike(p.x, p.y, p.a);
      drawHUD(p);
      drawElevation();
    } catch (err) {
      console.error('[Trajectory] Render error:', err);
      _state.playing = false; // 停止动画，避免刷屏报错
      const btn = document.getElementById('btn-play');
      if (btn) {
        btn.textContent = 'PLAY';
        btn.classList.remove('active');
      }
    }
  }

  requestAnimationFrame(frame);
}

// ── 控制按钮 API ─────────────────────────────────────────────
// 使用 TrajectoryEngine 的方法
export function togglePlay() { return TrajectoryEngine.togglePlay(); }
export function cycleSpeed() { TrajectoryEngine.cycleSpeed(); }
export function resetAnim() { TrajectoryEngine.reset(); }

// 启动 - 等待 DOM 和 Canvas 准备就绪
function initTrajectory() {
  if (!canvas || !ctx) {
    console.error('[Trajectory] Canvas not found');
    return;
  }
  requestAnimationFrame(frame);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTrajectory);
} else {
  initTrajectory();
}

// ══════════════════════════════════════════════════════════════
// 可选优化：Canvas 响应式支持
// 当前 Canvas 尺寸为 1100x770，内部有大量硬编码的位置坐标。
// 如需实现响应式，需要：
// 1. 使用 ResizeObserver 动态监听尺寸变化
// 2. 重新计算所有绘制坐标（OFFSET_X, OFFSET_Y, hx, hy 等）
// 3. 保持宽高比或重新设计 HUD 布局
// ══════════════════════════════════════════════════════════════
