import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright 测试配置
 * 骑闯天路 2017 赛博朋克纪念版
 */
export default defineConfig({
  // 测试文件位置
  testDir: './tests',
  
  // 超时设置
  timeout: 60 * 1000,
  expect: {
    timeout: 10000
  },
  
  // 失败重试次数
  retries: process.env.CI ? 2 : 0,
  
  // 并行工作数
  workers: process.env.CI ? 1 : undefined,
  
  // 报告器
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
  
  // 共享配置
  use: {
    // 基础 URL（开发服务器）
    baseURL: 'http://localhost:3000',
    
    // 收集追踪
    trace: 'on-first-retry',
    
    // 截图：失败时自动截取
    screenshot: 'only-on-failure',
    
    // 视频：失败时录制
    video: 'on-first-retry',
    
    // 浏览器上下文
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
  },
  
  // 浏览器配置
  projects: [
    // 桌面端测试
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // 移动端测试
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    // 平板测试
    {
      name: 'iPad',
      use: { ...devices['iPad Pro'] },
    },
  ],
  
  // 启动 Web 服务器
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  },
});
