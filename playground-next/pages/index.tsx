import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Teaser from "../components/teaser";
import Grid from "../components/grid";
import Page from "../components/page";
import Feature from "../components/feature";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  setComponents,
} from "@storyblok/react";

export default function Home({
  story: initialStory,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  setComponents({
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    page: Page,
  });

  const story = useStoryblokState(initialStory);

  if (story != null && story.content != null) {
    return <StoryblokComponent blok={story.content} />;
  }

  return <div>Loading...</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  const storyblokApi = getStoryblokApi();

  let { data } = await storyblokApi.get(`cdn/stories/home`, {
    version: "draft",
  });

  return {
    props: {
      story: data ? data.story : false,
    },
    revalidate: 3600,
  };
};
