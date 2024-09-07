import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/src/main.jsx', // Specify the entry point
    }
  },
  resolve: {
    alias: {
      '/src': '/src' // This helps ensure proper resolution of /src paths
    }
  }
})

// https://vitejs.dev/config/
