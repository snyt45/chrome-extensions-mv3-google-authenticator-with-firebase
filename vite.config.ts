import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { r } from './scripts/utils'

// https://vitejs.dev/config/
export default defineConfig({
  root: r('src'),
  build: {
    outDir: r('extension/dist'),
    emptyOutDir: false,
    rollupOptions: {
      input: {
        popup: r('src/popup/index.html'),
      },
    },
  },
  plugins: [
    vue(),
    // rewrite assets to use relative path
    {
      name: 'assets-rewrite',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml(html) {
        return html.replace(/"\/assets\//g, '"../assets/')
      },
    },
  ],
  server: {
    host: true
  }
})
