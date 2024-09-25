import type { AppProps } from 'next/app'

import { apiPlugin, storyblokInit } from '@storyblok/react'
import FallbackComponent from '../components/fallback-component'

storyblokInit({
  accessToken: 'd6IKUtAUDiKyAhpJtrLFcwtt',
  use: [apiPlugin],
  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
})

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
