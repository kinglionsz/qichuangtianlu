/**
 * 统计数据数字动画
 * 页面加载时数字从 0 递增到目标值
 */

/**
 * 数字递增动画
 * @param {HTMLElement} element - 目标元素
 * @param {number} target - 目标数值
 * @param {number} duration - 动画时长（毫秒）
 * @param {boolean} isFloat - 是否为小数
 * @param {string} suffix - 后缀（如 'h', 'm'）
 */
function animateNumber(element, target, duration = 2000, isFloat = false, suffix = '') {
  const start = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // 缓动函数（先快后慢）
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * easeOut;
    
    if (isFloat) {
      element.textContent = current.toFixed(1) + suffix;
    } else {
      element.textContent = Math.floor(current).toLocaleString() + suffix;
    }
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

/**
 * 时间格式动画（如 8h45m）
 * @param {HTMLElement} element - 目标元素
 * @param {number} hours - 小时数
 * @param {number} minutes - 分钟数
 * @param {number} duration - 动画时长
 */
function animateTime(element, hours, minutes, duration = 2000) {
  const startTime = performance.now();
  const totalMinutes = hours * 60 + minutes;
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // 缓动函数
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentMinutes = Math.floor(totalMinutes * easeOut);
    
    const h = Math.floor(currentMinutes / 60);
    const m = currentMinutes % 60;
    
    element.textContent = `${h}h${m.toString().padStart(2, '0')}m`;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

/**
 * 初始化统计动画
 */
export function initStatsAnimation() {
  const statsContainer = document.querySelector('.stats-container');
  if (!statsContainer) return;
  
  // 使用 IntersectionObserver 检测元素进入视口
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numbers = entry.target.querySelectorAll('.stat-number');
        if (numbers.length < 4) return;
        
        // 131.4 公里路程（小数）
        animateNumber(numbers[0], 131.4, 2000, true);
        
        // 3,121 总爬升 m（整数，带逗号）
        animateNumber(numbers[1], 3121, 2000, false);
        
        // 8h45m 预计耗时（时间格式）
        animateTime(numbers[2], 8, 45, 2000);
        
        // 6 打卡站点（整数）
        animateNumber(numbers[3], 6, 1500, false);
        
        // 只执行一次
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(statsContainer);
}
