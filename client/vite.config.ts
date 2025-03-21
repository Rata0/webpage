import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  server: {
    host: true,
    port: 8070,
    watch: {
      usePolling: true,
      interval: 300,
    },
    proxy: {
      '/cards': 'http://localhost:8080/',
    }
  }
})
