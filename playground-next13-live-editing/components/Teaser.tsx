// "use server";
import { storyblokEditable } from '@storyblok/react/rsc';

const Teaser = ({ blok }) => {
  return (
    <h2 data-cy="teaser" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
