import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? "/dist/" : "/",
    plugins: [react(),tailwindcss()],
    server: {
      port: 1000,
      open: true,
      host: true,
    },
  }
})
