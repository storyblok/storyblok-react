"use client";

import React, { forwardRef } from "react";
import { useStoryblokState } from "../common/client";
import { ISbStoryData, StoryblokBridgeConfigV2 } from "../types";
import { StoryblokComponent } from "./common";

interface StoryblokStoryRSCProps {
  story: ISbStoryData;
  bridgeOptions: StoryblokBridgeConfigV2;
  [key: string]: unknown;
}

const StoryblokStory = forwardRef<HTMLElement, StoryblokStoryRSCProps>(
  ({ story, bridgeOptions, ...restProps }, ref) => {
    if (typeof story.content === "string") {
      story.content = JSON.parse(story.content);
    }
    story = useStoryblokState(story, bridgeOptions);
    return <StoryblokComponent ref={ref} blok={story.content} {...restProps} />;
  }
);

export default StoryblokStory;
