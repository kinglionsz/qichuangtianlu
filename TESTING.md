# Playwright 自动化测试套件

## 项目说明
骑闯天路 2017 赛博朋克纪念版 - 自动化测试文档

---

## 测试套件结构

```
tests/
├── trajectory.spec.js    # 核心功能测试（页面加载、轨迹动画、控制按钮）
├── mobile.spec.js        # 移动端专项测试（iPhone、Android、横屏）
└── visual.spec.js        # 视觉回归测试（截图对比）
```

---

## 测试命令

### 运行所有测试
```bash
npm test
```

### 有头模式（显示浏览器）
```bash
npm run test:headed
```

### 调试模式（逐行调试）
```bash
npm run test:debug
```

### UI 模式（可视化测试选择器）
```bash
npm run test:ui
```

### 查看测试报告
```bash
npm run test:report
```

---

## 测试覆盖范围

### 1. 核心功能测试 (trajectory.spec.js)

| 测试类别 | 测试项 | 说明 |
|---------|--------|------|
| **页面加载** | 首页加载 | 验证页面标题 |
| | Hero 区域 | 验证可见性 |
| | 导航栏 | 验证导航链接数量 (8 个) |
| **轨迹动画** | Canvas 元素 | 验证存在性 |
| | 播放控制 | 验证默认播放状态 |
| | PAUSE/PLAY | 验证切换功能 |
| | 速度切换 | 验证 1x→2x→4x→0.5x→1x 循环 |
| | RESET | 验证重置功能 |
| | Window API | 验证全局函数挂载 |
| **UI 交互** | Lightbox | 验证打开/关闭 |
| | 汉堡菜单 | 验证展开/收起 |
| | 滚动揭示 | 验证动画触发 |
| **内容验证** | 6 个打卡点 | 验证卡片数量 |
| | 时间线 | 验证 6 个时间节点 |
| | 获奖者 | 验证 3 张卡片 |
| | 图集 | 验证 10 张图片 |
| | 统计数据 | 验证 131.4km 等数据 |
| **响应式** | 桌面端 | 1920×1080 |
| | 平板端 | 768×1024 |
| | 移动端 | 375×667 |
| **性能** | 加载时间 | <3 秒 |
| | Canvas 初始化 | <5 秒 |

### 2. 移动端测试 (mobile.spec.js)

| 设备 | 测试项 | 说明 |
|------|--------|------|
| **iPhone 12** | 页面显示 | 验证导航、Hero |
| | 菜单交互 | 展开/关闭 |
| | 轨迹控制 | 按钮可点击 |
| | 图集触摸 | 灯箱交互 |
| **Pixel 5** | 页面显示 | 验证导航 |
| | 打卡点布局 | 单列显示 |
| | 时间线 | 垂直排列 |
| **横屏模式** | 横屏显示 | 内容可见性 |

### 3. 视觉回归测试 (visual.spec.js)

| 测试类型 | 截图区域 |
|---------|---------|
| **桌面端** | Hero、导航、统计、轨迹、打卡点、时间线、获奖者、图集、Footer、完整页面 |
| **移动端** | Hero、导航、轨迹区域 |

---

## 浏览器支持

测试在以下浏览器运行：
- ✅ Chromium (Chrome)
- ✅ Firefox
- ✅ WebKit (Safari)
- ✅ Mobile Chrome (Pixel 5)
- ✅ Mobile Safari (iPhone 12)
- ✅ iPad Pro

---

## 配置说明

### playwright.config.js

```javascript
{
  testDir: './tests',           // 测试文件目录
  timeout: 30000,               // 测试超时 30 秒
  retries: 0,                   // 失败不重试
  workers: undefined,           // 并行执行
  reporter: ['html', 'list'],   // 报告格式
  
  use: {
    baseURL: 'http://localhost:3000',  // 开发服务器
    trace: 'on-first-retry',           // 追踪
    screenshot: 'only-on-failure',     // 失败截图
    video: 'on-first-retry',           // 失败录像
  },
  
  webServer: {
    command: 'npm run dev',      // 自动启动开发服务器
    port: 3000,
    reuseExistingServer: true,   // 重用已有服务器
  },
}
```

---

## 测试数据

### 预期内容
- **导航链接**: 8 个（首页、轨迹、路线、详情、时间线、荣耀、路书、图集）
- **打卡点卡片**: 6 张
- **时间线项**: 6 个
- **获奖者卡片**: 3 张
- **图集图片**: 10 张
- **统计数据**: 4 项（131.4km、3121m、8h45m、6）

### 全局 API
- `window.togglePlay()` - 播放/暂停
- `window.cycleSpeed()` - 速度切换
- `window.resetAnim()` - 重置
- `window.toggleMenu()` - 菜单切换
- `window.openLightbox()` - 打开灯箱
- `window.closeLightbox()` - 关闭灯箱

---

## 故障排查

### 常见问题

**1. 测试超时**
```
Error: Timeout 30000ms exceeded
```
解决：检查开发服务器是否运行，或增加 `timeout` 配置

**2. Canvas 元素不存在**
```
Error: Element not found: #trajectory-canvas
```
解决：检查 JS 是否加载，查看浏览器控制台错误

**3. 端口被占用**
```
Error: Port 3000 is in use
```
解决：关闭已有进程或修改 `playwright.config.js` 中的端口

**4. 浏览器未安装**
```
Error: Executable doesn't exist
```
解决：运行 `npx playwright install`

---

## CI/CD 集成

### GitHub Actions 示例

```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm test
```

---

## 最佳实践

1. **测试隔离**: 每个测试独立，不依赖其他测试状态
2. **BeforeEach**: 使用 `test.beforeEach` 重置页面状态
3. **显式等待**: 使用 `waitForSelector` 而非固定延迟
4. **数据属性**: 优先使用 `data-testid` 选择器
5. **截图命名**: 使用描述性文件名便于对比

---

## 更新测试基准

当设计变更时，更新视觉回归基准截图：

```bash
npm test -- --update-snapshots
```

---

## 资源

- [Playwright 官方文档](https://playwright.dev)
- [测试断言 API](https://playwright.dev/docs/api/class-expect)
- [设备模拟列表](https://playwright.dev/docs/api/class-devices)
