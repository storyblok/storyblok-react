import React from "react";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

interface TeaserProps {
  blok: SbBlokData;
}

const Teaser = ({ blok }: TeaserProps) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} data-test="teaser">
      <div>
        <h2>{blok.headline as string}</h2>
      </div>
    </div>
  );
};

export default Teaser;
