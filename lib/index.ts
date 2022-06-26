import { useState, useEffect } from "react";
import {
  useStoryblokBridge as useSbBridge,
  storyblokInit as sbInit,
} from "@storyblok/js";

import {
  SbReactComponentsMap,
  SbReactSDKOptions,
  StoriesParams,
  StoryblokBridgeConfigV2,
  StoryblokClient,
  StoryData,
} from "./types";

export { default as StoryblokComponent } from "./components/storyblok-component";
export {
  storyblokEditable,
  apiPlugin,
  useStoryblokBridge,
} from "@storyblok/js";

export const useStoryblok = (
  slug: string,
  apiOptions: StoriesParams = {},
  bridgeOptions: StoryblokBridgeConfigV2 = {}
) => {
  let [story, setStory] = useState<StoryData>({} as StoryData);

  if (!storyblokApiInstance) {
    console.error(
      "You can't use useStoryblok if you're not loading apiPlugin."
    );

    return null;
  }

  useSbBridge(story.id, (story) => setStory(story), bridgeOptions);

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

export const useStoryblokState = (
  initialStory: StoryData = {} as StoryData,
  bridgeOptions: StoryblokBridgeConfigV2 = {},
  preview: boolean = false
): StoryData => {
  let [story, setStory] = useState<StoryData>(initialStory);

  if (preview) {
    return initialStory;
  }

  useSbBridge(story.id, (newStory) => setStory(newStory), bridgeOptions);

  useEffect(() => {
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
