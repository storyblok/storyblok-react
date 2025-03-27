import React from 'react';
import { StoryblokServerComponent } from './common';
import type { StoryblokRichTextNode, StoryblokRichTextOptions } from '@storyblok/js';
import { BlockTypes, richTextResolver } from '@storyblok/js';

export function componentResolver(node: StoryblokRichTextNode<React.ReactElement>): React.ReactElement {
  const body = node?.attrs?.body;
  return React.createElement(StoryblokServerComponent, {
    blok: Array.isArray(body) ? body[0] : undefined,
    key: node.attrs?.id,
  });
}

export function useStoryblokServerRichText(
  options: StoryblokRichTextOptions<React.ReactElement>,
) {
  const mergedOptions = {
    renderFn: React.createElement,
    textFn: (text: string) => React.createElement(React.Fragment, {
      key: Math.random().toString(36).substring(2, 15),
    }, text),
    resolvers: {
      [BlockTypes.COMPONENT]: componentResolver,
      ...options.resolvers,
    },
    keyedResolvers: true,
  };
  return richTextResolver(mergedOptions);
}
