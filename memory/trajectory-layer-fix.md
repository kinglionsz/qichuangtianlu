# 轨迹图层被遮挡问题修复

## 问题描述
在开发环境中，轨迹移动层被地图背景图片遮挡，导致看不清轨迹移动。

## 问题分析
1. **Canvas 内部背景图**: `src/js/trajectory.js` 中通过 Canvas 绘制了背景图 `drawBGImg()`
2. **CSS 背景冲突**: `src/styles/main.css` 中 `.trajectory-wrapper` 设置了 `background: url('/imgs/route-map.jpg')`
3. **层级问题**: 背景图位于轨迹图层之上

## 修复方案

### 1. 移除 Canvas 内部背景图绘制
- 文件: `src/js/trajectory.js`
- 删除: `bgImg`, `bgLoaded`, `drawBGImg()` 函数及相关调用

### 2. 添加 CSS 覆盖样式
- 文件: `src/styles/main.css`
- 添加:
```css
/* 覆盖 trajectory-wrapper 的背景，使用 route-map-layer 作为背景 */
.trajectory-wrapper {
  background: transparent;
}
#trajectory-canvas {
  position: relative;
  z-index: 1;
}
```

## 正确的层级结构
```
.trajectory-wrapper
  ├── .route-map-layer (z-index: 0)  ← 底层背景
  │     └── background-image (opacity: 0.12)
  └── #trajectory-canvas (z-index: 1)  ← 上层轨迹
```

## 参考对比
使用 `dist/index.html` 作为正确实现的参考。

## Git 提交
```
fix: 修复轨迹移动层被地图背景遮挡的问题

问题原因：
- trajectory.js 中通过 Canvas 绘制背景图，导致轨迹被遮挡
- main.css 中 .trajectory-wrapper 的背景图设置未正确覆盖

修复方案：
- 移除 trajectory.js 中的 Canvas 内部背景图绘制代码
- 添加 CSS 覆盖样式，将 .trajectory-wrapper 背景设为透明
```