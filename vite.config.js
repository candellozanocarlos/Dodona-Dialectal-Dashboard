import { cpSync, globSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Versión pública (`vite build --mode publico`): no copia public/, de modo que las fotografías de autopsia no pueden llegar a dist
// (no hay permiso para publicarlas), y añade solo los facsímiles, que son de elaboración propia.
const soloFacsimiles = () => ({
  name: 'solo-facsimiles',
  closeBundle() {
    for (const f of globSync('public/assets/autopsias/**/facsimil-*')) {
      const destino = f.replaceAll('\\', '/').replace(/^public/, 'dist')
      mkdirSync(dirname(destino), { recursive: true })
      cpSync(f, destino)
    }
  },
})

export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'publico' ? [soloFacsimiles()] : [])],
  publicDir: mode === 'publico' ? false : 'public',
  // Rutas relativas: el build funciona igual en la raíz de un dominio que en una subcarpeta de una web institucional.
  base: './',
  define: { __FECHA_COMPILACION__: JSON.stringify(new Date().toISOString()) },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
}))
