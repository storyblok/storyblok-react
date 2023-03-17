import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokWrapper from "../components/StoryblokWrapper";

export default async function Home() {
  const { data } = await fetchData();

  return <StoryblokWrapper story={data.story} />;
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi: any = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
