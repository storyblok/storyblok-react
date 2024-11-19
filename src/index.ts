import { useEffect, useState } from 'react';
import { registerStoryblokBridge } from '@storyblok/js';

import type {
  ISbStoriesParams,
  ISbStoryData,
  StoryblokBridgeConfigV2,
} from './types';

import { getStoryblokApi } from './common';

export const useStoryblok = (
  slug: string,
  apiOptions: ISbStoriesParams = {},
  bridgeOptions: StoryblokBridgeConfigV2 = {},
) => {
  const [story, setStory] = useState<ISbStoryData>({} as ISbStoryData);

  const isBridgeEnable
    = typeof window !== 'undefined'
    && typeof window.storyblokRegisterEvent !== 'undefined';

  const storyblokApiInstance = getStoryblokApi();

  useEffect(() => {
    if (!storyblokApiInstance) {
      console.error(
        'You can\'t use useStoryblok if you\'re not loading apiPlugin.',
      );
      return;
    }
    async function initStory() {
      const { data } = await storyblokApiInstance.get(
        `cdn/stories/${slug}`,
        apiOptions,
      );

      setStory(data.story);

      if (isBridgeEnable && data.story.id) {
        registerStoryblokBridge(
          data.story.id,
          story => setStory(story),
          bridgeOptions,
        );
      }
    }

    initStory();
  }, [slug, JSON.stringify(apiOptions), storyblokApiInstance]);

  if (!storyblokApiInstance) {
    return null;
  }

  bridgeOptions.resolveRelations
    = bridgeOptions.resolveRelations ?? apiOptions.resolve_relations;

  bridgeOptions.resolveLinks
    = bridgeOptions.resolveLinks ?? apiOptions.resolve_links;

  return story;
};

export * from './common';
export * from './common/client';
