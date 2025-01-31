import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import React from 'react';

function Home() {
  const story = useStoryblok('react', { version: 'draft' });

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export default Home;
