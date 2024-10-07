import { SbServerComponent, storyblokEditable } from '@storyblok/react/rsc';

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map(nestedBlok => (
      <SbServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
