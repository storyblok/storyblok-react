import { useState, useEffect } from "react";
import {
  registerStoryblokBridge as registerSbBridge,
  storyblokInit as sbInit,
} from "@storyblok/js";

import {
  SbReactComponentsMap,
  SbReactSDKOptions,
  ISbStoriesParams,
  StoryblokBridgeConfigV2,
  StoryblokClient,
  ISbStoryData,
} from "./types";

export { default as StoryblokComponent } from "./components/storyblok-component";
export {
  storyblokEditable,
  apiPlugin,
  useStoryblokBridge,
  registerStoryblokBridge,
  renderRichText,
  RichTextResolver,
  RichTextSchema,
} from "@storyblok/js";

export const useStoryblok = (
  slug: string,
  apiOptions: ISbStoriesParams = {},
  bridgeOptions: StoryblokBridgeConfigV2 = {}
) => {
  let [story, setStory] = useState<ISbStoryData>({} as ISbStoryData);

  if (!storyblokApiInstance) {
    console.error(
      "You can't use useStoryblok if you're not loading apiPlugin."
    );

    return null;
  }

  registerSbBridge(story.id, (story) => setStory(story), bridgeOptions);

  useEffect(() => {
    async function fetchData() {
      const { data } = await storyblokApiInstance.get(
        `cdn/stories/${slug}`,
        apiOptions
      );

      setStory(data.story);
    }

    fetchData();
  }, [slug]);

  return story;
};

export const useStoryblokState = <T = void>(
  initialStory: ISbStoryData<T> = {} as ISbStoryData<T>,
  bridgeOptions: StoryblokBridgeConfigV2 = {},
  preview: boolean = true
): ISbStoryData<T> => {
  let [story, setStory] = useState<ISbStoryData<T>>(initialStory);

  if (!preview) {
    return initialStory;
  }

  useEffect(() => {
    registerSbBridge(story.id, (newStory) => setStory(newStory), bridgeOptions);

    setStory(initialStory);
  }, [initialStory]);

  return story;
};

let storyblokApiInstance: StoryblokClient = null;

export const useStoryblokApi = (): StoryblokClient => {
  if (!storyblokApiInstance) {
    console.error(
      "You can't use getStoryblokApi if you're not loading apiPlugin."
    );
  }

  return storyblokApiInstance;
};

export { useStoryblokApi as getStoryblokApi };

let componentsMap: SbReactComponentsMap = {};

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

// Reexport all types so users can have access to them
export * from "./types";
