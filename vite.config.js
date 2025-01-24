import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set to '/' for root path or '/repository-name/' for GitHub Pages
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed (default is 500 KB)
  },
});
