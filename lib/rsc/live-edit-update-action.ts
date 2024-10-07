'use server';

export async function liveEditUpdateAction({ story, pathToRevalidate }) {
  if (!story || !pathToRevalidate) {
    console.error('liveEditUpdateAction: story or pathToRevalidate is not provided');
    return;
  }

  globalThis.storyCache.set(story.uuid, story);

  if (process.env.NEXT_RUNTIME) {
    import('next/cache').then(({ revalidatePath }) => {
      console.log('Revalidating path:', pathToRevalidate);
      revalidatePath(pathToRevalidate);
    }).catch((error) => {
      console.error('liveEditUpdateAction: error while revalidating path', error);
    });
  }
}
