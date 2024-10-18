import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc';

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map(nestedBlok => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
