import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const GlobalReference = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}></div>
  );
}

export default GlobalReference;
