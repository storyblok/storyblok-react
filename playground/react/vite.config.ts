import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [
    react(),
    basicSsl(),
  ],
  resolve: {
    alias: {
      '@storyblok/react': resolve(__dirname, '../../src/index.ts'),
    },
  },
});
