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
          // Framer Motion — large, but loads in parallel with react
          'vendor-motion': ['framer-motion'],
          // GSAP — only needed for About + Preloader
          'vendor-gsap': ['gsap'],
          // Icons — large icon library
          'vendor-icons': ['react-icons'],
          // Email — only needed for Contact form
          'vendor-email': ['@emailjs/browser'],
        }
      }
    },
    // Raise chunk size warning limit to reduce noise
    chunkSizeWarningLimit: 600,
  }
})
