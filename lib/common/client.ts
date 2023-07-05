import { useState, useEffect } from "react";
import type { TUseStoryblokState } from "../types";
import { registerStoryblokBridge } from "@storyblok/js";

export const useStoryblokState: TUseStoryblokState = (
  initialStory = null,
  bridgeOptions = {},

) => {
  let [story, setStory] = useState(initialStory);

  const isBridgeEnable =
    typeof window !== "undefined" &&
    typeof window.storyblokRegisterEvent !== "undefined";

  if (!isBridgeEnable || !initialStory) {
    return initialStory;
  }

  const id = (story as any).internalId || story.id;

  useEffect(() => {
    setStory(initialStory);
    registerStoryblokBridge(
      id,
      (newStory) => setStory(newStory),
      bridgeOptions
    );
  }, [initialStory]);

  return story;
};
