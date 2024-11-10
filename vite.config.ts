import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@asset': fileURLToPath(new URL('./src/app/assets', import.meta.url)),
      '@ui':fileURLToPath(new URL('./src/core/ui',import.meta.url))
    }
  }
})
