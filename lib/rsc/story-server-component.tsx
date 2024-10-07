import React, { forwardRef } from 'react';
import type { ISbStoryData, StoryblokBridgeConfigV2 } from '../types';
import { SbServerComponent } from './common';
import StoryblokLiveEditing from './storyblok-live-editing';

interface SbStoryServerComponentProps {
  story: ISbStoryData;
  bridgeOptions: StoryblokBridgeConfigV2;
  [key: string]: unknown;
}

const SbStoryServerComponent = forwardRef<HTMLElement, SbStoryServerComponentProps>(
  ({ story, bridgeOptions, ...restProps }, ref) => {
    if (!story) {
      console.error(
        'Please provide a \'story\' property to the SbStoryServerComponent',
      );
      return null;
    }

    if (!globalThis.storyCache.has(story.uuid)) {
      globalThis.storyCache.set(story.uuid, story);
    } else {
      story = globalThis.storyCache.get(story.uuid);
    }
    if (typeof story.content === 'string') {
      story.content = JSON.parse(story.content);
    }

    return (
      <>
        <SbServerComponent ref={ref} blok={story.content} {...restProps} />
        <StoryblokLiveEditing story={story} bridgeOptions={bridgeOptions} />
      </>
    );
  },
);

export default SbStoryServerComponent;
