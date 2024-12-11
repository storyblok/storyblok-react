'use client';

import { getStoryblokApi } from '@/lib/storyblok';

export default function StoryblokProvider({ children }: any) {
  getStoryblokApi();
  return children;
}
