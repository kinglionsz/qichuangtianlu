# MEMORY.md - 骑闯天路项目

## 项目概述
- **项目名**: 骑闯天路 2017 赛博朋克纪念版
- **原始文件**: `dist/index.html`（3041行单体HTML，来自 MiniMax 平台）
- **Vite 项目根**: `D:\ampa_migra\G\CodeSources\ai_project\mimo\bike-project`

## 项目架构（2026-03-25 重构后）

```
bike-project/
├── index.html              # Vite 入口
├── vite.config.js          # outDir: dist-build, publicDir: public
├── package.json            # vite@5.4
├── public/imgs/            # 11张静态图片
└── src/
    ├── styles/main.css
    └── js/
        ├── main.js         # 入口
        ├── ui.js           # 交互逻辑
        ├── trajectory.js   # Canvas引擎
        └── trajectoryData.js # 路书GPS数据
```

## 关键技术决策
- 图片路径统一用 `/imgs/xxx.jpg`（通过 publicDir: public 处理）
- Canvas 帧率控制 30fps（TARGET_FRAME_INTERVAL = 1000/30）
- 脉冲值每10帧更新一次（pulseValue / fastPulseValue缓存）
- 完全剔除 MiniMax iframe 注入脚本（iframe高亮 + 版权footer）
- Google Fonts 通过 CSS @import 引入（Orbitron + Noto Sans SC）

## 构建命令
- `npm run dev` → 开发服务器 :3000
- `npm run build` → 输出到 dist-build/
- `npm run preview` → 预览构建产物
