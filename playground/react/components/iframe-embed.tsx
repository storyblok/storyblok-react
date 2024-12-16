import React from 'react';
import type { SbBlokData } from '@storyblok/react';
import { storyblokEditable } from '@storyblok/react';

interface IframeEmbedProps {
  blok: SbBlokData;
}

const IFrameEmbed = ({ blok }: IframeEmbedProps) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} data-test="iframe-embed">
      <div>
        <iframe src={blok?.url?.url} title={blok?.url?.title} />
      </div>
    </div>
  );
};

export default IFrameEmbed;
