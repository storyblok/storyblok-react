import React from 'react'
import type { SbBlokData } from '@storyblok/react'

interface FallbackComponentProps {
  blok: SbBlokData
}

const FallbackComponent = ({ blok }: FallbackComponentProps) => (
  <>
    <p>
      This is a custom fallback component that we want to show in case a React
      Component was not created for blok
      {' '}
      <strong>{blok.component}</strong>
      .
    </p>
  </>
)

export default FallbackComponent
