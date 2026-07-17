import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    allowedHosts: [
      "localhost:5173",
      "127.0.0.1:5173",
      "dominant-usually-oyster.ngrok-free.app",
      "nishithp.page",
      "nishithp2004.github.io"
    ]
  }
})
