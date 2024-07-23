<div align="center">
	<a href="https://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react" align="center">
		<img src="https://a.storyblok.com/f/88751/1776x360/ccc1c50c67/sb-react.png"  alt="Storyblok Logo">
	</a>
	<h1 align="center">@storyblok/react</h1>
  <p align="center">
    The React plugin you need to interact with <a href="http://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react" target="_blank">Storyblok API</a> and enable the <a href="https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react" target="_blank">Real-time Visual Editing Experience</a>. This package helps you integrate Storyblok with React along with all types of React based frameworks like Next.js, Remix etc. This SDK also includes the support for React Server Side Components.
  </p>
  <br />
</div>

<p align="center">
  <a href="https://npmjs.com/package/@storyblok/react">
    <img src="https://img.shields.io/npm/v/@storyblok/react/latest.svg?style=flat-square" alt="Storyblok React" />
  </a>
  <a href="https://npmjs.com/package/@storyblok/react" rel="nofollow">
    <img src="https://img.shields.io/npm/dt/@storyblok/react.svg?style=flat-square" alt="npm">
  </a>
</p>

<p align="center">
  <a href="https://discord.gg/jKrbAMz">
   <img src="https://img.shields.io/discord/700316478792138842?label=Join%20Our%20Discord%20Community&style=appveyor&logo=discord&color=09b3af">
   </a>
  <a href="https://twitter.com/intent/follow?screen_name=storyblok">
    <img src="https://img.shields.io/badge/Follow-%40storyblok-09b3af?style=appveyor&logo=twitter" alt="Follow @Storyblok" />
  </a>
  <a href="https://app.storyblok.com/#!/signup?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react">
    <img src="https://img.shields.io/badge/Try%20Storyblok-Free-09b3af?style=appveyor&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADpiRU/AAACRElEQVRIDWNgGGmAEd3D3Js3LPrP8D8WXZwSPiMjw6qvPoHhyGYwIXNAbGpbCjbzP0MYuj0YFqMroBV/wCxmIeSju64eDNzMBJUxvP/9i2Hnq5cM1devMnz984eQsQwETeRhYWHgIcJiXqC6VHlFBjUeXgav40cIWkz1oLYXFmGwFBImaDFBHyObcOzdW4aSq5eRhRiE2dgYlpuYoYSKJi8vw3GgWnyAJIs/AuPu4scPGObd/fqVQZ+PHy7+6udPOBsXgySLDfn5GRYYmaKYJcXBgWLpsx8/GPa8foWiBhuHJIsl2DkYQqWksZkDFgP5PObcKYYff//iVAOTIDlx/QPqRMb/YSYBaWlOToZIaVkGZmAZSQiQ5OPtwHwacuo4iplMQEu6tXUZMhSUGDiYmBjylFQYvv/7x9B04xqKOnQOyT5GN+Df//8M59ASXKyMHLoyDD5JPtbj42OYrm+EYgg70JfuYuIoYmLs7AwMjIzA+uY/zjAnyWJpDk6GOFnCvrn86SOwmsNtKciVFAc1ileBHFDC67lzG10Yg0+SjzF0ownsf/OaofvOLYaDQJoQIGix94ljv1gIZI8Pv38zPvj2lQWYf3HGKbpDCFp85v07NnRN1OBTPY6JdRSGxcCw2k6sZuLVMZ5AV4s1TozPnGGFKbz+/PE7IJsHmC//MDMyhXBw8e6FyRFLv3Z0/IKuFqvFyIqAzd1PwBzJw8jAGPfVx38JshwlbIygxmYY43/GQmpais0ODDHuzevLMARHBcgIAQAbOJHZW0/EyQAAAABJRU5ErkJggg==" alt="Follow @Storyblok" />
  </a>
</p>

