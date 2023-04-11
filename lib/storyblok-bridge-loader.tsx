"use client";
import React from "react";
import { loadStoryblokBridge } from "@storyblok/js";

const setBridge = async (options) => {
  await loadStoryblokBridge();
  const sbBridge = new window.StoryblokBridge(options);

  sbBridge.on(["published", "change"], () => {
    window.location.reload();
  });
};

const StoryblokBridgeLoader = ({ options }) => {
  setBridge(options);
  return <></>;
};

export default StoryblokBridgeLoader;
