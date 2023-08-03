import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Global = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.global.map((nestedBlok) => {
      return (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      )
    })}
  </main>
);

export default Global;
