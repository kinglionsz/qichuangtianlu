# GPX 数据动态导入 - 设计文档

**日期**: 2026-04-02
**项目**: bike-project (骑闯天路轨迹可视化)
**目标**: 将硬编码的轨迹数据重构为标准化的 JSON 数据格式，实现 GPS 坐标到 Canvas 坐标的运行时动态转换

---

## 1. 概述

### 1.1 背景

当前项目存在以下问题：
- Canvas 坐标需要手动计算，更换 GPX 文件需重新计算所有 x, y 坐标
- 数据分散，GPS 坐标在 trajectoryPts、waypoints、checkpoints 中重复出现
- 转换逻辑不透明，GPS → Canvas 的转换算法散落在数据生成脚本中

### 1.2 目标

1. 将 GPS 坐标和海拔数据标准化存储到 JSON 文件
2. 应用运行时动态将 GPS 坐标转换为 Canvas 坐标
3. 形成可复用的工作流程，未来处理新路线时可套用此范式

---

## 2. 数据结构设计

### 2.1 JSON 文件结构

```
data/routes/route-995778.json
```

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
    { "km": 0.38, "lat": 22.609281, "lon": 114.426537, "elev": 38 },
    ...
  ],
  "checkpoints": [
    {
      "km": 0,
      "name": "满京华艺术村",
      "elev": 35,
      "color": "#00f0ff",
      "lat": 22.611661,
      "lon": 114.426878,
      "type": "start"
    },
    ...
  ],
  "challengePoints": [
    { "km": 33.43, "name": "富民路", "elev": 55 },
    { "km": 60.76, "name": "西涌返", "elev": 45 },
    { "km": 99.60, "name": "径心水库", "elev": 265 },
    { "km": 121.80, "name": "径心水库返", "elev": 265 }
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

### 2.2 数据字段说明

| 数据项 | 字段 | 类型 | 说明 |
|--------|------|------|------|
| metadata | routeBookId | string | 路书编号 |
| metadata | name | string | 路线名称 |
| metadata | totalDistance | number | 总距离 (km) |
| metadata | totalElevation | number | 总爬升 (m) |
| metadata | maxElevation | number | 最高海拔 (m) |
| metadata | source | string | 原始 GPX 文件名 |
| metadata | createdDate | string | 活动日期 |
| trajectory | km | number | 里程 (km) |
| trajectory | lat | number | 纬度 |
| trajectory | lon | number | 经度 |
| trajectory | elev | number | 海拔 (m) |
| checkpoints | km | number | 里程 (km) |
| checkpoints | name | string | 打卡点名称 |
| checkpoints | elev | number | 海拔 (m) |
| checkpoints | color | string | 颜色代码 |
| checkpoints | lat | number | 纬度 |
| checkpoints | lon | number | 经度 |
| checkpoints | type | string | 类型: start/end/checkpoint |
| challengePoints | km | number | 里程 (km) |
| challengePoints | name | string | 虐点名称 |
| challengePoints | elev | number | 海拔 (m) |
| maxElevPoint | km | number | 里程 (km) |
| maxElevPoint | name | string | 名称 |
| maxElevPoint | elev | number | 海拔 (m) |
| maxElevPoint | lat | number | 纬度 |
| maxElevPoint | lon | number | 经度 |
| coastline | lat | number | 纬度 |
| coastline | lon | number | 经度 |

---

## 3. 技术设计

### 3.1 GPS → Canvas 转换算法

```javascript
const GPS_BOUNDS = {
  minLat: 22.47,   // 大鹏半岛南端
  maxLat: 22.70,  // 大鹏半岛北端
  minLon: 114.42, // 大鹏半岛西端
  maxLon: 114.60  // 大鹏半岛东端
};

const CANVAS_CONFIG = {
  width: 1100,
  height: 770,
  padding: 30  // 边缘留白
};

function gpsToCanvas(lat, lon) {
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
```

### 3.2 模块结构

```
src/js/
├── trajectoryData.js      # 当前：直接导出 Canvas 坐标
├── trajectoryData.json.js # 新增：从 JSON 加载并转换
├── coordinateUtils.js     # 新增：GPS → Canvas 转换工具
└── config.js              # 现有：配置常量
```

### 3.3 数据转换流程

```
1. 应用启动
   ↓
2. import routeData from './trajectoryData.json.js'
   ↓
3. trajectoryData.json.js 执行:
   - 动态 import JSON 文件
   - 对每个 trajectory 点调用 gpsToCanvas()
   - 对每个 checkpoint 点调用 gpsToCanvas()
   - 对 coastline 点调用 gpsToCanvas()
   ↓
4. 导出转换后的数据对象
   ↓
5. trajectory.js 使用这些数据渲染
```

---

## 4. 实现步骤

### Step 1: 创建 JSON 数据文件

- 从当前 trajectoryData.js 提取数据
- 生成 data/routes/route-995778.json

### Step 2: 创建坐标转换工具

- 新建 src/js/coordinateUtils.js
- 实现 gpsToCanvas() 函数

### Step 3: 重构 trajectoryData.js

- 新建 trajectoryData.json.js
- 从 JSON 加载数据并动态转换

### Step 4: 更新 trajectory.js

- 修改 import 语句，切换到新数据源
- 测试渲染效果

### Step 5: 验证测试

- 对比新旧数据的渲染效果
- 确认轨迹、打卡点、海拔曲线等显示正确

---

## 5. 可复用工作流程（未来项目）

| 步骤 | 操作 | 产出 |
|------|------|------|
| 1 | 用户提供 GPX 文件 + 路书信息 | gpx 文件 + 元数据 |
| 2 | 手动/脚本解析 GPX → 生成 JSON | data/routes/route-xxx.json |
| 3 | 应用运行时加载 JSON | 自动转换渲染 |

---

## 6. 风险与注意事项

1. **转换精度**: 使用近似算法，允许微小差异
2. **边界值处理**: 超出 GPS_BOUNDS 的坐标需要裁剪或报错
3. **兼容性**: 保留原有 trajectoryData.js 作为备用

---

## 7. 验收标准

- [ ] JSON 数据文件包含完整的 trajectory、checkpoints、challengePoints、coastline 数据
- [ ] 运行时动态转换后的轨迹显示形状与原来近似
- [ ] 打卡点、一级虐点、最高海拔点位置正确
- [ ] 海拔曲线正确显示
- [ ] 可通过更换 JSON 文件切换不同路线