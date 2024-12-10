import { storyblokInit as sbInit } from '@storyblok/js';
import type {
  ISbStoryData,
  SbReactComponentsMap,
  SbReactSDKOptions,
  StoryblokClient,
} from '@/types';

let storyblokApiInstance: StoryblokClient = null;
const componentsMap: Map<string, React.ElementType> = new Map<string, React.ElementType>();
let enableFallbackComponent: boolean = false;
let customFallbackComponent: React.ElementType = null;

globalThis.storyCache = new Map<string, ISbStoryData>();

export const useStoryblokApi = (): StoryblokClient => {
  if (!storyblokApiInstance) {
    console.error(
      'You can\'t use getStoryblokApi if you\'re not loading apiPlugin.',
    );
  }

  return storyblokApiInstance;
};

export const setComponents = (newComponentsMap: SbReactComponentsMap) => {
  Object.entries(newComponentsMap).forEach(([key, value]) => {
    componentsMap.set(key, value);
  });
  return componentsMap;
};

export const getComponent = (componentKey: string): React.ElementType | false => {
  if (!componentsMap.has(componentKey)) {
    console.error(`Component ${componentKey} doesn't exist.`);
    return false;
  }

  return componentsMap.get(componentKey);
};

export const getEnableFallbackComponent = () => enableFallbackComponent;
export const getCustomFallbackComponent = () => customFallbackComponent;

export const storyblokInit = (pluginOptions: SbReactSDKOptions = {}): (() => StoryblokClient) => {
  if (storyblokApiInstance) {
    return () => storyblokApiInstance;
  }

  const { storyblokApi } = sbInit(pluginOptions);
  storyblokApiInstance = storyblokApi;

  if (pluginOptions.components) {
    setComponents(pluginOptions.components);
  }
  enableFallbackComponent = pluginOptions.enableFallbackComponent;
  customFallbackComponent = pluginOptions.customFallbackComponent;

  return () => storyblokApi;
};

export * from '../types';
export { useStoryblokApi as getStoryblokApi };
export { default as StoryblokServerComponent } from './server-component';

export {
  apiPlugin,
  loadStoryblokBridge,
  registerStoryblokBridge,
  renderRichText,
  RichTextResolver,
  RichTextSchema,
  storyblokEditable,
  useStoryblokBridge,
} from '@storyblok/js';
