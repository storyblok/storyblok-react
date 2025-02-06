'use server';

import type { ISbStoryData } from '@storyblok/js';

export async function liveEditUpdateAction({ story, pathToRevalidate }: { story: ISbStoryData; pathToRevalidate: string }) {
  if (!story || !pathToRevalidate) {
    return console.error('liveEditUpdateAction: story or pathToRevalidate is not provided');
  }

  globalThis.storyCache.set(story.uuid, story);

  // Revalidate path in Next.js SDKs only
  if (process.env.NEXT_RUNTIME) {
    try {
      const { revalidatePath } = await import('next/cache');
      revalidatePath(pathToRevalidate);
    }
    catch (error) {
      console.error('liveEditUpdateAction: error while revalidating path', error);
    }
  }
}
