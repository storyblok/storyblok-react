import { defineConfig } from 'vitest/config';
import path from 'node:path';
import preserveDirectives from 'rollup-plugin-preserve-directives';

export default defineConfig({
  plugins: [preserveDirectives()],
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, 'src', 'index.ts'),
        path.resolve(__dirname, 'src', 'rsc/index.ts'),
      ],
      name: 'storyblokReact',
      fileName: (format, entry) => {
        const isRscEntry = entry.includes('rsc/index');
        const name = isRscEntry ? 'rsc' : entry.split('/').pop();
        return format === 'es' ? `${name}.mjs` : `${name}.js`;
      },
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client', 'next/cache'],
      output: {
        preserveModules: true,
        globals: { react: 'React' },
      },
    },
  },
  test: {
    globals: true,
    include: ['./src/__tests__/**/*'],
    exclude: ['./src/__tests__/cypress', './src/__tests__/testing-components'],
  },
});
