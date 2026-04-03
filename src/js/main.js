/**
 * 主入口文件
 * Vite 会从此处开始打包
 * 
 * 性能优化：使用 requestIdleCallback 延迟加载非关键 JS
 * 减少主线程工作时间，提升页面加载性能
 */

// 1. 立即加载：关键 CSS
import '../styles/main.css';

// 2. 延迟加载：非关键 JS（UI 交互、统计数据动画）
async function initNonCritical() {
  const [{ initEventListeners }, { initStatsAnimation }] = await Promise.all([
    import('./ui.js'),
    import('./stats-animation.js')
  ]);
  
  initEventListeners();
  initStatsAnimation();
}

// 使用 requestIdleCallback 延迟执行，避免阻塞首屏渲染
if ('requestIdleCallback' in window) {
  requestIdleCallback(initNonCritical, { timeout: 3000 });
} else {
  // 降级方案：使用 setTimeout
  setTimeout(initNonCritical, 1500);
}

// 3. 延迟加载：轨迹动画（非首屏内容）
function initTrajectory() {
  import('./trajectory.js').then(({ togglePlay, cycleSpeed, resetAnim }) => {
    // 轨迹模块已加载，按钮事件由 ui.js 的 initEventListeners 处理
    console.log('[Main] Trajectory module loaded');
  });
}

// 延迟加载轨迹模块，等待首屏渲染完成
if ('requestIdleCallback' in window) {
  requestIdleCallback(initTrajectory, { timeout: 5000 });
} else {
  setTimeout(initTrajectory, 2000);
}
