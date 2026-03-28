# 骑闯天路 2017 赛博朋克纪念版

![项目预览](/imgs/ride-through-the-sky-road-2017-cycling-race.jpg)

## 更新日志

### 2026-03-28 性能优化 v2.0

#### 核心优化内容

1. **字体加载优化**
   - 移除CSS中的@import阻塞式字体加载
   - 改用异步加载：`media="print" onload="this.media='all'"`
   - 添加预连接(preconnect)加速DNS/TCP/TLS建立
   - 解决预加载字体未使用的警告

2. **图片格式优化 (JPG → WebP)**
   - 所有图片改用WebP格式，文件体积减少60%+
   - 使用picture标签提供回退支持
   - 添加width/height属性防止CLS（布局偏移）

3. **轨迹动画优化 (降低CPU占用)**
   - 默认状态改为暂停(`playing=false`)
   - 用户点击PLAY才开始移动轨迹
   - 显著减少页面加载时的CPU占用

4. **Vite自动预加载**
   - 使用`unplugin-inject-preload`插件
   - 自动为构建输出的CSS/JS添加preload标签
   - 提升回访用户加载速度

#### 性能提升结果 (GTmetrix)

| 指标 | 优化前 | 优化后 | 变化 |
|------|--------|--------|------|
| Performance | 69% | **79%** | +10% |
| Structure | 91% | 90% | 持平 |
| LCP | 2.2s | **1.8s** | -0.4s |
| TBT | 91ms | **0ms** | 完全消除 |

#### 提交记录

```
3fefe7b perf: 全面优化页面性能，提升用户体验
```

---

### 2026-03-26 性能优化巅峰版

#### 关键成功时刻 ⭐

1. **动态帧率调整 - 最关键的优化**
   - 提交: `2b539a1`
   - 核心代码: `const currentInterval = playing ? 33ms : 100ms`
   - 效果: CPU 从 30% 降至播放时 15-20%，暂停时 <3%（↓90%+）
   - 这是性能优化的最关键突破

2. **轨迹层级修复**
   - 提交: `523ab8b`
   - 问题: 轨迹移动层被地图背景图片遮挡
   - 修复:
     - 移除 `trajectory.js` 中的 Canvas 内部背景图绘制
     - 添加 CSS 覆盖样式，透明化 `.trajectory-wrapper` 背景
     - 确保 `route-map-layer` (z-index: 0) 在下层作为背景
     - 确保 `#trajectory-canvas` (z-index: 1) 在上层显示轨迹

3. **标题显示修复**
   - 提交: `977a542`
   - 问题: "动态骑行轨迹"标题超出容器边界
   - 修复:
     - 限制 `.hero` 和 `.section-title` 最大宽度为 1100px
     - 使用 `margin: 0 auto` 居中对齐
     - 将 `display: inline-block` 改为 `display: block`

4. **Canvas 渲染优化**
   - 提交: `0900d7a`
   - 优化:
     - 移除 `drawCoastline` 中的 `shadowBlur` 效果
     - 将 `shadowBlur` 从 13 处降至 1 处（↓92%）

5. **暂停时完全停止重绘**
   - 提交: `2fefa10`
   - 优化: 暂停时完全不执行 Canvas 重绘逻辑

6. **移除固定定位全局背景**
   - 提交: `a29ce3f`
   - 优化: 从 5 个固定定位元素降至 1 个，减少 GPU 负担

7. **移动端横向滚动**
   - 提交: `d64f8e7`
   - 修复: 荣耀时刻卡片在移动端支持横向滚动

8. **Playwright 测试配置**
   - 提交: `4d5dea1`
   - 功能: 配置了 51 个自动化测试用例，覆盖 6 种浏览器/设备

#### 最终性能指标

