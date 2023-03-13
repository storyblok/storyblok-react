import { useState, useEffect } from "react";
import { registerStoryblokBridge as registerSbBridge } from "@storyblok/js";

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

  useEffect(() => {
    async function initStory() {
      const { data } = await storyblokApiInstance.get(
        `cdn/stories/${slug}`,
        apiOptions
      );

      setStory(data.story);

      if (isBridgeEnable && data.story.id) {
        registerSbBridge(
          data.story.id,
          (story) => setStory(story),
          bridgeOptions
        );
      }
    }

    initStory();
  }, [slug]);

  return story;
};

export const useStoryblokState = <T = void>(
  initialStory: ISbStoryData<T> | null = null,
  bridgeOptions: StoryblokBridgeConfigV2 = {}
): ISbStoryData<T> | null => {
  let [story, setStory] = useState(initialStory);

  const isBridgeEnable =
    typeof window !== "undefined" &&
    typeof window.storyblokRegisterEvent !== "undefined";

  if (!isBridgeEnable || !initialStory) {
    return initialStory;
  }

  useEffect(() => {
    setStory(initialStory);

    registerSbBridge(story.id, (newStory) => setStory(newStory), bridgeOptions);
  }, [initialStory]);

  return story;
};

export * from "./common";
