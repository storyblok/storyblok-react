import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@storyblok/react': resolve(__dirname, '../../src/index.ts'),
    },
  },
});