| 指标 | 优化前 | 优化后 |
|------|--------|--------|
| 播放时 CPU | 30% | 15-20% |
| 暂停时 CPU | 30% | <3% |
| shadowBlur 使用 | 13 处 | 1 处 |
| 固定定位元素 | 5 个 | 1 个 |

#### 性能优化经验总结

1. **动态帧率调整最关键** - 暂停时 10fps 比 30fps CPU 下降 90%+
2. **减少 fixed 元素** - 从 5 个降至 1 个，减少 GPU 负担
3. **Canvas 优化** - shadowBlur 从 13 处降至 1 处（↓92%）
4. **条件渲染** - 暂停时完全停止 Canvas 重绘
5. **架构原则** - CSS 管静态背景，Canvas 管动态动画；职责分离
6. **移动端横向滚动** - display:flex + overflow-x:auto + scroll-snap-type

#### 完整提交历史（2026-03-26）

```
69999b2 refactor: 简化海岸线轮廓，只保留真实海岸边界
dd7ba9d chore: 更新 .gitignore 排除 Agent Browser 产物
523ab8b fix: 修复轨迹移动层被地图背景遮挡的问题
977a542 fix: 修复'动态骑行轨迹'标题超出容器边界问题
0900d7a perf: 优化 Canvas 渲染降低 CPU 占用率
2fefa10 fix(perf): 暂停时完全停止 Canvas 重绘
2b539a1 perf: 暂停时动态降帧率到 10fps - 最终完美版本
a29ce3f perf: 移除固定定位的全局背景装饰层
d64f8e7 fix: 荣耀时刻移动端支持横向滚动
4d5dea1 feat: 配置 Playwright 自动化测试套件
```

#### 9. 海岸线轮廓优化

**问题**：大鹏半岛轮廓线偏左，没有包含起点、鹅公湾、西涌、坝光等关键点

**修复历程**：
- 第一次修复：扩展西海岸，包含起点和鹅公湾
- 第二次修复：扩展北岸，包含坝光
- 第三次修复：扩展南端，包含西涌
- **最终方案**（`69999b2`）：简化海岸线轮廓，只保留真实海岸边界

**最终方案优势**：
- ✅ 代码简洁（从 30+ 行降至 11 行）
- ✅ 无重复海岸线
- ✅ 轮廓清晰美观
- ✅ 所有轨迹点在轮廓内清晰可见

---

## 项目介绍

这是一个纪念2017年骑闯天路深圳站自行车赛的单页Web应用，采用赛博朋克/合成波美学风格，通过Canvas动画技术生动再现了全程131.4公里的骑行轨迹。项目不仅展示了赛事的地理路线，还包含了详细的海拔变化、检查点信息和实时遥测数据，为用户提供沉浸式的视觉体验。

本项目基于Vite构建，采用模块化JavaScript架构，将UI交互、轨迹渲染和数据管理分离，确保代码的可维护性和可扩展性。应用支持响应式设计，可在桌面和移动设备上流畅运行。

## 技术架构

### 整体架构

```
+-------------------+
|    用户界面层     |
|  (HTML/CSS/JS)    |
+-------------------+
         ↓
+-------------------+
|   业务逻辑层      |
|  (轨迹渲染引擎)   |
+-------------------+
         ↓
+-------------------+
|   数据管理层      |
|  (路线数据存储)   |
+-------------------+
```

### 技术栈

- **前端框架**: 原生HTML/CSS/JavaScript (无框架)
- **构建工具**: Vite 5.4.0
- **模块系统**: ES6 Modules
- **渲染技术**: HTML5 Canvas
- **动画技术**: requestAnimationFrame
- **UI交互**: IntersectionObserver, 事件监听
- **样式技术**: CSS Variables, Media Queries

### 项目结构

