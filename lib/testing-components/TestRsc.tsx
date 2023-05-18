import React from "react";

import {
  storyblokInit,
  apiPlugin,
  getStoryblokApi,
  StoryblokComponent,
  SbReactComponentsMap,
  SbBlokData,
} from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

interface TestProps {
  bridge?: boolean;
  accessToken?: string;
  components?: SbReactComponentsMap;
  blok: SbBlokData | false;
}

const TestRsc = ({ bridge, accessToken, components, blok }: TestProps) => {
  storyblokInit({
    accessToken,
    bridge,
    use: accessToken ? [apiPlugin] : [],
    components,
  });

  const storyblokApi = getStoryblokApi();
  const apiExists = !!(storyblokApi && typeof storyblokApi.get === "function");

  return (
    <div>
      <h2>React Testing React Server Component</h2>
      <StoryblokComponent blok={blok} />
      <h3>
        <code>storyblokApi.get:</code>
        <span data-test="api">{apiExists.toString()}</span>
      </h3>
      <StoryblokBridgeLoader options={{}} />
    </div>
  );
};

TestRsc.displayName = "TestRsc";

export default TestRsc;
