import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vike()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    target: 'es2015',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
  },
})
