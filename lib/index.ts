import { useState, useEffect } from "react";
import {
  useStoryblokBridge as useSbBridge,
  storyblokInit as sbInit,
} from "@storyblok/js";

import {
  SbReactSDKOptions,
  StoryblokBridgeConfigV2,
  SbReactComponentsMap,
  StoryblokClient,
  StoryblokConfig,
  StoryData,
} from "./types";

export { default as StoryblokComponent } from "./components/storyblok-component";
export {
  storyblokEditable,
  apiPlugin,
  useStoryblokBridge,
} from "@storyblok/js";

export const useStoryblok: Function = (
  slug: string,
  apiOptions: StoryblokConfig = {},
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
  }, []);

  return story;
};

export const useStoryblokState: Function = (
  initialStory: StoryData = {} as StoryData,
  bridgeOptions: StoryblokBridgeConfigV2 = {}
) => {
  let [story, setStory] = useState<StoryData>(initialStory);

  useSbBridge(story.id, (newStory) => setStory(newStory), bridgeOptions);

  useEffect(() => {
    setStory(initialStory);
  }, [initialStory]);

  return story;
};

let storyblokApiInstance: StoryblokClient = null;

export const useStoryblokApi: Function = (): StoryblokClient => {
  if (!storyblokApiInstance) {
    console.error(
      "You can't use getStoryblokApi if you're not loading apiPlugin."
    );
  }

  return storyblokApiInstance;
};

export { useStoryblokApi as getStoryblokApi };

let componentsMap: SbReactComponentsMap = {};

export const getComponent: Function = (componentKey: string) => {
  if (!componentsMap[componentKey]) {
    console.error(`Component ${componentKey} doesn't exist.`);
    return false;
  }

  return componentsMap[componentKey];
};

export const storyblokInit: Function = (
  pluginOptions: SbReactSDKOptions = {}
) => {
  const { storyblokApi } = sbInit(pluginOptions);
  storyblokApiInstance = storyblokApi;

  componentsMap = pluginOptions.components;
};

// Reexport all types so users can have access to them
export * from "./types";
