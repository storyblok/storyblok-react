import { devServer } from '@cypress/vite-dev-server';
import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: 'react',
        // eslint-disable-next-line ts/no-require-imports
        viteConfig: require('./vite.config.ts'),
      });
    },
  },
  e2e: {},
});
