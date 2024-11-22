import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import type { SbReactSDKOptions } from '../types';
import { apiPlugin, getComponent, getCustomFallbackComponent, getEnableFallbackComponent, getStoryblokApi, setComponents, storyblokInit } from '../rsc/common';

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

  afterAll(() => {
    vi.restoreAllMocks();
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
    expect(getEnableFallbackComponent()).toBe(true);
  });

  it('should set customFallbackComponent', () => {
    storyblokInit(pluginOptions);
    expect(getCustomFallbackComponent()).toBeDefined();
  });
});

describe('setComponents', () => {
  it('should set components map', () => {
    const components = { testComponent: () => null };
    setComponents(components);
    expect(getComponent('testComponent')).toBe(components.testComponent);
  });
});

describe('getComponent', () => {
  it('should return the component if it exists', () => {
    const components = { testComponent: () => null };
    setComponents(components);
    expect(getComponent('testComponent')).toBe(components.testComponent);
  });

  it('should return false if the component does not exist', () => {
    expect(getComponent('nonExistentComponent')).toBe(false);
  });

  it('should return false if the component does not exist and log a message', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(getComponent('nonExistentComponent')).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith('Component nonExistentComponent doesn\'t exist.');
    consoleSpy.mockRestore();
  });
});
