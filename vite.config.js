import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'three': 'three' // Esto asegura que Vite resuelva el módulo 'three' correctamente
    }
  }
})
