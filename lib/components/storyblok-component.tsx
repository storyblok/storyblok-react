import React from "react";
import type { SbBlokData } from "../types";
import { getComponent } from "../index";

interface StoryblokComponentProps {
  blok: SbBlokData;
  restProps?: any;
}

const StoryblokComponent = ({
  blok,
  ...restProps
}: StoryblokComponentProps) => {
  if (!blok) {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
    return <div>Please provide a blok property to the StoryblokComponent</div>;
  }

  const Component = getComponent(blok.component);

  if (Component) {
    return <Component blok={blok} {...restProps} />;
  }

  return <div></div>;
};

export default StoryblokComponent;
