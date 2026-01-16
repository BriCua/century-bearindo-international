import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // manualChunks are removed to prevent conflicts with SSR externalization
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
