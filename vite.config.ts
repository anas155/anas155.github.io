import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',    // Use relative base path for user pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
