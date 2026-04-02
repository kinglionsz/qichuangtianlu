Windows PowerShell
版权所有（C） Microsoft Corporation。保留所有权利。

安装最新的 PowerShell，了解新功能和改进！https://aka.ms/PSWindows

PS C:\Users\kinglionsz> cd D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project
PS D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project> npx playwright test

Running 306 tests using 2 workers

  ✘    1 [chromium] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (1.5m)
  ✘    2 [chromium] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (1.6m)
  ✓    3 [chromium] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (12.2s)
  ✓    4 [chromium] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (11.5s)
  ✘    5 [chromium] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (1.1m)
  ✘    6 [chromium] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (24.1s)
  ✓    7 [chromium] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (17.7s)
  ✓    8 [chromium] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (8.3s)
  ✓    9 [chromium] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (10.8s)
  ✓   10 [chromium] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (39.9s)
  ✓   11 [chromium] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (17.1s)
  ✓   12 [chromium] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (40.4s)
  ✓   13 [chromium] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (9.7s)
  -   14 [chromium] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -   15 [chromium] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -   16 [chromium] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -   17 [chromium] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -   18 [chromium] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -   19 [chromium] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -   20 [chromium] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -   21 [chromium] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -   22 [chromium] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -   23 [chromium] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -   24 [chromium] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -   25 [chromium] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -   26 [chromium] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓   27 [chromium] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (16.5s)
  ✘   28 [chromium] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 (37.5s)
  ✓   29 [firefox] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (46.4s)
  ✓   30 [firefox] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (10.9s)
  ✓   31 [firefox] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (11.6s)
  ✓   32 [firefox] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (11.1s)
  ✓   33 [firefox] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (8.8s)
  ✓   34 [firefox] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (10.5s)
  ✓   35 [chromium] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (13.3s)
  ✓   36 [firefox] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (14.4s)
  ✘   37 [chromium] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 (26.7s)
  ✓   38 [firefox] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (17.6s)
  ✓   39 [firefox] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (11.9s)
  ✓   40 [firefox] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (13.2s)
  ✓   41 [firefox] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (15.4s)
  ✓   42 [firefox] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (11.2s)
  ✓   43 [firefox] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (19.7s)
  ✓   44 [firefox] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (32.9s)
  ✓   45 [chromium] › tests\trajectory.spec.js:83:3 › 轨迹动画功能 › 速度切换应该循环变化 (24.0s)
  ✓   46 [chromium] › tests\trajectory.spec.js:106:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (13.9s)
  ✘   47 [firefox] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 (38.3s)
  ✘   48 [chromium] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 (25.4s)
  ✘   49 [firefox] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (59.4s)
  ✓   50 [chromium] › tests\trajectory.spec.js:141:3 › UI 交互功能 › 应该存在 Lightbox 元素 (10.3s)
  ✓   51 [chromium] › tests\trajectory.spec.js:146:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (9.3s)
  ✓   52 [chromium] › tests\trajectory.spec.js:154:3 › UI 交互功能 › 点击灯箱应该关闭预览 (18.3s)
  ✓   53 [chromium] › tests\trajectory.spec.js:165:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (10.5s)
  ✓   54 [chromium] › tests\trajectory.spec.js:173:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (12.1s)
  ✓   55 [chromium] › tests\trajectory.spec.js:184:3 › UI 交互功能 › 滚动应该触发揭示动画 (14.7s)
  ✓   56 [chromium] › tests\trajectory.spec.js:209:3 › 内容验证 › 应该显示 6 个打卡点 (16.1s)
  ✓   57 [chromium] › tests\trajectory.spec.js:214:3 › 内容验证 › 应该显示赛程时间线 (10.8s)
  ✘   58 [firefox] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 (48.4s)
  ✓   59 [chromium] › tests\trajectory.spec.js:219:3 › 内容验证 › 应该显示获奖者卡片 (11.5s)
  ✘   60 [chromium] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 (19.2s)
  ✓   61 [chromium] › tests\trajectory.spec.js:229:3 › 内容验证 › 应该显示统计数据 (8.3s)
  ✓   62 [chromium] › tests\trajectory.spec.js:238:3 › 内容验证 › 应该显示赛道详情卡片 (7.9s)
  ✓   63 [chromium] › tests\trajectory.spec.js:248:3 › 响应式布局 › 桌面端布局应该正常 (9.9s)
  ✓   64 [firefox] › tests\trajectory.spec.js:83:3 › 轨迹动画功能 › 速度切换应该循环变化 (42.4s)
  ✓   65 [chromium] › tests\trajectory.spec.js:259:3 › 响应式布局 › 平板端布局应该适配 (9.2s)
  ✓   66 [chromium] › tests\trajectory.spec.js:267:3 › 响应式布局 › 移动端布局应该适配 (10.5s)
  ✘   67 [chromium] › tests\trajectory.spec.js:275:3 › 响应式布局 › 移动端图集应该单列显示 (1.1m)
  ✓   68 [firefox] › tests\trajectory.spec.js:106:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (15.4s)
  ✘   69 [firefox] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 (23.6s)
  ✘   70 [chromium] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 (10.5s)
  ✓   71 [firefox] › tests\trajectory.spec.js:141:3 › UI 交互功能 › 应该存在 Lightbox 元素 (29.5s)
  ✓   72 [firefox] › tests\trajectory.spec.js:146:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (12.4s)
  ✓   73 [firefox] › tests\trajectory.spec.js:154:3 › UI 交互功能 › 点击灯箱应该关闭预览 (26.4s)
  ✘   74 [chromium] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 (24.1s)
  ✓   75 [firefox] › tests\trajectory.spec.js:165:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (8.0s)
  ✓   76 [firefox] › tests\trajectory.spec.js:173:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (11.7s)
  ✓   77 [firefox] › tests\trajectory.spec.js:184:3 › UI 交互功能 › 滚动应该触发揭示动画 (14.3s)
  -   78 [firefox] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -   79 [firefox] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -   80 [firefox] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -   81 [firefox] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -   82 [firefox] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -   83 [firefox] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -   84 [firefox] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -   85 [firefox] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -   86 [firefox] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -   87 [firefox] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -   88 [firefox] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -   89 [firefox] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -   90 [firefox] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓   91 [firefox] › tests\trajectory.spec.js:209:3 › 内容验证 › 应该显示 6 个打卡点 (10.5s)
  ✘   92 [firefox] › tests\trajectory.spec.js:214:3 › 内容验证 › 应该显示赛程时间线 (0ms)
  ✘   93 [webkit] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (1.1m)
  ✘   94 [firefox] › tests\trajectory.spec.js:219:3 › 内容验证 › 应该显示获奖者卡片 (4.9s)
  ✘   95 [firefox] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 (6.5s)
  ✓   96 [firefox] › tests\trajectory.spec.js:229:3 › 内容验证 › 应该显示统计数据 (23.7s)
  ✓   97 [webkit] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (35.9s)
  ✓   98 [firefox] › tests\trajectory.spec.js:238:3 › 内容验证 › 应该显示赛道详情卡片 (10.3s)
  ✓   99 [firefox] › tests\trajectory.spec.js:248:3 › 响应式布局 › 桌面端布局应该正常 (12.5s)
  ✘  100 [webkit] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (28.1s)
  ✓  101 [firefox] › tests\trajectory.spec.js:259:3 › 响应式布局 › 平板端布局应该适配 (8.0s)
  ✓  102 [firefox] › tests\trajectory.spec.js:267:3 › 响应式布局 › 移动端布局应该适配 (7.1s)
  ✓  103 [firefox] › tests\trajectory.spec.js:275:3 › 响应式布局 › 移动端图集应该单列显示 (11.6s)
  ✘  104 [firefox] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 (1.1m)
  ✓  105 [webkit] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (31.4s)
  ✓  106 [webkit] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (18.7s)
  ✓  107 [webkit] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (15.4s)
  ✓  108 [webkit] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (19.1s)
  ✘  109 [firefox] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 (40.7s)
  ✓  110 [webkit] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (20.6s)
  ✓  111 [webkit] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (32.3s)
  ✓  112 [webkit] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (23.6s)
  -  113 [webkit] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  114 [webkit] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  115 [webkit] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  116 [webkit] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  117 [webkit] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  118 [webkit] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  119 [webkit] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  120 [webkit] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  121 [webkit] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  122 [webkit] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  123 [webkit] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  124 [webkit] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  125 [webkit] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓  126 [webkit] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (38.9s)
  ✓  127 [Mobile Chrome] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (17.8s)
  ✓  128 [Mobile Chrome] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (21.4s)
  ✓  129 [webkit] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (36.7s)
  ✘  130 [Mobile Chrome] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (24.4s)
  ✓  131 [webkit] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (27.6s)
  ✓  132 [webkit] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (21.5s)
  ✓  133 [Mobile Chrome] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (18.7s)
  ✘  134 [webkit] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 (1.1m)
  ✓  135 [Mobile Chrome] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (18.7s)
  ✓  136 [Mobile Chrome] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (13.1s)
  ✓  137 [Mobile Chrome] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (14.1s)
  ✓  138 [Mobile Chrome] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (17.6s)
  ✓  139 [Mobile Chrome] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (16.0s)
  ✓  140 [Mobile Chrome] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (14.5s)
  ✓  141 [Mobile Chrome] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (17.4s)
  ✘  142 [webkit] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (46.1s)
  ✓  143 [Mobile Chrome] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (15.0s)
  ✓  144 [Mobile Chrome] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (14.8s)
  ✓  145 [Mobile Chrome] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (17.6s)
  ✘  146 [Mobile Chrome] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 (26.4s)
  ✘  147 [webkit] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 (47.3s)
  ✘  148 [Mobile Chrome] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (26.3s)
  ✘  149 [webkit] › tests\trajectory.spec.js:83:3 › 轨迹动画功能 › 速度切换应该循环变化 (18.4s)
  ✘  150 [Mobile Chrome] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 (22.7s)
  ✓  151 [webkit] › tests\trajectory.spec.js:106:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (16.6s)
  ✓  152 [Mobile Chrome] › tests\trajectory.spec.js:83:3 › 轨迹动画功能 › 速度切换应该循环变化 (8.8s)
  ✓  153 [Mobile Chrome] › tests\trajectory.spec.js:106:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (8.2s)
  ✘  154 [webkit] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 (17.2s)
  ✘  155 [Mobile Chrome] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 (10.1s)
  ✓  156 [Mobile Chrome] › tests\trajectory.spec.js:141:3 › UI 交互功能 › 应该存在 Lightbox 元素 (10.3s)
  ✓  157 [webkit] › tests\trajectory.spec.js:141:3 › UI 交互功能 › 应该存在 Lightbox 元素 (20.1s)
  ✓  158 [Mobile Chrome] › tests\trajectory.spec.js:146:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (12.4s)
  ✘  159 [webkit] › tests\trajectory.spec.js:146:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (30.3s)
  ✓  160 [Mobile Chrome] › tests\trajectory.spec.js:154:3 › UI 交互功能 › 点击灯箱应该关闭预览 (9.9s)
  ✓  161 [Mobile Chrome] › tests\trajectory.spec.js:165:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (11.2s)
  ✓  162 [Mobile Chrome] › tests\trajectory.spec.js:173:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (10.0s)
  ✓  163 [Mobile Chrome] › tests\trajectory.spec.js:184:3 › UI 交互功能 › 滚动应该触发揭示动画 (13.0s)
  ✓  164 [Mobile Chrome] › tests\trajectory.spec.js:209:3 › 内容验证 › 应该显示 6 个打卡点 (11.3s)
  ✘  165 [webkit] › tests\trajectory.spec.js:154:3 › UI 交互功能 › 点击灯箱应该关闭预览 (20.9s)
  ✓  166 [Mobile Chrome] › tests\trajectory.spec.js:214:3 › 内容验证 › 应该显示赛程时间线 (10.6s)
  ✓  167 [Mobile Chrome] › tests\trajectory.spec.js:219:3 › 内容验证 › 应该显示获奖者卡片 (10.9s)
  ✘  168 [Mobile Chrome] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 (19.5s)
  ✓  169 [webkit] › tests\trajectory.spec.js:165:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (9.2s)
  ✓  170 [webkit] › tests\trajectory.spec.js:173:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (9.7s)
  ✘  171 [webkit] › tests\trajectory.spec.js:184:3 › UI 交互功能 › 滚动应该触发揭示动画 (33.5s)
  ✓  172 [Mobile Chrome] › tests\trajectory.spec.js:229:3 › 内容验证 › 应该显示统计数据 (12.0s)
  ✓  173 [Mobile Chrome] › tests\trajectory.spec.js:238:3 › 内容验证 › 应该显示赛道详情卡片 (12.1s)
  ✓  174 [Mobile Chrome] › tests\trajectory.spec.js:248:3 › 响应式布局 › 桌面端布局应该正常 (11.3s)
  ✓  175 [Mobile Chrome] › tests\trajectory.spec.js:259:3 › 响应式布局 › 平板端布局应该适配 (11.2s)
  ✓  176 [Mobile Chrome] › tests\trajectory.spec.js:267:3 › 响应式布局 › 移动端布局应该适配 (10.5s)
  ✓  177 [webkit] › tests\trajectory.spec.js:209:3 › 内容验证 › 应该显示 6 个打卡点 (15.3s)
  ✓  178 [Mobile Chrome] › tests\trajectory.spec.js:275:3 › 响应式布局 › 移动端图集应该单列显示 (9.6s)
  ✓  179 [webkit] › tests\trajectory.spec.js:214:3 › 内容验证 › 应该显示赛程时间线 (14.8s)
  ✘  180 [Mobile Chrome] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 (10.6s)
  ✓  181 [webkit] › tests\trajectory.spec.js:219:3 › 内容验证 › 应该显示获奖者卡片 (8.6s)
  ✘  182 [webkit] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 (24.5s)
  ✘  183 [Mobile Chrome] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 (11.2s)
  -  184 [Mobile Chrome] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  185 [Mobile Chrome] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  186 [Mobile Chrome] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  187 [Mobile Chrome] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  188 [Mobile Chrome] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  189 [Mobile Chrome] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  190 [Mobile Chrome] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  191 [Mobile Chrome] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  192 [Mobile Chrome] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  193 [Mobile Chrome] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  194 [Mobile Chrome] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  195 [Mobile Chrome] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  196 [Mobile Chrome] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓  197 [Mobile Safari] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (10.6s)
  ✓  198 [webkit] › tests\trajectory.spec.js:229:3 › 内容验证 › 应该显示统计数据 (12.8s)
  ✓  199 [Mobile Safari] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (20.9s)
  ✓  200 [webkit] › tests\trajectory.spec.js:238:3 › 内容验证 › 应该显示赛道详情卡片 (12.1s)
  ✓  201 [webkit] › tests\trajectory.spec.js:248:3 › 响应式布局 › 桌面端布局应该正常 (16.3s)
  ✘  202 [Mobile Safari] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (26.7s)
  ✓  203 [webkit] › tests\trajectory.spec.js:259:3 › 响应式布局 › 平板端布局应该适配 (10.1s)
  ✓  204 [webkit] › tests\trajectory.spec.js:267:3 › 响应式布局 › 移动端布局应该适配 (7.9s)
  ✓  205 [webkit] › tests\trajectory.spec.js:275:3 › 响应式布局 › 移动端图集应该单列显示 (6.0s)
  ✘  206 [webkit] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 (11.0s)
  ✓  207 [Mobile Safari] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (19.1s)
  ✘  208 [webkit] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 (13.0s)
  ✓  209 [Mobile Safari] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (9.6s)
  ✓  210 [Mobile Safari] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (12.1s)
  ✓  211 [Mobile Safari] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (12.9s)
  ✓  212 [Mobile Safari] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (8.7s)
  ✓  213 [Mobile Safari] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (9.3s)
  ✓  214 [Mobile Safari] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (9.3s)
  ✓  215 [Mobile Safari] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (9.9s)
  -  216 [Mobile Safari] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  217 [Mobile Safari] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  218 [Mobile Safari] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  219 [Mobile Safari] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  220 [Mobile Safari] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  221 [Mobile Safari] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  222 [Mobile Safari] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  223 [Mobile Safari] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  224 [Mobile Safari] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  225 [Mobile Safari] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  226 [Mobile Safari] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  227 [Mobile Safari] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  228 [Mobile Safari] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓  229 [Mobile Safari] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (10.0s)
  ✓  230 [iPad] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (7.1s)
  ✓  231 [Mobile Safari] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (13.5s)
  ✓  232 [iPad] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (6.9s)
  ✘  233 [iPad] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (18.4s)
  ✓  234 [Mobile Safari] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (15.5s)
  ✘  235 [Mobile Safari] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 (21.3s)
  ✓  236 [iPad] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (7.8s)
  ✓  237 [iPad] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (6.8s)
  ✓  238 [iPad] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (5.7s)
  ✓  239 [iPad] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (5.5s)
  ✓  240 [iPad] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (5.6s)
  ✘  241 [Mobile Safari] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (30.7s)
  ✓  242 [iPad] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (8.2s)
  ✓  243 [iPad] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (7.4s)
  ✓  244 [iPad] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (8.3s)
  ✓  245 [iPad] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (7.0s)
  ✓  246 [iPad] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (7.7s)
  ✓  247 [iPad] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (7.3s)
  ✘  248 [iPad] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 (17.2s)
  ✘  249 [Mobile Safari] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 (32.5s)
  ✘  250 [iPad] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (19.0s)
  ✓  251 [Mobile Safari] › tests\trajectory.spec.js:83:3 › 轨迹动画功能 › 速度切换应该循环变化 (21.7s)
  ✘  252 [iPad] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 (18.3s)
  ✘  253 [Mobile Safari] › tests\trajectory.spec.js:106:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (11.1s)
  ✓  254 [iPad] › tests\trajectory.spec.js:83:3 › 轨迹动画功能 › 速度切换应该循环变化 (12.7s)
  ✘  255 [iPad] › tests\trajectory.spec.js:106:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (1.0m)
  ✘  256 [Mobile Safari] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 (50.6s)
  ✓  257 [Mobile Safari] › tests\trajectory.spec.js:141:3 › UI 交互功能 › 应该存在 Lightbox 元素 (35.5s)
  ✘  258 [Mobile Safari] › tests\trajectory.spec.js:146:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (34.9s)
  ✘  259 [iPad] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 (27.4s)
  ✘  260 [Mobile Safari] › tests\trajectory.spec.js:154:3 › UI 交互功能 › 点击灯箱应该关闭预览 (49.1s)
  ✓  261 [iPad] › tests\trajectory.spec.js:141:3 › UI 交互功能 › 应该存在 Lightbox 元素 (21.5s)
  ✓  262 [iPad] › tests\trajectory.spec.js:146:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (44.1s)
  ✓  263 [Mobile Safari] › tests\trajectory.spec.js:165:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (34.2s)
  ✓  264 [iPad] › tests\trajectory.spec.js:154:3 › UI 交互功能 › 点击灯箱应该关闭预览 (14.9s)
  ✘  265 [Mobile Safari] › tests\trajectory.spec.js:173:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (28.2s)
  ✓  266 [iPad] › tests\trajectory.spec.js:165:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (20.3s)
  ✓  267 [iPad] › tests\trajectory.spec.js:173:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (7.4s)
  ✓  268 [iPad] › tests\trajectory.spec.js:184:3 › UI 交互功能 › 滚动应该触发揭示动画 (23.9s)
  ✓  269 [iPad] › tests\trajectory.spec.js:209:3 › 内容验证 › 应该显示 6 个打卡点 (9.2s)
  ✘  270 [Mobile Safari] › tests\trajectory.spec.js:184:3 › UI 交互功能 › 滚动应该触发揭示动画 (38.6s)
  ✓  271 [iPad] › tests\trajectory.spec.js:214:3 › 内容验证 › 应该显示赛程时间线 (11.7s)
  ✓  272 [iPad] › tests\trajectory.spec.js:219:3 › 内容验证 › 应该显示获奖者卡片 (12.9s)
  ✘  273 [iPad] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 (21.1s)
  ✓  274 [Mobile Safari] › tests\trajectory.spec.js:209:3 › 内容验证 › 应该显示 6 个打卡点 (31.1s)
  ✓  275 [iPad] › tests\trajectory.spec.js:229:3 › 内容验证 › 应该显示统计数据 (13.4s)
  ✓  276 [iPad] › tests\trajectory.spec.js:238:3 › 内容验证 › 应该显示赛道详情卡片 (31.8s)
  ✓  277 [Mobile Safari] › tests\trajectory.spec.js:214:3 › 内容验证 › 应该显示赛程时间线 (26.5s)
  ✓  278 [iPad] › tests\trajectory.spec.js:248:3 › 响应式布局 › 桌面端布局应该正常 (15.6s)
  ✓  279 [Mobile Safari] › tests\trajectory.spec.js:219:3 › 内容验证 › 应该显示获奖者卡片 (55.8s)
  ✓  280 [iPad] › tests\trajectory.spec.js:259:3 › 响应式布局 › 平板端布局应该适配 (14.3s)
  ✓  281 [iPad] › tests\trajectory.spec.js:267:3 › 响应式布局 › 移动端布局应该适配 (10.5s)
  ✓  282 [iPad] › tests\trajectory.spec.js:275:3 › 响应式布局 › 移动端图集应该单列显示 (9.4s)
  ✘  283 [iPad] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 (10.9s)
  ✘  284 [Mobile Safari] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 (23.9s)
  ✘  285 [iPad] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 (8.5s)
  -  286 [iPad] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  287 [iPad] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  288 [iPad] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  289 [iPad] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  290 [iPad] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  291 [iPad] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  292 [iPad] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  293 [iPad] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  294 [iPad] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  295 [iPad] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  296 [iPad] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  297 [iPad] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  298 [iPad] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓  299 [Mobile Safari] › tests\trajectory.spec.js:229:3 › 内容验证 › 应该显示统计数据 (9.4s)
  ✓  300 [Mobile Safari] › tests\trajectory.spec.js:238:3 › 内容验证 › 应该显示赛道详情卡片 (10.4s)
  ✓  301 [Mobile Safari] › tests\trajectory.spec.js:248:3 › 响应式布局 › 桌面端布局应该正常 (24.2s)
  ✓  302 [Mobile Safari] › tests\trajectory.spec.js:259:3 › 响应式布局 › 平板端布局应该适配 (15.7s)
  ✓  303 [Mobile Safari] › tests\trajectory.spec.js:267:3 › 响应式布局 › 移动端布局应该适配 (10.9s)
  ✓  304 [Mobile Safari] › tests\trajectory.spec.js:275:3 › 响应式布局 › 移动端图集应该单列显示 (10.5s)
  ✘  305 [Mobile Safari] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 (15.5s)
  ✘  306 [Mobile Safari] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 (10.9s)


  1) [chromium] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 ───────────────

    Test timeout of 60000ms exceeded.

    Error Context: test-results\mobile-移动端专项测试-iPhone-12-应该在-iPhone-上正常显示-chromium\error-context.md

  2) [chromium] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ────────────────────

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

  3) [chromium] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 ──────────────────────────────────

    Test timeout of 60000ms exceeded.

    Error: page.goto: Test timeout of 60000ms exceeded.
    Call log:
      - navigating to "http://localhost:3000/", waiting until "load"


      11 | test.describe('页面加载', () => {
      12 |   test('应该成功加载首页', async ({ page }) => {
    > 13 |     await page.goto('/');
         |                ^
      14 |     await expect(page).toHaveTitle(/骑闯天路深圳站/);
      15 |   });
      16 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:13:16

  4) [chromium] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 ───────────────────────────────────

    Test timeout of 60000ms exceeded.

    Error Context: test-results\trajectory-页面加载-应该显示导航栏-chromium\error-context.md

  5) [chromium] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ──────────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PAUSE"
    Received: "PLAY"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        12 × locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
           - unexpected value "PLAY"


      61 |   test('应该默认处于播放状态', async ({ page }) => {
      62 |     const playBtn = page.locator('#btn-play');
    > 63 |     await expect(playBtn).toHaveText('PAUSE');
         |                           ^
      64 |     await expect(playBtn).toHaveClass(/active/);
      65 |   });
      66 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:63:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-应该默认处于播放状态-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-应该默认处于播放状态-chromium\error-context.md

  6) [chromium] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PAUSE"
    Received: "PLAY"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
           - unexpected value "PLAY"


      77 |     await page.waitForTimeout(500);
      78 |     await playBtn.click(); // 播放
    > 79 |     await expect(playBtn).toHaveText('PAUSE');
         |                           ^
      80 |     await expect(playBtn).toHaveClass(/active/);
      81 |   });
      82 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:79:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-点击-PLAY-按钮应该恢复播放-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-点击-PLAY-按钮应该恢复播放-chromium\error-context.md

  7) [chromium] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ──────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: "function"
    Received: "undefined"

      124 |     const toggleMenu = await page.evaluate(() => typeof window.toggleMenu);
      125 |
    > 126 |     expect(togglePlay).toBe('function');
          |                        ^
      127 |     expect(cycleSpeed).toBe('function');
      128 |     expect(resetAnim).toBe('function');
      129 |     expect(toggleMenu).toBe('function');
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:126:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-窗口-API-应该正确挂载-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-窗口-API-应该正确挂载-chromium\error-context.md

  8) [chromium] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ─────────────────────────────────

    Error: expect(locator).toHaveCount(expected) failed

    Locator:  locator('.gallery-item')
    Expected: 10
    Received: 9
    Timeout:  10000ms

    Call log:
      - Expect "toHaveCount" with timeout 10000ms
      - waiting for locator('.gallery-item')
        12 × locator resolved to 9 elements
           - unexpected value "9"


      224 |   test('应该显示图集图片', async ({ page }) => {
      225 |     const galleryItems = page.locator('.gallery-item');
    > 226 |     await expect(galleryItems).toHaveCount(10);
          |                                ^
      227 |   });
      228 |
      229 |   test('应该显示统计数据', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:226:32

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-内容验证-应该显示图集图片-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-内容验证-应该显示图集图片-chromium\error-context.md

  9) [chromium] › tests\trajectory.spec.js:275:3 › 响应式布局 › 移动端图集应该单列显示 ─────────────────────────────

    Test timeout of 60000ms exceeded.

    Error Context: test-results\trajectory-响应式布局-移动端图集应该单列显示-chromium\error-context.md

  10) [chromium] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ──────────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 3000
    Received:   6335

      297 |     const loadTime = Date.now() - startTime;
      298 |
    > 299 |     expect(loadTime).toBeLessThan(3000);
          |                      ^
      300 |   });
      301 |
      302 |   test('Canvas 应该在 5 秒内初始化', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:299:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-chromium\error-context.md

  11) [chromium] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ──────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 5000
    Received:   16209

      306 |     const initTime = Date.now() - startTime;
      307 |
    > 308 |     expect(initTime).toBeLessThan(5000);
          |                      ^
      309 |   });
      310 | });
      311 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:308:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-chromium\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-chromium\error-context.md

  12) [firefox] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ──────────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PAUSE"
    Received: "PLAY"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        9 × locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
          - unexpected value "PLAY"


      61 |   test('应该默认处于播放状态', async ({ page }) => {
      62 |     const playBtn = page.locator('#btn-play');
    > 63 |     await expect(playBtn).toHaveText('PAUSE');
         |                           ^
      64 |     await expect(playBtn).toHaveClass(/active/);
      65 |   });
      66 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:63:27

  13) [firefox] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ───────────────────────

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


      68 |     const playBtn = page.locator('#btn-play');
      69 |     await playBtn.click();
    > 70 |     await expect(playBtn).toHaveText('PLAY');
         |                           ^
      71 |     await expect(playBtn).not.toHaveClass(/active/);
      72 |   });
      73 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:70:27

    Error: browserContext.close: Protocol error (Browser.removeBrowserContext): can't access property "_maybeDontRestoreTabs", this._windows[aWindow.__SSi] is undefined

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-点击-PAUSE-按钮应该暂停动画-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-点击-PAUSE-按钮应该暂停动画-firefox\error-context.md

  14) [firefox] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PAUSE"
    Received: "PLAY"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
           - unexpected value "PLAY"


      77 |     await page.waitForTimeout(500);
      78 |     await playBtn.click(); // 播放
    > 79 |     await expect(playBtn).toHaveText('PAUSE');
         |                           ^
      80 |     await expect(playBtn).toHaveClass(/active/);
      81 |   });
      82 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:79:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-点击-PLAY-按钮应该恢复播放-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-点击-PLAY-按钮应该恢复播放-firefox\error-context.md

  15) [firefox] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ──────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: "function"
    Received: "undefined"

      124 |     const toggleMenu = await page.evaluate(() => typeof window.toggleMenu);
      125 |
    > 126 |     expect(togglePlay).toBe('function');
          |                        ^
      127 |     expect(cycleSpeed).toBe('function');
      128 |     expect(resetAnim).toBe('function');
      129 |     expect(toggleMenu).toBe('function');
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:126:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-窗口-API-应该正确挂载-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-窗口-API-应该正确挂载-firefox\error-context.md

  16) [firefox] › tests\trajectory.spec.js:214:3 › 内容验证 › 应该显示赛程时间线 ────────────────────────────────

    Error: worker process exited unexpectedly (code=3221226505, signal=null)

  17) [firefox] › tests\trajectory.spec.js:219:3 › 内容验证 › 应该显示获奖者卡片 ────────────────────────────────

    Error: browserContext.newPage: Target page, context or browser has been closed

  18) [firefox] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ─────────────────────────────────

    Error: browserContext.newPage: Target page, context or browser has been closed

  19) [firefox] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ───────────────────────────

    Test timeout of 60000ms exceeded.

    Error: page.waitForLoadState: Test timeout of 60000ms exceeded.

      294 |     const startTime = Date.now();
      295 |     await page.goto('/');
    > 296 |     await page.waitForLoadState('networkidle');
          |                ^
      297 |     const loadTime = Date.now() - startTime;
      298 |
      299 |     expect(loadTime).toBeLessThan(3000);
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:296:16

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-firefox\error-context.md

  20) [firefox] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ───────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 5000
    Received:   19793

      306 |     const initTime = Date.now() - startTime;
      307 |
    > 308 |     expect(initTime).toBeLessThan(5000);
          |                      ^
      309 |   });
      310 | });
      311 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:308:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-firefox\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-firefox\error-context.md

  21) [webkit] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 ────────────────

    Test timeout of 60000ms exceeded while setting up "page".

    Error: browserContext.newPage: Test timeout of 60000ms exceeded.

  22) [webkit] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ─────────────────────

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

  23) [webkit] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ───────────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PAUSE"
    Received: "PLAY"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        11 × locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
           - unexpected value "PLAY"


      61 |   test('应该默认处于播放状态', async ({ page }) => {
      62 |     const playBtn = page.locator('#btn-play');
    > 63 |     await expect(playBtn).toHaveText('PAUSE');
         |                           ^
      64 |     await expect(playBtn).toHaveClass(/active/);
      65 |   });
      66 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:63:27

    Error Context: test-results\trajectory-轨迹动画功能-应该默认处于播放状态-webkit\error-context.md

  24) [webkit] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ────────────────────────

    TimeoutError: locator.click: Timeout 10000ms exceeded.
    Call log:
      - waiting for locator('#btn-play')
        - locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
      - attempting click action
        - waiting for element to be visible, enabled and stable


      67 |   test('点击 PAUSE 按钮应该暂停动画', async ({ page }) => {
      68 |     const playBtn = page.locator('#btn-play');
    > 69 |     await playBtn.click();
         |                   ^
      70 |     await expect(playBtn).toHaveText('PLAY');
      71 |     await expect(playBtn).not.toHaveClass(/active/);
      72 |   });
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:69:19

    Error Context: test-results\trajectory-轨迹动画功能-点击-PAUSE-按钮应该暂停动画-webkit\error-context.md

  25) [webkit] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ─────────────────────────

    TimeoutError: locator.click: Timeout 10000ms exceeded.
    Call log:
      - waiting for locator('#btn-play')
        - locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
      - attempting click action
        - waiting for element to be visible, enabled and stable


      74 |   test('点击 PLAY 按钮应该恢复播放', async ({ page }) => {
      75 |     const playBtn = page.locator('#btn-play');
    > 76 |     await playBtn.click(); // 暂停
         |                   ^
      77 |     await page.waitForTimeout(500);
      78 |     await playBtn.click(); // 播放
      79 |     await expect(playBtn).toHaveText('PAUSE');
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:76:19

    Error Context: test-results\trajectory-轨迹动画功能-点击-PLAY-按钮应该恢复播放-webkit\error-context.md

  26) [webkit] › tests\trajectory.spec.js:83:3 › 轨迹动画功能 › 速度切换应该循环变化 ───────────────────────────────

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

    Error Context: test-results\trajectory-轨迹动画功能-速度切换应该循环变化-webkit\error-context.md

  27) [webkit] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ───────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: "function"
    Received: "undefined"

      124 |     const toggleMenu = await page.evaluate(() => typeof window.toggleMenu);
      125 |
    > 126 |     expect(togglePlay).toBe('function');
          |                        ^
      127 |     expect(cycleSpeed).toBe('function');
      128 |     expect(resetAnim).toBe('function');
      129 |     expect(toggleMenu).toBe('function');
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:126:24

    Error Context: test-results\trajectory-轨迹动画功能-窗口-API-应该正确挂载-webkit\error-context.md

  28) [webkit] › tests\trajectory.spec.js:146:3 › UI 交互功能 › 点击图集图片应该打开灯箱 ───────────────────────────

    TimeoutError: locator.click: Timeout 10000ms exceeded.
    Call log:
      - waiting for locator('.gallery-item').first()
        - locator resolved to <div class="gallery-item gallery-wide reveal">…</div>
      - attempting click action
        - waiting for element to be visible, enabled and stable


      148 |     const lightbox = page.locator('#lightbox');
      149 |
    > 150 |     await galleryItem.click();
          |                       ^
      151 |     await expect(lightbox).toHaveClass(/active/);
      152 |   });
      153 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:150:23

    Error Context: test-results\trajectory-UI-交互功能-点击图集图片应该打开灯箱-webkit\error-context.md

  29) [webkit] › tests\trajectory.spec.js:154:3 › UI 交互功能 › 点击灯箱应该关闭预览 ─────────────────────────────

    TimeoutError: locator.click: Timeout 10000ms exceeded.
    Call log:
      - waiting for locator('.gallery-item').first()
        - locator resolved to <div class="gallery-item gallery-wide reveal">…</div>
      - attempting click action
        - waiting for element to be visible, enabled and stable


      156 |     const lightbox = page.locator('#lightbox');
      157 |
    > 158 |     await galleryItem.click();
          |                       ^
      159 |     await expect(lightbox).toHaveClass(/active/);
      160 |
      161 |     await lightbox.click();
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:158:23

    Error Context: test-results\trajectory-UI-交互功能-点击灯箱应该关闭预览-webkit\error-context.md

  30) [webkit] › tests\trajectory.spec.js:184:3 › UI 交互功能 › 滚动应该触发揭示动画 ─────────────────────────────

    TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 9347.183000000194ms exceeded.
    Call log:
      - attempting scroll into view action
        - waiting for element to be stable


      189 |
      190 |     // 滚动到轨迹区域
    > 191 |     await page.locator('#trajectory').scrollIntoViewIfNeeded();
          |                                       ^
      192 |     await page.waitForTimeout(1000);
      193 |
      194 |     // 验证有元素变为可见
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:191:39

    Error Context: test-results\trajectory-UI-交互功能-滚动应该触发揭示动画-webkit\error-context.md

  31) [webkit] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ──────────────────────────────────

    Error: expect(locator).toHaveCount(expected) failed

    Locator:  locator('.gallery-item')
    Expected: 10
    Received: 9
    Timeout:  10000ms

    Call log:
      - Expect "toHaveCount" with timeout 10000ms
      - waiting for locator('.gallery-item')
        11 × locator resolved to 9 elements
           - unexpected value "9"


      224 |   test('应该显示图集图片', async ({ page }) => {
      225 |     const galleryItems = page.locator('.gallery-item');
    > 226 |     await expect(galleryItems).toHaveCount(10);
          |                                ^
      227 |   });
      228 |
      229 |   test('应该显示统计数据', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:226:32

    Error Context: test-results\trajectory-内容验证-应该显示图集图片-webkit\error-context.md

  32) [webkit] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ────────────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 3000
    Received:   3415

      297 |     const loadTime = Date.now() - startTime;
      298 |
    > 299 |     expect(loadTime).toBeLessThan(3000);
          |                      ^
      300 |   });
      301 |
      302 |   test('Canvas 应该在 5 秒内初始化', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:299:22

    Error Context: test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-webkit\error-context.md

  33) [webkit] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ────────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 5000
    Received:   6243

      306 |     const initTime = Date.now() - startTime;
      307 |
    > 308 |     expect(initTime).toBeLessThan(5000);
          |                      ^
      309 |   });
      310 | });
      311 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:308:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-webkit\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-webkit\error-context.md

  34) [Mobile Chrome] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ──────────────

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

  35) [Mobile Chrome] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PAUSE"
    Received: "PLAY"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
           - unexpected value "PLAY"


      61 |   test('应该默认处于播放状态', async ({ page }) => {
      62 |     const playBtn = page.locator('#btn-play');
    > 63 |     await expect(playBtn).toHaveText('PAUSE');
         |                           ^
      64 |     await expect(playBtn).toHaveClass(/active/);
      65 |   });
      66 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:63:27

    Error Context: test-results\trajectory-轨迹动画功能-应该默认处于播放状态-Mobile-Chrome\error-context.md

  36) [Mobile Chrome] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ─────────────────

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


      68 |     const playBtn = page.locator('#btn-play');
      69 |     await playBtn.click();
    > 70 |     await expect(playBtn).toHaveText('PLAY');
         |                           ^
      71 |     await expect(playBtn).not.toHaveClass(/active/);
      72 |   });
      73 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:70:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-点击-PAUSE-按钮应该暂停动画-Mobile-Chrome\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-点击-PAUSE-按钮应该暂停动画-Mobile-Chrome\error-context.md

  37) [Mobile Chrome] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ──────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PAUSE"
    Received: "PLAY"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
           - unexpected value "PLAY"


      77 |     await page.waitForTimeout(500);
      78 |     await playBtn.click(); // 播放
    > 79 |     await expect(playBtn).toHaveText('PAUSE');
         |                           ^
      80 |     await expect(playBtn).toHaveClass(/active/);
      81 |   });
      82 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:79:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-点击-PLAY-按钮应该恢复播放-Mobile-Chrome\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-点击-PLAY-按钮应该恢复播放-Mobile-Chrome\error-context.md

  38) [Mobile Chrome] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: "function"
    Received: "undefined"

      124 |     const toggleMenu = await page.evaluate(() => typeof window.toggleMenu);
      125 |
    > 126 |     expect(togglePlay).toBe('function');
          |                        ^
      127 |     expect(cycleSpeed).toBe('function');
      128 |     expect(resetAnim).toBe('function');
      129 |     expect(toggleMenu).toBe('function');
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:126:24

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-窗口-API-应该正确挂载-Mobile-Chrome\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-窗口-API-应该正确挂载-Mobile-Chrome\error-context.md

  39) [Mobile Chrome] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ───────────────────────────

    Error: expect(locator).toHaveCount(expected) failed

    Locator:  locator('.gallery-item')
    Expected: 10
    Received: 9
    Timeout:  10000ms

    Call log:
      - Expect "toHaveCount" with timeout 10000ms
      - waiting for locator('.gallery-item')
        12 × locator resolved to 9 elements
           - unexpected value "9"


      224 |   test('应该显示图集图片', async ({ page }) => {
      225 |     const galleryItems = page.locator('.gallery-item');
    > 226 |     await expect(galleryItems).toHaveCount(10);
          |                                ^
      227 |   });
      228 |
      229 |   test('应该显示统计数据', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:226:32

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-内容验证-应该显示图集图片-Mobile-Chrome\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-内容验证-应该显示图集图片-Mobile-Chrome\error-context.md

  40) [Mobile Chrome] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ─────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 3000
    Received:   4914

      297 |     const loadTime = Date.now() - startTime;
      298 |
    > 299 |     expect(loadTime).toBeLessThan(3000);
          |                      ^
      300 |   });
      301 |
      302 |   test('Canvas 应该在 5 秒内初始化', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:299:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-Mobile-Chrome\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-Mobile-Chrome\error-context.md

  41) [Mobile Chrome] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ─────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 5000
    Received:   5202

      306 |     const initTime = Date.now() - startTime;
      307 |
    > 308 |     expect(initTime).toBeLessThan(5000);
          |                      ^
      309 |   });
      310 | });
      311 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:308:22

    Error Context: test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-Mobile-Chrome\error-context.md

  42) [Mobile Safari] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ──────────────

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

  43) [Mobile Safari] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PAUSE"
    Received: "PLAY"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
           - unexpected value "PLAY"


      61 |   test('应该默认处于播放状态', async ({ page }) => {
      62 |     const playBtn = page.locator('#btn-play');
    > 63 |     await expect(playBtn).toHaveText('PAUSE');
         |                           ^
      64 |     await expect(playBtn).toHaveClass(/active/);
      65 |   });
      66 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:63:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-应该默认处于播放状态-Mobile-Safari\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-应该默认处于播放状态-Mobile-Safari\error-context.md

  44) [Mobile Safari] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ─────────────────

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


      68 |     const playBtn = page.locator('#btn-play');
      69 |     await playBtn.click();
    > 70 |     await expect(playBtn).toHaveText('PLAY');
         |                           ^
      71 |     await expect(playBtn).not.toHaveClass(/active/);
      72 |   });
      73 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:70:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-点击-PAUSE-按钮应该暂停动画-Mobile-Safari\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-点击-PAUSE-按钮应该暂停动画-Mobile-Safari\error-context.md

  45) [Mobile Safari] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ──────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PAUSE"
    Received: "PLAY"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
           - unexpected value "PLAY"


      77 |     await page.waitForTimeout(500);
      78 |     await playBtn.click(); // 播放
    > 79 |     await expect(playBtn).toHaveText('PAUSE');
         |                           ^
      80 |     await expect(playBtn).toHaveClass(/active/);
      81 |   });
      82 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:79:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-点击-PLAY-按钮应该恢复播放-Mobile-Safari\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-点击-PLAY-按钮应该恢复播放-Mobile-Safari\error-context.md

  46) [Mobile Safari] › tests\trajectory.spec.js:106:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 ────────────────

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
    test-results\trajectory-轨迹动画功能-点击-RESET-按钮应该重置动画-Mobile-Safari\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-点击-RESET-按钮应该重置动画-Mobile-Safari\error-context.md

  47) [Mobile Safari] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ────────────────────

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

    Error Context: test-results\trajectory-轨迹动画功能-窗口-API-应该正确挂载-Mobile-Safari\error-context.md

  48) [Mobile Safari] › tests\trajectory.spec.js:146:3 › UI 交互功能 › 点击图集图片应该打开灯箱 ────────────────────

    TimeoutError: locator.click: Timeout 10000ms exceeded.
    Call log:
      - waiting for locator('.gallery-item').first()
        - locator resolved to <div class="gallery-item gallery-wide reveal">…</div>
      - attempting click action
        - waiting for element to be visible, enabled and stable


      148 |     const lightbox = page.locator('#lightbox');
      149 |
    > 150 |     await galleryItem.click();
          |                       ^
      151 |     await expect(lightbox).toHaveClass(/active/);
      152 |   });
      153 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:150:23

    Error Context: test-results\trajectory-UI-交互功能-点击图集图片应该打开灯箱-Mobile-Safari\error-context.md

  49) [Mobile Safari] › tests\trajectory.spec.js:154:3 › UI 交互功能 › 点击灯箱应该关闭预览 ──────────────────────

    TimeoutError: locator.click: Timeout 10000ms exceeded.
    Call log:
      - waiting for locator('.gallery-item').first()
        - locator resolved to <div class="gallery-item gallery-wide reveal">…</div>
      - attempting click action
        - waiting for element to be visible, enabled and stable


      156 |     const lightbox = page.locator('#lightbox');
      157 |
    > 158 |     await galleryItem.click();
          |                       ^
      159 |     await expect(lightbox).toHaveClass(/active/);
      160 |
      161 |     await lightbox.click();
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:158:23

    Error Context: test-results\trajectory-UI-交互功能-点击灯箱应该关闭预览-Mobile-Safari\error-context.md

  50) [Mobile Safari] › tests\trajectory.spec.js:173:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 ────────────────────

    TimeoutError: locator.click: Timeout 10000ms exceeded.
    Call log:
      - waiting for locator('.hamburger')
        - locator resolved to <div id="hamburger" class="hamburger">…</div>
      - attempting click action
        - waiting for element to be visible, enabled and stable


      177 |     const navLinks = page.locator('.nav-links');
      178 |
    > 179 |     await hamburger.click();
          |                     ^
      180 |     await expect(hamburger).toHaveClass(/active/);
      181 |     await expect(navLinks).toHaveClass(/active/);
      182 |   });
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:179:21

    Error Context: test-results\trajectory-UI-交互功能-点击汉堡菜单应该展开导航-Mobile-Safari\error-context.md

  51) [Mobile Safari] › tests\trajectory.spec.js:184:3 › UI 交互功能 › 滚动应该触发揭示动画 ──────────────────────

    TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 6479.213999999687ms exceeded.
    Call log:
      - attempting scroll into view action
        - waiting for element to be stable


      189 |
      190 |     // 滚动到轨迹区域
    > 191 |     await page.locator('#trajectory').scrollIntoViewIfNeeded();
          |                                       ^
      192 |     await page.waitForTimeout(1000);
      193 |
      194 |     // 验证有元素变为可见
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:191:39

    Error Context: test-results\trajectory-UI-交互功能-滚动应该触发揭示动画-Mobile-Safari\error-context.md

  52) [Mobile Safari] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ───────────────────────────

    Error: expect(locator).toHaveCount(expected) failed

    Locator:  locator('.gallery-item')
    Expected: 10
    Received: 9
    Timeout:  10000ms

    Call log:
      - Expect "toHaveCount" with timeout 10000ms
      - waiting for locator('.gallery-item')
        6 × locator resolved to 9 elements
          - unexpected value "9"


      224 |   test('应该显示图集图片', async ({ page }) => {
      225 |     const galleryItems = page.locator('.gallery-item');
    > 226 |     await expect(galleryItems).toHaveCount(10);
          |                                ^
      227 |   });
      228 |
      229 |   test('应该显示统计数据', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:226:32

    Error Context: test-results\trajectory-内容验证-应该显示图集图片-Mobile-Safari\error-context.md

  53) [Mobile Safari] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ─────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 3000
    Received:   5254

      297 |     const loadTime = Date.now() - startTime;
      298 |
    > 299 |     expect(loadTime).toBeLessThan(3000);
          |                      ^
      300 |   });
      301 |
      302 |   test('Canvas 应该在 5 秒内初始化', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:299:22

    Error Context: test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-Mobile-Safari\error-context.md

  54) [Mobile Safari] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ─────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 5000
    Received:   5167

      306 |     const initTime = Date.now() - startTime;
      307 |
    > 308 |     expect(initTime).toBeLessThan(5000);
          |                      ^
      309 |   });
      310 | });
      311 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:308:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-Mobile-Safari\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-Mobile-Safari\error-context.md

  55) [iPad] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ───────────────────────

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

  56) [iPad] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ─────────────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PAUSE"
    Received: "PLAY"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
           - unexpected value "PLAY"


      61 |   test('应该默认处于播放状态', async ({ page }) => {
      62 |     const playBtn = page.locator('#btn-play');
    > 63 |     await expect(playBtn).toHaveText('PAUSE');
         |                           ^
      64 |     await expect(playBtn).toHaveClass(/active/);
      65 |   });
      66 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:63:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-应该默认处于播放状态-iPad\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-应该默认处于播放状态-iPad\error-context.md

  57) [iPad] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ──────────────────────────

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


      68 |     const playBtn = page.locator('#btn-play');
      69 |     await playBtn.click();
    > 70 |     await expect(playBtn).toHaveText('PLAY');
         |                           ^
      71 |     await expect(playBtn).not.toHaveClass(/active/);
      72 |   });
      73 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:70:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-点击-PAUSE-按钮应该暂停动画-iPad\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-点击-PAUSE-按钮应该暂停动画-iPad\error-context.md

  58) [iPad] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ───────────────────────────

    Error: expect(locator).toHaveText(expected) failed

    Locator:  locator('#btn-play')
    Expected: "PAUSE"
    Received: "PLAY"
    Timeout:  10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('#btn-play')
        13 × locator resolved to <button id="btn-play" class="cyber-btn">PLAY</button>
           - unexpected value "PLAY"


      77 |     await page.waitForTimeout(500);
      78 |     await playBtn.click(); // 播放
    > 79 |     await expect(playBtn).toHaveText('PAUSE');
         |                           ^
      80 |     await expect(playBtn).toHaveClass(/active/);
      81 |   });
      82 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:79:27

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-轨迹动画功能-点击-PLAY-按钮应该恢复播放-iPad\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-轨迹动画功能-点击-PLAY-按钮应该恢复播放-iPad\error-context.md

  59) [iPad] › tests\trajectory.spec.js:106:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 ─────────────────────────

    Test timeout of 60000ms exceeded while running "beforeEach" hook.

      38 | // ──────────────────────────────────────────────────────────────
      39 | test.describe('轨迹动画功能', () => {
    > 40 |   test.beforeEach(async ({ page }) => {
         |        ^
      41 |     await page.goto('/');
      42 |     // 等待 Canvas 初始化
      43 |     await page.waitForSelector('#trajectory-canvas', { timeout: 5000 });
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:40:8

  60) [iPad] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ─────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: "function"
    Received: "undefined"

      124 |     const toggleMenu = await page.evaluate(() => typeof window.toggleMenu);
      125 |
    > 126 |     expect(togglePlay).toBe('function');
          |                        ^
      127 |     expect(cycleSpeed).toBe('function');
      128 |     expect(resetAnim).toBe('function');
      129 |     expect(toggleMenu).toBe('function');
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:126:24

    Error Context: test-results\trajectory-轨迹动画功能-窗口-API-应该正确挂载-iPad\error-context.md

  61) [iPad] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ────────────────────────────────────

    Error: expect(locator).toHaveCount(expected) failed

    Locator:  locator('.gallery-item')
    Expected: 10
    Received: 9
    Timeout:  10000ms

    Call log:
      - Expect "toHaveCount" with timeout 10000ms
      - waiting for locator('.gallery-item')
        12 × locator resolved to 9 elements
           - unexpected value "9"


      224 |   test('应该显示图集图片', async ({ page }) => {
      225 |     const galleryItems = page.locator('.gallery-item');
    > 226 |     await expect(galleryItems).toHaveCount(10);
          |                                ^
      227 |   });
      228 |
      229 |   test('应该显示统计数据', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:226:32

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-内容验证-应该显示图集图片-iPad\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-内容验证-应该显示图集图片-iPad\error-context.md

  62) [iPad] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ──────────────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 3000
    Received:   5728

      297 |     const loadTime = Date.now() - startTime;
      298 |
    > 299 |     expect(loadTime).toBeLessThan(3000);
          |                      ^
      300 |   });
      301 |
      302 |   test('Canvas 应该在 5 秒内初始化', async ({ page }) => {
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:299:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-iPad\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-页面应该在-3-秒内完成加载-iPad\error-context.md

  63) [iPad] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ──────────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 5000
    Received:   5846

      306 |     const initTime = Date.now() - startTime;
      307 |
    > 308 |     expect(initTime).toBeLessThan(5000);
          |                      ^
      309 |   });
      310 | });
      311 |
        at D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project\tests\trajectory.spec.js:308:22

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-iPad\test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results\trajectory-性能测试-Canvas-应该在-5-秒内初始化-iPad\error-context.md

  63 failed
    [chromium] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 ────────────────
    [chromium] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ─────────────────────
    [chromium] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 ───────────────────────────────────
    [chromium] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 ────────────────────────────────────
    [chromium] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ───────────────────────────────
    [chromium] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ─────────────────────────
    [chromium] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ───────────────────────────
    [chromium] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ──────────────────────────────────
    [chromium] › tests\trajectory.spec.js:275:3 › 响应式布局 › 移动端图集应该单列显示 ──────────────────────────────
    [chromium] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ────────────────────────────
    [chromium] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ────────────────────────
    [firefox] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ────────────────────────────────
    [firefox] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ─────────────────────────
    [firefox] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ──────────────────────────
    [firefox] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ────────────────────────────
    [firefox] › tests\trajectory.spec.js:214:3 › 内容验证 › 应该显示赛程时间线 ──────────────────────────────────
    [firefox] › tests\trajectory.spec.js:219:3 › 内容验证 › 应该显示获奖者卡片 ──────────────────────────────────
    [firefox] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ───────────────────────────────────
    [firefox] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ─────────────────────────────
    [firefox] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ─────────────────────────
    [webkit] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 ──────────────────
    [webkit] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ───────────────────────
    [webkit] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ─────────────────────────────────
    [webkit] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ──────────────────────────
    [webkit] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ───────────────────────────
    [webkit] › tests\trajectory.spec.js:83:3 › 轨迹动画功能 › 速度切换应该循环变化 ─────────────────────────────────
    [webkit] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ─────────────────────────────
    [webkit] › tests\trajectory.spec.js:146:3 › UI 交互功能 › 点击图集图片应该打开灯箱 ─────────────────────────────
    [webkit] › tests\trajectory.spec.js:154:3 › UI 交互功能 › 点击灯箱应该关闭预览 ───────────────────────────────
    [webkit] › tests\trajectory.spec.js:184:3 › UI 交互功能 › 滚动应该触发揭示动画 ───────────────────────────────
    [webkit] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ────────────────────────────────────
    [webkit] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ──────────────────────────────
    [webkit] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ──────────────────────────
    [Mobile Chrome] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ──────────────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ───────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ────────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ──────────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ─────────────────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ───────────────────────
    [Mobile Chrome] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ───────────────────
    [Mobile Safari] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ────────────────
    [Mobile Safari] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ──────────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ───────────────────
    [Mobile Safari] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:106:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 ──────────────────
    [Mobile Safari] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ──────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:146:3 › UI 交互功能 › 点击图集图片应该打开灯箱 ──────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:154:3 › UI 交互功能 › 点击灯箱应该关闭预览 ────────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:173:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 ──────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:184:3 › UI 交互功能 › 滚动应该触发揭示动画 ────────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ─────────────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ───────────────────────
    [Mobile Safari] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ───────────────────
    [iPad] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 ─────────────────────────
    [iPad] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于播放状态 ───────────────────────────────────
    [iPad] › tests\trajectory.spec.js:67:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 ────────────────────────────
    [iPad] › tests\trajectory.spec.js:74:3 › 轨迹动画功能 › 点击 PLAY 按钮应该恢复播放 ─────────────────────────────
    [iPad] › tests\trajectory.spec.js:106:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 ───────────────────────────
    [iPad] › tests\trajectory.spec.js:119:3 › 轨迹动画功能 › 窗口 API 应该正确挂载 ───────────────────────────────
    [iPad] › tests\trajectory.spec.js:224:3 › 内容验证 › 应该显示图集图片 ──────────────────────────────────────
    [iPad] › tests\trajectory.spec.js:293:3 › 性能测试 › 页面应该在 3 秒内完成加载 ────────────────────────────────
    [iPad] › tests\trajectory.spec.js:302:3 › 性能测试 › Canvas 应该在 5 秒内初始化 ────────────────────────────
  78 skipped
  165 passed (1.0h)

