"use client";
import { storyblokInit } from "@storyblok/react";

import Page from "../components/Page";
import Teaser from "../components/Teaser";

const components = {
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "RVLbQ7MG4kCi3r1sQQ4VEAtt",
  components,
});

export default function StoryblokClientProvider({ children }) {
  return children;
}
