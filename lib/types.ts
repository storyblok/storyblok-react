import { SbSDKOptions } from "@storyblok/js";
import React from "react";

export interface SbReactComponentsMap {
  [key: string]: React.ElementType;
}

export interface SbReactSDKOptions extends SbSDKOptions {
  components?: SbReactComponentsMap;
}

export type {
  apiPlugin,
  ISbConfig,
  ISbCache,
  ISbResult,
  ISbResponse,
  ISbError,
  ISbNode,
  ISbSchema,
  ThrottleFn,
  AsyncFn,
  ArrayFn,
  ISbContentMangmntAPI,
  ISbManagmentApiResult,
  ISbStories,
  ISbStory,
  ISbDimensions,
  ISbStoryData,
  ISbAlternateObject,
  ISbStoriesParams,
  ISbStoryParams,
  ISbRichtext,
  RichTextResolver,
  RichTextSchema,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbRichTextOptions,
  SbSDKOptions,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokClient,
  StoryblokComponentType,
  useStoryblokBridge,
} from "@storyblok/js";
