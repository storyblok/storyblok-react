"use client";
import { StoryblokComponent, useStoryblokState } from "@storyblok/react";

export default function StoryblokWrapper({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
      <h1>Story: {story.id}</h1>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}
