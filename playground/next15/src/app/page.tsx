import type {
  ISbStoriesParams,
  StoryblokClient,
  StoryblokRichTextNode,
} from '@storyblok/react/rsc';
import { MarkTypes, StoryblokRichText, StoryblokStory,
} from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import Link from 'next/link';
import type { ReactElement } from 'react';

export default async function Home() {
  const { data } = await fetchData();

  const doc = {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "This is some rich text. ",
            "type": "text"
          },
          {
            "text": "blablabla",
            "type": "text",
            "marks": [
              {
                "type": "bold"
              }
            ]
          }
        ]
      },
      {
        "type": "blok",
        "attrs": {
          "id": "1e6b3ae6-163b-4837-ad38-6da15aa3f637",
          "body": [
            {
              "_uid": "i-2c4913a6-845e-481f-b397-0b0cab06316b",
              "columns": [],
              "component": "grid",
              "_editable": "<!--#storyblok#{\"name\": \"grid\", \"space\": \"330386\", \"uid\": \"i-2c4913a6-845e-481f-b397-0b0cab06316b\", \"id\": \"641083779\"}-->"
            }
          ]
        }
      }
    ]
  };

  const resolvers = {
    // custom resolvers
    [MarkTypes.LINK]: (node: StoryblokRichTextNode<ReactElement>) => {
      return node.attrs?.linktype === 'story'
        ? (
            <Link
              href={node.attrs?.href}
              target={node.attrs?.target}
            >
              {node.text}
            </Link>
          )
        : (
            <a
              href={node.attrs?.href}
              target={node.attrs?.target}
            >
              {node.text}
            </a>
          );
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
