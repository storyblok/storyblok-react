"use client";
import React from "react"
import { loadStoryblokBridge } from "../index";

const setBridge = async (options) => {
  await loadStoryblokBridge();

  console.log(options);
  const sbBridge = new window.StoryblokBridge(options);

  sbBridge.on(["published", "change"], (event) => {
    window.location.reload();
  });
};

const SbBridgeRSC = ({ options }) => {
  setBridge(options);
  return <></>;
};

export default SbBridgeRSC;
