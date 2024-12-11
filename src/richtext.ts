import React from 'react';
import StoryblokComponent from './common/storyblok-component';
import type { StoryblokRichTextNode, StoryblokRichTextOptions } from '@storyblok/js';
import { BlockTypes, richTextResolver } from '@storyblok/js';

function componentResolver(node: StoryblokRichTextNode<React.ReactElement>) {
  // Convert this to use React.createElement or JSX
  // Example with JSX:
  return React.createElement(StoryblokComponent, {
    blok: node?.attrs?.body[0],
    key: node.attrs?.id,
  });
}

export function useStoryblokRichTextResolver(
  options: StoryblokRichTextOptions<React.ReactElement>,
) {
  const mergedOptions = {
    renderFn: React.createElement,
    resolvers: {
      [BlockTypes.COMPONENT]: componentResolver,
      ...options.resolvers,
    },
    keyedResolvers: true,
  };
  return richTextResolver(mergedOptions);
}