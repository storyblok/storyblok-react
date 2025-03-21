import React from 'react';
import StoryblokComponent from './common/storyblok-component';
import type { StoryblokRichTextNode, StoryblokRichTextOptions } from '@storyblok/js';
import { BlockTypes, richTextResolver } from '@storyblok/js';

export function componentResolver(node: StoryblokRichTextNode<React.ReactElement>): React.ReactElement {
  const body = node?.attrs?.body;
  return React.createElement(StoryblokComponent, {
    blok: Array.isArray(body) ? body[0] : undefined,
    key: node.attrs?.id,
  });
}

export function useStoryblokRichText(
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
