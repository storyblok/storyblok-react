import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokClientProvider from "../components/StoryblokClientProvider";

storyblokInit({
  accessToken: "RVLbQ7MG4kCi3r1sQQ4VEAtt",
  use: [apiPlugin],
});

export default function StoryblokProvider({ children }) {
  return <StoryblokClientProvider>{children}</StoryblokClientProvider>;
}
