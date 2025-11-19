// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 💡 Configuracion clave para evitar problemas de ruta base
  // Usamos '/' para confirmar que servirá desde la raíz del puerto
  base: '/'
});