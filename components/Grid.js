import { storyblokEditable } from "@storyblok/react";

const renderGrid = grid => {
  const imgs = grid
    .map((img, i) => {
      return (
        <div key={i} className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
      )
    })
    return (
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">{[imgs[0], imgs[1]]}</div>
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">{[imgs[2], imgs[3], imgs[4]]}</div>
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">{[imgs[5], imgs[6]]}</div>
      </div>
    )
}
const Grid = ({ blok }) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
      {...storyblokEditable(blok)}
    >
      <div className="absolute transform sm:right-0 sm:top-0 sm:translate-x-8 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
            {renderGrid(blok.grid)}
        </div>
    </div>
  )
}

export default Grid