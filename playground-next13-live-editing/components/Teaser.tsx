// "use server";
import { storyblokEditable } from "@storyblok/react/rsc";

const Teaser = ({ blok }) => {
  return (
    <h2 className="teaser" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
