import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    basicSsl(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@storyblok/react': resolve(__dirname, '../../src/index.ts'),
    },
  },
});
