import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Rutas relativas: el build funciona igual en la raíz de un dominio que en
  // una subcarpeta (p. ej. GitHub Pages: usuario.github.io/repositorio/).
  base: './',
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