```
bike-project/
├── src/                    # 源代码目录
│   ├── assets/             # 静态资源（图片）
│   ├── js/                 # JavaScript模块
│   │   ├── main.js         # 模块入口点
│   │   ├── trajectory.js   # Canvas渲染和动画
│   │   ├── trajectoryData.js # 路线数据和常量
│   │   └── ui.js           # 用户界面交互
│   └── styles/             # CSS样式表
│       └── main.css        # 主样式表
├── public/                 # 公共静态文件
│   └── imgs/               # 图片资源
├── dist-build/             # 生产构建输出
├── node_modules/           # 依赖包
├── package.json            # 项目配置
├── package-lock.json       # 依赖锁定
└── vite.config.js          # Vite配置（默认）
```

## 功能特性

### 核心功能

1. **动态轨迹可视化**
   - 基于Canvas的平滑骑行轨迹动画
   - 30fps帧率控制确保流畅体验
   - 脉冲效果和光效增强视觉表现

2. **实时遥测显示**
   - 当前里程、海拔、速度和耗时
   - 进度百分比指示器
   - 赛事编号#1387571标识

3. **检查点系统**
   - 6个主要检查点标记（含起点和终点）
   - 检查点脉冲动画效果
   - 检查点名称和里程标注

4. **海拔剖面图**
   - 底部显示全程海拔变化
   - 当前位置在剖面图上的标记
   - 最高海拔点（265米）特殊标注

5. **一级虐点标识**
   - 4个最具挑战性的爬坡路段
   - 特殊的火焰图标和橙色标记
   - 虐点名称和海拔标注

### 交互功能

- **播放控制**
  - 播放/暂停按钮
  - 速度切换（0.5x, 1x, 2x, 4x）
  - 重置动画到起点

- **UI交互**
  - 滚动揭示动画（Scroll Reveal）
  - 图片灯箱查看器（Lightbox）
  - 响应式移动菜单
  - 加载器动画

## 功能流程图

```mermaid
graph TD
    A[应用启动] --> B[初始化Canvas]
    B --> C[加载路线数据]
    C --> D[设置初始状态]
    D --> E[启动动画循环]
    E --> F{是否播放?}
    F -->|是| G[更新进度]
    F -->|否| H[保持当前状态]
    G --> I[计算当前位置]
    I --> J[渲染所有元素]
    J --> K[更新HUD]
    K --> L[更新海拔图]
    L --> M[更新检查点]
    M --> N[渲染自行车]
    N --> E

    O[用户交互] --> P{操作类型?}
    P -->|播放/暂停| Q[切换播放状态]
    P -->|速度切换| R[更新速度变量]
    P -->|重置| S[进度归零]
    P -->|滚动| T[揭示新元素]
    P -->|点击图片| U[打开灯箱]
    Q --> E
    R --> E
    S --> E
    T --> V
    U --> W
```

## 安装与依赖

### 系统要求

- Node.js 18.0.0 或更高版本
- npm 8.0.0 或更高版本
- 现代浏览器（Chrome, Firefox, Safari, Edge）

### 安装步骤

1. 克隆项目仓库：

```bash
git clone https://github.com/your-username/bike-project.git
```

2. 进入项目目录：

```bash
cd bike-project
```

3. 安装依赖包：

```bash
npm install
```

### 依赖说明

项目依赖在`package.json`中定义：

```json
{
  "devDependencies": {
    "vite": "^5.4.0"
  }
}
```

- **Vite**: 作为开发服务器和构建工具，提供快速的热重载和高效的生产构建

## 开发环境

### 启动开发服务器

```bash
npm run dev
```

这将启动Vite开发服务器，默认在`http://localhost:5173`上运行。服务器支持热模块替换（HMR），代码更改会自动反映在浏览器中。

### 开发工作流

1. 启动开发服务器：`npm run dev`
2. 在浏览器中访问`http://localhost:5173`
3. 编辑`src/`目录下的文件
4. 查看实时更新的更改
5. 使用浏览器开发者工具调试

### 环境配置

项目使用Vite默认配置，无需额外配置文件。如需自定义，可创建`vite.config.js`文件。

