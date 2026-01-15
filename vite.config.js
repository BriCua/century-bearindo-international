import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/century-bearindo-international/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'gsap'],
          icons: ['@iconify/react'],
          sanity: ['@sanity/client', '@portabletext/react']
        }
      }
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1600
  },
  // Optimize dev server
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@iconify/react']
  }
})
