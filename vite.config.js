import { defineConfig } from 'vite';

export default defineConfig({
  // 根目录是项目根（index.html 在这里）
  root: '.',

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

  // 确保图片路径在 CSS 和 JS 中正确解析
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
