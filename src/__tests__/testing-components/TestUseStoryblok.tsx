import { apiPlugin, StoryblokComponent, storyblokInit } from '../../common';
import { useStoryblok } from '../../index';
import type { SbReactComponentsMap } from '../../types';
import React from 'react';

interface TestUseStoryblokProps {
  accessToken?: string;
  components?: SbReactComponentsMap;
}

const TestUseStoryblok = ({
  accessToken,
  components,
}: TestUseStoryblokProps) => {
  storyblokInit({
    accessToken,
    use: accessToken ? [apiPlugin] : [],
    components,
  });

  const story = useStoryblok('react', { version: 'draft' });

  if (!story) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} custom="custom" />;
};

export default TestUseStoryblok;
