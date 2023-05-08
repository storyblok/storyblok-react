<div align="center">
	<a href="https://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react" align="center">
		<img src="https://a.storyblok.com/f/88751/1776x360/ccc1c50c67/sb-react.png"  alt="Storyblok Logo">
	</a>
	<h1 align="center">@storyblok/react</h1>
  <p align="center">
    The React plugin you need to interact with <a href="http://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react" target="_blank">Storyblok API</a> and enable the <a href="https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react" target="_blank">Real-time Visual Editing Experience</a>. This package helps you integrate Storyblok with React along with all types of Next.js projects. 
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

## 🚀 Usage

> If you are first-time user of Storyblok, read the [Getting Started](https://www.storyblok.com/docs/guide/getting-started?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react) guide to get a project ready in less than 5 minutes.

### Installation

Install `@storyblok/react`:

```bash
npm install @storyblok/react
// yarn add @storyblok/react
```

> ⚠️ This SDK uses the Fetch API under the hood. If your environment doesn't support it, you need to install a polyfill like [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch). More info on [storyblok-js-client docs](https://github.com/storyblok/storyblok-js-client#fetch-use-polyfill-if-needed---version-5).

#### From a CDN

Install the file from the CDN:

```html
<script src="https://unpkg.com/@storyblok/react"></script>
```

### Initialization

Register the plugin on your application and add the [access token](https://www.storyblok.com/docs/api/content-delivery#topics/authentication?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react) of your Storyblok space. You can also add the `apiPlugin` in case that you want to use the Storyblok API Client:

```js
import { storyblokInit, apiPlugin } from "@storyblok/react";

/** Import your components */
import Page from './components/Page'
import Teaser from './components/Teaser'

storyblokInit({
  accessToken: "YOUR_ACCESS_TOKEN",
  // bridge: false,
  // apiOptions: {},
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
  },
});
```

> Note: This is the general way for initalizing the SDK, the initialization might be different depending upon the framework. You can see how everything works according to the framework in their respective sections below.

Add all your components to the components object in the `storyblokInit` function.

That's it! All the features are enabled for you: the _Api Client_ for interacting with [Storyblok CDN API](https://www.storyblok.com/docs/api/content-delivery#topics/introduction?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react), and _Storyblok Bridge_ for [real-time visual editing experience](https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react).

> You can enable/disable some of these features if you don't need them, so you save some KB. Please read the "Features and API" section

#### Region parameter

Possible values:

- `eu` (default): For spaces created in the EU
- `us`: For spaces created in the US
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


### Getting Started

**This SDK provides you the support to work with React, Next.js 12 (or Next.js 13 with no RSC), Next.js 13 (Full RSC) and Next.js (Partial RSC, with Live Editing). Depending upon these different frameworks and versions, the way to use the SDK and the functionalities it provides differ.**

Below is the guide on how to use it with all the frameworks -


## React

The initalization remains the same when you work with React. You can intialze the SDK in the `index.js` file. Please refer to the 'Initialization' section above to read more.

### Fetching Content and Listening to Storyblok Visual Editor events

Use `useStoryblok` to fetch the content as well as enable live editing. You need to pass the `slug` as the first parameter, `apiOptions` as the second parameter, and `bridgeOptions` as the third parameter, which is optional if you want to set the options for the bridge by yourself:

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
useStoryblok(story.id, {version: 'draft'}, {
  resolveRelations: ["Article.author"],
});
```

**Check out our React Boilerplate [here](https://github.com/storyblok/storyblok-react-boilerplate), or read on how to add Storyblok to React in 5 mins [here](https://www.storyblok.com/tp/headless-cms-react)**


## Next.js using App Router - Full React Server Components

If you're using the Next.js `app` directory approach, and React Server Components exclusively, follow this approach.


> The SDK has a special module for RSC. Always import `@storyblok/react/rsc` while using Server Components.

**Limitation** - Real-time editing won't work if all the components are rendered on the server. Although, you can see the changes applied in the Visual Editor whenever you save or publish the changes applied to the story.

### Initialize and Import your Storyblok Components

The initialzation remains the same here as well. Please refer to the above section about "Initialization" for more information about `storyblokInit` function.
In `app/layout.jsx`, call the `storyblokInit` function and use the new `StoryblokBridgeLoader` component to set up the Storyblok bridge. This Bridge Loader can be imported from `@storyblok/react/bridge-loader`:

```js
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

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

The `getStoryblokApi` can be used to fetch the data from Storyblok. This is imported from `@storyblok/react/rsc`.
In `_app/page.jsx`, use it as follows:

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

`StoryblokComponent` here renders all the components dynamically which you loaded before during the initalization inside the `storyblokInit` function. 

**Demo: see _playground-next13-rsc_**

## Next 13 (with Live Editing)

You can enable the live editing with Server Side Components by rendering them with a wrapper (`StoryblokPovider`) on client. The SDK allows you to take full advantage of the Live Editing, but the use of Server Side Components is partial, which is still better than Next.js 12 performance wise. 

> The SDK has a special module for RSC. Always use `@storyblok/react/rsc` for importing while using Server Side Components.

### 1. Initialize

In `_app/layout.jsx`, call `storyblokInit` without loading the components and use `StoryblokProvider` (this provider is created in the next step) :

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

Create `components/StoryblokProvider.jsx`, and re-initalize and import your Storyblok components:

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

### 3. Fetch Content and Render Components

The `getStoryblokApi` can be used to fetch the data from the Storyblok API. This should be imported from `@storyblok/react/rsc`. 
Instead of using `StoryblokComponent`, you can render the content of your route with the `StoryblokStory` component, which will automatically handle the Visual Editor live events when editing the story. In `app/page.jsx`, use them as follows:


```js
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

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
**Demo: see _playground-next13-live-editing_**


## Next.js using Pages Router and Remix

In this section, we'll see how to use the React SDK with the `pages` directory approach.

The initalization remains the same when you work with Next.js. You can intialze the SDK in the `_app.js` file. Please refer to the 'Initialization' section above to read more.

### Fetching Content

The SDK provides a `getStoryblokApi` object in your app, which is an instance of [storyblok-js-client](https://github.com/storyblok/storyblok-js-client). This can be used to fetch the content from Storyblok. You can use it in functions like `getStaticProps`, `getStaticPaths`, `getServerSideProps` etc.

```js
import { getStoryblokApi } from "@storyblok/react";

// At the required place
const storyblokApi = getStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", { version: "draft" });
```

> Note: To use this approach, you need to include the `apiPlugin` module when calling `storyblokInit` function. If you don't use `apiPlugin`, you can use your preferred method or function to fetch your data.


### Listening to Storyblok Visual Editor events

The SDK also provides you with the `useStoryblokState` hook. It works similarly to `useStoryblok` for live editing, but it doesn't fetch the content. Instead, it receives a story object as the first parameter. You can also pass the Bridge Options as the second parameter.

```js
import {
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

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
// Check the base RichTextSchema source here https://github.com/storyblok/storyblok-js-client/blob/master/source/schema.js

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

## The Storyblok JavaScript SDK Ecosystem

![A visual representation of the Storyblok JavaScript SDK Ecosystem](https://a.storyblok.com/f/88751/2400x1350/be4a4a4180/sdk-ecosystem.png/m/1200x0)

## 🔗 Related Links

- **[Storyblok Technology Hub](https://www.storyblok.com/technologies?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react)**: Storyblok integrates with every framework so that you are free to choose the best fit for your project. We prepared the technology hub so that you can find selected beginner tutorials, videos, boilerplates, and even cheatsheets all in one place.
- **[Getting Started](https://www.storyblok.com/docs/guide/getting-started?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react)**: Get a project ready in less than 5 minutes.
- **[Storyblok CLI](https://github.com/storyblok/storyblok)**: A simple CLI for scaffolding Storyblok projects and fieldtypes.
- **[Storyblok Next.js Technology Hub](https://www.storyblok.com/tc/nextjs)**: Learn how to develop your own Next.js applications that use Storyblok APIs to retrieve and manage content.
- **[Storyblok React.js example demo](https://stackblitz.com/edit/react-sdk-demo)**: See and try how React SDK works with React.js projects
- **[Storyblok Next.js example demo](https://stackblitz.com/edit/react-next-sdk-demo)**: See and try how React SDK works with Next.js projects

## ℹ️ More Resources

### Support

- Bugs or Feature Requests? [Submit an issue](/../../issues/new).
- Do you have questions about Storyblok or you need help? [Join our Discord Community](https://discord.gg/jKrbAMz).

### Contributing

Please see our [contributing guidelines](https://github.com/storyblok/.github/blob/main/contributing.md) and our [code of conduct](https://www.storyblok.com/trust-center#code-of-conduct?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react).
This project use [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for generate new versions by using commit messages and we use the Angular Convention to naming the commits. Check [this question](https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-change-the-type-of-commits-that-trigger-a-release) about it in semantic-release FAQ.
