PS C:\Users\kinglionsz> cd D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project
PS D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project> npx playwright test

Running 306 tests using 2 workers

  ✓    1 [chromium] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (28.3s)
  ✓    2 [chromium] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (34.5s)
  ✓    3 [chromium] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (13.5s)
  ✓    4 [chromium] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (12.5s)
  ✓    5 [chromium] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (53.6s)
  ✘    6 [chromium] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (42.3s)
  ✓    7 [chromium] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (13.1s)
  ✓    8 [chromium] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (17.0s)
  ✓    9 [chromium] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (16.7s)
  ✘   10 [chromium] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (26.3s)
  ✓   11 [chromium] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (28.3s)
  ✓   12 [chromium] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (10.4s)
  ✓   13 [chromium] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (17.0s)
  ✓   14 [chromium] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (19.0s)
  ✓   15 [chromium] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (22.4s)
  ✓   16 [chromium] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (24.8s)
  ✓   17 [chromium] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (33.9s)
  ✓   18 [chromium] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (24.3s)
  ✓   19 [chromium] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (18.6s)
  ✓   20 [chromium] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (8.8s)
  ✓   21 [chromium] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (19.7s)
  ✓   22 [chromium] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (11.8s)
  -   23 [chromium] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -   24 [chromium] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -   25 [chromium] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -   26 [chromium] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -   27 [chromium] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -   28 [chromium] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -   29 [chromium] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -   30 [chromium] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -   31 [chromium] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -   32 [chromium] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -   33 [chromium] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -   34 [chromium] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -   35 [chromium] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓   36 [chromium] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (12.9s)
  ✓   37 [chromium] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (7.5s)
  ✓   38 [chromium] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (15.6s)
  ✓   39 [firefox] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (35.4s)
  ✓   40 [chromium] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (16.1s)
  ✓   41 [chromium] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (18.1s)
  ✓   42 [chromium] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (10.0s)
  ✓   43 [firefox] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (18.5s)
  ✓   44 [chromium] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (20.6s)
  ✓   45 [firefox] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (30.7s)
  ✓   46 [chromium] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (17.4s)
  ✓   47 [chromium] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (11.1s)
  ✘   48 [firefox] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (16.6s)
  ✘   49 [chromium] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (5.4s)
