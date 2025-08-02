import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    // Suppress certain warnings during build
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress specific warnings
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
        if (warning.message.includes('-ms-high-contrast')) return
        warn(warning)
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  },
  // Ensure environment variables are properly loaded
  define: {
    'process.env': {}
  }
})
