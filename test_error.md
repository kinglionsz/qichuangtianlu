 ✘  305 [Mobile Safari] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 (8.6s)
  ✘  306 [Mobile Safari] › tests\trajectory.spec.js:308:3 › 性能测试 › Canvas 应该在 5 秒内初始化 (12.1s)


  1) [chromium] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PLAY"
    Received: "PAUSE"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        12 × locator resolved to <button id="btn-play" class="cyber-btn active">PAUSE</button>
           - unexpected value "PAUSE"


      59 |       // 点击测试
      60 |       await playBtn.click();
    > 61 |       await expect(playBtn).toHaveText('PLAY');
         |                             ^
      62 |     });
      63 |
      64 |     test('图集应该支持触摸交互', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\mobile.spec.js:61:29

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-chromium\error-context.md

  2) [chromium] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ─────────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PLAY"
    Received: "PAUSE"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn active">PAUSE</button>
           - unexpected value "PAUSE"


      133 |     // 测试重置按钮
      134 |     await resetBtn.click();
    > 135 |     await expect(playBtn).toHaveText('PLAY'); // 重置后回到暂停状态
          |                           ^
      136 |   });
      137 | });
      138 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:135:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-轨迹控制按钮功能正常-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-轨迹控制按钮功能正常-chromium\error-context.md

  3) [chromium] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 ────────────────────────────

    Test timeout of 60000ms exceeded.

    Error: expect(locator).toHaveClass(expected) failed

    Locator: locator('#lightbox')
    Expected pattern: /active/
    Received string:  ""

    Call log:
      - Expect "toHaveClass" with timeout 10000ms
      - waiting for locator('#lightbox')


      163 |
      164 |     await galleryItem.click();
    > 165 |     await expect(lightbox).toHaveClass(/active/);
          |                            ^
      166 |
      167 |     await lightbox.click();
      168 |     await expect(lightbox).not.toHaveClass(/active/);
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:165:28

  4) [chromium] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 ────────────────────────────

    Test timeout of 60000ms exceeded while running "beforeEach" hook.

      141 | // ──────────────────────────────────────────────────────────────
      142 | test.describe('UI 交互功能', () => {
    > 143 |   test.beforeEach(async ({ page }) => {
          |        ^
      144 |     await page.goto('/');
      145 |   });
      146 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:143:8

    Error: page.goto: Test timeout of 60000ms exceeded.
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      142 | test.describe('UI 交互功能', () => {
      143 |   test.beforeEach(async ({ page }) => {
    > 144 |     await page.goto('/');
          |                ^
      145 |   });
      146 |
      147 |   test('应该存在 Lightbox 元素', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:144:16

  5) [chromium] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 ──────────────────────────────

    Error: browserType.launch: spawn UNKNOWN
    Call log:
      - <launching> C:\Users\kinglionsz\AppData\Local\ms-playwright\chromium_headless_shell-1208\chrome-headless-shell-win64\chrome-headless-shell.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=C:\Users\KINGLI~1\AppData\Local\Temp\playwright_chromiumdev_profile-DJpgNE --remote-debugging-pipe --no-startup-window


  6) [chromium] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 ───────────────────────────────

    Error: browserContext.close: Target page, context or browser has been closed

  7) [chromium] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 ───────────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 3000
    Received:   3235

      303 |     const loadTime = Date.now() - startTime;
      304 |
    > 305 |     expect(loadTime).toBeLessThan(3000);
          |                      ^
      306 |   });
      307 |
      308 |   test('Canvas 应该在 5 秒内初始化', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:305:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-chromium\error-context.md

  8) [firefox] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ─────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PLAY"
    Received: "PAUSE"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        12 × locator resolved to <button id="btn-play" class="cyber-btn active">PAUSE</button>
           - unexpected value "PAUSE"


      59 |       // 点击测试
      60 |       await playBtn.click();
    > 61 |       await expect(playBtn).toHaveText('PLAY');
         |                             ^
      62 |     });
      63 |
      64 |     test('图集应该支持触摸交互', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\mobile.spec.js:61:29

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-firefox\error-context.md

  9) [firefox] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ──────────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PLAY"
    Received: "PAUSE"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        12 × locator resolved to <button id="btn-play" class="cyber-btn active">PAUSE</button>
           - unexpected value "PAUSE"


      133 |     // 测试重置按钮
      134 |     await resetBtn.click();
    > 135 |     await expect(playBtn).toHaveText('PLAY'); // 重置后回到暂停状态
          |                           ^
      136 |   });
      137 | });
      138 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:135:27

  10) [firefox] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 ──────────────────────────

    Error: locator.click: Target crashed
    Call log:
      - waiting for locator('.gallery-item').first()


      154 |     const lightbox = page.locator('#lightbox');
      155 |
    > 156 |     await galleryItem.click();
          |                       ^
      157 |     await expect(lightbox).toHaveClass(/active/);
      158 |   });
      159 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:156:23

  11) [firefox] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 ─────────────────────────────────

    Error: expect(locator).toHaveCount(expected) failed

    Locator:  locator('.gallery-item')
    Expected: 9
    Received: undefined
    Timeout:  10000ms

    Call log:
      - Expect "toHaveCount" with timeout 10000ms
      - waiting for locator('.gallery-item')


      230 |   test('应该显示图集图片', async ({ page }) => {
      231 |     const galleryItems = page.locator('.gallery-item');
    > 232 |     await expect(galleryItems).toHaveCount(9);
          |                                ^
      233 |   });
      234 |
      235 |   test('应该显示统计数据', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:232:32

  12) [firefox] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 ───────────────────────────────

    Error: worker process exited unexpectedly (code=2147483651, signal=null)

  13) [firefox] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 ───────────────────────────

    Error: page.goto: Target page, context or browser has been closed
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      299 |   test('页面应该在 3 秒内完成加载', async ({ page }) => {
      300 |     const startTime = Date.now();
    > 301 |     await page.goto('/');
          |                ^
      302 |     await page.waitForLoadState('networkidle');
      303 |     const loadTime = Date.now() - startTime;
      304 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:301:16

  14) [firefox] › tests\trajectory.spec.js:308:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ───────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 5000
    Received:   6511

      312 |     const initTime = Date.now() - startTime;
      313 |
    > 314 |     expect(initTime).toBeLessThan(5000);
          |                      ^
      315 |   });
      316 | });
      317 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:314:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-firefox\error-context.md

  15) [webkit] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 ────────────────

    Test timeout of 60000ms exceeded while setting up "page".

    Error: browserContext.newPage: Test timeout of 60000ms exceeded.

  16) [webkit] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 ───────────────────

    Test timeout of 60000ms exceeded while setting up "page".

    Error: browserContext.newPage: Test timeout of 60000ms exceeded.

  17) [webkit] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ─────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PLAY"
    Received: "PAUSE"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn active">PAUSE</button>
           - unexpected value "PAUSE"


      59 |       // 点击测试
      60 |       await playBtn.click();
    > 61 |       await expect(playBtn).toHaveText('PLAY');
         |                             ^
      62 |     });
      63 |
      64 |     test('图集应该支持触摸交互', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\mobile.spec.js:61:29

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-webkit\error-context.md

  18) [webkit] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 ─────────────────

    Test timeout of 60000ms exceeded while setting up "page".

    Error: browserContext.newPage: Test timeout of 60000ms exceeded.

  19) [webkit] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 ───────────────────────────────────

    Test timeout of 60000ms exceeded while setting up "page".

    Error: browserContext.newPage: Test timeout of 60000ms exceeded.

  20) [webkit] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 ───────────────────────────────

    Error: worker process exited unexpectedly (code=134, signal=null)

  21) [webkit] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 ────────────────────────────────────

    Test timeout of 60000ms exceeded while setting up "page".

    Error: browserContext.newPage: Test timeout of 60000ms exceeded.

  22) [webkit] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 ───────────────────────────

    TimeoutError: page.waitForSelector: Timeout 5000ms exceeded.
    Call log:
      - waiting for locator('#trajectory-canvas') to be visible


      41 |     await page.goto('/');
      42 |     // 等待 Canvas 初始化
    > 43 |     await page.waitForSelector('#trajectory-canvas', { timeout: 5000 });
         |                ^
      44 |   });
      45 |
      46 |   test('应该存在 Canvas 元素', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:43:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-应该存在-Canvas-元素-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-应该存在-Canvas-元素-webkit\error-context.md

  23) [webkit] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ──────────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PLAY"
    Received: "PAUSE"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn active">PAUSE</button>
           - unexpected value "PAUSE"


      133 |     // 测试重置按钮
      134 |     await resetBtn.click();
    > 135 |     await expect(playBtn).toHaveText('PLAY'); // 重置后回到暂停状态
          |                           ^
      136 |   });
      137 | });
      138 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:135:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-轨迹控制按钮功能正常-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-轨迹控制按钮功能正常-webkit\error-context.md

  24) [webkit] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 ────────────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 3000
    Received:   3930

      303 |     const loadTime = Date.now() - startTime;
      304 |
    > 305 |     expect(loadTime).toBeLessThan(3000);
          |                      ^
      306 |   });
      307 |
      308 |   test('Canvas 应该在 5 秒内初始化', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:305:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-webkit\error-context.md

  25) [Mobile Chrome] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ──────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PLAY"
    Received: "PAUSE"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn active">PAUSE</button>
           - unexpected value "PAUSE"


      59 |       // 点击测试
      60 |       await playBtn.click();
    > 61 |       await expect(playBtn).toHaveText('PLAY');
         |                             ^
      62 |     });
      63 |
      64 |     test('图集应该支持触摸交互', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\mobile.spec.js:61:29

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-Mobile-Chrome\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-Mobile-Chrome\error-context.md

  26) [Mobile Chrome] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 ────────────────────────────

    Error: browserContext.close: Target page, context or browser has been closed

  27) [Mobile Chrome] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 ─────────────────────────────

    Error: browserContext.close: Target page, context or browser has been closed

  28) [Mobile Chrome] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 ──────────────────

    Tearing down "context" exceeded the test timeout of 60000ms.

    Error: browserContext.close: Target page, context or browser has been closed

  29) [Mobile Chrome] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ─────────────────

    TimeoutError: page.waitForSelector: Timeout 5000ms exceeded.
    Call log:
      - waiting for locator('#trajectory-canvas') to be visible


      41 |     await page.goto('/');
      42 |     // 等待 Canvas 初始化
    > 43 |     await page.waitForSelector('#trajectory-canvas', { timeout: 5000 });
         |                ^
      44 |   });
      45 |
      46 |   test('应该存在 Canvas 元素', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:43:16

  30) [Mobile Chrome] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 ────────────────

    Test timeout of 60000ms exceeded while running "beforeEach" hook.

      38 | // ──────────────────────────────────────────────────────────────
      39 | test.describe('轨迹动画功能', () => {
    > 40 |   test.beforeEach(async ({ page }) => {
         |        ^
      41 |     await page.goto('/');
      42 |     // 等待 Canvas 初始化
      43 |     await page.waitForSelector('#trajectory-canvas', { timeout: 5000 });
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:40:8

    Error: page.goto: Test timeout of 60000ms exceeded.
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      39 | test.describe('轨迹动画功能', () => {
      40 |   test.beforeEach(async ({ page }) => {
    > 41 |     await page.goto('/');
         |                ^
      42 |     // 等待 Canvas 初始化
      43 |     await page.waitForSelector('#trajectory-canvas', { timeout: 5000 });
      44 |   });
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:41:16

  31) [Mobile Chrome] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ───────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PLAY"
    Received: "PAUSE"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn active">PAUSE</button>
           - unexpected value "PAUSE"


      133 |     // 测试重置按钮
      134 |     await resetBtn.click();
    > 135 |     await expect(playBtn).toHaveText('PLAY'); // 重置后回到暂停状态
          |                           ^
      136 |   });
      137 | });
      138 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:135:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-轨迹控制按钮功能正常-Mobile-Chrome\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-轨迹控制按钮功能正常-Mobile-Chrome\error-context.md

  32) [Mobile Chrome] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 ─────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 3000
    Received:   3331

      303 |     const loadTime = Date.now() - startTime;
      304 |
    > 305 |     expect(loadTime).toBeLessThan(3000);
          |                      ^
      306 |   });
      307 |
      308 |   test('Canvas 应该在 5 秒内初始化', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:305:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-Mobile-Chrome\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-Mobile-Chrome\error-context.md

  33) [Mobile Safari] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ──────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PLAY"
    Received: "PAUSE"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn active">PAUSE</button>
           - unexpected value "PAUSE"


      59 |       // 点击测试
      60 |       await playBtn.click();
    > 61 |       await expect(playBtn).toHaveText('PLAY');
         |                             ^
      62 |     });
      63 |
      64 |     test('图集应该支持触摸交互', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\mobile.spec.js:61:29

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-Mobile-Safari\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-Mobile-Safari\error-context.md

  34) [Mobile Safari] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ───────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PLAY"
    Received: "PAUSE"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        11 × locator resolved to <button id="btn-play" class="cyber-btn active">PAUSE</button>
           - unexpected value "PAUSE"


      133 |     // 测试重置按钮
      134 |     await resetBtn.click();
    > 135 |     await expect(playBtn).toHaveText('PLAY'); // 重置后回到暂停状态
          |                           ^
      136 |   });
      137 | });
      138 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:135:27

    Error Context: test-results\trajectory-轨迹动画功能-轨迹控制按钮功能正常-Mobile-Safari\error-context.md

  35) [Mobile Safari] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 ────────────────────

    TimeoutError: locator.click: Timeout 10000ms exceeded.
    Call log:
      - waiting for locator('.gallery-item').first()
        - locator resolved to <div class="gallery-item gallery-wide reveal">…</div>
      - attempting click action
        - waiting for element to be visible, enabled and stable


      154 |     const lightbox = page.locator('#lightbox');
      155 |
    > 156 |     await galleryItem.click();
          |                       ^
      157 |     await expect(lightbox).toHaveClass(/active/);
      158 |   });
      159 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:156:23

    Error Context: test-results\trajectory-UI-交互功能-点击图集图片应该打开灯箱-Mobile-Safari\error-context.md

  36) [Mobile Safari] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 ──────────────────────

    TimeoutError: locator.click: Timeout 10000ms exceeded.
    Call log:
      - waiting for locator('.gallery-item').first()
        - locator resolved to <div class="gallery-item gallery-wide reveal">…</div>
      - attempting click action
        - waiting for element to be visible, enabled and stable


      162 |     const lightbox = page.locator('#lightbox');
      163 |
    > 164 |     await galleryItem.click();
          |                       ^
      165 |     await expect(lightbox).toHaveClass(/active/);
      166 |
      167 |     await lightbox.click();
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:164:23

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-UI-交互功能-点击灯箱应该关闭预览-Mobile-Safari\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-UI-交互功能-点击灯箱应该关闭预览-Mobile-Safari\error-context.md

  37) [Mobile Safari] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 ─────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 3000
    Received:   4184

      303 |     const loadTime = Date.now() - startTime;
      304 |
    > 305 |     expect(loadTime).toBeLessThan(3000);
          |                      ^
      306 |   });
      307 |
      308 |   test('Canvas 应该在 5 秒内初始化', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:305:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-Mobile-Safari\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-Mobile-Safari\error-context.md

  38) [Mobile Safari] › tests\trajectory.spec.js:308:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ─────────────────

    TimeoutError: page.waitForSelector: Timeout 5000ms exceeded.
    Call log:
      - waiting for locator('#trajectory-canvas') to be visible


      309 |     const startTime = Date.now();
      310 |     await page.goto('/');
    > 311 |     await page.waitForSelector('#trajectory-canvas', { timeout: 5000 });
          |                ^
      312 |     const initTime = Date.now() - startTime;
      313 |
      314 |     expect(initTime).toBeLessThan(5000);
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:311:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-Mobile-Safari\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-Mobile-Safari\error-context.md

  39) [iPad] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ───────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PLAY"
    Received: "PAUSE"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn active">PAUSE</button>
           - unexpected value "PAUSE"


      59 |       // 点击测试
      60 |       await playBtn.click();
    > 61 |       await expect(playBtn).toHaveText('PLAY');
         |                             ^
      62 |     });
      63 |
      64 |     test('图集应该支持触摸交互', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\mobile.spec.js:61:29

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-iPad\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\mobile-移动端专项测试-iPhone-12-轨迹控制按钮应该可点击-iPad\error-context.md

  40) [iPad] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ────────────────────────────────

    Test timeout of 60000ms exceeded while running "beforeEach" hook.

      38 | // ──────────────────────────────────────────────────────────────
      39 | test.describe('轨迹动画功能', () => {
    > 40 |   test.beforeEach(async ({ page }) => {
         |        ^
      41 |     await page.goto('/');
      42 |     // 等待 Canvas 初始化
      43 |     await page.waitForSelector('#trajectory-canvas', { timeout: 5000 });
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:40:8

    Error Context: test-results\trajectory-轨迹动画功能-轨迹控制按钮功能正常-iPad\error-context.md

  41) [iPad] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 ─────────────────────────

    Error: EINVAL

  41 failed
    [chromium] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ─────────────────────
    [chromium] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ──────────────────────────────
    [chromium] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 ─────────────────────────────
    [chromium] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 ─────────────────────────────
    [chromium] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 ───────────────────────────────
    [chromium] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 ────────────────────────────────
    [chromium] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 ────────────────────────────
    [firefox] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ──────────────────────
    [firefox] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ───────────────────────────────
    [firefox] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 ────────────────────────────
    [firefox] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 ───────────────────────────────────
    [firefox] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 ─────────────────────────────────
    [firefox] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 ─────────────────────────────
    [firefox] › tests\trajectory.spec.js:308:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ─────────────────────────
    [webkit] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 ──────────────────
    [webkit] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 ─────────────────────
    [webkit] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ───────────────────────
    [webkit] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 ───────────────────
    [webkit] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 ─────────────────────────────────────
    [webkit] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 ─────────────────────────────────
    [webkit] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 ──────────────────────────────────────
    [webkit] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 ─────────────────────────────
    [webkit] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ────────────────────────────────
    [webkit] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 ──────────────────────────────
    [Mobile Chrome] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 ──────────────────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 ───────────────────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 ────────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ───────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 ──────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ─────────────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 ───────────────────────
    [Mobile Safari] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ────────────────
    [Mobile Safari] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ─────────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 ──────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 ────────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 ───────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:308:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ───────────────────
    [iPad] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ─────────────────────────
    [iPad] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 ──────────────────────────────────
    [iPad] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 ───────────────────────────
  78 skipped
  17 did not run
  170 passed (33.7m)

To open last HTML report run:

  npx playwright show-report

PS D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project>  npx playwright show-report

  Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.
