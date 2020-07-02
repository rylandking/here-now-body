import React from 'react'

export default function AboutTitle() {
  return (
    <main className=" px-4 mt-0">
      <div className="text-center">
        <h2 className="text-3xl tracking-tight mb-5 md:mb-0 xl:mb-5 leading-10 font-extrabold text-gray-900 sm:leading-none md:text-5xl xl:text-6xl">
          Your body is new
          <br className="xl:hidden" />
          <span className="text-purple-600"> every moment
          </span>
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Tara Lynn is a yoga teacher, physical therapy student, and blogger with a focus on movement science, chronic illness & pain, and alignment.
        </p>
      </div>
    </main>
  )
}