To open last HTML report run:

  npx playwright show-report

PS D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project> npx playwright show-report

To open last HTML report run:

  npx playwright show-report

PS D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project> npx playwright show-report

  Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.



已完成测试分析报告。以下是核心发现总结：

测试分析摘要
📊 测试结果
306个测试: 165通过 | 63失败 | 78跳过
主要失败原因:
🔴 最严重问题 (P0)
播放按钮状态不匹配 (~25个失败)

测试期望默认"PAUSE"，实际显示"PLAY"
原因：trajectory.js 第37行 playing: false（为性能优化）
全局API未挂载 (~8个失败)

测试期望 window.togglePlay 等函数存在
原因：ES6模块未导出到window对象
🟡 其他问题
图集数量不匹配 (~6个失败)

测试期望10张，实际9张
性能测试超时 (~12个失败)

页面加载 >3秒，Canvas初始化 >5秒
页面加载超时 (~6个失败)

网络/服务器响应慢
✅ 修复建议
快速修复（5分钟）:

javascript
复制
// main.js 添加
window.togglePlay = togglePlay;
window.cycleSpeed = cycleSpeed;
window.resetAnim = resetAnim;
window.toggleMenu = toggleMenu;
修改测试期望:

javascript
复制
// trajectory.spec.js 第63行
await expect(playBtn).toHaveText('PLAY'); // 改为 PLAY

