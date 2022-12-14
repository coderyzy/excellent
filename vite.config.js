import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy: {
      '/api': {
        target: 'http://110.40.240.8:9999',  //你要跨域访问的网址
        changeOrigin: true,   // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, '') // 重写路径把路径变成空字符
      }
    }
  }


})


