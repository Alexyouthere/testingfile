import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Function to find the entry file
function findEntryFile() {
  const possibleEntries = ['src/main.jsx', 'src/main.js', 'src/index.jsx', 'src/index.js']
  for (const entry of possibleEntries) {
    if (fs.existsSync(path.resolve(entry))) {
      return entry
    }
  }
  throw new Error('Could not find entry file')
}

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure this points to your project root
  build: {
    rollupOptions: {
      input: findEntryFile()
    }
  },
  resolve: {
    alias: {
      '/src': path.resolve(__dirname, 'src')
    }
  }
})
