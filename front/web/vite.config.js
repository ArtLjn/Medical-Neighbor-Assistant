import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        //这里的target实际上就是真实的后端地址，看看你的路径前缀如果有api的话在端口后面加上api
        target: 'http://110.42.244.244:8088', //实际请求地址
        changeOrigin: true,
        ws: true, // 后端同时收及客户端同步数据
        pathRewrite: {
          // 路径重写
          '^/api': '/api'
        }
      }
    }
  }
})
