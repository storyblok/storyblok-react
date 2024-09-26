import React from 'react';
import type {
  SbReactComponentsMap,
} from '@storyblok/react';
import {
  apiPlugin,
  StoryblokComponent,
  storyblokInit,
  useStoryblok,
} from '@storyblok/react';

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

  return <StoryblokComponent blok={story.content} />;
};

export default TestUseStoryblok;
