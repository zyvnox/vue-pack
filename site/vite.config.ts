import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import path from 'node:path'

export default defineConfig({
  base: '/vue-pack/',
  plugins: [vue(), UnoCSS({ configFile: path.resolve(import.meta.dirname, 'uno.config.ts') })],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@zyvnox/vue-pack/components': path.resolve(import.meta.dirname, '../src/components/index.ts'),
      '@zyvnox/vue-pack/config': path.resolve(import.meta.dirname, '../src/configs/index.ts'),
      '@zyvnox/vue-pack/init': path.resolve(import.meta.dirname, '../src/init.ts'),
      '@zyvnox/vue-pack/indexedDB': path.resolve(import.meta.dirname, '../src/lib/indexedDB.ts'),
      '@zyvnox/vue-pack/secureFetch': path.resolve(
        import.meta.dirname,
        '../src/lib/secureFetch.ts',
      ),
      '@zyvnox/vue-pack/vue': path.resolve(import.meta.dirname, '../src/plugin/vue.plugin.ts'),
      '@zyvnox/vue-pack/style.css': path.resolve(import.meta.dirname, '../dist/style.css'),
      '@zyvnox/vue-pack/type': path.resolve(import.meta.dirname, '../src/configs/types/index.ts'),
      '@zyvnox/vue-pack': path.resolve(import.meta.dirname, '../src/index.ts'),
    },
  },
  server: {
    port: 3333,
    open: true,
  },
})
