import { forwardRef } from 'react';
import type { ISbStoryData, StoryblokBridgeConfigV2 } from '@/types';
import { StoryblokServerComponent } from './common';
import StoryblokLiveEditing from './live-editing';

interface StoryblokStoryProps {
  story: ISbStoryData;
  bridgeOptions?: StoryblokBridgeConfigV2;
}

const StoryblokStory = forwardRef<HTMLElement, StoryblokStoryProps>(
  ({ story, bridgeOptions, ...restProps }, ref) => {
    if (!story) {
      console.error(
        'Please provide a \'story\' property to the StoryblokServerComponent',
      );
      return null;
    }

    if (globalThis.storyCache.has(story.uuid)) {
      story = globalThis.storyCache.get(story.uuid);
    }

    if (typeof story.content === 'string') {
      try {
        story.content = JSON.parse(story.content);
      }
      catch (error) {
        console.error(
          'An error occurred while trying to parse the story content',
          error,
        );
        story.content = {};
      }
    }

    return (
      <>
        <StoryblokServerComponent ref={ref} blok={story.content} {...restProps} />
        <StoryblokLiveEditing story={story} bridgeOptions={bridgeOptions} />
      </>
    );
  },
);

export default StoryblokStory;
