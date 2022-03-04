import React from "react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Grid = ({ blok }) => (
  <ul {...storyblokEditable(blok)} key={blok._uid} data-test="grid">
    {blok.columns.map((nestedBlok) => (
      <li key={nestedBlok._uid}>
        <StoryblokComponent blok={nestedBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;
