import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    cssTarget: 'chrome61',
    minify: false, // Deshabilita la minificación para reducir uso de CPU/RAM
    chunkSizeWarningLimit: 1000, // Ajusta el límite del tamaño de los chunks
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    host: '0.0.0.0', // Escucha en todas las interfaces de red
    port: 8080, // O el puerto que prefieras
    open: true, // Opcional: abre el navegador automáticamente
  },
})
