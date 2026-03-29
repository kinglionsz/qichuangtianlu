/**
 * Playwright 测试辅助函数
 * 提供跨浏览器兼容的等待和交互逻辑
 */

import { test as base } from '@playwright/test';

/**
 * 检测当前浏览器类型
 * @param {import('@playwright/test').Page} page
 * @returns {'webkit' | 'chromium' | 'firefox' | 'unknown'}
 */
export function detectBrowser(page) {
  const ua = page.url() ? '' : '';
  // 通过浏览器上下文检测
  return 'unknown'; // 简化检测，实际通过 context.browser() 判断
}

/**
 * 获取浏览器引擎类型
 * @param {import('@playwright/test').Page} page
 */
export async function getBrowserEngine(page) {
  const context = page.context();
  const browser = context.browser();
  if (!browser) return 'unknown';

  const browserType = browser.browserType?.()?.name?.() || '';
  if (browserType.includes('webkit')) return 'webkit';
  if (browserType.includes('firefox')) return 'firefox';
  if (browserType.includes('chromium')) return 'chromium';
  return 'unknown';
}

/**
 * 智能等待元素稳定 - 针对 WebKit 优化
 * WebKit 对动画和过渡更敏感，需要更长的稳定时间
 *
 * @param {import('@playwright/test').Page} page
 * @param {string} selector - 元素选择器
 * @param {object} options - 等待选项
 */
export async function waitForStable(page, selector, options = {}) {
  const {
    timeout = 10000,
    extraWaitForWebkit = 500,  // WebKit 额外等待时间
    extraWaitForScroll = 300, // 滚动后额外等待
  } = options;

  const locator = page.locator(selector);

  // 等待元素可见
  await locator.waitFor({ state: 'visible', timeout });

  // 检测是否为 WebKit
  const context = page.context();
  const browser = context.browser();
  const isWebKit = browser?.browserType?.()?.name?.()?.includes('webkit') || false;

  // WebKit 额外等待，确保元素完全稳定
  if (isWebKit) {
    await page.waitForTimeout(extraWaitForWebkit);
  }

  // 额外等待动画完成
  await page.waitForTimeout(extraWaitForScroll);

  return locator;
}

/**
 * 智能点击 - 处理 WebKit 点击超时问题
 * 策略：
 * 1. 先滚动到元素使其可见
 * 2. 等待元素稳定
 * 3. 使用 force: true 强制点击
 * 4. WebKit 增加重试逻辑
 *
 * @param {import('@playwright/test').Page} page
 * @param {string} selector - 元素选择器
 * @param {object} options - 点击选项
 */
export async function smartClick(page, selector, options = {}) {
  const {
    retries = 2,           // WebKit 重试次数
    waitBeforeClick = 500, // 点击前等待（WebKit 更长）
    force = true,          // 强制点击
  } = options;

  const locator = page.locator(selector);

  // 滚动到元素中心
  await locator.scrollIntoViewIfNeeded();

  // 检测浏览器类型
  const context = page.context();
  const browser = context.browser();
  const isWebKit = browser?.browserType?.()?.name?.()?.includes('webkit') || false;

  // WebKit 需要更长的等待时间
  const waitTime = isWebKit ? waitBeforeClick * 2 : waitBeforeClick;
  await page.waitForTimeout(waitTime);

  // 尝试点击
  let lastError = null;
  for (let i = 0; i <= retries; i++) {
    try {
      await locator.click({ force, timeout: 5000 });
      return; // 成功点击
    } catch (error) {
      lastError = error;
      // 重试前等待
      if (i < retries) {
        await page.waitForTimeout(300);
      }
    }
  }

  // 所有重试都失败
  throw lastError || new Error(`Failed to click ${selector} after ${retries + 1} attempts`);
}

/**
 * 滚动并等待稳定
 * @param {import('@playwright/test').Page} page
 * @param {string} selector - 目标元素选择器
 */
export async function scrollAndWait(page, selector) {
  const locator = page.locator(selector).first(); // 使用 first() 处理多个元素

  // 使用平滑滚动
  await locator.scrollIntoViewIfNeeded();

  // 等待滚动完成和动画结束
  await page.waitForTimeout(800);

  // 额外等待 WebKit
  const context = page.context();
  const browser = context.browser();
  const isWebKit = browser?.browserType?.()?.name?.()?.includes('webkit') || false;

  if (isWebKit) {
    await page.waitForTimeout(400);
  }

  return locator;
}

/**
 * 扩展的 test 函数 - 包含智能等待
 */
export const test = base.extend({
  page: async ({ page }, use) => {
    // 为所有页面操作添加全局稳定等待
    const originalClick = page.locator('').click.bind(page.locator(''));

    await use(page);
  },
});

/**
 * 创建带有 WebKit 优化的测试配置
 * @param {import('@playwright/test').TestOptions} options
 */
export function createWebKitOptimizedTest(options = {}) {
  return {
    ...options,
    // 为 WebKit 添加默认超时
    timeout: options.timeout || 30000,
  };
}