// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/project1/', // ✅ MATCH your GitHub repo name
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