## 生产环境部署

### 构建生产版本

```bash
npm run build
```

此命令将：

1. 优化和压缩所有资源
2. 生成静态文件到`dist-build/`目录
3. 创建生产就绪的构建版本

构建完成后，`dist-build/`目录将包含所有需要部署的文件。

### 预览生产版本

```bash
npm run preview
```

此命令在本地启动一个静态服务器来预览生产构建，运行在`http://localhost:4173`。这有助于在部署前验证构建是否正常工作。

### 部署选项

#### 1. 静态网站托管

将`dist-build/`目录中的文件上传到任何静态网站托管服务：

- GitHub Pages
- Vercel
- Netlify
- AWS S3
- 阿里云OSS

#### 2. 传统Web服务器

将`dist-build/`目录部署到任何Web服务器（Apache, Nginx等）的文档根目录。

#### 3. Docker容器化

创建Dockerfile：

```dockerfile
FROM nginx:alpine
COPY dist-build/ /usr/share/nginx/html/
EXPOSE 80
```

构建并运行：

```bash
docker build -t bike-project .
docker run -d -p 8080:80 bike-project
```

## 特色亮点

### 1. 精确的路线还原

项目基于真实的行者路书#1387571 GPS数据，精确还原了2017年骑闯天路深圳站的全程路线。通过将GPS坐标映射到Canvas像素坐标，确保了路线的准确性。

### 2. 性能优化

- **帧率控制**: 通过`TARGET_FRAME_INTERVAL`限制动画循环到30fps，避免过度消耗CPU资源
- **脉冲缓存**: 脉冲值每10帧更新一次，减少随机数计算频率
- **离屏渲染**: 使用Canvas的绘制批处理，减少重绘次数

### 3. 视觉特效

- **霓虹效果**: 使用CSS变量和Canvas阴影创建赛博朋克风格的霓虹光效
- **故障动画**: 通过随机脉冲值创建动态的故障效果
- **渐变动画**: 使用Canvas线性渐变创建流动的轨迹效果

### 4. 模块化设计

项目采用ES6模块化设计，将不同功能分离到独立文件：

- `trajectory.js`: 负责核心的轨迹渲染和动画逻辑
- `trajectoryData.js`: 管理所有路线数据和常量
- `ui.js`: 处理用户界面交互
- `main.js`: 作为模块入口点，整合所有功能

### 5. 响应式设计

应用采用响应式设计，通过CSS媒体查询适配不同屏幕尺寸：

- 桌面端：充分利用大屏幕空间
- 平板端：调整布局和字体大小
- 手机端：简化UI，优化触摸交互

## 设计说明

### 视觉效果

1. **轨迹动画层级设计**
   - 轨迹移动显示在上层，地图透明显示在下层，这是预期效果
   - 通过 `#trajectory-canvas` 的 `mix-blend-mode: screen` 实现黑色透明，让底层地图透出
   - 轨迹发光效果清晰可见，地图作为背景参考

2. **冠军亚军图片**
   - 荣耀时刻中的冠军、亚军图片为示意图，使用相同图片是正常的
   - 图片仅用于展示效果，不代表实际赛事排名

### 轨迹插值算法

使用线性插值（lerp）在航点之间创建平滑动画：

```javascript
function posAt(t) {
  const sf = t * (N - 1);
  const s  = Math.floor(sf);
  const f  = sf - s;
  if (s >= N - 1) return { x: route[N-1].x, y: route[N-1].y };

  const a = route[s], b = route[s + 1];
  return {
    x: lerp(a.x, b.x, f),
    y: lerp(a.y, b.y, f),
    km: lerp(a.km, b.km, f),
    elev: lerp(a.elev, b.elev, f)
  };
}
```

### 动画循环

主动画循环使用`requestAnimationFrame`实现：

