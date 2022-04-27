# Storyblok Editable Component

Wrap this component to make your components editable in [storyblok.com](https://www.storyblok.com/)

### Installation

```sh
$ npm install storyblok-react --save
```

### Example

```js
import SbEditable from 'storyblok-react';

const Feature = (props) => (
  <SbEditable content={props.content}>
    <div className="feature">
      {props.content.name}
    </div>
  </SbEditable>
);

export default Feature;
```

## License

MIT. See [`LICENSE.txt`](./LICENSE.txt) for more details.

## Contribution

Fork me on [Github](https://github.com/storyblok/storyblok-react).

This project use [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for generate new versions by using commit messages and we use the Angular Convention to naming the commits. Check [this question](https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-change-the-type-of-commits-that-trigger-a-release) about it in semantic-release FAQ.
