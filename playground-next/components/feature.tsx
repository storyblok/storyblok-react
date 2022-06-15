import React from "react";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

interface FeatureProps {
  blok: SbBlokData;
}

const Feature = ({ blok }: FeatureProps) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} data-test="feature">
      <div>
        <div>{blok.name as string}</div>
        <p>{blok.description as string}</p>
      </div>
    </div>
  );
};

export default Feature;
