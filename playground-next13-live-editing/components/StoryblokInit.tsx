"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "../components/Page";
import Teaser from "../components/Teaser";

const components = {
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
  use: [apiPlugin],
  components,
});
export default function StoryblokInit({ children }) {
  return <>{children}</>;
}
