import {
  useStoryblokState,
  getStoryblokApi,
} from "@storyblok/react";
import TopNavigation from '../../components/TopNavigation'

export default function Header({ story }) {
  story = useStoryblokState(story);

  return (
    <TopNavigation blok={story.content} />
  );
}

export async function getStaticProps() {
  let slug = "global/header";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
