import React, { forwardRef } from 'react';

import { convertAttributesInElement } from '../utils';
import { useStoryblokRichtextResolver } from './richtext';
import type { StoryblokRichTextProps } from '../types';

// If you're forwarding a ref to SbRichText
const SbRichText = forwardRef<HTMLDivElement, StoryblokRichTextProps>(
  ({ doc, resolvers }, ref) => {
    // Assuming useSbRichtextResolver is a hook you've created
    const { render } = useStoryblokRichtextResolver({
      resolvers,
    });

    /* const Root = () => render(doc) */
    const html = render(doc);
    console.log('this is the html', html);
    /*  const formattedHtml = convertAttributesInElement(html); */

    // If you're forwarding a ref, make sure to attach the ref to a DOM element.
    // For example, wrapping <Root /> in a div and attaching the ref to it:
    return <div ref={ref}>{}</div>;
  },
);

export default SbRichText;
