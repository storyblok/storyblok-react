import React from 'react';
import { StoryblokComponent } from '@storyblok/react';
import type { SbRichTextNode, SbRichTextOptions } from '@storyblok/richtext';
import { BlockTypes, richTextResolver } from '@storyblok/richtext';

function componentResolver(node: SbRichTextNode<React.ReactElement>) {
  // Convert this to use React.createElement or JSX
  // Example with JSX:
  return React.createElement(StoryblokComponent, {
    blok: node?.attrs?.body[0],
    id: node.attrs?.id,
  });
}

export function useSbRichtextResolver(
  options: SbRichTextOptions<React.ReactElement>,
) {
  const mergedOptions = {
    renderFn: React.createElement,
    resolvers: {
      [BlockTypes.COMPONENT]: componentResolver,
      ...options.resolvers,
    },
  };
  return richTextResolver(mergedOptions);
}
