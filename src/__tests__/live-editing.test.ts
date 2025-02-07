import { describe, expect, it } from 'vitest';
import StoryblokLiveEditing from '../rsc/live-editing';
import type { ISbStoryData } from '@storyblok/js';

describe('storyblokLiveEditing', () => {
  it('should return null when not in visual editor', () => {
    const component = StoryblokLiveEditing({ story: { uuid: '123' } as ISbStoryData, bridgeOptions: {} });
    expect(component).toBeNull();
  });
});
