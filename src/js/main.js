/**
 * 主入口文件
 * Vite 会从此处开始打包
 */

import '../styles/main.css';
import { togglePlay, cycleSpeed, resetAnim } from './trajectory.js';
import { toggleMenu, closeMenu, openLightbox, closeLightbox } from './ui.js';

// 挂载到 window 供 HTML inline onclick 调用
window.togglePlay  = togglePlay;
window.cycleSpeed  = cycleSpeed;
window.resetAnim   = resetAnim;
window.toggleMenu  = toggleMenu;
window.closeMenu   = closeMenu;
window.openLightbox  = openLightbox;
window.closeLightbox = closeLightbox;
