import {
  getStoryblokApi,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import StoryblokWrapper from "@/components/StoryblokWrapper";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>Story: {data.story.id}</h1>
      <StoryblokWrapper story={data.story} />
    </div>
  );
}

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
