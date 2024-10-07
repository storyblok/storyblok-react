"use client";

import { registerStoryblokBridge } from "@storyblok/js";
import { useEffect, startTransition } from "react";
import { liveEditUpdateAction } from "./live-edit-update-action";

const StoryblokLiveEditing = ({ story = null, bridgeOptions = {} }) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const handleInput = (story) => {
    if (!story) {
      return;
    }
    startTransition(() => {
      liveEditUpdateAction({ story, pathToRevalidate: window.location.pathname });
    });
  };

  const storyId = story?.internalId ?? story?.id ?? 0;
  useEffect(() => {
    registerStoryblokBridge(storyId, (newStory) => handleInput(newStory), bridgeOptions);
  }, []);

  return null;
};

export default StoryblokLiveEditing;
