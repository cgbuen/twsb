import { storyblokEditable } from "@storyblok/react"

const CategoryFeaturedSection = ({ blok }) => {
  return (
    <section aria-labelledby="featured-heading" className="relative mb-16 overflow-hidden rounded-lg lg:h-96" {...storyblokEditable(blok)}>
      <div className="absolute inset-0">
        <img
          src={blok.src}
          alt={blok.alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
      <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
      <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
        <div>
          <h2 id="featured-heading" className="text-xl font-bold text-white">{blok.headline}</h2>
          <p className="mt-1 text-sm text-gray-300">{blok.subheadline}</p>
        </div>
        <a
          href={blok.href}
          className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
        >{blok.cta}</a>
      </div>
    </section>
  )
}

export default CategoryFeaturedSection