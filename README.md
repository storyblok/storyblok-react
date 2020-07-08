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

MIT
