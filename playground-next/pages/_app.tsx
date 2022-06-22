import { AppProps } from "next/app";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Teaser from "../components/teaser";
import Grid from "../components/grid";
import Page from "../components/page";
import Feature from "../components/feature";

storyblokInit({
  accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    page: Page,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