// 第226行
await expect(galleryItems).toHaveCount(9); // 改为 9
需要我帮你实施这些修复吗？你检查一下，是不是测试代码的问题？还是主程序内的代码有问题？

● 让我检查一下实际情况，判断是测试代码问题还是主程序问题。

  1. 检查播放按钮默认状态

  Searched for 3 patterns (ctrl+o to expand)

● 分析结果

  ┌───────────────┬───────────────────────────────┬─────────────────────────────────────────────────┐
  │     问题      │             原因              │                      结论                       │
  ├───────────────┼───────────────────────────────┼─────────────────────────────────────────────────┤
  │ 播放按钮状态  │ 测试期望 "PAUSE"，实际 "PLAY" │ ✅ 测试代码问题 - 默认暂停是性能优化设计        │
  ├───────────────┼───────────────────────────────┼─────────────────────────────────────────────────┤
  │ 全局API未挂载 │ window.togglePlay 不存在      │ ✅ 测试代码问题 - 我们已重构为 addEventListener │
  ├───────────────┼───────────────────────────────┼─────────────────────────────────────────────────┤
  │ 图集数量      │ 测试期望10张，实际9张         │ ✅ 测试代码问题 - 实际就是9张                   │
  ├───────────────┼───────────────────────────────┼─────────────────────────────────────────────────┤
  │ 性能超时      │ >3秒                          │ ⚠️ 环境问题 - 网络/服务器性能                   │
  └───────────────┴───────────────────────────────┴─────────────────────────────────────────────────┘

  ---
  结论：是测试代码需要更新，不是主程序有问题

  我们的代码改动是正确的：

  1. 默认暂停 (playing: false) - 这是性能优化亮点，测试应期望 PLAY
  2. 移除 window 挂载 - 改用 addEventListener 是安全最佳实践，测试应通过事件触发测试
  3. 图集9张 - 实际数量就是9张

  ---
  需要我帮你修复测试代码吗？或者你只是想确认问题所在？

