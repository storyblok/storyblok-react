import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import React from 'react';

function App() {
  const story = useStoryblok('home', { version: 'draft' });

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}

export default App;
