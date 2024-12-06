import { beforeEach, describe, expect, it } from 'vitest';
import type { SbReactSDKOptions } from '../types';
import { apiPlugin, getStoryblokApi, storyblokInit } from '../common';

describe('storyblokInit', () => {
  let pluginOptions: SbReactSDKOptions;

  beforeEach(() => {
    pluginOptions = {
      accessToken: 'test-token',
      use: [apiPlugin],
      components: { testComponent: () => null },
      enableFallbackComponent: true,
      customFallbackComponent: () => null,
    };
  });

  it('should initialize storyblokApiInstance', () => {
    storyblokInit(pluginOptions);
    const storyblokApi = getStoryblokApi();
    expect(storyblokApi).toBeDefined();
  });

  it('should set componentsMap', () => {
    storyblokInit(pluginOptions);
    expect(pluginOptions.components).toHaveProperty('testComponent');
  });

  it('should set enableFallbackComponent', () => {
    storyblokInit(pluginOptions);
    expect(pluginOptions.enableFallbackComponent).toBe(true);
  });

  it('should set customFallbackComponent', () => {
    storyblokInit(pluginOptions);
    expect(pluginOptions.customFallbackComponent).toBeDefined();
  });
});
