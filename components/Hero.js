import { storyblokEditable } from "@storyblok/react";
import Grid from './Grid'
import Button from './Button'

const Hero = ({ blok }) => {
  return (
    <div className="relative overflow-hidden text-left -mt-4">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40" {...storyblokEditable(blok)}>
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {blok.headline}
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              {blok.subheadline}
            </p>
          </div>
          <div>
            <div className="mt-10">
              <Grid blok={blok} />
              <Button blok={blok.button[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
