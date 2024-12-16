import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import Teaser from './components/teaser';
import Grid from './components/grid';
import Page from './components/page';
import Feature from './components/feature';

import { apiPlugin, storyblokInit } from '@storyblok/react';
import IFrameEmbed from './components/iframe-embed';

storyblokInit({
  accessToken: 'd6IKUtAUDiKyAhpJtrLFcwtt',
  use: [apiPlugin],
  components: {
    'teaser': Teaser,
    'grid': Grid,
    'feature': Feature,
    'page': Page,
    'iframe-embed': IFrameEmbed,
  },
});

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