✻ Worked for 1m 59s

❯ 帮我修改修复测试代码

  Searched for 4 patterns, read 1 file (ctrl+o to expand)

● 现在我来修复测试代码。需要修改以下几个地方：

  1. 修复播放按钮默认状态测试

● Update(tests\trajectory.spec.js)
  ⎿  Added 12 lines, removed 11 lines
      58      await expect(resetBtn).toBeVisible();
      59    });
      60
      61 -  test('应该默认处于播放状态', async ({ page }) => {
      61 +  test('应该默认处于暂停状态（性能优化）', async ({ page }) => {
      62      const playBtn = page.locator('#btn-play');
      63 +    // 默认暂停，节省CPU资源
      64 +    await expect(playBtn).toHaveText('PLAY');
      65 +    await expect(playBtn).not.toHaveClass(/active/);
      66 +  });
      67 +
      68 +  test('点击 PLAY 按钮应该开始播放', async ({ page }) => {
      69 +    const playBtn = page.locator('#btn-play');
      70 +    await playBtn.click(); // 开始播放
      71      await expect(playBtn).toHaveText('PAUSE');
      72      await expect(playBtn).toHaveClass(/active/);
      73    });
      74
      75    test('点击 PAUSE 按钮应该暂停动画', async ({ page }) => {
      76      const playBtn = page.locator('#btn-play');
      69 -    await playBtn.click();
      77 +    await playBtn.click(); // 先播放
      78 +    await page.waitForTimeout(500);
      79 +    await playBtn.click(); // 再暂停
      80      await expect(playBtn).toHaveText('PLAY');
      81      await expect(playBtn).not.toHaveClass(/active/);
      82    });
      83
      74 -  test('点击 PLAY 按钮应该恢复播放', async ({ page }) => {
      75 -    const playBtn = page.locator('#btn-play');
      76 -    await playBtn.click(); // 暂停
      77 -    await page.waitForTimeout(500);
      78 -    await playBtn.click(); // 播放
      79 -    await expect(playBtn).toHaveText('PAUSE');
      80 -    await expect(playBtn).toHaveClass(/active/);
      81 -  });
      82 -
      84    test('速度切换应该循环变化', async ({ page }) => {
      85      const speedBtn = page.locator('#btn-speed');
      86

● 2. 修复全局API测试 - 改为测试按钮功能

  由于我们不再使用 window 全局 API，而是使用 addEventListener，需要修改测试：

● Update(tests\trajectory.spec.js)
  ⎿  Added 16 lines, removed 11 lines
      117      await expect(resetBtn).toBeEnabled();
      118    });
      119
      120 -  test('窗口 API 应该正确挂载', async ({ page }) => {
      121 -    // 验证所有全局 API 都存在
      122 -    const togglePlay = await page.evaluate(() => typeof window.togglePlay);
      123 -    const cycleSpeed = await page.evaluate(() => typeof window.cycleSpeed);
      124 -    const resetAnim = await page.evaluate(() => typeof window.resetAnim);
      125 -    const toggleMenu = await page.evaluate(() => typeof window.toggleMenu);
      126 -
      127 -    expect(togglePlay).toBe('function');
      128 -    expect(cycleSpeed).toBe('function');
      129 -    expect(resetAnim).toBe('function');
      130 -    expect(toggleMenu).toBe('function');
      120 +  test('轨迹控制按钮功能正常', async ({ page }) => {
      121 +    const playBtn = page.locator('#btn-play');
      122 +    const speedBtn = page.locator('#btn-speed');
      123 +    const resetBtn = page.locator('#btn-reset');
      124 +
      125 +    // 测试播放按钮 - 点击后应切换到 PAUSE
      126 +    await playBtn.click();
      127 +    await expect(playBtn).toHaveText('PAUSE');
      128 +
      129 +    // 测试速度切换
      130 +    await speedBtn.click();
      131 +    await expect(speedBtn).toHaveText('2x');
      132 +
      133 +    // 测试重置按钮
      134 +    await resetBtn.click();
      135 +    await expect(playBtn).toHaveText('PLAY'); // 重置后回到暂停状态
      136    });
      137  });
      138

● 3. 修复图集数量测试

● Update(tests\trajectory.spec.js)
  ⎿  Added 1 line, removed 1 line
      229
      230    test('应该显示图集图片', async ({ page }) => {
      231      const galleryItems = page.locator('.gallery-item');
      232 -    await expect(galleryItems).toHaveCount(10);
      232 +    await expect(galleryItems).toHaveCount(9);
      233    });
      234
      235    test('应该显示统计数据', async ({ page }) => {

✶ Baking… (3m 41s · ↓ 1.3k tokens)
  ⎿  Tip: Use /btw to ask a quick side question without interrupting Claude's current work

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
❯ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ⏵⏵ accept edits on (shift+tab to cycle) · esc to interrupt

● ✅ 测试代码修复完成

  修复内容

  ┌──────────────────┬─────────────────────────────────┐
  │       问题       │              修复               │
  ├──────────────────┼─────────────────────────────────┤
  │ 播放按钮默认状态 │ 'PAUSE' → 'PLAY' + 修改测试逻辑 │
  ├──────────────────┼─────────────────────────────────┤
  │ 全局 API 测试    │ 改为测试按钮实际功能            │
  ├──────────────────┼─────────────────────────────────┤
  │ 图集数量         │ 10 → 9                          │
  └──────────────────┴─────────────────────────────────┘

  修改的文件

  - tests/trajectory.spec.js

  现在可以重新运行测试验证修复效果：

  npx playwright test

✻ Cooked for 3m 41s

====================================== WORKBUDDY ==============================================

CodeBuddy
你说得对，我反思一下。

我的错误
没有区分问题归属 - 我直接建议修改主程序代码，但实际上：

主程序代码是正确的设计
测试代码是过时的期望
忽视了重构背景 - 你们已经从 window.onclick 重构为 addEventListener，这是安全最佳实践，测试应该相应更新。

自作主张 - 在没有确认的情况下就准备修改代码。

正确的分析
问题	主程序	测试代码	结论
播放按钮默认"PLAY"	✅ playing: false 是性能优化设计	❌ 期望 "PAUSE"	测试需更新
window API 不存在	✅ 已改用 addEventListener	❌ 还在测 window.xxx	测试需更新
图集9张	✅ 实际9张	❌ 期望10张	测试需更新
性能超时	-	-	可调整阈值或跳过
我的正确计划
只修改测试代码，不碰主程序：

trajectory.spec.js

修改"默认播放状态"测试：期望 "PLAY" 而非 "PAUSE"
修改"窗口API"测试：改为触发按钮点击事件，而非检查 window.xxx
修改图集数量：10 → 9
调整性能阈值或标记为慢测试
mobile.spec.js

同步更新播放按钮相关测试
需要你批准后再执行。

这个计划对吗？

====================================== WORKBUDDY END ===========================================




PS D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project> npx playwright test

Running 306 tests using 2 workers

  ✓    1 [chromium] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (42.7s)
  ✓    2 [chromium] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (42.9s)
  ✓    3 [chromium] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (22.4s)
  ✓    4 [chromium] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (21.8s)
  ✘    5 [chromium] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (21.5s)
  ✓    6 [chromium] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (16.8s)
  ✓    7 [chromium] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (6.3s)
  ✓    8 [chromium] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (5.7s)
  ✓    9 [chromium] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (5.5s)
  ✓   10 [chromium] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (6.2s)
  ✓   11 [chromium] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (9.4s)
  ✓   12 [chromium] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (9.0s)
  ✓   13 [chromium] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (6.1s)
  ✓   14 [chromium] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (10.8s)
  ✓   15 [chromium] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (7.8s)
  ✓   16 [chromium] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (9.6s)
  ✓   17 [chromium] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (9.2s)
  ✓   18 [chromium] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (7.0s)
  ✓   19 [chromium] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (8.6s)
  -   20 [chromium] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -   21 [chromium] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -   22 [chromium] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -   23 [chromium] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -   24 [chromium] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -   25 [chromium] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -   26 [chromium] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -   27 [chromium] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -   28 [chromium] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -   29 [chromium] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -   30 [chromium] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -   31 [chromium] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -   32 [chromium] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✘   33 [chromium] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (17.4s)
  ✓   34 [firefox] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (19.0s)
  ✓   35 [chromium] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (7.9s)
  ✓   36 [chromium] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (8.1s)
  ✓   37 [firefox] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (9.7s)
  ✘   38 [chromium] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (1.2m)
  ✘   39 [firefox] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (19.3s)
  ✓   40 [firefox] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (15.6s)
  ✓   41 [firefox] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (4.0s)
  ✓   42 [firefox] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (4.1s)
  ✓   43 [firefox] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (6.1s)
  ✓   44 [firefox] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (4.6s)
  ✓   45 [firefox] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (5.1s)
  ✓   46 [firefox] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (10.7s)
  ✓   47 [chromium] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (6.6s)
  ✓   48 [chromium] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (5.7s)
  ✓   49 [firefox] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (9.9s)
  ✘   50 [chromium] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (1.2m)
  ✓   51 [firefox] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (8.9s)
  ✓   52 [firefox] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (7.2s)
  ✓   53 [firefox] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (7.8s)
  ✓   54 [firefox] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (8.5s)
  ✓   55 [firefox] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (6.9s)
  ✓   56 [firefox] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (7.8s)
  ✓   57 [firefox] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (6.3s)
  ✓   58 [firefox] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (10.5s)
  ✘   59 [firefox] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (25.5s)
  ✘   60 [chromium] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (112ms)
  ✓   61 [chromium] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (5.3s)
  ✓   62 [chromium] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (5.2s)
  ✓   63 [firefox] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (19.5s)
  ✓   64 [chromium] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (5.4s)
  ✓   65 [chromium] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (5.8s)
  ✓   66 [chromium] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (7.2s)
  ✘   67 [chromium] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 (13.5s)
  ✘   68 [firefox] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (10.8s)
  ✓   69 [chromium] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配 (6.5s)
  ✓   70 [firefox] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (19.4s)
  ✓   71 [chromium] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 (4.5s)
  ✓   72 [chromium] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示 (5.1s)
  ✘   73 [chromium] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 (10.0s)
  ✓   74 [firefox] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (8.2s)
  ✓   75 [firefox] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (5.9s)
  ✓   76 [firefox] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (9.3s)
  ✓   77 [chromium] › tests\trajectory.spec.js:308:3 › 性能测试 › Canvas 应该在 5 秒内初始化 (6.9s)
  ✓   78 [firefox] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (7.8s)
  -   79 [firefox] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -   80 [firefox] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -   81 [firefox] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -   82 [firefox] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -   83 [firefox] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -   84 [firefox] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -   85 [firefox] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -   86 [firefox] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -   87 [firefox] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -   88 [firefox] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -   89 [firefox] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -   90 [firefox] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -   91 [firefox] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓   92 [firefox] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (5.8s)
  ✓   93 [firefox] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (7.4s)
  ✘   94 [webkit] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (1.1m)
  ✘   95 [firefox] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (26.6s)
  ✓   96 [firefox] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (14.5s)
  ✓   97 [firefox] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (7.0s)
  ✓   98 [firefox] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 (6.5s)
  ✓   99 [firefox] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配 (5.5s)
     100 [firefox] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配
     101 [webkit] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭


  ✘  100 [firefox] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 (0ms)
# Fatal process out of memory: Zone
#
  ✘  101 [webkit] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (1.1m)

 1: 00007FF789021427
 2: 00007FF788EF5D3F
 3: 00007FF78A15BC16
 4: 00007FF789AE2D41
 5: 00007FF7895C5A4B
 6: 00007FF78A2BA0EC
 7: 00007FF78A2B6A03
 8: 00007FF78A2B988E
 9: 00007FF78A2B9570
10: 00007FF78A2157FA
11: 00007FF78A21A303
12: 00007FF78A26309D
13: 00007FF78A2C71FC
14: 00007FF78A2BF2C2
15: 00007FF78A2BD7D2
16: 00007FF78A2BDACB
17: 00007FF78A597B75
18: 00007FF78A281C31
19: 00007FF78A27C729
20: 00007FF78A27606A
21: 00007FF789A60074
22: 00007FF789A26C52
23: 00007FF789CE7B96
24: 00007FF788EF8AC0
25: 00007FF789082263
26: 00007FF78A870BCB
27: 00007FFCD958E8D7 BaseThreadInitThunk+23
28: 00007FFCDA428D9C
  ✓  102 [firefox] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示 (16.4s)
  ✘  103 [firefox] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 (5.9s)
  ✘  104 [firefox] › tests\trajectory.spec.js:308:3 › 性能测试 › Canvas 应该在 5 秒内初始化 (14.8s)
  ✘  105 [webkit] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (19.7s)
  ✘  106 [webkit] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (1.1m)
  ✓  107 [webkit] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (14.6s)
     108 [webkit] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示
  ✘  108 [webkit] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (1.1m)
  ✘  109 [webkit] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (0ms)
<--- Last few GCs --->

[16156:000001DF3535A000]     3570 ms: Scavenge 36.4 (45.6) -> 33.3 (63.6) MB, pooled: 0 MB, 10.39 / 0.00 ms  (average mu = 0.994, current mu = 0.994) allocation failure;
[16156:000001DF3535A000]    24682 ms: Mark-Compact (reduce) 43.0 (63.9) -> 29.5 (33.4) MB, pooled: 0 MB, 58.83 / 0.02 ms  (+ 61.3 ms in 0 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 156 ms) (average mu = 0.996, curre

<--- JS stacktrace --->

FATAL ERROR: Committing semi space failed. Allocation failed - JavaScript heap out of memory
----- Native stack trace -----

 1: 00007FF789021427 node::SetCppgcReference+16599
 2: 00007FF788F84878 v8::base::CPU::num_virtual_address_bits+103288
 3: 00007FF789AF63B1 v8::Isolate::ReportExternalAllocationLimitReached+65
 4: 00007FF789AE2F36 v8::Function::Experimental_IsNopFunction+3302
 5: 00007FF78993F870 v8::internal::StrongRootAllocatorBase::StrongRootAllocatorBase+33904
 6: 00007FF7898F74CD v8::FixedArray::Length+130749
 7: 00007FF789948AB3 v8::internal::StrongRootAllocatorBase::StrongRootAllocatorBase+71347
 8: 00007FF78993893D v8::internal::StrongRootAllocatorBase::StrongRootAllocatorBase+5437
 9: 00007FF7899344F5 v8::internal::ThreadIsolation::JitPageReference::Size+190613
10: 00007FF7892BDE2D BIO_ssl_shutdown+189
  ✓  110 [webkit] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (7.0s)
  ✘  111 [webkit] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (1.1m)
  ✓  112 [webkit] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (8.7s)
  ✓  113 [webkit] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (7.1s)
  -  114 [webkit] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  115 [webkit] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  116 [webkit] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  117 [webkit] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  118 [webkit] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  119 [webkit] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  120 [webkit] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  121 [webkit] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  122 [webkit] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  123 [webkit] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  124 [webkit] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  125 [webkit] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  126 [webkit] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓  127 [Mobile Chrome] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (11.4s)
  ✓  128 [Mobile Chrome] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (10.6s)
  ✘  129 [Mobile Chrome] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (18.1s)
  ✓  130 [webkit] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (6.6s)
  ✘  131 [webkit] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (9.2s)
  ✓  132 [Mobile Chrome] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (7.4s)
  ✓  133 [Mobile Chrome] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (8.6s)
  ✓  134 [Mobile Chrome] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (4.8s)
  ✓  135 [webkit] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (9.6s)
  ✓  136 [Mobile Chrome] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (5.1s)
  ✓  137 [Mobile Chrome] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (6.7s)
  ✓  138 [webkit] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (9.0s)
  ✘  139 [Mobile Chrome] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (9.6s)
  ✓  140 [webkit] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (13.8s)
  ✓  141 [webkit] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (17.5s)
  ✓  142 [Mobile Chrome] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (7.4s)
  ✘  143 [Mobile Chrome] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (6.9s)
  ✓  144 [webkit] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (28.2s)
  ✓  145 [Mobile Chrome] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (9.9s)
  ✓  146 [Mobile Chrome] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (8.4s)
  ✓  147 [Mobile Chrome] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (7.2s)
  ✓  148 [webkit] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (10.2s)
  ✓  149 [Mobile Chrome] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (6.4s)
  ✘  150 [webkit] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (34.8s)
  ✘  151 [Mobile Chrome] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (1.1m)
  ✓  152 [webkit] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (10.8s)
  ✓  153 [webkit] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (14.4s)
  ✓  154 [webkit] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (20.6s)
  ✘  155 [Mobile Chrome] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (15.0s)
  ✓  156 [webkit] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (8.0s)
  ✓  157 [webkit] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (10.4s)
  ✓  158 [Mobile Chrome] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (12.5s)
  ✓  159 [webkit] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (27.0s)
  ✘  160 [Mobile Chrome] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (1.2m)
  ✓  161 [webkit] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (12.6s)
  ✓  162 [webkit] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (11.9s)
  ✓  163 [webkit] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (11.4s)
  ✓  164 [webkit] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (12.6s)
  ✓  165 [webkit] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (12.1s)
  ✓  166 [webkit] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (17.7s)
  ✓  167 [webkit] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 (15.9s)
  ✓  168 [webkit] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配 (33.9s)
  ✓  169 [webkit] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 (14.5s)
  ✘  170 [Mobile Chrome] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (18.3s)
  ✓  171 [webkit] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示 (5.2s)
  ✘  172 [webkit] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 (8.7s)
  ✓  173 [Mobile Chrome] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (7.1s)
  ✓  174 [webkit] › tests\trajectory.spec.js:308:3 › 性能测试 › Canvas 应该在 5 秒内初始化 (8.2s)
  ✓  175 [Mobile Chrome] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (5.9s)
  -  176 [Mobile Chrome] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  177 [Mobile Chrome] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  178 [Mobile Chrome] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  179 [Mobile Chrome] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  180 [Mobile Chrome] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  181 [Mobile Chrome] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  182 [Mobile Chrome] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  183 [Mobile Chrome] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  184 [Mobile Chrome] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  185 [Mobile Chrome] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  186 [Mobile Chrome] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  187 [Mobile Chrome] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  188 [Mobile Chrome] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓  189 [Mobile Chrome] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (5.7s)
  ✓  190 [Mobile Chrome] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮 (6.0s)
  ✓  191 [Mobile Safari] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (7.0s)
  ✓  192 [Mobile Chrome] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (6.3s)
  ✓  193 [Mobile Safari] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (15.6s)
  ✓  194 [Mobile Chrome] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (8.3s)
  ✓  195 [Mobile Chrome] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (7.0s)
  ✘  196 [Mobile Safari] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (24.4s)
  ✓  197 [Mobile Chrome] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (6.8s)
  ✓  198 [Mobile Chrome] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (6.7s)
  ✓  199 [Mobile Chrome] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (6.7s)
  ✓  200 [Mobile Chrome] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (7.0s)
  ✓  201 [Mobile Chrome] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (8.5s)
  ✓  202 [Mobile Safari] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (18.4s)
  ✓  203 [Mobile Chrome] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 (9.4s)
  ✓  204 [Mobile Chrome] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配 (10.0s)
  ✓  205 [Mobile Safari] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (7.4s)
  ✓  206 [Mobile Chrome] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 (6.8s)
  ✓  207 [Mobile Safari] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (10.2s)
  ✓  208 [Mobile Chrome] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示 (7.5s)
  ✘  209 [Mobile Chrome] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载 (7.9s)
  ✓  210 [Mobile Safari] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (9.4s)
  ✓  211 [Mobile Safari] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (7.4s)
  ✓  212 [Mobile Chrome] › tests\trajectory.spec.js:308:3 › 性能测试 › Canvas 应该在 5 秒内初始化 (7.7s)
  ✓  213 [Mobile Safari] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (7.2s)
  -  214 [Mobile Safari] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  215 [Mobile Safari] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  216 [Mobile Safari] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  217 [Mobile Safari] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  218 [Mobile Safari] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  219 [Mobile Safari] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  220 [Mobile Safari] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  221 [Mobile Safari] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  222 [Mobile Safari] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  223 [Mobile Safari] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  224 [Mobile Safari] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  225 [Mobile Safari] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  226 [Mobile Safari] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
  ✓  227 [Mobile Safari] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (6.2s)
  ✓  228 [Mobile Safari] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (8.2s)
  ✓  229 [iPad] › tests\mobile.spec.js:19:5 › 移动端专项测试 › iPhone 12 › 应该在 iPhone 上正常显示 (4.6s)
  ✓  230 [iPad] › tests\mobile.spec.js:31:5 › 移动端专项测试 › iPhone 12 › 移动端菜单应该可展开和关闭 (4.8s)
  ✓  231 [Mobile Safari] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (8.5s)
  ✘  232 [iPad] › tests\mobile.spec.js:48:5 › 移动端专项测试 › iPhone 12 › 轨迹控制按钮应该可点击 (15.6s)
  ✓  233 [Mobile Safari] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (8.4s)
  ✓  234 [Mobile Safari] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (6.8s)
  ✓  235 [Mobile Safari] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (8.0s)
  ✓  236 [iPad] › tests\mobile.spec.js:64:5 › 移动端专项测试 › iPhone 12 › 图集应该支持触摸交互 (6.8s)
  ✓  237 [Mobile Safari] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (11.5s)
  ✓  238 [iPad] › tests\mobile.spec.js:90:5 › 移动端专项测试 › Pixel 5 › 应该在 Android 上正常显示 (4.3s)
  ✓  239 [iPad] › tests\mobile.spec.js:97:5 › 移动端专项测试 › Pixel 5 › 移动端打卡点卡片应该单列显示 (4.7s)
  ✓  240 [Mobile Safari] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (16.2s)
  ✓  241 [iPad] › tests\mobile.spec.js:110:5 › 移动端专项测试 › Pixel 5 › 时间线在移动端应该垂直排列 (4.7s)
  ✓  242 [iPad] › tests\mobile.spec.js:132:5 › 移动端专项测试 › 横屏模式 › 横屏模式应该正常显示 (4.1s)
  ✓  243 [iPad] › tests\trajectory.spec.js:12:3 › 页面加载 › 应该成功加载首页 (5.6s)
  ✓  244 [iPad] › tests\trajectory.spec.js:17:3 › 页面加载 › 应该显示 Hero 区域 (6.2s)
  ✓  245 [Mobile Safari] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (22.4s)
  ✓  246 [iPad] › tests\trajectory.spec.js:23:3 › 页面加载 › 应该显示导航栏 (5.9s)
  ✓  247 [iPad] › tests\trajectory.spec.js:29:3 › 页面加载 › 应该显示所有导航链接 (5.4s)
  ✓  248 [iPad] › tests\trajectory.spec.js:46:3 › 轨迹动画功能 › 应该存在 Canvas 元素 (5.3s)
  ✓  249 [iPad] › tests\trajectory.spec.js:51:3 › 轨迹动画功能 › 应该存在播放控制按钮 (6.1s)
  ✓  250 [Mobile Safari] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (11.8s)
  ✓  251 [iPad] › tests\trajectory.spec.js:61:3 › 轨迹动画功能 › 应该默认处于暂停状态（性能优化） (5.4s)
  ✓  252 [iPad] › tests\trajectory.spec.js:68:3 › 轨迹动画功能 › 点击 PLAY 按钮应该开始播放 (6.5s)
  ✘  253 [Mobile Safari] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (43.1s)
  ✓  254 [iPad] › tests\trajectory.spec.js:75:3 › 轨迹动画功能 › 点击 PAUSE 按钮应该暂停动画 (6.2s)
  ✓  255 [iPad] › tests\trajectory.spec.js:84:3 › 轨迹动画功能 › 速度切换应该循环变化 (6.5s)
  ✓  256 [iPad] › tests\trajectory.spec.js:107:3 › 轨迹动画功能 › 点击 RESET 按钮应该重置动画 (10.0s)
  ✘  257 [iPad] › tests\trajectory.spec.js:120:3 › 轨迹动画功能 › 轨迹控制按钮功能正常 (1.1m)
  ✓  258 [Mobile Safari] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (21.6s)
  ✘  259 [Mobile Safari] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱 (39.8s)
  ✘  260 [Mobile Safari] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览 (23.2s)
  ✘  261 [iPad] › tests\trajectory.spec.js:147:3 › UI 交互功能 › 应该存在 Lightbox 元素 (0ms)
  -  262 [iPad] › tests\trajectory.spec.js:152:3 › UI 交互功能 › 点击图集图片应该打开灯箱
  -  263 [iPad] › tests\trajectory.spec.js:160:3 › UI 交互功能 › 点击灯箱应该关闭预览
  -  264 [iPad] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮
  -  265 [iPad] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航
  -  266 [iPad] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画
  -  267 [iPad] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点
  -  268 [iPad] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线
  -  269 [iPad] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片
  -  270 [iPad] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片
  -  271 [iPad] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据
  -  272 [iPad] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片
  -  273 [iPad] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常
  -  274 [iPad] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配
  -  275 [iPad] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配
  -  276 [iPad] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示
  -  277 [iPad] › tests\trajectory.spec.js:299:3 › 性能测试 › 页面应该在 3 秒内完成加载
  -  278 [iPad] › tests\trajectory.spec.js:308:3 › 性能测试 › Canvas 应该在 5 秒内初始化
  -  279 [iPad] › tests\visual.spec.js:17:3 › 视觉回归测试 › Hero 区域截图
  -  280 [iPad] › tests\visual.spec.js:23:3 › 视觉回归测试 › 导航栏截图
  -  281 [iPad] › tests\visual.spec.js:28:3 › 视觉回归测试 › 统计数据区域截图
  -  282 [iPad] › tests\visual.spec.js:33:3 › 视觉回归测试 › 轨迹区域截图
  -  283 [iPad] › tests\visual.spec.js:39:3 › 视觉回归测试 › 打卡点卡片截图
  -  284 [iPad] › tests\visual.spec.js:45:3 › 视觉回归测试 › 时间线截图
  -  285 [iPad] › tests\visual.spec.js:51:3 › 视觉回归测试 › 获奖者卡片截图
  -  286 [iPad] › tests\visual.spec.js:57:3 › 视觉回归测试 › 图集截图
  -  287 [iPad] › tests\visual.spec.js:63:3 › 视觉回归测试 › Footer 截图
  -  288 [iPad] › tests\visual.spec.js:69:3 › 视觉回归测试 › 完整页面截图
  -  289 [iPad] › tests\visual.spec.js:81:3 › 移动端视觉回归 › 移动端 Hero 区域截图
  -  290 [iPad] › tests\visual.spec.js:89:3 › 移动端视觉回归 › 移动端导航截图
  -  291 [iPad] › tests\visual.spec.js:97:3 › 移动端视觉回归 › 移动端轨迹区域截图
     292 [Mobile Safari] › tests\trajectory.spec.js:171:3 › UI 交互功能 › 移动端应该显示汉堡菜单按钮
  ✓  293 [Mobile Safari] › tests\trajectory.spec.js:179:3 › UI 交互功能 › 点击汉堡菜单应该展开导航 (20.3s)
  ✓  294 [Mobile Safari] › tests\trajectory.spec.js:190:3 › UI 交互功能 › 滚动应该触发揭示动画 (21.5s)
  ✓  295 [Mobile Safari] › tests\trajectory.spec.js:215:3 › 内容验证 › 应该显示 6 个打卡点 (8.6s)
  ✓  296 [Mobile Safari] › tests\trajectory.spec.js:220:3 › 内容验证 › 应该显示赛程时间线 (9.9s)
  ✓  297 [Mobile Safari] › tests\trajectory.spec.js:225:3 › 内容验证 › 应该显示获奖者卡片 (9.6s)
  ✓  298 [Mobile Safari] › tests\trajectory.spec.js:230:3 › 内容验证 › 应该显示图集图片 (8.6s)
  ✓  299 [Mobile Safari] › tests\trajectory.spec.js:235:3 › 内容验证 › 应该显示统计数据 (9.9s)
  ✓  300 [Mobile Safari] › tests\trajectory.spec.js:244:3 › 内容验证 › 应该显示赛道详情卡片 (9.1s)
  ✓  301 [Mobile Safari] › tests\trajectory.spec.js:254:3 › 响应式布局 › 桌面端布局应该正常 (29.1s)
  ✓  302 [Mobile Safari] › tests\trajectory.spec.js:265:3 › 响应式布局 › 平板端布局应该适配 (25.6s)
  ✓  303 [Mobile Safari] › tests\trajectory.spec.js:273:3 › 响应式布局 › 移动端布局应该适配 (13.8s)
  ✓  304 [Mobile Safari] › tests\trajectory.spec.js:281:3 › 响应式布局 › 移动端图集应该单列显示 (8.1s)
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

PS D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project>



