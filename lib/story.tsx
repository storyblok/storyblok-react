'use client'

import React, { forwardRef } from 'react'
import { useStoryblokState } from './common/client'
import StoryblokComponent from './common/storyblok-component'
import type { ISbStoryData, StoryblokBridgeConfigV2 } from './types'

interface StoryblokStoryProps {
  story: ISbStoryData
  bridgeOptions: StoryblokBridgeConfigV2
  [key: string]: unknown
}

const StoryblokStory = forwardRef<HTMLElement, StoryblokStoryProps>(
  ({ story, bridgeOptions, ...restProps }, ref) => {
    if (typeof story.content === 'string') {
      story.content = JSON.parse(story.content)
    }
    story = useStoryblokState(story, bridgeOptions)
    return <StoryblokComponent ref={ref} blok={story.content} {...restProps} />
  },
)

export default StoryblokStory
