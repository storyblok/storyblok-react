import { StoryblokComponent, StoryblokRichText, useStoryblok } from '@storyblok/react';
import React from 'react';

function App() {
  // const story = useStoryblok('home', { version: 'draft' });
  const story = useStoryblok('react/test-richtext', { version: 'draft' });

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  /* return <StoryblokComponent blok={story.content} />; */
  return (
    <div>
      <StoryblokRichText doc={story.content.richText} />
      {/* <StoryblokComponent blok={story.content} />
      ; */}
    </div>
  );
}

export default App;
