import React from 'react';
import type { SbBlokData } from '@storyblok/react';

interface TestFallbackComponentProps {
  blok: SbBlokData;
}

const TestFallbackComponent = ({ blok }: TestFallbackComponentProps) => (
  <>
    <p data-test="custom-fallback">
      This is a test fallback component for blok
      {' '}
      <strong>{blok.component}</strong>
      .
    </p>
  </>
);

export default TestFallbackComponent;
