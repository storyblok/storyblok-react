import { StoryblokRichText, useStoryblok } from '@storyblok/react';
import React from 'react';

function RichtextPage() {
  const story = useStoryblok('react/test-richtext', { version: 'draft' });

  console.log(story);
  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return (
    story.content.richText && <StoryblokRichText doc={story.content.richText} />
  );
}

export default RichtextPage;
