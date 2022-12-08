import React, { forwardRef, useEffect } from "react";
import {
  storyblokInit,
  apiPlugin,
  getStoryblokApi,
  registerStoryblokBridge,
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

const Test = forwardRef<HTMLElement, TestProps>(
  ({ bridge, accessToken, components, blok }, ref) => {
    storyblokInit({
      accessToken,
      bridge,
      use: accessToken ? [apiPlugin] : [],
      components,
    });

    const storyblokApi = getStoryblokApi();
    const apiExists = !!(
      storyblokApi && typeof storyblokApi.get === "function"
    );

    useEffect(() => {
      registerStoryblokBridge(43423, (newStory) => console.log(newStory));
    }, []);

    return (
      <div>
        <h2>React Testing Component</h2>
        <StoryblokComponent ref={ref} blok={blok} />
        <h3>
          <code>storyblokApi.get:</code>
          <span data-test="api">{apiExists.toString()}</span>
        </h3>
      </div>
    );
  }
);

Test.displayName = "Test";

export default Test;
