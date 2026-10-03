import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  root: __dirname, // корень — папка examples
  plugins: [vue()],
  resolve: {
    alias: {
      // Импорт библиотеки как @lib/...
      '@lib': resolve(__dirname, '../packages'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})