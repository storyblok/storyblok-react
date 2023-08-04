import React from "react";
import { SbSDKOptions } from "@storyblok/js";
import type { ISbStoryData, StoryblokBridgeConfigV2 } from "@storyblok/js";

export interface SbReactComponentsMap {
  [key: string]: React.ElementType;
}

export interface SbReactSDKOptions extends SbSDKOptions {
  components?: SbReactComponentsMap;
  enableFallbackComponent?: boolean;
  customFallbackComponent?: React.ElementType;
}

export type TUseStoryblokState = <T = void>(
  initialStory: ISbStoryData<T> | null,
  bridgeOptions?: StoryblokBridgeConfigV2
) => ISbStoryData<T> | null;

export type {
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
