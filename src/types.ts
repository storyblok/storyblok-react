import type React from 'react';
import type { ISbStoryData, SbSDKOptions, StoryblokBridgeConfigV2, StoryblokRichTextNode, StoryblokRichTextResolvers } from '@storyblok/js';

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

export interface StoryblokRichTextProps {
  doc: StoryblokRichTextNode<React.ReactElement>;
  resolvers?: StoryblokRichTextResolvers<React.ReactElement>;
}

export type {
  ArrayFn,
  AsyncFn,
  ISbAlternateObject,
  ISbCache,
  ISbConfig,
  ISbContentMangmntAPI,
  ISbDimensions,
  ISbError,
  ISbManagmentApiResult,
  ISbNode,
  ISbResponse,
  ISbResult,
  ISbRichtext,
  ISbSchema,
  ISbStories,
  ISbStoriesParams,
  ISbStory,
  ISbStoryData,
  ISbStoryParams,
  ISbThrottle,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbRichTextOptions,
  SbSDKOptions,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokClient,
  StoryblokComponentType,
  useStoryblokBridge,
} from '@storyblok/js';
