"use client";
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";

export default function StoryblokWrapper({ story }) {
  story = useStoryblokState(story);

  return <StoryblokComponent blok={story.content} />;
}
