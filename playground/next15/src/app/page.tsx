import type {
  ISbStoriesParams,
  StoryblokClient,
  StoryblokRichText,
  StoryblokRichTextNode,
  StoryblokStory,
} from '@storyblok/react/rsc';
import { MarkTypes } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import Link from 'next/link';
import type { ReactElement } from 'react';
import React, { createElement } from 'react';

export default async function Home() {
  const { data } = await fetchData();

  const doc = {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: 'This is a test of the StoryblokRichText component.',
          },
        ],
      },
      {
        type: 'paragraph',
        content: [
          {
            text: 'Internal Link',
            type: 'text',
            marks: [
              {
                type: 'link',
                attrs: {
                  href: '/',
                  uuid: '8489bed8-d86f-4fde-965c-e3d748e12147',
                  anchor: null,
                  target: '_self',
                  linktype: 'story',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        content: [
          {
            text: 'External link',
            type: 'text',
            marks: [
              {
                type: 'link',
                attrs: {
                  href: 'https://alvarosaburido.dev',
                  uuid: null,
                  anchor: null,
                  target: '_blank',
                  linktype: 'url',
                },
              },
            ],
          },
        ],
      },
    ],
  };
  const resolvers = {
    // custom resolvers
    [MarkTypes.LINK]: (node: StoryblokRichTextNode<ReactElement>) => {
      return node.attrs?.linktype === 'story'
        ? createElement(Link, {
          href: node.attrs?.href,
          target: node.attrs?.target,
        }, 'NextLink')
        : createElement('a', {
          href: node.attrs?.href,
          target: node.attrs?.target,
        }, node.text);
    },
  };

  return (
    <div>
      <h1>
        Story:
        {data.story.id}
      </h1>
      <StoryblokStory story={data.story} />
      <StoryblokRichText doc={doc} resolvers={resolvers} />
    </div>
  );
}

export async function fetchData() {
  const sbParams: ISbStoriesParams = { version: 'draft' };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
