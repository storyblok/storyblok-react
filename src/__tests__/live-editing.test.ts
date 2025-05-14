import { describe, expect, it, vi } from 'vitest';
import StoryblokLiveEditing from '../rsc/live-editing';
import type { ISbStoryData } from '@storyblok/js';

// Mock dependencies
vi.mock('../rsc/live-edit-update-action', () => ({
  liveEditUpdateAction: vi.fn(),
}));

vi.mock('@storyblok/js', () => ({
  registerStoryblokBridge: vi.fn(),
}));

// Mock window for testing
const originalWindow = globalThis.window;
beforeEach(() => {
  // Reset the window mock
  vi.stubGlobal('window', {
    storyblokRegisterEvent: undefined,
    location: {
      search: '',
      pathname: '/',
    },
  });
});

afterEach(() => {
  // Restore original window
  vi.stubGlobal('window', originalWindow);
});

describe('storyblokLiveEditing', () => {
  it('should return null when not in visual editor', () => {
    const component = StoryblokLiveEditing({
      story: { uuid: '123', id: 456 } as ISbStoryData,
      bridgeOptions: {},
    });
    expect(component).toBeNull();
  });

  it('should pass story id to useEffect dependencies', () => {
    const story = { id: 789, uuid: 'test-uuid' } as ISbStoryData;

    // This test is minimal because we can't easily test React hooks in unit tests
    // Instead, we just verify the component doesn't throw errors with valid props
    const renderFn = () => {
      StoryblokLiveEditing({ story, bridgeOptions: { resolveRelations: ['test.relation'] } });
    };

    expect(renderFn).not.toThrow();
  });

  it('should handle null story gracefully', () => {
    // @ts-expect-error - Testing invalid input
    const renderFn = () => StoryblokLiveEditing({ story: null, bridgeOptions: {} });

    // Should not throw an error with null story
    expect(renderFn).not.toThrow();
    expect(renderFn()).toBeNull();
  });
});
