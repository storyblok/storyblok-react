import React, { forwardRef } from 'react';

import { convertAttributesInElement } from '../utils';
import type { StoryblokRichTextProps } from '../types';
import { useStoryblokServerRichText } from './server-richtext';

const StoryblokRichText = forwardRef<HTMLDivElement, StoryblokRichTextProps>(
  ({ doc, resolvers }, ref) => {
    const { render } = useStoryblokServerRichText({
      resolvers,
    });

    const html = render(doc);
    const formattedHtml = convertAttributesInElement(html as React.ReactElement);

    return (
      <div ref={ref}>
        {formattedHtml}
      </div>
    );
  },
);

export default StoryblokRichText;
