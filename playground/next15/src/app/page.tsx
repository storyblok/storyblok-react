import type { ISbStoriesParams, StoryblokClient } from '@storyblok/react/rsc';
import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok'; // Remember to import from the local file
import Link from 'next/link';

export default async function Home() {
  const { data } = await fetchData();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          Storyblok Next.js 15 Example
        </h1>

        <nav className="space-y-4">
          <Link
            href="/richtext"
            className="block p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go to Rich Text Example
          </Link>
        </nav>

        {data.story && (
          <div>
            <StoryblokStory story={data.story} />
          </div>
        )}
      </div>
    </main>
  );
}

export async function fetchData() {
  const sbParams: ISbStoriesParams = { version: 'draft' };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/react`, sbParams);
}
