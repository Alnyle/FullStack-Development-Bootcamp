// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: "3000",
    proxy: {
      '/api/': {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('Proxying request:', req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('Received response from target:', req.url);
          });
        },
      },
    },
  },
});
