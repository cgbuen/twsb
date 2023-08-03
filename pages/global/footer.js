import {
  useStoryblokState,
  getStoryblokApi,
} from "@storyblok/react";
import Footer from '../../components/Footer'

export default function FooterPage({ story }) {
  story = useStoryblokState(story);

  return (
    <Footer blok={story.content} />
  );
}

export async function getStaticProps() {
  let slug = "global/footer";

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
