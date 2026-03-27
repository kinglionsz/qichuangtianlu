import { defineConfig } from 'vite';
import UnpluginInjectPreload from 'unplugin-inject-preload/vite';

export default defineConfig({
  // 根目录是项目根（index.html 在这里）
  root: '.',

  // 插件配置
  plugins: [
    // 自动为构建输出的 JS 和 CSS 添加预加载标签
    UnpluginInjectPreload({
      files: [
        {
          // 匹配所有 JS 文件
          outputMatch: /\.js$/,
          attributes: {
            as: 'script',
            crossorigin: 'anonymous'
          }
        },
        {
          // 匹配所有 CSS 文件
          outputMatch: /\.css$/,
          attributes: {
            as: 'style',
            crossorigin: 'anonymous'
          }
        }
      ]
    })
  ],

  // 开发服务器配置
  server: {
    host: true,    // 监听所有网络接口（含局域网IP），等同于 '0.0.0.0'
    port: 3000,
    open: true,
  },

  // 构建输出
  build: {
    outDir: 'dist-build',  // 区别于原 dist 目录（原始备份）
    assetsDir: 'assets',
    sourcemap: false,
    // 代码分割策略
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },

  // 静态资源（不经 Vite 处理，直接 copy 到输出）
  // public/imgs/*.jpg → dist-build/imgs/*.jpg
  publicDir: 'public',
});
