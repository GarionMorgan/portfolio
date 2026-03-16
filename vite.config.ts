import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Enable polling to detect file changes reliably across WSL/Windows mounts
      usePolling: true,
      interval: 100,
    },
  },
});
