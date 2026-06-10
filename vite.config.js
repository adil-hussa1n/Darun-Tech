import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    // Increase limit to avoid false warnings
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — small, loads first
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Framer Motion — Navbar/Footer/sections all need this
          'vendor-motion': ['framer-motion'],
          // Email — only needed when Contact form submits
          'vendor-email': ['@emailjs/browser'],
        }
      }
    }
  }
})
