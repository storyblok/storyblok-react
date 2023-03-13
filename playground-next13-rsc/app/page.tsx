import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>Story: {data.story.id}</h1>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi: any = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
