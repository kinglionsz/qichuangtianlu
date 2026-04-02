# GPX 数据动态导入 - 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将硬编码的轨迹数据重构为标准化的 JSON 数据格式，实现 GPS 坐标到 Canvas 坐标的运行时动态转换

**Architecture:**
- 创建标准化的 JSON 数据文件存储 GPS 坐标和海拔数据
- 运行时通过 coordinateUtils.js 将 GPS 坐标动态转换为 Canvas 坐标
- 保留原有数据结构兼容，确保转换后渲染效果与原来近似

**Tech Stack:**
- JavaScript (ES6 Modules)
- Vite (开发服务器)
- JSON (数据存储)

---

## Task 1: 创建标准化的 JSON 数据文件

**Files:**
- Create: `data/routes/route-995778.json`

**Steps:**

- [ ] **Step 1: 创建 data/routes 目录**

```bash
mkdir -p D:/ampa_migra/G/CodeSources/ai_project/mimo/bike-project/data/routes
```

- [ ] **Step 2: 提取当前 trajectoryData.js 中的数据**

从以下位置提取数据并生成 JSON：
- `trajectoryPts` (333 个轨迹点) → `trajectory`
- `checkpoints` (6 个打卡点) → `checkpoints`
- `challengePoints` (4 个虐点) → `challengePoints`
- `maxElevPoint` → `maxElevPoint`
- `coastPts` → `coastline`
- `TOTAL_KM`, `MAX_ELEV` → `metadata`

- [ ] **Step 3: 写入 JSON 文件**

生成的 JSON 结构：
```json
{
  "metadata": {
    "routeBookId": "#1387571",
    "name": "2017 VAUDE 骑闯天路资格赛·深圳站",
    "totalDistance": 132.86,
    "totalElevation": 3121,
    "maxElevation": 300,
    "source": "995778gpx.txt",
    "createdDate": "2017-03-16"
  },
  "trajectory": [
    { "km": 0, "lat": 22.611661, "lon": 114.426878, "elev": 35 },
    ...
  ],
  "checkpoints": [
    { "km": 0, "name": "满京华艺术村", "elev": 35, "color": "#00f0ff", "lat": 22.611661, "lon": 114.426878, "type": "start" },
    ...
  ],
  "challengePoints": [
    { "km": 33.43, "name": "富民路", "elev": 55 },
    ...
  ],
  "maxElevPoint": {
    "km": 99.60,
    "name": "径心水库",
    "elev": 265,
    "lat": 22.638564,
    "lon": 114.482453
  },
  "coastline": [
    { "lat": 22.58, "lon": 114.47 },
    ...
  ]
}
```

- [ ] **Step 4: 提交 commit**

```bash
git add data/routes/route-995778.json
git commit -m "feat: 添加标准化路线数据 JSON 文件"
```

---

## Task 2: 创建 GPS → Canvas 坐标转换工具

**Files:**
- Create: `src/js/coordinateUtils.js`

**Steps:**

- [ ] **Step 1: 创建 coordinateUtils.js**

```javascript
/**
 * GPS 坐标到 Canvas 坐标转换工具
 */

// 大鹏半岛 GPS 边界（根据 995778gpx.txt 数据范围）
const GPS_BOUNDS = {
  minLat: 22.47,
  maxLat: 22.70,
  minLon: 114.42,
  maxLon: 114.60
};

// Canvas 配置
const CANVAS_CONFIG = {
  width: 1100,
  height: 770,
  padding: 30
};

/**
 * GPS 坐标转换为 Canvas 坐标
 * @param {number} lat - 纬度
 * @param {number} lon - 经度
 * @returns {object} { x, y } Canvas 坐标
 */
export function gpsToCanvas(lat, lon) {
  const usableWidth = CANVAS_CONFIG.width - CANVAS_CONFIG.padding * 2;
  const usableHeight = CANVAS_CONFIG.height - CANVAS_CONFIG.padding * 2;

  const x = CANVAS_CONFIG.padding +
    ((lon - GPS_BOUNDS.minLon) / (GPS_BOUNDS.maxLon - GPS_BOUNDS.minLon)) * usableWidth;

  const y = CANVAS_CONFIG.padding +
    ((GPS_BOUNDS.maxLat - lat) / (GPS_BOUNDS.maxLat - GPS_BOUNDS.minLat)) * usableHeight;

  return {
    x: Math.round(x),
    y: Math.round(y)
  };
}

/**
 * 将数组中的所有点从 GPS 转换为 Canvas 坐标
 * @param {array} points - 包含 lat, lon 的点数组
 * @returns {array} 转换后的点数组
 */
export function convertPoints(points) {
  return points.map(p => {
    const { x, y } = gpsToCanvas(p.lat, p.lon);
    return { ...p, x, y };
  });
}

export { GPS_BOUNDS, CANVAS_CONFIG };
```

