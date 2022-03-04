import React from "react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Page = ({ blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid} data-test="page">
    {blok.body
      ? blok.body.map((nestedBlok) => (
          <div key={nestedBlok._uid}>
            <StoryblokComponent blok={nestedBlok} />
          </div>
        ))
      : null}
  </div>
);

export default Page;
