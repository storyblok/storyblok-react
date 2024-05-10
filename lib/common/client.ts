import { useState, useEffect } from "react";
import { TUseStoryblokState } from "../types";
import { registerStoryblokBridge } from "@storyblok/js";

export const useStoryblokState: TUseStoryblokState = (
  initialStory = null,
  bridgeOptions = {},
) => {
  const [story, setStory] = useState(initialStory);

  const storyId = (initialStory as any)?.internalId ?? initialStory?.id ?? 0;
  const isBridgeEnabled = typeof window !== "undefined" &&
    typeof window.storyblokRegisterEvent !== "undefined";

  useEffect(() => {
    if (!isBridgeEnabled || !initialStory) return;

    setStory(initialStory);

    registerStoryblokBridge(
      storyId,
      (newStory) => setStory(newStory),
      bridgeOptions
    );

  }, [initialStory, isBridgeEnabled]);

  return story;
};
