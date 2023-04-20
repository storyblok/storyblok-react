# Usage

## React

**Demo: see _playground_**

## Next 12

**Demo: see _playground-next_**

## Next 13 (Full RSC)

**Demo: see _playground-next13-rsc_**

_Pros: benefits from the power and performance of using fully RSC_

_Cons: live editing is limited to when saving the story_

> Note: always import from `@storyblok/react/rsc`

### 1. Initialize and Import your Storyblok Components

In _app/layout.jsx_, call `storyblokInit` and use the new `StoryblokBridgeLoader` to setup the bridge:

```js
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

import Page from "../components/Page";
import Teaser from "../components/Teaser";

storyblokInit({
  accessToken: "RVLbQ7MG4kCi3r1sQQ4VEAtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
  },
});

export default RootLayout({ children }) =>{
  return (
    <html lang="en">
      <body>{children}</body>
      <StoryblokBridgeLoader options={bridgeOptions} />
    </html>
  );
}
```

### 2. Fetch data and render components

In _app/page.tsx_, use `StoryblokComponent` and `getStoryblokApi` as follows:

```js
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>Story: {data.story.id}</h1>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, { version: "draft" });
}
```

## Next 13 (with Live Editing)

**Demo: see _playground-next13-live-editing_**

_Pros: live editing is 100% in place_

_Cons: leverages partially RSC (still better perf-wise than Next 12)_

> Note: always import from `@storyblok/react/rsc`

### 1. Initialize

In _app/layout.jsx_, call `storyblokInit` (no need to pass the components) and use `StoryblokProvider` (to be implemented in next step):

```js
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";

storyblokInit({
  accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
  use: [apiPlugin],
});

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
```

### 2. Import your Storyblok components

Create _components/StoryblokProvider.jsx_, and re-initalize and import your Storyblok components:

```js
/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "../components/Page";
import Teaser from "../components/Teaser";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
```

> Note: it's necessary to re-initialize here as well, as to enable the live editing you must initialize the lib universally (client + server) via a React client component.

### 3. Fetch data and render components

In _app/page.jsx_, use `getStoryblokApi` and `StoryblokStory` (this will handle automatically the story live events):

```js
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>Story: {data.story.id}</h1>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, { version: "draft" });
}
```
