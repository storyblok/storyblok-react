import { SbSDKOptions } from "@storyblok/js";

export interface SbReactComponentsMap {
  [key: string]: JSX.Element;
}

export interface SbReactSDKOptions extends SbSDKOptions {
  components?: SbReactComponentsMap;
}

export type {
  AlternateObject,
  Richtext,
  RichtextInstance,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbSDKOptions,
  Stories,
  StoriesParams,
  Story,
  StoryData,
  StoryParams,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokCache,
  StoryblokCacheProvider,
  StoryblokClient,
  StoryblokConfig,
  StoryblokManagmentApiResult,
  StoryblokResult,
  apiPlugin,
  useStoryblokBridge,
} from "@storyblok/js";
