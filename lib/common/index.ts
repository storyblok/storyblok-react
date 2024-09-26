import { storyblokInit as sbInit } from '@storyblok/js'

import type {
  SbReactComponentsMap,
  SbReactSDKOptions,
  StoryblokClient,
} from '../types'

let storyblokApiInstance: StoryblokClient = null
let componentsMap: SbReactComponentsMap = {}
let enableFallbackComponent: boolean = false
let customFallbackComponent: React.ElementType = null

export const useStoryblokApi = (): StoryblokClient => {
  if (!storyblokApiInstance) {
    console.error(
      'You can\'t use getStoryblokApi if you\'re not loading apiPlugin.',
    )
  }

  return storyblokApiInstance
}

export const setComponents = (newComponentsMap: SbReactComponentsMap) => {
  componentsMap = newComponentsMap
  return componentsMap
}

export const getComponent = (componentKey: string) => {
  if (!componentsMap[componentKey]) {
    console.error(`Component ${componentKey} doesn't exist.`)
    return false
  }

  return componentsMap[componentKey]
}

export const getEnableFallbackComponent = () => enableFallbackComponent
export const getCustomFallbackComponent = () => customFallbackComponent

export const storyblokInit = (pluginOptions: SbReactSDKOptions = {}) => {
  const { storyblokApi } = sbInit(pluginOptions)
  storyblokApiInstance = storyblokApi

  componentsMap = pluginOptions.components
  enableFallbackComponent = pluginOptions.enableFallbackComponent
  customFallbackComponent = pluginOptions.customFallbackComponent
}

export * from '../types'
export { useStoryblokApi as getStoryblokApi }
export * from '../types'
export { useSbRichtextResolver } from './richtext'
export { default as SbRichText } from './SbRichText'

export {
  apiPlugin,
  loadStoryblokBridge,
  registerStoryblokBridge,
  renderRichText,
  RichTextResolver,
  RichTextSchema,
} from '@storyblok/js'

export {
  BlockTypes,
  MarkTypes,
  richTextResolver,
  type SbRichTextImageOptimizationOptions,
  type SbRichTextNode,
  type SbRichTextNodeResolver,
  type SbRichTextNodeTypes,
  type SbRichTextOptions,
  type SbRichTextResolvers,
  TextTypes,
} from '@storyblok/richtext'
