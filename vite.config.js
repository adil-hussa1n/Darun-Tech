import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — critical path, must be small
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Framer Motion — large, loads in parallel with react
          'vendor-motion': ['framer-motion'],
          // Icons — load in parallel
          'vendor-icons': ['react-icons'],
          // Email — only needed when Contact form is used
          'vendor-email': ['@emailjs/browser'],
        }
      }
    },
    // Raise chunk size warning limit to reduce noise
    chunkSizeWarningLimit: 600,
  }
})
