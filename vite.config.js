import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Versión pública (`vite build --mode publico`): no copia public/, de modo que nada de las autopsias (fotografías y
// facsímiles) puede llegar a dist; sus datos y su pestaña tampoco entran (chapters.js y Frontera.jsx).
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  publicDir: mode === 'publico' ? false : 'public',
  // Rutas relativas: el build funciona igual en la raíz de un dominio que en una subcarpeta de una web institucional.
  base: './',
  define: { __FECHA_COMPILACION__: JSON.stringify(new Date().toISOString()) },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
}))
