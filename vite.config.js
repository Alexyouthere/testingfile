import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'


export default defineConfig({
  build: {
    rollupOptions: {
      external: ['/src/main.jsx']
    }
  }
})

// https://vitejs.dev/config/
