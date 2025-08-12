import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    cssMinify: 'lightningcss',
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        label: resolve(__dirname, 'src/label.html'),
        404: resolve(__dirname, 'src/404.html'),
        v2: resolve(__dirname, 'src/v2.html'),
      },
    },
  },
  css: {
    transformer: 'lightningcss',
  },
  plugins: [tailwindcss()],
  root: 'src',
  server: {
    open: '/',
  },
});
