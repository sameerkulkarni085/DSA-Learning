import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // Replace with your repository name
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed (default is 500 KB)
  },
});
