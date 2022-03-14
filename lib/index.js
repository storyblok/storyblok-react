import { useState, useEffect } from "react";
import {
  useStoryblokBridge as useSbBridge,
  storyblokInit as sbInit,
} from "@storyblok/js";

export { default as StoryblokComponent } from "./components/storyblok-component";
export {
  storyblokEditable,
  apiPlugin,
  useStoryblokBridge,
} from "@storyblok/js";

export const useStoryblok = (slug, apiOptions = {}, bridgeOptions = {}) => {
  let [story, setStory] = useState({});

  if (!storyblokApiInstance) {
    console.error(
      "You can't use useStoryblok if you're not loading apiPlugin."
    );
    return null;
  }

  useSbBridge(story.id, (story) => setStory(story), bridgeOptions);

  useEffect(async () => {
    const { data } = await storyblokApiInstance.get(
      `cdn/stories/${slug}`,
      apiOptions
    );
    setStory(data.story);
  }, []);

  return story;
};

export const useStoryblokState = (initialStory = {}, bridgeOptions = {}) => {
  let [story, setStory] = useState(initialStory);

  useSbBridge(story.id, (newStory) => setStory(newStory), bridgeOptions);

  useEffect(() => {
    setStory(initialStory);
  }, [initialStory]);

  return story;
};

let storyblokApiInstance = null;

export const useStoryblokApi = () => {
  if (!storyblokApiInstance) {
    console.error(
      "You can't use useStoryblokApi if you're not loading apiPlugin."
    );
  }

  return storyblokApiInstance;
};

let componentsMap = {};

export const getComponent = (componentKey) => {
  if (!componentsMap[componentKey]) {
    console.error(`Component ${componentKey} doesn't exist.`);
    return false;
  }
  return componentsMap[componentKey];
};

export const storyblokInit = (pluginOptions = {}) => {
  const { storyblokApi } = sbInit(pluginOptions);
  storyblokApiInstance = storyblokApi;

  componentsMap = pluginOptions.components;
};