npx playwright testCodeSources\ai_project\mimo\bike-project> npx playwright test


  1) [chromium] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ────────────────────

    TimeoutError: page.waitForSelector: Timeout 5000ms exceeded.
    Call log:
      - waiting for locator('#trajectory-canvas') to be visible


      48 |     test('轨迹控制按钮应该可点击', async ({ page }) => {
      49 |       await page.goto('/');
    > 50 |       await page.waitForSelector('#trajectory-canvas', { timeout: 5000 });
         |                  ^
      51 |
      52 |       // 滚动到轨迹区域
      53 |       await page.locator('#trajectory').scrollIntoViewIfNeeded();
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\mobile.spec.js:50:18

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-chromium\error-context.md

  2) [chromium] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 ─────────────────────

    TimeoutError: locator.scrollIntoViewIfNeeded: Timeout -1017.4410000000207ms exceeded.
    Call log:
      - attempting scroll into view action
        - waiting for element to be stable


      66 |
      67 |       // 滚动到图集区域
    > 68 |       await page.locator('#gallery').scrollIntoViewIfNeeded();
         |                                      ^
      69 |
      70 |       const galleryItem = page.locator('.gallery-item').first();
      71 |       await expect(galleryItem).toBeVisible();
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\mobile.spec.js:68:38

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\mobile-移动端专项测试-iPhone-12-图集应该支持触摸交互-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\mobile-移动端专项测试-iPhone-12-图集应该支持触摸交互-chromium\error-context.md

  3) [chromium] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 ───────────────────────────────

    Test was interrupted.

    Error: browserContext.newPage: Test ended.

  4) [firefox] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 ──────────────────────

    Test was interrupted.

    Error: page.goto: Target page, context or browser has been closed
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      63 |
      64 |     test('图集应该支持触摸交互', async ({ page }) => {
    > 65 |       await page.goto('/');
         |                  ^
      66 |
      67 |       // 滚动到图集区域
      68 |       await page.locator('#gallery').scrollIntoViewIfNeeded();
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\mobile.spec.js:65:18

  Slow test file: [chromium] › tests\trajectory.spec.js (7.3m)
  Consider running tests from slow files in parallel. See: https://playwright.dev/docs/test-parallel
  2 failed
    [chromium] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ─────────────────────
    [chromium] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 ──────────────────────
  2 interrupted
    [chromium] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 ────────────────────────────────
    [firefox] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 ───────────────────────
  13 skipped
  257 did not run
  32 passed (8.2m)

To open last HTML report run:

  npx playwright show-report

PS D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project> npx playwright test

Running 306 tests using 2 workers

  ✓    1 [chromium] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (14.2s)
  ✓    2 [chromium] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (12.3s)
  ✓    3 [chromium] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (22.2s)
  ✓    4 [chromium] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (20.6s)
  ✓    5 [chromium] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (11.2s)
  ✓    6 [chromium] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (11.3s)
  ✓    7 [chromium] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (10.1s)
  ✓    8 [chromium] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (10.6s)
  ✓    9 [chromium] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (9.4s)
  ✓   10 [chromium] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (9.8s)
  ✓   11 [chromium] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (9.8s)
  ✓   12 [chromium] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (10.9s)
  ✓   13 [chromium] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (8.2s)
  ✓   14 [chromium] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (8.9s)
  ✓   15 [chromium] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (8.9s)
  ✓   16 [chromium] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (8.9s)
  -   17 [chromium] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -   18 [chromium] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -   19 [chromium] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -   20 [chromium] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -   21 [chromium] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -   22 [chromium] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -   23 [chromium] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -   24 [chromium] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -   25 [chromium] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -   26 [chromium] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -   27 [chromium] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -   28 [chromium] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -   29 [chromium] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓   30 [chromium] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (7.2s)
  ✓   31 [chromium] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (7.5s)
  ✓   32 [chromium] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (6.4s)
  ✓   33 [firefox] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (32.9s)
  ✓   34 [chromium] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (8.0s)
  ✓   35 [chromium] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (7.4s)
  ✓   36 [chromium] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (7.7s)
  ✓   37 [chromium] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (11.5s)
  ✓   38 [firefox] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (18.8s)
  ✓   39 [chromium] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (6.1s)
  ✓   40 [chromium] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (8.3s)
  ✓   41 [chromium] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (17.1s)
  ✓   42 [firefox] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (9.5s)
  ✓   43 [firefox] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (12.1s)
  ✓   44 [chromium] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (7.1s)
  ✓   45 [chromium] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (7.7s)
  ✓   46 [firefox] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (14.2s)
  ✓   47 [chromium] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (8.1s)
  ✓   48 [firefox] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (5.0s)
  ✓   49 [chromium] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (16.3s)
  ✓   50 [firefox] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (5.5s)
  ✓   51 [firefox] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (8.3s)
  ✓   52 [chromium] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (10.0s)
  ✓   53 [firefox] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (13.5s)
  ✓   54 [chromium] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (25.6s)
  ✓   55 [firefox] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (6.7s)
  ✓   56 [firefox] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (5.2s)
  ✓   57 [firefox] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (11.9s)
  ✓   58 [chromium] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 (11.6s)
  ✓   59 [firefox] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (20.4s)
  ✓   60 [chromium] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配 (11.5s)
  ✓   61 [chromium] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 (14.3s)
  ✓   62 [firefox] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (15.9s)
  ✓   63 [chromium] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示 (7.2s)
  ✓   64 [firefox] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (25.2s)
  ✘   65 [chromium] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 8 秒内完成加载 (19.7s)
  ✓   66 [firefox] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (8.9s)
  ✓   67 [firefox] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (10.4s)
  ✓   68 [firefox] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (24.0s)
  ✓   69 [chromium] › tests\trajectory.spec.js:309:3 › 性能测试 › Canvas 应该在 10 秒内初始化 (11.6s)
  -   70 [firefox] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -   71 [firefox] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -   72 [firefox] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -   73 [firefox] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -   74 [firefox] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -   75 [firefox] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -   76 [firefox] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -   77 [firefox] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -   78 [firefox] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -   79 [firefox] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -   80 [firefox] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -   81 [firefox] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -   82 [firefox] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓   83 [firefox] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (9.1s)
  ✓   84 [firefox] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (13.4s)
  ✓   85 [webkit] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (12.7s)
  ✓   86 [firefox] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (8.5s)
  ✓   87 [webkit] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (16.8s)
  ✓   88 [firefox] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (8.7s)
  ✓   89 [firefox] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (12.5s)
  ✓   90 [webkit] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (19.5s)
  ✓   91 [firefox] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (14.9s)
  ✓   92 [webkit] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (19.8s)
  ✓   93 [firefox] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (11.3s)
  ✓   94 [firefox] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (15.0s)
  ✓   95 [webkit] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (10.9s)
  ✓   96 [firefox] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (9.3s)
  ✓   97 [webkit] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (10.1s)
  ✓   98 [firefox] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (9.8s)
  ✓   99 [webkit] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (11.9s)
  ✓  100 [firefox] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (7.3s)
  ✓  101 [webkit] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (9.0s)
  ✓  102 [firefox] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (11.7s)
  ✓  103 [webkit] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (11.9s)
  ✓  104 [firefox] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (5.4s)
  ✓  105 [firefox] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (10.0s)
  ✓  106 [webkit] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (12.6s)
  ✓  107 [firefox] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 (9.4s)
  ✓  108 [webkit] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (13.7s)
  ✓  109 [firefox] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配 (7.6s)
  ✓  110 [firefox] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 (9.7s)
  ✓  111 [webkit] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (12.6s)
  ✓  112 [firefox] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示 (7.2s)
  ✓  113 [webkit] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (13.4s)
  ✘  114 [firefox] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 8 秒内完成加载 (1.0m)
  ✓  115 [webkit] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (10.9s)
  ✓  116 [webkit] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (9.8s)
  ✓  117 [webkit] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (26.0s)
  ✓  118 [webkit] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (16.7s)
  ✓  119 [firefox] › tests\trajectory.spec.js:309:3 › 性能测试 › Canvas 应该在 10 秒内初始化 (11.5s)
  ✓  120 [webkit] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (25.2s)
  -  121 [webkit] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  122 [webkit] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  123 [webkit] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  124 [webkit] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  125 [webkit] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  126 [webkit] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  127 [webkit] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  128 [webkit] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  129 [webkit] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  130 [webkit] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  131 [webkit] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  132 [webkit] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  133 [webkit] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓  134 [webkit] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (16.0s)
  ✓  135 [Mobile Chrome] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (8.9s)
  ✓  136 [Mobile Chrome] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (9.2s)
  ✓  137 [webkit] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (26.5s)
  ✓  138 [Mobile Chrome] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (7.5s)
  ✓  139 [Mobile Chrome] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (6.7s)
  ✓  140 [Mobile Chrome] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (8.3s)
  ✓  141 [Mobile Chrome] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (6.6s)
  ✓  142 [webkit] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (13.1s)
  ✓  143 [Mobile Chrome] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (22.7s)
  ✘  144 [webkit] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (16.0s)
  ✓  145 [Mobile Chrome] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (8.1s)
  ✓  146 [Mobile Chrome] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (7.8s)
  ✓  147 [webkit] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (22.1s)
  ✓  148 [Mobile Chrome] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (8.7s)
  ✓  149 [Mobile Chrome] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (8.6s)
  ✓  150 [Mobile Chrome] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (9.3s)
  ✓  151 [webkit] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (9.6s)
  ✓  152 [Mobile Chrome] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (9.3s)
  ✓  153 [webkit] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (11.4s)
  ✓  154 [Mobile Chrome] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (8.4s)
  ✓  155 [webkit] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (21.5s)
  ✓  156 [Mobile Chrome] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (9.2s)
  ✓  157 [Mobile Chrome] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (7.1s)
  ✓  158 [Mobile Chrome] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (8.2s)
  ✓  159 [webkit] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (14.2s)
  ✓  160 [Mobile Chrome] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (7.0s)
  ✓  161 [Mobile Chrome] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (7.5s)
  ✓  162 [webkit] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (11.9s)
  ✓  163 [Mobile Chrome] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (7.8s)
  ✓  164 [webkit] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (12.7s)
  ✓  165 [Mobile Chrome] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (8.6s)
  ✓  166 [Mobile Chrome] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (7.4s)
  ✓  167 [webkit] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (12.1s)
  ✓  168 [Mobile Chrome] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (7.4s)
  ✓  169 [webkit] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (12.5s)
  ✓  170 [Mobile Chrome] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (9.8s)
  ✓  171 [Mobile Chrome] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (9.2s)
  ✓  172 [webkit] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (15.9s)
  ✓  173 [Mobile Chrome] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (10.8s)
  ✓  174 [webkit] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 (15.0s)
  ✓  175 [Mobile Chrome] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (8.9s)
  ✓  176 [Mobile Chrome] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (9.1s)
  ✓  177 [webkit] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配 (13.0s)
  ✓  178 [Mobile Chrome] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (8.9s)
  ✓  179 [webkit] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 (9.8s)
  ✓  180 [Mobile Chrome] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (9.3s)
  ✓  181 [webkit] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示 (8.9s)
  ✓  182 [Mobile Chrome] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (9.0s)
  ✓  183 [webkit] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 8 秒内完成加载 (11.7s)
  ✓  184 [Mobile Chrome] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (9.9s)
  ✓  185 [Mobile Chrome] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 (9.7s)
  ✓  186 [webkit] › tests\trajectory.spec.js:309:3 › 性能测试 › Canvas 应该在 10 秒内初始化 (13.1s)
  ✓  187 [Mobile Chrome] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配 (13.6s)
  -  188 [Mobile Chrome] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  189 [Mobile Chrome] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  190 [Mobile Chrome] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  191 [Mobile Chrome] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  192 [Mobile Chrome] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  193 [Mobile Chrome] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  194 [Mobile Chrome] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  195 [Mobile Chrome] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  196 [Mobile Chrome] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  197 [Mobile Chrome] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  198 [Mobile Chrome] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  199 [Mobile Chrome] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  200 [Mobile Chrome] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓  201 [Mobile Chrome] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 (7.9s)
  ✓  202 [Mobile Safari] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (8.7s)
  ✓  203 [Mobile Chrome] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示 (8.6s)
  ✓  204 [Mobile Safari] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (19.4s)
  ✓  205 [Mobile Chrome] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 8 秒内完成加载 (9.0s)
  ✓  206 [Mobile Chrome] › tests\trajectory.spec.js:309:3 › 性能测试 › Canvas 应该在 10 秒内初始化 (8.9s)
  ✓  207 [Mobile Safari] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (15.0s)
  ✓  208 [Mobile Safari] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (17.4s)
  ✓  209 [Mobile Safari] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (7.4s)
  ✓  210 [Mobile Safari] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (6.8s)
  ✓  211 [Mobile Safari] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (7.7s)
  ✓  212 [Mobile Safari] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (8.1s)
  ✓  213 [Mobile Safari] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (7.3s)
  ✓  214 [Mobile Safari] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (9.6s)
  ✓  215 [Mobile Safari] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (6.6s)
  ✓  216 [Mobile Safari] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (9.6s)
  ✓  217 [Mobile Safari] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (7.2s)
  ✓  218 [Mobile Safari] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (7.2s)
  ✓  219 [Mobile Safari] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (8.2s)
  ✓  220 [Mobile Safari] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (9.8s)
  -  221 [Mobile Safari] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  222 [Mobile Safari] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  223 [Mobile Safari] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  224 [Mobile Safari] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  225 [Mobile Safari] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  226 [Mobile Safari] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  227 [Mobile Safari] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  228 [Mobile Safari] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  229 [Mobile Safari] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  230 [Mobile Safari] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  231 [Mobile Safari] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  232 [Mobile Safari] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  233 [Mobile Safari] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓  234 [Mobile Safari] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (17.2s)
  ✓  235 [iPad] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (5.2s)
  ✓  236 [iPad] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (5.3s)
  ✓  237 [iPad] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (6.3s)
  ✓  238 [Mobile Safari] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (23.3s)
  ✓  239 [iPad] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (5.8s)
  ✓  240 [iPad] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (5.0s)
  ✓  241 [iPad] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (4.7s)
  ✓  242 [iPad] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (4.6s)
  ✓  243 [iPad] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (4.9s)
  ✓  244 [Mobile Safari] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (13.4s)
  ✓  245 [iPad] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (5.7s)
  ✓  246 [iPad] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (6.4s)
  ✓  247 [Mobile Safari] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (20.3s)
  ✓  248 [iPad] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (6.0s)
  ✓  249 [iPad] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (5.7s)
  ✓  250 [iPad] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (6.0s)
  ✓  251 [iPad] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (6.0s)
  ✓  252 [Mobile Safari] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (9.9s)
  ✓  253 [iPad] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (6.3s)
  ✓  254 [Mobile Safari] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (13.0s)
  ✓  255 [iPad] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (6.4s)
  ✓  256 [iPad] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (7.1s)
  ✓  257 [Mobile Safari] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (18.7s)
  ✓  258 [iPad] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (5.9s)
  ✓  259 [iPad] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (6.8s)
  ✓  260 [iPad] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (16.0s)
  ✓  261 [Mobile Safari] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (15.0s)
  ✓  262 [iPad] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (6.8s)
  ✓  263 [Mobile Safari] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (16.4s)
  ✓  264 [iPad] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (7.0s)
  ✓  265 [iPad] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (7.1s)
  ✓  266 [Mobile Safari] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (15.9s)
  ✓  267 [iPad] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (5.3s)
  ✓  268 [iPad] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (6.5s)
  ✓  269 [iPad] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (8.2s)
  ✓  270 [Mobile Safari] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (11.0s)
  ✓  271 [iPad] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (6.2s)
  ✓  272 [Mobile Safari] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (9.1s)
  ✓  273 [iPad] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (6.0s)
  ✓  274 [iPad] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (6.0s)
  ✓  275 [Mobile Safari] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (10.8s)
  ✓  276 [iPad] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (6.6s)
  ✓  277 [Mobile Safari] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (11.4s)
  ✓  278 [iPad] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (7.1s)
  ✓  279 [iPad] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (6.4s)
  ✓  280 [Mobile Safari] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (9.0s)
  ✓  281 [iPad] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 (7.1s)
  ✓  282 [iPad] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配 (7.2s)
  ✓  283 [Mobile Safari] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (9.4s)
  ✓  284 [iPad] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 (4.9s)
  ✓  285 [Mobile Safari] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 (21.9s)
  ✓  286 [iPad] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示 (5.6s)
  ✓  287 [iPad] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 8 秒内完成加载 (5.9s)
  ✓  288 [iPad] › tests\trajectory.spec.js:309:3 › 性能测试 › Canvas 应该在 10 秒内初始化 (6.2s)
  -  289 [iPad] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  290 [iPad] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  291 [iPad] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  292 [iPad] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  293 [iPad] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  294 [iPad] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  295 [iPad] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  296 [iPad] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  297 [iPad] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  298 [iPad] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  299 [iPad] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  300 [iPad] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  301 [iPad] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓  302 [Mobile Safari] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配 (12.1s)
  ✓  303 [Mobile Safari] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 (9.8s)
  ✓  304 [Mobile Safari] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示 (9.1s)
  ✓  305 [Mobile Safari] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 8 秒内完成加载 (9.8s)
  ✓  306 [Mobile Safari] › tests\trajectory.spec.js:309:3 › 性能测试 › Canvas 应该在 10 秒内初始化 (8.6s)


  1) [chromium] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 8 秒内完成加载 ───────────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 8000
    Received:   12966

      304 |
      305 |     // 本地测试环境宽限为 8 秒（实际生产环境通常 < 2s）
    > 306 |     expect(loadTime).toBeLessThan(8000);
          |                      ^
      307 |   });
      308 |
      309 |   test('Canvas 应该在 10 秒内初始化', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:306:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-页面应该在-8-秒内完成加载-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-页面应该在-8-秒内完成加载-chromium\error-context.md

  2) [firefox] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 8 秒内完成加载 ────────────────────────────

    Test timeout of 60000ms exceeded.

    Error: page.waitForLoadState: Test timeout of 60000ms exceeded.

      300 |     const startTime = Date.now();
      301 |     await page.goto('/');
    > 302 |     await page.waitForLoadState('networkidle');
          |                ^
      303 |     const loadTime = Date.now() - startTime;
      304 |
      305 |     // 本地测试环境宽限为 8 秒（实际生产环境通常 < 2s）
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:302:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-页面应该在-8-秒内完成加载-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-页面应该在-8-秒内完成加载-firefox\error-context.md

  3) [webkit] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 ────────────────────────────

    TimeoutError: locator.click: Timeout 10000ms exceeded.
    Call log:
      - waiting for locator('.gallery-item').first()
        - locator resolved to <div class="gallery-item gallery-wide reveal">…</div>
      - attempting click action
        - waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed


      154 |     const lightbox = page.locator('#lightbox');
      155 |
    > 156 |     await galleryItem.click();
          |                       ^
      157 |     await expect(lightbox).toHaveClass(/active/);
      158 |   });
      159 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:156:23

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-UI-交互功能-点击图集图片应该打开灯箱-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-UI-交互功能-点击图集图片应该打开灯箱-webkit\error-context.md

  Slow test file: [Mobile Safari] › tests\trajectory.spec.js (5.9m)
  Consider running tests from slow files in parallel. See: https://playwright.dev/docs/test-parallel
  3 failed
    [chromium] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 8 秒内完成加载 ────────────────────────────
    [firefox] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 8 秒内完成加载 ─────────────────────────────
    [webkit] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 ─────────────────────────────
  78 skipped
  225 passed (23.5m)

To open last HTML report run:

  npx playwright show-report

PS D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project>