import React from "react";
import {
  storyblokInit,
  apiPlugin,
  useStoryblok,
  StoryblokComponent,
} from "@storyblok/react";

const TestUseStoryblok = ({ accessToken, components }) => {
  storyblokInit({
    accessToken,
    use: accessToken ? [apiPlugin] : [],
    components,
  });

  const story = useStoryblok("react", { version: "draft" });

  if (!story) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
};

export default TestUseStoryblok;