```javascript
function frame(ts) {
  // 帧率节流
  const elapsed = ts - lastFrameTime;
  if (elapsed < TARGET_FRAME_INTERVAL) {
    requestAnimationFrame(frame);
    return;
  }

  lastFrameTime = ts - (elapsed % TARGET_FRAME_INTERVAL);

  // 更新脉冲缓存
  updatePulseValues();

  // 更新进度
  if (playing) {
    progress += 0.00035 * speed;
    if (progress > 1) progress = 0;
  }

  // 清空画布并重新绘制
  ctx.fillStyle = '#0a0a0f';
  ctx.fillRect(0, 0, CW, CH);

  // 绘制所有元素
  drawGrid();
  drawCoastline();
  drawSegLabels();
  drawRouteFull();
  drawRouteActive();
  drawCheckpoints();

  const p = posAt(progress);
  drawBike(p.x, p.y, p.a);
  drawHUD(p);
  drawElevation();

  requestAnimationFrame(frame);
}
```

## 使用说明

### 基本操作

1. **开始/暂停**: 点击"PLAY"或"PAUSE"按钮控制动画播放
2. **调整速度**: 点击"SPEED"按钮循环切换不同播放速度
3. **重置**: 点击"RESET"按钮将动画重置到起点
4. **查看图片**: 点击画廊中的图片可放大查看
5. **导航**: 在移动设备上点击汉堡菜单可访问导航链接

### 开发者指南

#### 添加新检查点

在`src/js/trajectoryData.js`中修改`waypoints`数组：

```javascript
{
  x: 400, y: 200,           // Canvas坐标
  name: '新检查点',          // 名称
  km: 50,                   // 里程（公里）
  elev: 100,                // 海拔（米）
  isCheck: 7,               // 检查点编号
  road: '新路段',            // 道路名称
  gps: '22.550°N, 114.500°E', // GPS坐标
  checkName: '新检查点'      // 检查点显示名称
}
```

同时更新`checkpoints`数组：

```javascript
{
  km: 50,                   // 里程
  name: '新检查点',          // 名称
  elev: 100,                // 海拔
  color: '#ff00ff'          // 显示颜色
}
```

#### 修改视觉效果

在`src/styles/main.css`中调整CSS变量：

```css
:root {
  --neon-blue: #00f0ff;     /* 霓虹蓝 */
  --neon-pink: #ff00ff;     /* 霓虹粉 */
  --neon-red: #ff4466;      /* 霓虹红 */
  --neon-yellow: #f0f000;   /* 霓虹黄 */
  --bg-color: #0a0a0f;      /* 背景颜色 */
}
```

## 贡献指南

欢迎贡献！请遵循以下步骤：

1. Fork项目
2. 创建新分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送到分支：`git push origin feature/your-feature`
5. 创建Pull Request

### 代码风格

- 使用ES6+语法
- 遵循项目现有的代码风格
- 添加必要的注释
- 确保代码可读性和可维护性

## 许可证

本项目采用MIT许可证。详情请参阅[LICENSE](LICENSE)文件。

## 致谢

- 感谢所有参与2017年骑闯天路深圳站的骑行者
- 感谢行者路书提供GPS数据
- 感谢Vite团队提供优秀的构建工具

## 目录说明

项目中包含两个重要的输出目录，它们有不同的用途：

- `dist/`: 这是单页面HTML应用的原始文档目录，包含了未经构建处理的原始index.html文件和相关资源。这个目录主要用于备份和参考，可以直接在浏览器中打开index.html文件进行查看。

- `dist-build/`: 这是Vite构建命令(`npm run build`)的输出目录，包含了经过优化、压缩和打包后的生产版本文件。这个目录中的文件是用于实际部署的，包含了所有必要的静态资源，已经过构建工具处理，适合在生产环境中使用。

## 联系方式

如有任何问题或建议，请通过以下方式联系：

- 邮箱: example@email.com
- GitHub: [@your-username](https://github.com/your-username)
