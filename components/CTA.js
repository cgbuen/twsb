import { storyblokEditable } from "@storyblok/react";
import Grid from './Grid'

const Cta = ({ blok }) => (
  <section aria-labelledby="sale-heading" className="text-left" {...storyblokEditable(blok)}>
    <div className="overflow-hidden pt-32 sm:pt-14">
      <div className="bg-gray-800 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative pb-16 pt-48 sm:pb-24">
            <div>
              <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                {blok.headline}
                <br />
                {blok.subheadline}
              </h2>
              <div className="mt-6 text-base">
                <a href="#" className="font-semibold text-white">
                  {blok.cta}
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
            <Grid blok={blok} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Cta