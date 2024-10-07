import Page from '@/components/Page';
import Teaser from '@/components/Teaser';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
  accessToken: 'RVLbQ7MG4kCi3r1sQQ4VEAtt',
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
  },
});
