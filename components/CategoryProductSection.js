
import { storyblokEditable } from "@storyblok/react"

const CategoryProductSection = ({ blok }) => {
  return (
    <section aria-labelledby="products-heading" className="mt-8 pb-16" {...storyblokEditable(blok)}>
      <h2 id="products-heading" className="sr-only">
        {blok.name}
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {blok.products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <img
                src={product.src}
                alt={product.alt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
            <p className="mt-1 text-sm text-left italic text-gray-500">{product.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default CategoryProductSection