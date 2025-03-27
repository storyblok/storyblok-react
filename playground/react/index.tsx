import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import Teaser from './components/teaser';
import Grid from './components/grid';
import Page from './components/page';
import Feature from './components/feature';

import { apiPlugin, storyblokInit } from '@storyblok/react';
import EmojiRandomizer from './components/emoji-randomizer';

// https://app.storyblok.com/#/me/spaces/147897
storyblokInit({
  accessToken: 'OurklwV5XsDJTIE1NJaD2wtt',
  use: [apiPlugin],
  components: {
    'teaser': Teaser,
    'grid': Grid,
    'feature': Feature,
    'page': Page,
    'emoji-randomizer': EmojiRandomizer,
  },
});

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