- [ ] **Step 2: 提交 commit**

```bash
git add src/js/coordinateUtils.js
git commit -m "feat: 添加 GPS 到 Canvas 坐标转换工具"
```

---

## Task 3: 创建 JSON 数据加载模块

**Files:**
- Create: `src/js/trajectoryData.json.js`

**Steps:**

- [ ] **Step 1: 创建 trajectoryData.json.js**

```javascript
/**
 * 轨迹数据加载模块
 * 从 JSON 文件加载 GPS 数据并转换为 Canvas 坐标
 */
import { gpsToCanvas, convertPoints, GPS_BOUNDS } from './coordinateUtils.js';

// 动态导入 JSON（Vite 支持）
import routeData from '../../data/routes/route-995778.json?raw';
import { parse as parseJSON } from '@babel/core';

// 解析 JSON 数据
const data = JSON.parse(routeData);

// 转换轨迹点
export const trajectoryPts = convertPoints(data.trajectory);

// 转换打卡点
export const checkpoints = data.checkpoints.map(cp => {
  const { x, y } = gpsToCanvas(cp.lat, cp.lon);
  return { ...cp, x, y };
});

// 转换虐点
export const challengePoints = data.challengePoints;

// 最高海拔点
export const maxElevPoint = data.maxElevPoint;

// 转换海岸线点
export const coastPts = convertPoints(data.coastline);

// 元数据
export const TOTAL_KM = data.metadata.totalDistance;
export const MAX_ELEV = data.metadata.maxElevation;
export const ROUTE_BOOK_ID = data.metadata.routeBookId;

// 导出 GPS 边界供调试使用
export { GPS_BOUNDS };
```

**注意：** Vite 导入 JSON 需要使用 `?raw` 后缀，或者将 JSON 改为 .js 文件导出对象。

- [ ] **Step 2: 如果 Vite JSON 导入有问题，改为 .js 导出方式**

创建 `data/routes/route-995778.js`:
```javascript
export default {
  metadata: { ... },
  trajectory: [ ... ],
  // ...
};
```

- [ ] **Step 3: 提交 commit**

```bash
git add src/js/trajectoryData.json.js data/routes/
git commit -m "feat: 添加 JSON 数据加载模块"
```

---

## Task 4: 修改 trajectory.js 切换数据源

**Files:**
- Modify: `src/js/trajectory.js:1-20` (import 部分)

**Steps:**

- [ ] **Step 1: 修改 import 语句**

原代码：
```javascript
import {
  coastPts, waypoints, trajectoryPts, checkpoints, challengePoints,
  maxElevPoint, TOTAL_KM, MAX_ELEV,
} from './trajectoryData.js';
```

改为：
```javascript
import {
  coastPts, trajectoryPts, checkpoints, challengePoints,
  maxElevPoint, TOTAL_KM, MAX_ELEV,
} from './trajectoryData.json.js';

// 保留 waypoints 用于某些需要详细信息的场景
import { waypoints } from './trajectoryData.js';
```

- [ ] **Step 2: 测试运行**

```bash
npm run dev
```

检查：
- 轨迹是否正确显示
- 打卡点是否在正确位置
- 海拔曲线是否正常

- [ ] **Step 3: 如果有问题，调整 GPS_BOUNDS**

根据实际显示效果微调 GPS_BOUNDS 参数。

- [ ] **Step 4: 提交 commit**

```bash
git add src/js/trajectory.js
git commit -m "refactor: 切换到 JSON 数据源，使用动态坐标转换"
```

---

## Task 5: 验证测试

**Steps:**

- [ ] **Step 1: 对比新旧渲染效果**

打开浏览器，检查：
1. 轨迹路线形状是否与原来近似
2. 6 个打卡点位置是否正确
3. 4 个一级虐点是否显示
4. 最高海拔点标注是否正确
5. 海拔曲线是否正常绘制

- [ ] **Step 2: 测试 RESET 功能**

点击 RESET 按钮，确认轨迹点回到起点。

- [ ] **Step 3: 测试播放/暂停功能**

确认动画正常工作。

- [ ] **Step 4: 提交最终 commit**

```bash
git add .
git commit -m "feat: 完成 GPX 数据动态导入功能"
```

---

## 验收清单

- [ ] JSON 数据文件包含完整的 trajectory、checkpoints、challengePoints、coastline 数据
- [ ] 运行时动态转换后的轨迹显示形状与原来近似
- [ ] 打卡点、一级虐点、最高海拔点位置正确
- [ ] 海拔曲线正确显示
- [ ] RESET、播放/暂停功能正常工作

---

**Plan complete and saved to `docs/superpowers/plans/2026-04-02-gpx-data-import-plan.md`**

**Two execution options:**

1. **Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

2. **Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?