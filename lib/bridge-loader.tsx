"use client";
import React from "react";
import { loadStoryblokBridge } from "@storyblok/js";
import { StoryblokBridgeConfigV2 } from "./types";

interface StoryblokBridgeLoaderProps {
  options: StoryblokBridgeConfigV2;
  [key: string]: unknown;
}

const setBridge = async (options: StoryblokBridgeConfigV2) => {
  await loadStoryblokBridge();
  const sbBridge = new window.StoryblokBridge(options);

  sbBridge.on(["published", "change"], () => {
    window.location.reload();
  });
};

const StoryblokBridgeLoader = ({ options }: StoryblokBridgeLoaderProps) => {
  setBridge(options);
  return <></>;
};

export default StoryblokBridgeLoader;
