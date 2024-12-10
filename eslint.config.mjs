import { storyblokLintConfig } from '@storyblok/eslint-config';

export default storyblokLintConfig({
  ignores: ['**/node_modules/**', 'cypress/', 'README.md'],
});
