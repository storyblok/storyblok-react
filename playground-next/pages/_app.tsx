import { AppProps } from "next/app";

import { storyblokInit, apiPlugin } from "@storyblok/react";


storyblokInit({
  accessToken: "d6IKUtAUDiKyAhpJtrLFcwtt",
  use: [apiPlugin],
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
