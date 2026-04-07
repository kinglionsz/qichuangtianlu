# 骑闯天路 2017 赛博朋克纪念版 - 技术能力文档

## 项目概述
单页Web应用纪念2017 VAUDE骑闯天路资格赛深圳站经典路线。技术栈：Vite 5.4 + ES6 Modules + HTML5 Canvas + 原生JS/CSS。

## 技术栈
- **构建工具**: Vite 5.4
- **前端框架**: 原生JavaScript (ES6 Modules)
- **渲染**: HTML5 Canvas (1100×770)
- **样式**: CSS3 (赛博朋克风格)
- **测试**: Playwright (51个测试用例)
- **部署**: GitHub Pages + GitHub Actions CI/CD

## 核心功能

### 1. Canvas轨迹动画
- **帧率**: 30fps (播放) / 10fps (暂停，CPU优化)
- **性能优化**: 动态帧率调整，暂停时CPU从30%降至<3%
- **绘制函数**: drawGrid/Coastline/RouteFull/RouteActive/Checkpoints/Bike/HUD/Elevation/SegLabels
- **控制API**: togglePlay(), cycleSpeed(), resetAnim()

### 2. 数据系统
- **数据源**: `data/routes/route-995778.json` (GPX真实GPS轨迹)
- **轨迹点**: 333个采样点 (间隔~0.4km)
- **打卡点**: 6个 (满京华→鹅公湾→西涌→杨梅坑→坝光→终点)
- **虐点**: 4个一级虐点 (富民路/西涌返/径心水库/径心水库返)
- **总里程**: 132.86km (代码) / 131.4km (路书显示值)
- **海拔爬升**: 3121m

### 3. 性能优化 (P1已完成)
- **P1-1**: elevationPoints预计算为133个静态数组，消除运行时44000+次遍历
- **P1-2**: findNearestPoint()添加空数组边界检查，增强容错
- **P1-3**: ELEVATION_BASE_POINTS模块加载时排序一次，避免重复排序
- **效果**: 模块加载时间↓, 动画帧率更稳定, 容错性增强

### 4. 响应式设计
- **断点**: 1024px (图集2列) / 768px (单列+汉堡菜单)
- **移动端**: 横向滚动支持 (display:flex+overflow-x:auto+scroll-snap-type)

## 项目结构
```
bike-project/
├── index.html              # 主页面 (8个section)
├── src/
│   ├── js/
│   │   ├── config.js           # Canvas渲染配置
│   │   ├── main.js             # 应用入口
│   │   ├── trajectory.js       # Canvas轨迹动画核心
│   │   ├── trajectoryData.json.js  # 轨迹数据加载模块
│   │   ├── trajectoryData-gpx.js   # GPX数据(无海拔)
│   │   ├── stats-animation.js  # 统计数据动画
│   │   └── ui.js               # UI交互 (Scroll Reveal/Lightbox/Mobile Menu)
│   └── styles/
│       └── main.css            # 赛博朋克样式
├── data/routes/
│   └── route-995778.json       # 原始路书数据源 (GPX+元数据)
├── scripts/
│   ├── generate-elevation.cjs  # 海拔数据生成脚本
│   └── elevation-data.js       # 预计算海拔数据
├── tests/                      # Playwright测试
├── .github/workflows/ci.yml    # CI/CD配置
└── package.json
```

## 配置常量

### Canvas配置 (config.js)
```javascript
CANVAS_CONFIG = {
  WIDTH: 1100, HEIGHT: 770,
  OFFSET_X: 160, OFFSET_Y: 60,
  TOTAL_DISTANCE: 132.86  // 总里程 (km)
}
```

### 动画配置
```javascript
ANIMATION_CONFIG = {
  TARGET_FRAME_INTERVAL: 33,   // 30fps
  IDLE_FRAME_INTERVAL: 100,   // 暂停时10fps
  DEFAULT_SPEED: 1,
  SPEED_VALUES: [0.5, 1, 2, 4]
}
```

## 开发命令
```bash
npm run dev      # 启动开发服务器 (localhost:3000)
npm run build    # 生产构建
npm run preview  # 预览构建结果
npm test         # 运行Playwright测试
npm run test:ui  # 测试UI模式
```

## 部署
- **URL**: https://kinglionsz.github.io/qichuangtianlu
- **CI/CD**: GitHub Actions (build → test → security → deploy → lighthouse)
- **跳过测试**: `git commit -m "chore: ... [skip test]"`

## 性能指标
- **播放CPU**: 15-20%
- **暂停CPU**: <3%
- **shadowBlur**: 1处 (从13处优化)
- **fixed元素**: 1个 (从5个优化)

## 关键数据文件
- `data/routes/route-995778.json` - **唯一数据源** (所有数据应从此导入)
- `src/js/trajectoryData.json.js` - 数据加载与处理模块
- 所有打卡点、虐点、海拔数据必须与原始路书一致

## 维护注意事项
1. **数据一致性**: 修改路书后需重新生成预计算数据
2. **海拔数据**: 使用`scripts/generate-elevation.cjs`重新生成
3. **测试验证**: 数据修改后需运行测试验证
4. **性能监控**: 定期运行Lighthouse检查性能

## 版本历史
- **v2.0** (2026-04-06): P1性能优化 + 虐点数据修复
- **v1.0** (2026-03-26): 初始版本完成
