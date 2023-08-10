import { storyblokEditable } from "@storyblok/react"

const CategoryTopSection = ({ blok }) => {
  return (
    <div className="py-24 text-center" {...storyblokEditable(blok)}>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">{blok.headline}</h1>
      <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">{blok.subheadline}</p>
    </div>
  )
}

export default CategoryTopSection
