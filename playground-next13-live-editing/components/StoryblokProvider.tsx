/** 1. Tag it as client component */
'use client'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

/** 2. Import your components */
import Page from './Page'
import Teaser from './Teaser'

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: 'OurklwV5XsDJTIE1NJaD2wtt',
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
  },
})

export default function StoryblokProvider({ children }) {
  return children
}
