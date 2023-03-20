"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "../components/Page";
import Teaser from "../components/Teaser";

export default function StoryblokInit({ children }) {
  const components = {
    teaser: Teaser,
    page: Page,
  };

  storyblokInit({
    accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
    use: [apiPlugin],
    components,
  });

  return <>{children}</>;
}
