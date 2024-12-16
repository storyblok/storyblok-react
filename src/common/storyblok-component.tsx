import { forwardRef } from 'react';
import {
  getComponent,
  getCustomFallbackComponent,
  getEnableFallbackComponent,
} from './index';
import type { SbBlokData } from '@/types';

interface StoryblokComponentProps extends Omit<Record<string, unknown>, 'blok'> {
  blok: SbBlokData;
}

const StoryblokComponent = forwardRef<HTMLElement, StoryblokComponentProps>(
  ({ blok, ...restProps }: StoryblokComponentProps, ref) => {
    if (!blok) {
      console.error(
        'Please provide a \'blok\' property to the StoryblokComponent',
      );
      return (
        <div>Please provide a blok property to the StoryblokComponent</div>
      );
    }

    const Component = getComponent(blok.component);

    if (Component) {
      return <Component ref={ref} blok={blok} {...restProps} />;
    }

    if (getEnableFallbackComponent()) {
      const CustomFallbackComponent = getCustomFallbackComponent();

      if (CustomFallbackComponent) {
        return <CustomFallbackComponent blok={blok} {...restProps} />;
      }
      else {
        return (
          <>
            <p>
              Component could not be found for blok
              {' '}
              <strong>{blok.component}</strong>
              ! Is it configured correctly?
            </p>
          </>
        );
      }
    }

    return <div></div>;
  },
);

StoryblokComponent.displayName = 'StoryblokComponent';

export default StoryblokComponent;
