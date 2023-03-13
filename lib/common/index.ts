import { storyblokInit as sbInit } from "@storyblok/js";

import {
  SbReactComponentsMap,
  SbReactSDKOptions,
  StoryblokClient,
} from "../types";

let storyblokApiInstance: StoryblokClient = null;
let componentsMap: SbReactComponentsMap = {};

export const useStoryblokApi = (): StoryblokClient => {
  if (!storyblokApiInstance) {
    console.error(
      "You can't use getStoryblokApi if you're not loading apiPlugin."
    );
  }

  return storyblokApiInstance;
};

export const getComponent = (componentKey: string) => {
  if (!componentsMap[componentKey]) {
    console.error(`Component ${componentKey} doesn't exist.`);
    return false;
  }

  return componentsMap[componentKey];
};

export const storyblokInit = (pluginOptions: SbReactSDKOptions = {}) => {
  const { storyblokApi } = sbInit(pluginOptions);
  storyblokApiInstance = storyblokApi;

  componentsMap = pluginOptions.components;
};

export { default as StoryblokComponent } from "./storyblok-component";
export { useStoryblokApi as getStoryblokApi };
export {
  storyblokEditable,
  apiPlugin,
  loadStoryblokBridge,
  useStoryblokBridge,
  registerStoryblokBridge,
  renderRichText,
  RichTextResolver,
  RichTextSchema,
} from "@storyblok/js";

export * from "../types";
