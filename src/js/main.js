/**
 * 主入口文件
 * Vite 会从此处开始打包
 */

import '../styles/main.css';
import { togglePlay, cycleSpeed, resetAnim } from './trajectory.js';
import { toggleMenu, closeMenu, openLightbox, closeLightbox, initEventListeners } from './ui.js';
import { initStatsAnimation } from './stats-animation.js';

// 初始化事件监听器（替代内联 onclick）
initEventListeners();

// 初始化统计数据动画
initStatsAnimation();
