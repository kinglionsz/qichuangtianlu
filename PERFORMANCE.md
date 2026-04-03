# 性能基准文档

**项目**: 骑闯天路 2017 赛博朋克纪念版
**测试工具**: Lighthouse 13.0.2
**测试日期**: 2026-04-03
**基准 URL**: https://ovbcl6ijlo7z.space.minimaxi.com/

---

## 核心 Web Vitals 基准

| 指标 | 优化前 | 优化后 | 目标值 | 状态 |
|------|--------|--------|--------|------|
| **FCP** | 1.3 秒 | **0.6 秒** | <1.8s | ✅ 优秀 |
| **LCP** | 1.4 秒 | **0.8 秒** | <2.5s | ✅ 优秀 |
| **Speed Index** | 2.7 秒 | **1.5 秒** | <3.4s | ✅ 优秀 |
| **TBT** | N/A | **140ms** | <200ms | ✅ 良好 |
| **CLS** | 0.19 | **0.068** | <0.1 | ✅ 良好 |
| **TTI** | N/A | **0.9 秒** | <3.8s | ✅ 优秀 |

---

## CI/CD 性能阈值

在 GitHub Actions 中配置的 Lighthouse CI 阈值（基于当前最佳表现）：

```json
{
  "first-contentful-paint": ["warn", {"maxNumericValue": 1800}],
  "largest-contentful-paint": ["warn", {"maxNumericValue": 2500}],
  "total-blocking-time": ["warn", {"maxNumericValue": 200}],
  "cumulative-layout-shift": ["warn", {"maxNumericValue": 0.1}],
  "speed-index": ["warn", {"maxNumericValue": 3400}],
  "interactive": ["warn", {"maxNumericValue": 3800}]
}
```

---

## 构建产物基准

| 文件 | 大小 | gzip | 说明 |
|------|------|------|------|
| `index.html` | 21.46 KB | 6.43 KB | 主页面 |
| `index-CvOoOf7p.css` | 22.05 KB | 4.83 KB | 样式 |
| `index-gGRU48Xe.js` | 2.35 KB | 1.16 KB | 首屏 JS |
| `ui-Dk5XmD9U.js` | 2.54 KB | 0.88 KB | UI 模块（异步） |
| `trajectory-Clb9wdGx.js` | 36.28 KB | 10.90 KB | 轨迹模块（异步） |
| `stats-animation-svZlaTMy.js` | 0.93 KB | 0.52 KB | 统计动画（异步） |

---

## 性能优化历史

| 日期 | 优化内容 | 改善 |
|------|---------|------|
| 2026-04-03 | 初始优化版本 | 基准 |
| 2026-03-30 | GPX 数据更新与虐点标注 | - |
| 2026-03-29 | 测试策略优化、WebKit 兼容性 | - |

---

## 监控与维护

- **CI 触发条件**: push 到 main 或 pull_request
- **性能报告**: 每次 PR 自动生成 Lighthouse 报告
- **阈值警告**: 任何指标超过目标值的 80% 触发警告
- **部署**: 仅 main 分支通过所有检查后自动部署到 GitHub Pages

---

**下次审查日期**: 2026-05-03