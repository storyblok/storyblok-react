import React from "react";
import {
  StoryblokComponent,
  storyblokEditable,
  SbBlokData,
} from "@storyblok/react";

interface PageProps {
  blok: SbBlokData;
}

const Page = ({ blok }: PageProps) => (
  <div {...storyblokEditable(blok)} key={blok._uid} data-test="page">
    {blok.body
      ? (blok.body as SbBlokData[]).map((nestedBlok) => (
          <div key={nestedBlok._uid}>
            <StoryblokComponent blok={nestedBlok} />
          </div>
        ))
      : null}
  </div>
);

export default Page;
