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

  bridgeOptions.resolveRelations =
    bridgeOptions.resolveRelations ?? apiOptions.resolve_relations;

  bridgeOptions.resolveLinks =
    bridgeOptions.resolveLinks ?? apiOptions.resolve_links;

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
        registerStoryblokBridge(
          data.story.id,
          (story) => setStory(story),
          bridgeOptions
        );
      }
    }

    initStory();
  }, [slug, JSON.stringify(apiOptions)]);

  return story;
};

export * from "./common";
export * from "./common/client";
