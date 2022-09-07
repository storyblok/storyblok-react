import React from "react";
import { useStoryblok, StoryblokComponent } from "@storyblok/react";

function App() {
  const story = useStoryblok("home", { version: "draft" });

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}

export default App;
