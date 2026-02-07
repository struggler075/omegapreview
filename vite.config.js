import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Добавьте эту строку!

export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/omegapreview/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})