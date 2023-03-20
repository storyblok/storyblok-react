"use client";
import { StoryblokComponent, useStoryblok } from "@storyblok/react";

export default function StoryblokPageFetcher({ slug }) {
  const story = useStoryblok(slug, { version: "draft" });

  return (
    <div>
      <h1>Story: {story.id}</h1>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

// const storyblokApi = getStoryblokApi()
// const fetcher = async url =>{

//   fetch(url).then(r => r.json())
// }

// function App () {
//   const { data, error } = useSWR('/api/data', fetcher)
//   // ...
// }
