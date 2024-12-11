import { storyblokInit as sbInit } from '@storyblok/js';

import type {
  SbReactComponentsMap,
  SbReactSDKOptions,
  StoryblokClient,
} from '@/types';

export * from '../types';

let storyblokApiInstance: StoryblokClient = null;
let componentsMap: SbReactComponentsMap = {};
let enableFallbackComponent: boolean = false;
let customFallbackComponent: React.ElementType = null;

export const useStoryblokApi = (): StoryblokClient => {
  if (!storyblokApiInstance) {
    console.error(
      'You can\'t use getStoryblokApi if you\'re not loading apiPlugin.',
    );
  }

  return storyblokApiInstance;
};

export const setComponents = (newComponentsMap: SbReactComponentsMap) => {
  componentsMap = newComponentsMap;
  return componentsMap;
};

export const getComponent = (componentKey: string) => {
  if (!componentsMap[componentKey]) {
    console.error(`Component ${componentKey} doesn't exist.`);
    return false;
  }

  return componentsMap[componentKey];
};

export const getEnableFallbackComponent = () => enableFallbackComponent;
export const getCustomFallbackComponent = () => customFallbackComponent;

export const storyblokInit = (pluginOptions: SbReactSDKOptions = {}) => {
  const { storyblokApi } = sbInit(pluginOptions);
  storyblokApiInstance = storyblokApi;

  componentsMap = pluginOptions.components;
  enableFallbackComponent = pluginOptions.enableFallbackComponent;
  customFallbackComponent = pluginOptions.customFallbackComponent;
};

export { useStoryblokApi as getStoryblokApi };

export { useStoryblokRichTextResolver } from './richtext';
export { default as StoryblokComponent } from './storyblok-component';
export { default as StoryblokRichText } from './storyblok-rich-text';

export {
  apiPlugin,
  BlockTypes,
  loadStoryblokBridge,
  MarkTypes,
  registerStoryblokBridge,
  renderRichText,
  RichTextResolver,
  richTextResolver,
  RichTextSchema,
  storyblokEditable,
  type StoryblokRichTextImageOptimizationOptions,
  type StoryblokRichTextNode,
  type StoryblokRichTextNodeResolver,
  type StoryblokRichTextNodeTypes,
  type StoryblokRichTextOptions,
  type StoryblokRichTextResolvers,
  TextTypes,
  useStoryblokBridge,
} from '@storyblok/js';
