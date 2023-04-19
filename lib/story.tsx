"use client";
import React from "react";
import { useStoryblokState } from "./common/client";
import StoryblokComponent from "./common/storyblok-component";

const StoryblokClientState = ({ story }) => {
  story = useStoryblokState(story);
  return <StoryblokComponent blok={story.content} />;
};

export default StoryblokClientState;
