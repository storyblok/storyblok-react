import React from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Teaser from '../components/teaser';
import Grid from '../components/grid';
import Page from '../components/page';
import Feature from '../components/feature';

import {
  getStoryblokApi,
  setComponents,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';

export default function Home({
  story: initialStory,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  setComponents({
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    page: Page,
  });

  const story = useStoryblokState(initialStory) as typeof initialStory;

  if (!story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(`cdn/stories/home`, {
    version: 'draft',
  });

  return {
    props: {
      story: data ? data.story : false,
    },
    revalidate: 3600,
  };
};
