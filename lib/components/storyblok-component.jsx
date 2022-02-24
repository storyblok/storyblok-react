import React from "react";
import { getComponent } from "../index";

const StoryblokComponent = ({ blok, ...restProps }) => {
  if (!blok) {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
    return <div>Please provide a blok property to the StoryblokComponent</div>;
  }

  const Component = getComponent(blok.component);
  if (!Component) {
    return "";
  }

  return <Component blok={blok} {...restProps} />;
};

export default StoryblokComponent;
