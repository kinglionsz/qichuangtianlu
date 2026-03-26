/**
 * 视觉回归测试
 * 截图对比关键页面区域
 * 
 * 注意：首次运行需要生成基准截图
 * 运行：npm test -- --grep "视觉回归" --update-snapshots
 */

import { test, expect } from '@playwright/test';

// 暂时禁用视觉回归测试，直到生成基准截图
test.describe.skip('视觉回归测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Hero 区域截图', async ({ page }) => {
    const hero = page.locator('#hero');
    await expect(hero).toBeVisible();
    await expect(hero).toHaveScreenshot('hero-section.png');
  });

  test('导航栏截图', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toHaveScreenshot('navigation.png');
  });

  test('统计数据区域截图', async ({ page }) => {
    const stats = page.locator('.stats-container');
    await expect(stats).toHaveScreenshot('stats-container.png');
  });

  test('轨迹区域截图', async ({ page }) => {
    await page.waitForSelector('#trajectory-canvas', { timeout: 5000 });
    const trajectory = page.locator('#trajectory');
    await expect(trajectory).toHaveScreenshot('trajectory-section.png');
  });

  test('打卡点卡片截图', async ({ page }) => {
    await page.locator('#route').scrollIntoViewIfNeeded();
    const checkpoints = page.locator('.checkpoints-grid');
    await expect(checkpoints).toHaveScreenshot('checkpoints-grid.png');
  });

  test('时间线截图', async ({ page }) => {
    await page.locator('#timeline').scrollIntoViewIfNeeded();
    const timeline = page.locator('.timeline');
    await expect(timeline).toHaveScreenshot('timeline.png');
  });

  test('获奖者卡片截图', async ({ page }) => {
    await page.locator('#winners').scrollIntoViewIfNeeded();
    const winners = page.locator('.winners-grid');
    await expect(winners).toHaveScreenshot('winners-grid.png');
  });

  test('图集截图', async ({ page }) => {
    await page.locator('#gallery').scrollIntoViewIfNeeded();
    const gallery = page.locator('.gallery-grid');
    await expect(gallery).toHaveScreenshot('gallery-grid.png');
  });

  test('Footer 截图', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded();
    const footer = page.locator('footer');
    await expect(footer).toHaveScreenshot('footer.png');
  });

  test('完整页面截图', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await expect(page).toHaveScreenshot('full-page.png', { 
      fullPage: true,
      timeout: 30000
    });
  });
});

// 移动端视觉测试
test.describe.skip('移动端视觉回归', () => {
  test('移动端 Hero 区域截图', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const hero = page.locator('#hero');
    await expect(hero).toHaveScreenshot('mobile-hero-section.png');
  });

  test('移动端导航截图', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const nav = page.locator('nav');
    await expect(nav).toHaveScreenshot('mobile-navigation.png');
  });

  test('移动端轨迹区域截图', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForSelector('#trajectory-canvas', { timeout: 5000 });
    
    const trajectory = page.locator('#trajectory');
    await expect(trajectory).toHaveScreenshot('mobile-trajectory-section.png');
  });
});
