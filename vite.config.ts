import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/packages/**/*.ts', 'src/packages/**/*.vue'],
      outDir: 'dist',
      rollupTypes: true, // собирает все d.ts в один index.d.ts
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/packages'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/packages/index.ts'),
      name: 'VueForge',
      fileName: (format) =>
        format === 'es' ? 'vue-forge.es.js' : 'vue-forge.umd.cjs',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        exports: 'named',
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
  },
})