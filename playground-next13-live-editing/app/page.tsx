"use client";
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";

export default async function Home() {
  const { data } = await fetchData();
  const story = useStoryblokState(data.story);

  return (
    <div>
      <h1>Story: {story.id}</h1>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi: any = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
