import React, { useEffect } from "react";
import {
  storyblokInit,
  apiPlugin,
  getStoryblokApi,
  useStoryblokBridge,
  StoryblokComponent,
  SbReactComponentsMap,
  SbBlokData,
} from "@storyblok/react";

interface TestProps {
  bridge?: boolean;
  accessToken?: string;
  components?: SbReactComponentsMap;
  blok: SbBlokData | false;
}

const Test = ({ bridge, accessToken, components, blok }: TestProps) => {
  storyblokInit({
    accessToken,
    bridge,
    use: accessToken ? [apiPlugin] : [],
    components,
  });

  const storyblokApi = getStoryblokApi();
  const apiExists = !!(storyblokApi && typeof storyblokApi.get === "function");

  useEffect(() => {
    useStoryblokBridge(43423, (newStory) => console.log(newStory));
  }, []);

  return (
    <div>
      <h2>React Testing Component</h2>
      <StoryblokComponent blok={blok} />
      <h3>
        <code>storyblokApi.get:</code>
        <span data-test="api">{apiExists.toString()}</span>
      </h3>
    </div>
  );
};

export default Test;
