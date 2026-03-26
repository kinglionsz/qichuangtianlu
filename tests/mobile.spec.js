/**
 * 移动端专项测试
 * 测试移动端特有的交互和功能
 */

import { test, expect, devices } from '@playwright/test';

// 移动设备配置
const iPhone12 = devices['iPhone 12'];
const pixel5 = devices['Pixel 5'];

test.describe('移动端专项测试', () => {
  // ────────────────────────────────────────────────────────────
  // iPhone 测试
  // ────────────────────────────────────────────────────────────
  test.describe('iPhone 12', () => {
    test.use({ viewport: iPhone12.viewport });

    test('应该在 iPhone 上正常显示', async ({ page }) => {
      await page.goto('/');
      
      // 验证导航
      const hamburger = page.locator('.hamburger');
      await expect(hamburger).toBeVisible();
      
      // 验证 Hero 区域
      const hero = page.locator('#hero');
      await expect(hero).toBeVisible();
    });

    test('移动端菜单应该可展开和关闭', async ({ page }) => {
      await page.goto('/');
      
      const hamburger = page.locator('.hamburger');
      const navLinks = page.locator('.nav-links');
      
      // 展开菜单
      await hamburger.click();
      await expect(hamburger).toHaveClass(/active/);
      await expect(navLinks).toHaveClass(/active/);
      
      // 点击导航链接应该关闭菜单
      const firstLink = navLinks.locator('a').first();
      await firstLink.click();
      await expect(navLinks).not.toHaveClass(/active/);
    });

    test('轨迹控制按钮应该可点击', async ({ page }) => {
      await page.goto('/');
      await page.waitForSelector('#trajectory-canvas', { timeout: 5000 });
      
      // 滚动到轨迹区域
      await page.locator('#trajectory').scrollIntoViewIfNeeded();
      
      const playBtn = page.locator('#btn-play');
      await expect(playBtn).toBeVisible();
      await expect(playBtn).toBeEnabled();
      
      // 点击测试
      await playBtn.click();
      await expect(playBtn).toHaveText('PLAY');
    });

    test('图集应该支持触摸交互', async ({ page }) => {
      await page.goto('/');
      
      // 滚动到图集区域
      await page.locator('#gallery').scrollIntoViewIfNeeded();
      
      const galleryItem = page.locator('.gallery-item').first();
      await expect(galleryItem).toBeVisible();
      
      // 点击打开灯箱
      await galleryItem.click();
      const lightbox = page.locator('#lightbox');
      await expect(lightbox).toHaveClass(/active/);
      
      // 点击关闭
      await lightbox.click();
      await expect(lightbox).not.toHaveClass(/active/);
    });
  });

  // ────────────────────────────────────────────────────────────
  // Android 测试
  // ────────────────────────────────────────────────────────────
  test.describe('Pixel 5', () => {
    test.use({ viewport: pixel5.viewport });

    test('应该在 Android 上正常显示', async ({ page }) => {
      await page.goto('/');
      
      const hamburger = page.locator('.hamburger');
      await expect(hamburger).toBeVisible();
    });

    test('移动端打卡点卡片应该单列显示', async ({ page }) => {
      await page.goto('/');
      await page.locator('#route').scrollIntoViewIfNeeded();
      
      const checkpointsGrid = page.locator('.checkpoints-grid');
      const style = await checkpointsGrid.evaluate((el) => 
        window.getComputedStyle(el).gridTemplateColumns
      );
      
      // 应该是单列
      expect(style).toMatch(/^(\d+px|1fr)$/);
    });

    test('时间线在移动端应该垂直排列', async ({ page }) => {
      await page.goto('/');
      await page.locator('#timeline').scrollIntoViewIfNeeded();
      
      const timelineItems = page.locator('.timeline-item');
      const firstItem = timelineItems.first();
      
      // 验证所有时间线项都是全宽
      const style = await firstItem.evaluate((el) => 
        window.getComputedStyle(el).width
      );
      
      // 宽度应该接近视口宽度
      const width = parseFloat(style);
      expect(width).toBeGreaterThan(300);
    });
  });

  // ────────────────────────────────────────────────────────────
  // 横屏测试
  // ────────────────────────────────────────────────────────────
  test.describe('横屏模式', () => {
    test('横屏模式应该正常显示', async ({ page }) => {
      await page.setViewportSize({ width: 667, height: 375 });
      await page.goto('/');
      
      // 验证内容可见
      const hero = page.locator('#hero');
      await expect(hero).toBeVisible();
    });
  });
});
