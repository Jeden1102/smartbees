import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: '128' // 2kb
  },
  base: process.env.NODE_ENV === 'production'
  ? '/smartbees/'
  : '/',
  plugins: [vue()]
})
