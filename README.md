<div align="center">
	<a href="https://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react" align="center">
		<img src="https://a.storyblok.com/f/88751/1776x360/ccc1c50c67/sb-react.png"  alt="Storyblok Logo">
	</a>
	<h1 align="center">@storyblok/react</h1>
  <p align="center">
    The React plugin you need to interact with <a href="http://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react" target="_blank">Storyblok API</a> and enable the <a href="https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react" target="_blank">Real-time Visual Editing Experience</a>.
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

> If you are first-time user of the Storyblok, read the [Getting Started](https://www.storyblok.com/docs/guide/getting-started?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react) guide to get a project ready in less than 5 minutes.

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

storyblokInit({
  accessToken: "YOUR_ACCESS_TOKEN",
  use: [apiPlugin],
  // bridge: false,
  // apiOptions: {},
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  },
});
```

> Add all your components to the components object in the `storyblokInit` function.

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
  components: { },
});
```

> Note: For spaces created in the United States or China, the `region` parameter **must** be specified.

### Getting Started

`@storyblok/react` does three actions when you initialize it:

- Provides a `getStoryblokApi` object in your app, which is an instance of [storyblok-js-client](https://github.com/storyblok/storyblok-js-client).
- Loads [Storyblok Bridge](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react) for real-time visual updates.
- Provides a `storyblokEditable` function to link editable components to the Storyblok Visual Editor.

#### 1. Fetching Content

Inject `getStoryblokApi`:

```js
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

storyblokInit({
  accessToken: "YOUR_ACCESS_TOKEN",
  // bridge: false,
  // apiOptions: {  },
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  },
});

const storyblokApi = getStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", { version: "draft" });
```

> Note: if you don't use `apiPlugin`, you can use your prefered method or function to fetch your data.

#### 2. Listen to Storyblok Visual Editor events

Use `useStoryblok` to get the new story every time is triggered a `change` event from the Visual Editor. You need to pass the `slug` as first param, and `apiOptions` as second param to update the new story. `bridgeOptions` (third param) is optional param if you want to set the options for bridge by yourself:

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

You can pass Bridge options as a third parameter as well:

```js
useStoryblok(story.id, (story) => (state.story = story), {
  resolveRelations: ["Article.author"],
});
```

#### 3. Link your components to Storyblok Visual Editor

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

Where `blok` is the actual blok data coming from [Storblok's Content Delivery API](https://www.storyblok.com/docs/api/content-delivery?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-react).

As an example, you can check in our [Next.js example demo](https://stackblitz.com/edit/react-next-sdk-demo?file=src%2Fpages%2Findex.jsx) how we use APIs provided from React SDK to combine with Next.js projects.

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

If you'd like to have a React.js example demo, you can find it and try it out in your environement from here:
[React.js example demo](https://stackblitz.com/edit/react-sdk-demo)

### Features and API

You can **choose the features to use** when you initialize the plugin. In that way, you can improve Web Performance by optimizing your page load and save some bytes.

#### Storyblok API

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

#### Storyblok Bridge

If you don't use `registerStoryblokBridge`, you still have access to the raw `window.StoryblokBridge`:

```js
const sbBridge = new window.StoryblokBridge(options);

sbBridge.on(["input", "published", "change"], (event) => {
  // ...
});
```

#### Rendering Rich Text

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
