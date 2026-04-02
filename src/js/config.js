/**
 * Canvas 渲染配置常量
 * 将硬编码坐标提取为配置，便于维护和响应式支持
 */

// ==================== Canvas 基础配置 ====================
export const CANVAS_CONFIG = {
  WIDTH: 1100,
  HEIGHT: 770,
  OFFSET_X: 160,
  OFFSET_Y: 60,
  TOTAL_DISTANCE: 132.86  // 总里程 (km)
};

// ==================== HUD 配置 ====================
export const HUD_CONFIG = {
  x: 6,
  y: 6,
  w: 134,
  h: 72,
  labelOffsetX: 5,
  labelOffsetY1: 28,
  labelOffsetY2: 42,
  labelOffsetY3: 56,
  valueOffsetX: 70,
  labelFont: 'bold 11px "Noto Sans SC",sans-serif',
  valueFont: 'bold 14px Orbitron,monospace'
};

// ==================== 海拔图配置 ====================
export const ELEVATION_CONFIG = {
  x: 30,
  yOffset: -100,  // 相对于 Canvas 高度
  wOffset: -60,   // 相对于 Canvas 宽度
  h: 60,
  lineWidth: 1.5,
  fillOpacity: 0.3,
  colors: {
    fill: 'rgba(0, 240, 255, 0.15)',
    stroke: '#00f0ff',
    marker: '#ff6b00'
  }
};

// ==================== 打卡点配置 ====================
export const CHECKPOINT_CONFIG = {
  outerRadius: 28,
  middleRadius: 24,
  innerRadius: 18,
  centerRadius: 8,
  labelFontSize: 12,
  numberFont: 'bold 14px Orbitron,monospace',
  labelFont: 'bold 12px "Noto Sans SC",sans-serif',
  kmFont: '11px Orbitron,monospace'
};

// ==================== 轨迹点配置 ====================
export const TRAJECTORY_CONFIG = {
  lineWidth: 3,
  activeLineWidth: 4,
  dashLength: 10,
  gapLength: 5,
  pulseMin: 0.4,
  pulseMax: 0.8,
  pulseUpdateInterval: 10  // 每10帧更新一次
};

// ==================== 动画帧率配置 ====================
export const ANIMATION_CONFIG = {
  TARGET_FRAME_INTERVAL: 33,   // 30fps
  IDLE_FRAME_INTERVAL: 100,   // 暂停时 10fps
  DEFAULT_SPEED: 1,
  SPEED_VALUES: [0.5, 1, 2, 4]
};

// ==================== 颜色配置 ====================
export const COLORS = {
  neonCyan: '#00f0ff',
  neonMagenta: '#ff00ff',
  neonYellow: '#f0f000',
  neonOrange: '#ff6b00',
  neonGreen: '#00ff88',
  neonRed: '#ff2244',
  darkBg: '#0a0a0f',
  glassBg: 'rgba(255, 255, 255, 0.05)'
};