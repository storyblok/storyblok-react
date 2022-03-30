import { useEffect } from "react";
import {
  storyblokInit,
  apiPlugin,
  getStoryblokApi,
  useStoryblokBridge,
  StoryblokComponent,
} from "@storyblok/react";

const Test = ({ bridge, accessToken, components, blok }) => {
  storyblokInit({
    accessToken,
    bridge,
    use: accessToken ? [apiPlugin] : [],
    components,
  });

  const storyblokApi = getStoryblokApi();
  const apiExists = !!(storyblokApi && typeof storyblokApi.get === "function");

  useEffect(() => {
    useStoryblokBridge(43423, (newStory) => console.log(newStory));
  }, []);

  return (
    <div>
      <h2>React Testing Component</h2>
      <StoryblokComponent blok={blok} />
      <h3>
        <code>storyblokApi.get:</code>
        <span data-test="api">{apiExists.toString()}</span>
      </h3>
    </div>
  );
};

export default Test;
