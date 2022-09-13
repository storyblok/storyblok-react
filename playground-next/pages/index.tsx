import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({
  story: initialStory,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const story = useStoryblokState(initialStory);

  if (!story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
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
