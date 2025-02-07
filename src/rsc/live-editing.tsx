'use client';

import { type ISbStoryData, registerStoryblokBridge, type StoryblokBridgeConfigV2 } from '@storyblok/js';
import { startTransition, useEffect } from 'react';
import { liveEditUpdateAction } from './live-edit-update-action';

const isVisualEditor = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  return typeof window.storyblokRegisterEvent !== 'undefined' && window.location.search.includes('_storyblok');
};

const StoryblokLiveEditing = ({ story = null, bridgeOptions = {} }: { story: ISbStoryData; bridgeOptions: StoryblokBridgeConfigV2 }) => {
  if (!isVisualEditor()) {
    return null;
  }

  const handleInput = (story: ISbStoryData) => {
    if (!story) {
      return;
    }
    startTransition(() => {
      liveEditUpdateAction({ story, pathToRevalidate: window.location.pathname });
    });
  };

  const storyId = story?.id ?? 0;
  useEffect(() => {
    registerStoryblokBridge(storyId, newStory => handleInput(newStory), bridgeOptions);
  }, []);

  return null;
};

export default StoryblokLiveEditing;
