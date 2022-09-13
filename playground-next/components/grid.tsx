import React from "react";
import {
  StoryblokComponent,
  storyblokEditable,
  SbBlokData,
} from "@storyblok/react";

interface GridProps {
  blok: SbBlokData;
}

const Grid = ({ blok }: GridProps) => (
  <ul {...storyblokEditable(blok)} key={blok._uid} data-test="grid">
    {(blok.columns as SbBlokData[]).map((nestedBlok) => (
      <li key={nestedBlok._uid}>
        <StoryblokComponent blok={nestedBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;