## Kickstart a new project
Are you eager to dive into coding? **[Follow these steps to kickstart a new project with Storyblok and React](https://www.storyblok.com/technologies#react?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react)**, and get started in just a few minutes!

## 5-minute Tutorial
Are you looking for a hands-on, step-by-step tutorial? The **[React 5-minute Tutorial](https://www.storyblok.com/tp/headless-cms-react?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react)** has you covered! It provides comprehensive instructions on how to set up a Storyblok space and connect it to your React project.

## Ultimate Tutorial
Are you looking for a hands-on, step-by-step tutorial? The **[Next.js Ultimate Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react)** has you covered! It provides comprehensive instructions on building a complete, multilingual website using Storyblok and Next.js from start to finish.

## Installation

Install `@storyblok/react`:

```bash
npm install @storyblok/react
// yarn add @storyblok/react
```

> ⚠️ This SDK uses the Fetch API under the hood. If your environment doesn't support it, you need to install a polyfill like [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch). More info on [storyblok-js-client docs](https://github.com/storyblok/storyblok-js-client#fetch-use-polyfill-if-needed---version-5).

### From a CDN

Install the file from the CDN:

```html
<script src="https://unpkg.com/@storyblok/react"></script>
```

## Initialization

Register the plugin on your application and add the [access token](https://www.storyblok.com/docs/api/content-delivery#topics/authentication?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react) of your Storyblok space. You can also add the `apiPlugin` in case that you want to use the Storyblok API Client:

```js
import { storyblokInit, apiPlugin } from "@storyblok/react";

/** Import your components */
import Page from "./components/Page";
import Teaser from "./components/Teaser";
// import FallbackComponent from "./components/FallbackComponent";

storyblokInit({
  accessToken: "YOUR_ACCESS_TOKEN",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
  },
  // bridge: false,
  // apiOptions: {},
  // richText: {},
  // enableFallbackComponent: false,
  // customFallbackComponent: FallbackComponent,
});
```

> Note: This is the general way for initalizing the SDK, the initialization might be a little different depending upon the framework. You can see how everything works according to the framework in their respective sections below.

Add all your components to the components object in the `storyblokInit` function.

That's it! All the features are enabled for you: the _Api Client_ for interacting with [Storyblok CDN API](https://www.storyblok.com/docs/api/content-delivery#topics/introduction?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react), and _Storyblok Bridge_ for [real-time visual editing experience](https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react).

> You can enable/disable some of these features if you don't need them, so you save some KB. Please read the "Features and API" section

## Region parameter

Possible values:

- `eu` (default): For spaces created in the EU
- `us`: For spaces created in the US
- `ap`: For spaces created in Australia
- `ca`: For spaces created in Canada
- `cn`: For spaces created in China

Full example for a space created in the US:

```js
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "YOUR_ACCESS_TOKEN",
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
  components: {},
});
```

> Note: For spaces created in the United States or China, the `region` parameter **must** be specified.

`@storyblok/react` does three actions when you initialize it:

- Provides a `getStoryblokApi` object in your app, which is an instance of [storyblok-js-client](https://github.com/storyblok/storyblok-js-client).
- Loads the [Storyblok Bridge](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react) for real-time visual updates.
- Provides a `storyblokEditable` function to link editable components to the Storyblok Visual Editor.

For every component you've defined in your Storyblok space, call the `storyblokEditable` function with the blok content:

```js
import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} data-test="feature">
      <div>
        <div>{blok.name}</div>
        <p>{blok.description}</p>
      </div>
    </div>
  );
};

export default Feature;
```

Where `blok` is the actual blok data coming from [Storyblok's Content Delivery API](https://www.storyblok.com/docs/api/content-delivery?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react).

> Note: The `storyblokEditable` function works the same way for all the frameworks and components created.

## Getting Started

**This SDK provides you the support to work with React and all React Frameworks such as Next.js, Remix etc. Depending upon these different frameworks and versions, the way to use the SDK and the functionalities it provides differ.**

Below is the guide and examples on how to use it with different frameworks -

### React

The initalization remains the same when you work with React. You can intialze the SDK in the `index.js` file. Please refer to the 'Initialization' section above to read more.

### Fetching Content and Listening to Storyblok Visual Editor events

Use `useStoryblok` to fetch the content as well as enable live editing. You need to pass the `slug` as the first parameter, `apiOptions` as the second parameter, and `bridgeOptions` as the third parameter, which is optional if you want to set the options for the bridge by yourself. Check the available [apiOptions](https://github.com/storyblok/storyblok-js-client#class-storyblok) (passed to `storyblok-js-client`) and [bridgeOptions](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-nuxt) (passed to the Storyblok Bridge).

```js
import { useStoryblok, StoryblokComponent } from "@storyblok/react";

function App() {
  const story = useStoryblok("react", { version: "draft" });

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}

export default App;
```

`StoryblokComponent` renders the route components dynamically, using the list of components loaded during the initialization inside the `storyblokInit` function.

This is how you can pass the Bridge options as a third parameter to `useStoryblok`:

```js
useStoryblok(
  story.id,
  { version: "draft", resolveRelations: ["Article.author"] },
  {
    resolveRelations: ["Article.author"],
    resolveLinks: "url",
    preventClicks: true,
  }
);
```

**Check out our React Boilerplate [here](https://github.com/storyblok/storyblok-react-boilerplate), or read on how to add Storyblok to React in 5 mins [here](https://www.storyblok.com/tp/headless-cms-react)**
You can also take a look at the [React Playground](https://github.com/arorachakit/storyblok-react/tree/main/playground) in this repo.

### Learn: Next.js 13 and 14 Data Fetching and Caching Behavior

When using Next.js 13 or 14 with the App Router, ensure that you include `cache: "no-store"` in your requests when fetching data from Storyblok. This prevents data caching, ensuring that you always receive the most up-to-date content from Storyblok.

For more details, refer to the Next.js documentation on [opting out of caching](https://nextjs.org/docs/app/building-your-application/caching#opting-out-1).

> Note: In Next.js 15, this will no longer be necessary, as the default caching behavior has been adjusted based on [community feedback](https://nextjs.org/blog/next-15-rc#caching-updates).

#### Example

Here's how you can fetch data from Storyblok with `cache: "no-store"`:

```javascript
export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get(`cdn/stories/home`, sbParams, {
    cache: "no-store", // This prevents Next.js 13, 14 default caching behaviour
  });
}
```

## Next.js using App Router - Live Editing support

The components in the `app` directory are by default React Server Side Components, which limits the reactivity. You can enable Storyblok Visual Editor's live editing with React Server Components by rendering them inside a wrapper (`StoryblokPovider`) on the client. The SDK allows you to take full advantage of the Live Editing, but the use of Server Side Components is partial, which will be still better than the older Next.js approach performance-wise. The next section explains about how to use complete server side approach.

> The SDK has a special module for RSC. Always import `@storyblok/react/rsc` while using Server Components.

### 1. Initialize

In `app/layout.jsx`, call the `storyblokInit` function, but without loading the component list (we will do that on the client). Wrap your whole app using a `StoryblokProvider` component (this provider is created in the next step) :

```js
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";

storyblokInit({
  accessToken: "YOUR_ACCESS_TOKEN",
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

### 2. Create StoryblokProvider and Import your Storyblok Components

Create the `components/StoryblokProvider.jsx` file. Re-initalize the connection with Storyblok (this time, on the client) using `storyblokInit`, and import your Storyblok components:

```js
/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "../components/Page";
import Teaser from "../components/Teaser";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "YOUR_ACCESS_TOKEN",
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

> Note: it's necessary to re-initialize here as well, as to enable the live editing experience inside the Visual Editor you need to initialize the lib universally (client + server).

### 3. Fetch Content and Render Components

The `getStoryblokApi` function, which is an instance of [storyblok-js-client](https://github.com/storyblok/storyblok-js-client) can be used to fetch the data from the Storyblok API. This should be imported from `@storyblok/react/rsc`.
You can render the content of your route with the `StoryblokStory` component, which will automatically handle the Visual Editor live events when editing the story. In `app/page.jsx`, use them as follows:

```js
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, { version: "draft" });
}
```

`StoryblokStory` keeps the state for thet story behind the scenes and uses `StoryblokComponent` to render the route components dynamically, using the list of components loaded during the initialization inside the `storyblokInit` function. You can use the `StoryblokComponent` inside the components to render the nested components dynamically. You can also pass bridge options to `StoryblokStory` using the prop `bridgeOptions`.

```js
const bridgeOptions = { resolveRelations: ["article.author"] };

<StoryblokStory story={data.story} bridgeOptions={bridgeOptions} />;
```

> Note: To use this approach (with `getStoryblokApi`), you need to include the `apiPlugin` module when calling `storyblokInit` function. If you don't use `apiPlugin`, you can use your preferred method or function to fetch your data.

To try this setup, take a look at the [Next 13 Live Editing Playground](https://github.com/arorachakit/storyblok-react/tree/main/playground-next13-live-editing) in this repo.

## Next.js using App Router - Full React Server Components

If you want to use the Next.js `app` directory approach, and React Server Components exclusively with everything on the server side, follow this approach.

> The SDK has a special module for RSC. Always import `@storyblok/react/rsc` while using Server Components.

**Limitation** - Real-time editing won't work if all the components are rendered on the server. Although, you can see the changes applied in the Visual Editor whenever you save or publish the changes applied to the story.

### 1. Initialize and Import your Storyblok Components

The initialzation remains the same here as well. Please refer to the above section about "Initialization" for more information about `storyblokInit` function.
In `app/layout.jsx`, call the `storyblokInit` function and use the new `StoryblokBridgeLoader` component to set up the Storyblok bridge. This Bridge Loader can be imported from `@storyblok/react/bridge-loader`:

```js
import { storyblokInit, apiPlugin, StoryblokBridgeLoader } from "@storyblok/react/rsc";

import Page from "../components/Page";
import Teaser from "../components/Teaser";

storyblokInit({
  accessToken: "YOUR_ACCESS_TOKEN",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
  },
});

export default RootLayout({ children }) =>{
  const bridgeOptions = { resolveRelations: ["article.author"] };

  return (
    <html lang="en">
      <body>{children}</body>
      <StoryblokBridgeLoader options={bridgeOptions} />
    </html>
  );
}
```

As the name says, `StoryblokBridgeLoader` loads the bridge on the client. It helps you see the dotted lines and allows you to still click on the components inside the Visual Editor to open their schema. You can pass the bridge options using the `options` prop.

### 2. Fetch Content and Render Components

The `getStoryblokApi` function, is an instance of [storyblok-js-client](https://github.com/storyblok/storyblok-js-client) can be used to fetch the data from the Storyblok API. This is imported from `@storyblok/react/rsc`.
Go to the route you want to fetch data from and use it as follows:

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

> Note: To use this approach (with `getStoryblokApi`), you need to include the `apiPlugin` module when calling `storyblokInit` function. If you don't use `apiPlugin`, you can use your preferred method or function to fetch your data.

`StoryblokComponent` renders the route components dynamically, using the list of components loaded during the initialization inside the `storyblokInit` function.
To try it, take a look at the [Next 13 RSC Playground](https://github.com/arorachakit/storyblok-react/tree/main/playground-next13-rsc) in this repo.

## Next.js using Pages Router

In this section, we'll see how to use the React SDK with the `pages` directory approach.

The initalization remains the same when you work with Next.js. You can intialze the SDK in the `_app.js` file. Please refer to the 'Initialization' section above to read more.

### 1. Fetching Content

The SDK provides a `getStoryblokApi` object in your app, which is an instance of [storyblok-js-client](https://github.com/storyblok/storyblok-js-client). This can be used to fetch the content from Storyblok. You can use it in functions like `getStaticProps`, `getStaticPaths`, `getServerSideProps` etc.

```js
import { getStoryblokApi } from "@storyblok/react";

// At the required place
const storyblokApi = getStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", { version: "draft" });
```

> Note: To use this approach, you need to include the `apiPlugin` module when calling `storyblokInit` function. If you don't use `apiPlugin`, you can use your preferred method or function to fetch your data.

### 2. Listening to Storyblok Visual Editor events

The SDK also provides you with the `useStoryblokState` hook. It works similarly to `useStoryblok` for live editing, but it doesn't fetch the content. Instead, it receives a story object as the first parameter. You can also pass the Bridge Options as the second parameter.

```js
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";

export default function Home({ story: initialStory }) {
  const story = useStoryblokState(initialStory);

  if (!story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}
```

In this case, the story is being passed as a prop that can be coming from where the story is being fetched. A complete example would look like this-

```js
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story: initialStory }) {
  const story = useStoryblokState(initialStory);

  if (!story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}

export async function getStaticProps({ preview = false }) {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/react`, {
    version: "draft",
  });

  return {
    props: {
      story: data ? data.story : false,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}
```

`StoryblokComponent` renders the route components dynamically, using the list of components loaded during the initialization inside the `storyblokInit` function.

**Check out the [code for the first part of our Next.js + Storyblok Ultimate Tutorial](https://github.com/storyblok/next.js-ultimate-tutorial/tree/part-1). Or you can also read on how to add Storyblok to a Next.js project in 5 minutes [here](https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes)**

### 3. Adding components per page

If you are using the pages router, you might want to load your components per page, instead of all in the `_app` file.

If you load all components in the `_app` file with `storyblokInit` funciton, the JavaScript for all of those components will be loaded on every page, even on pages where most of these components might not be used.

A better approach is to load these components on a per-page basis, reducing the JS bundle for that page, improving your load time, and SEO.

Simply execute `storyblokInit` in the `_app` file as you did before, but omit the `components` object and the component imports like so:

```diff
import { storyblokInit, apiPlugin } from "@storyblok/react";

/** Import your components */
-import Page from "./components/Page";
-import Teaser from "./components/Teaser";

storyblokInit({
  accessToken: "YOUR_ACCESS_TOKEN",
  use: [apiPlugin],
- components: {
-   page: Page,
-   teaser: Teaser,
- },
});
```

After that, use the `setComponent` method in each of your pages, to only load the components you need for that particular page:

```diff
import React from "react";
import Teaser from "../components/teaser";
import Grid from "../components/grid";
import Page from "../components/page";
import Feature from "../components/feature";

import {
  useStoryblokState,
  StoryblokComponent,
+  setComponents,
} from "@storyblok/react";

export default function Home({
  story: initialStory,
}: InferGetStaticPropsType<typeof getStaticProps>) {

+  setComponents({
+    teaser: Teaser,
+    grid: Grid,
+    feature: Feature,
+    page: Page,
+  })

  const story = useStoryblokState(initialStory);

  if (!story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}
```

## Features and API

You can **choose the features to use** when you initialize the plugin. In that way, you can improve Web Performance by optimizing your page load and save some bytes.

### Storyblok API

You can use an `apiOptions` object. This is passed down to the [storyblok-js-client config object](https://github.com/storyblok/storyblok-js-client#class-storyblok):

```js
storyblokInit({
  accessToken: "YOUR_ACCESS_TOKEN",
  apiOptions: {
    // storyblok-js-client config object
    cache: { type: "memory" },
  },
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  },
});
```

If you prefer to use your own fetch method, just remove the `apiPlugin` and `storyblok-js-client` won't be added to your application.

```js
storyblokInit({});
```

### Storyblok Bridge

If you don't use `registerStoryblokBridge`, you still have access to the raw `window.StoryblokBridge`:

```js
const sbBridge = new window.StoryblokBridge(options);

sbBridge.on(["input", "published", "change"], (event) => {
  // ...
});
```

### Rendering Rich Text

You can easily render rich text by using the `renderRichText` function that comes with `@storyblok/react`:

```js
import { renderRichText } from "@storyblok/react";

const renderedRichText = renderRichText(blok.richtext);
```

You can set a **custom Schema and component resolver globally** at init time by using the `richText` init option:

```js
import { RichTextSchema, storyblokInit } from "@storyblok/react";
import cloneDeep from "clone-deep";

const mySchema = cloneDeep(RichTextSchema); // you can make a copy of the default RichTextSchema
// ... and edit the nodes and marks, or add your own.
// Check the base RichTextSchema source here https://github.com/storyblok/storyblok-js-client/blob/main/src/schema.ts

storyblokInit({
  accessToken: "<your-token>",
  richText: {
    schema: mySchema,
    resolver: (component, blok) => {
      switch (component) {
        case "my-custom-component":
          return `<div class="my-component-class">${blok.text}</div>`;
        default:
          return "Resolver not defined";
      }
    },
  },
});
```

You can also set a **custom Schema and component resolver only once** by passing the options as the second parameter to `renderRichText` function:

```js
import { renderRichText } from "@storyblok/react";

renderRichText(blok.richTextField, {
  schema: mySchema,
  resolver: (component, blok) => {
    switch (component) {
      case "my-custom-component":
        return `<div class="my-component-class">${blok.text}</div>`;
        break;
      default:
        return `Component ${component} not found`;
    }
  },
});
```

We also recommend using the [Storyblok Rich Text Renderer for React by Claus](https://github.com/claus/storyblok-rich-text-react-renderer) for rendering your Storyblok rich text content to React elements and Next.js applications.

### Using fallback components

By default, `@storyblok/react` returns an empty `<div>` if a component is not implemented. Setting `enableFallbackComponent` to `true` when calling `storyblokInit` bypasses that behavior, rendering a fallback component in the frontend instead. You can use the default fallback component, or create a custom React fallback component in your project and use it by setting `customFallbackComponent: [YourFallbackComponent]`.

## Efficiently Loading Storyblok Components in React

When using Storyblok with React, the general approach is to load all the Storyblok components when initializing Storyblok, usually in a layout page to ensure all pages have access to all of them:

```javascript
storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: {
    // all your React components
  },
});
```

Storyblok's React SDK automatically renders these predefined components based on your page content. While this is convenient, it can lead to larger bundle sizes and slower page speeds, especially for larger sites or when using heavy JavaScript libraries that are only needed on specific pages or a specific component.

### Solutions

1. **Storyblok's `setComponents` Function**: 
   Storyblok SDK provides a function called `setComponents` that allows you to load only the components needed for each route instead of defining all components during initialization. This approach is useful but might not be practical if you use a catch-all route, which is common in many React frameworks.

2. **React's `react.lazy`**: 
   React offers a built-in solution called `react.lazy` for code splitting. Instead of directly importing components, you can do the following:
    
    ```javascript
    "use client";
    import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
    import { lazy } from "react";
    
    const lazyComponents = {
      page: lazy(() => import("./components/Page")),
      // other lazy-loaded components
    };
    
    storyblokInit({
      accessToken,
      use: [apiPlugin],
      components: lazyComponents,
    });
    ```
    
    This approach enables automatic code splitting and loads only the necessary JavaScript for each page. However, `react.lazy` has some limitations when used with SSR (Server-Side Rendering).

3. **Using `@loadable/component`**:
   For cases where SSR is needed, or in general, you can use the `@loadable/component` library, which offers similar functionality and better SSR support. This library is framework-agnostic and can be used with any React framework. [Loadable Components Documentation](https://loadable-components.com/docs/getting-started/)

4. **Next.js Dynamic Import**:
   Next.js has a built-in `dynamic` package that provides dynamic imports for lazy loading. [Next.js Dynamic Import Documentation](https://nextjs.org/docs/advanced-features/dynamic-import)

By using these techniques, you can ensure that only the necessary components and dependencies are loaded for each page, improving your site's performance and speed.

## The Storyblok JavaScript SDK Ecosystem

![A visual representation of the Storyblok JavaScript SDK Ecosystem](https://a.storyblok.com/f/88751/2400x1350/be4a4a4180/sdk-ecosystem.png/m/1200x0)

## Further Resources

- [Quick Start](https://www.storyblok.com/technologies?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react)
- [API Documentation](https://www.storyblok.com/docs/api?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react)
- [Developer Tutorials](https://www.storyblok.com/tutorials?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react)
- [Developer Guides](https://www.storyblok.com/docs/guide/introduction?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react)
- [FAQs](https://www.storyblok.com/faqs?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react)

## Support

- Bugs or Feature Requests? [Submit an issue](/../../issues/new).
- Do you have questions about Storyblok or you need help? [Join our Discord Community](https://discord.gg/jKrbAMz).

## Contributing

Please see our [contributing guidelines](https://github.com/storyblok/.github/blob/master/contributing.md) and our [code of conduct](https://www.storyblok.com/trust-center#code-of-conduct?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react).
This project use [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for generate new versions by using commit messages and we use the Angular Convention to naming the commits. Check [this question](https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-change-the-type-of-commits-that-trigger-a-release) about it in semantic-release FAQ.
