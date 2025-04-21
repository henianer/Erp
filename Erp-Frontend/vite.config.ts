import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 1023, // 端口
    hmr: true, // 热更新
    open: true, // 自动打开浏览器
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 别名
    }
  }
})
