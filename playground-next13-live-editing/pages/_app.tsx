import { AppProps } from "next/app";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Teaser from "../components/Teaser";
import Page from "../components/Page";

storyblokInit({
  accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
