"use client";

import React from "react";
import { useStoryblokState } from "./common/client";
import StoryblokComponent from "./common/storyblok-component";
import { ISbStoryData } from "./types";

interface StoryblokStoryProps {
  story: ISbStoryData;
  [key: string]: unknown;
}

const StoryblokStory = ({ story }: StoryblokStoryProps) => {
  story = useStoryblokState(story);
  return <StoryblokComponent blok={story.content} />;
};

export default StoryblokStory;
