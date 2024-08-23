import type {
  ISbStoriesParams,
  StoryblokClient,
} from '@storyblok/react/rsc';
import { getStoryblokApi } from "@/lib/storyblok";
import {
  StoryblokComponent,
} from '@storyblok/react/rsc';

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>
        Story:
        {data.story.id}
      </h1>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}

export async function fetchData() {
  const sbParams: ISbStoriesParams = { version: 'draft' };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
