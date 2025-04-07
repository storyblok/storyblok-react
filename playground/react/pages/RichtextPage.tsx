import { StoryblokRichText, useStoryblok } from '@storyblok/react';
import React from 'react';

function RichtextPage() {
  const story = useStoryblok('react/test-richtext', { version: 'draft' });

  if (!story?.content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg text-gray-600 dark:text-gray-400">
          Loading content...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 prose prose-lg dark:prose-invert max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Rich Text Example</h1>
      {story.content.richText
        ? (
            <StoryblokRichText doc={story.content.richText} />
          )
        : (
            <p className="text-gray-600 dark:text-gray-400">No content available</p>
          )}
    </div>
  );
}

export default RichtextPage;
