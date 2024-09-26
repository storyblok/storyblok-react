import React from 'react';

import type {
  SbBlokData,
  SbReactComponentsMap,
} from '@storyblok/react/rsc';
import {
  apiPlugin,
  getStoryblokApi,
  StoryblokBridgeLoader,
  StoryblokComponent,
  storyblokInit,
} from '@storyblok/react/rsc';

interface TestProps {
  bridge?: boolean;
  accessToken?: string;
  components?: SbReactComponentsMap;
  enableFallbackComponent?: boolean;
  customFallbackComponent?: React.ElementType;
  blok: SbBlokData | false;
}

const TestRsc = ({
  bridge,
  accessToken,
  components,
  enableFallbackComponent,
  customFallbackComponent,
  blok,
}: TestProps) => {
  storyblokInit({
    accessToken,
    bridge,
    use: accessToken ? [apiPlugin] : [],
    enableFallbackComponent,
    customFallbackComponent,
    components,
  });

  const storyblokApi = getStoryblokApi();
  const apiExists = !!(storyblokApi && typeof storyblokApi.get === 'function');

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

TestRsc.displayName = 'TestRsc';

export default TestRsc;
