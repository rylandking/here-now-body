import React from 'react'

export default function AboutIntro() {
  return (
    <div className="relative mt-12 space-x-4 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div className="relative space-x-4">
        <h4 className="text-2xl mx-4 leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
          Hello! I'm Tara Lynn.
        </h4>
        <p className="mt-3 text-lg leading-7 text-gray-500">
          My love for human form, experience, and story has guided me from the dance floor, to the yoga mat, and finally to a doctorate program in physical therapy at Regis University in Denver, CO.
        </p>
        <p className="mt-3 text-lg leading-7 text-gray-500">
          A dancer by training and a yogi by chance, I am fascinated by the ways in which we hold stories in our bodies. Delving into the world of chronic pain, I am on the path to uncovering how our beliefs, our community, and our environment shape how we experience pain.
        </p>
        <p className="mt-3 text-lg leading-7 text-gray-500">
          I am an experiential believer that we can explore our pain to uncover the stories that guide us, and even ENJOY the process while we are at it!
        </p>
      </div>

      <div className="mt-10 mx-4relative lg:mt-0">
        <img className="relative md:mx-auto" width="430" src="https://cdn.sanity.io/images/xznh1drs/production/e9fd9e732eff115c6c65ecc621f2be21e61c9ac6-478x484.jpg" alt="" />
      </div>
    </div>
  )
}