import EmojiRandomizer from '@/components/EmojiRandomizer';
import Grid from '@/components/Grid';
import IFrameEmbed from '@/components/IFrameEmbed';
import Page from '@/components/Page';
import Teaser from '@/components/Teaser';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
  accessToken: 'OurklwV5XsDJTIE1NJaD2wtt',
  use: [apiPlugin],
  components: {
    'teaser': Teaser,
    'page': Page,
    'grid': Grid,
    'iframe-embed': IFrameEmbed,
    'emoji-randomizer': EmojiRandomizer,
  },
});
