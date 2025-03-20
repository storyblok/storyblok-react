import { useStoryblokRichText } from '../richtext';

// Export the main function
export { useStoryblokRichText };

/** @deprecated Use useStoryblokRichText instead */
export const useStoryblokRichTextResolver = useStoryblokRichText;

export { default as StoryblokRichText } from '../storyblok-rich-text';
export * from './common';
export { default as StoryblokStory } from './story';
export {
  BlockTypes,
  MarkTypes,
  richTextResolver,
  type StoryblokRichTextImageOptimizationOptions,
  type StoryblokRichTextNode,
  type StoryblokRichTextNodeResolver,
  type StoryblokRichTextNodeTypes,
  type StoryblokRichTextOptions,
  type StoryblokRichTextResolvers,
  TextTypes,
} from '@storyblok/js';
