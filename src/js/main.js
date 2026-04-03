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

  // 等待事件监听器初始化完成（包括 trajectory.js 动态导入）
  await initEventListeners();
  initStatsAnimation();
}

// 立即执行（不再延迟），确保测试环境能及时绑定事件
initNonCritical();
