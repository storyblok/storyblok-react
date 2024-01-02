import { useState, useEffect } from "react";
import type { TUseStoryblokState } from "../types";
import { registerStoryblokBridge } from "@storyblok/js";

export const useStoryblokState: TUseStoryblokState = (
  initialStory = null,
  bridgeOptions = {},
) => {
  const [story, setStory] = useState(initialStory);

  const storyId = (initialStory as any).internalId || initialStory.id;
  const isBridgeEnabled = typeof window !== "undefined" &&
    typeof window.storyblokRegisterEvent !== "undefined";

  useEffect(() => {
    if (!isBridgeEnabled || !initialStory) return;

    registerStoryblokBridge(
      storyId,
      (newStory) => setStory(newStory),
      bridgeOptions
    );

  }, [initialStory, isBridgeEnabled]);

  return story;
};
