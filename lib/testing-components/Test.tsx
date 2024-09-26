import React, { forwardRef, useEffect } from 'react';
import type {
  SbBlokData,
  SbReactComponentsMap,
} from '@storyblok/react';
import {
  apiPlugin,
  getStoryblokApi,
  registerStoryblokBridge,
  StoryblokComponent,
  storyblokInit,
} from '@storyblok/react';

interface TestProps {
  bridge?: boolean;
  accessToken?: string;
  components?: SbReactComponentsMap;
  enableFallbackComponent?: boolean;
  customFallbackComponent?: React.ElementType;
  blok: SbBlokData | false;
}

const Test = forwardRef<HTMLElement, TestProps>(
  (
    {
      bridge,
      accessToken,
      components,
      enableFallbackComponent,
      customFallbackComponent,
      blok,
    },
    ref,
  ) => {
    storyblokInit({
      accessToken,
      bridge,
      use: accessToken ? [apiPlugin] : [],
      enableFallbackComponent,
      customFallbackComponent,
      components,
    });

    const storyblokApi = getStoryblokApi();
    const apiExists = !!(
      storyblokApi && typeof storyblokApi.get === 'function'
    );

    useEffect(() => {
      registerStoryblokBridge(43423, newStory => console.log(newStory));
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
  },
);

Test.displayName = 'Test';

export default Test;
