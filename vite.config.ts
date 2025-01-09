import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    hmr: {
      overlay: false, // Disable the HMR error overlay
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // Ensure index.html is the main input
      },
    },
  },
  resolve: {
    alias: {
      '/favicon.ico': '/public/favicon.ico', // Ensure favicon path resolves correctly
    },
  },
  base: '/', // Ensures the correct base path for assets in production
});
