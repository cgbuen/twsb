import { storyblokEditable } from "@storyblok/react";

const ShopByCategory = ({ blok }) => (
  <section aria-labelledby="category-heading" className="bg-gray-50 text-left" {...storyblokEditable(blok)}>
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
          {blok.headline}
        </h2>
        <a href={blok.browse[0].href} className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          {blok.browse[0].text}
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        {blok.category_items.map((item, i) => {
          const secondary = {
            outerClass: 'sm:aspect-none sm:relative sm:h-full',
            imgClass: 'sm:absolute sm:inset-0 sm:h-full sm:w-full',
            textContainerClass: 'sm:absolute sm:inset-0',
          }
          return (
            <div key={i} className={`group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg ${i === 0 ? "sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2" : secondary.outerClass}`}>
              <img
                src={item.src}
                alt={item.alt}
                className={`object-cover object-center group-hover:opacity-75 ${i === 0 ? '' : secondary.imgClass}`}
              />
              <div
                aria-hidden="true"
                className={`bg-gradient-to-b from-transparent to-black opacity-50 ${i === 0 ? '' : secondary.textContainerClass}`}
              />
              <div className={`flex items-end p-6 ${i === 0 ? '' : secondary.textContainerClass}`}>
                <div>
                  <h3 className="font-semibold text-white">
                    <a href={item.href}>
                      <span className="absolute inset-0" />
                      {item.name}
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    {item.cta}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 sm:hidden">
        <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </section>
)

export default ShopByCategory