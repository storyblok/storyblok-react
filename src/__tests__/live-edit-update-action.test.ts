import { beforeEach, describe, expect, it, vi } from 'vitest';
import { liveEditUpdateAction } from '../rsc/live-edit-update-action';

describe('liveEditUpdateAction', () => {
  beforeEach(() => {
    globalThis.storyCache = new Map();
  });

  it('should log an error if story or pathToRevalidate is not provided', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await liveEditUpdateAction({ story: null, pathToRevalidate: '/path' });
    expect(consoleErrorSpy).toHaveBeenCalledWith('liveEditUpdateAction: story or pathToRevalidate is not provided');

    await liveEditUpdateAction({ story: { uuid: '123' }, pathToRevalidate: null });
    expect(consoleErrorSpy).toHaveBeenCalledWith('liveEditUpdateAction: story or pathToRevalidate is not provided');

    consoleErrorSpy.mockRestore();
  });

  it('should set the story in the global storyCache', async () => {
    const story = { uuid: '123' };
    await liveEditUpdateAction({ story, pathToRevalidate: '/path' });
    expect(globalThis.storyCache.get('123')).toBe(story);
  });
});
