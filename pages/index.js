import Head from "next/head";
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story, rels }) {
  story = useStoryblokState(story);
  rels = useStoryblokState(rels);

  return (
    <div>
      <Head>
        <title>Test App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavigation blok={rels && rels[0].content} />
      <StoryblokComponent blok={story.content} />
      <Footer blok={rels && rels[1].content} />
    </div>
  );
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
    resolve_relations: "global_reference.reference",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      rels: data ? data.rels : false,
    },
    revalidate: 3600,
  };
}
