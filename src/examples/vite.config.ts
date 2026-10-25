import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = resolve(fileURLToPath(import.meta.url), '..')

export default defineConfig({
  root: __dirname,
  base: process.env.NODE_ENV === 'production' ? '/vue-forge/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@lib': resolve(__dirname, '../packages'),
      '@': resolve(__dirname, '../packages'),
    },
  },
  server: { port: 5173, open: true },
  build: {
    outDir: resolve(__dirname, '../../docs-dist'),
    emptyOutDir: true,
  },
})