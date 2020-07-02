import React from 'react'

export default function AboutTitle({titleBlack, titlePurple, subtitle}) {

  return (
    <main className="px-4 mt-0">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight mb-5 md:mb-0 xl:mb-5 leading-10 font-extrabold text-gray-900 sm:leading-none md:text-5xl xl:text-6xl">
          {titleBlack}
          <br className="xl:hidden" />
          <span className="text-purple-600"> {titlePurple}
          </span>
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {subtitle}
        </p>
      </div>
    </main>
  )
}
