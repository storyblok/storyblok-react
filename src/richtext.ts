import React from 'react';
import StoryblokComponent from './common/storyblok-component';
import type {
  StoryblokRichTextNode,
  StoryblokRichTextOptions,
} from '@storyblok/js';
import { BlockTypes, richTextResolver } from '@storyblok/js';

let keyCounter = 0;

const generateKey = (prefix: string): string => `${prefix}-${keyCounter++}`;

export function componentResolver(
  node: StoryblokRichTextNode<React.ReactElement>,
): React.ReactElement {
  const body = node?.attrs?.body;
  return React.createElement(StoryblokComponent, {
    blok: Array.isArray(body) ? body[0] : undefined,
    key: node.attrs?.id || generateKey('sb-component'),
  });
}

export function useStoryblokRichTextResolver(
  options: StoryblokRichTextOptions<React.ReactElement>,
) {
  keyCounter = 0;

  const mergedOptions = {
    renderFn: (element: string, props: any, children: any) => {
      const elementProps = {
        ...props,
        key: `${element}-${keyCounter++}`,
      };
      return React.createElement(element, elementProps, children);
    },
    textFn: (text: string) =>
      React.createElement(
        React.Fragment,
        {
          key: `text-${keyCounter++}`,
        },
        text,
      ),
    resolvers: {
      [BlockTypes.COMPONENT]: (
        node: StoryblokRichTextNode<React.ReactElement>,
      ) => {
        const body = node?.attrs?.body;
        return React.createElement(StoryblokComponent, {
          blok: Array.isArray(body) ? body[0] : undefined,
          key: `component-${keyCounter++}`,
        });
      },
      ...options.resolvers,
    },
    keyedResolvers: true,
  };
  return richTextResolver(mergedOptions);
}
