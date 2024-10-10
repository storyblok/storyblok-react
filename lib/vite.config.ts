import { defineConfig } from 'vite';
import path from 'node:path';
import preserveDirectives from 'rollup-plugin-preserve-directives';

export default defineConfig({
  plugins: [preserveDirectives()],
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, 'index.ts'),
        path.resolve(__dirname, 'rsc/index.ts'),
      ],
      name: 'storyblokReact',
      fileName: (format, entry) => {
        const isRscEntry = entry.includes('rsc/index');
        const name = isRscEntry ? 'rsc' : entry.split('/').pop();
        return format === 'es' ? `${name}.mjs` : `${name}.js`;
      },
    },
    rollupOptions: {
      external: ['react', 'next/cache'],
      output: {
        preserveModules: true,
        globals: { react: 'React' },
      },
    },
  },
});
