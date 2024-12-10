import React from 'react';
import type {
  SbBlokData,
} from '@storyblok/react';
import {
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';

interface PageProps {
  blok: SbBlokData;
}

const Page = ({ blok }: PageProps) => (
  <div {...storyblokEditable(blok)} key={blok._uid} data-test="page">
    {(blok.body as SbBlokData[] | undefined)?.map(nestedBlok => (
      <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
    ))}
  </div>
);

export default Page;
