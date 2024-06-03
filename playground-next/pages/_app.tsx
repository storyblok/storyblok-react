import { AppProps } from "next/app";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import FallbackComponent from "../components/fallback-component";

storyblokInit({
  accessToken: "RVLbQ7MG4kCi3r1sQQ4VEAtt",
  use: [apiPlugin],
  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
