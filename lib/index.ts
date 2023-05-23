import { useState, useEffect } from "react";
import { registerStoryblokBridge } from "@storyblok/js";

import {
  ISbStoriesParams,
  StoryblokBridgeConfigV2,
  ISbStoryData,
} from "./types";

import { getStoryblokApi } from "./common";

export const useStoryblok = (
  slug: string,
  apiOptions: ISbStoriesParams = {},
  bridgeOptions: StoryblokBridgeConfigV2 = {}
) => {
  const storyblokApiInstance = getStoryblokApi();
  if (!storyblokApiInstance) {
    console.error(
      "You can't use useStoryblok if you're not loading apiPlugin."
    );

    return null;
  }

  let [story, setStory] = useState<ISbStoryData>({} as ISbStoryData);

  const isBridgeEnable =
    typeof window !== "undefined" &&
    typeof window.storyblokRegisterEvent !== "undefined";

  const initStory = async () => {
    const { data } = await storyblokApiInstance.get(
      `cdn/stories/${slug}`,
      apiOptions
    );
    setStory(data.story);
  };

  useEffect(() => {
    initStory();
  }, [slug, apiOptions]);

  useEffect(() => {
    if (isBridgeEnable && story.id) {
      registerStoryblokBridge(
        story.id,
        (story) => setStory(story),
        bridgeOptions
      );
    }
  }, [story])
  

  return story;
};

export * from "./common";
export * from "./common/client";
