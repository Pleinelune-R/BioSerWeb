import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [tailwindcss(), vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://backend-server:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,  ''),
        // 处理WebSocket跨域 
        ws: true 
      }
    }
  }
})
