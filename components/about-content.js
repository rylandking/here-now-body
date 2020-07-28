import React from 'react'
import Link from 'next/link'

export default function AboutContent({titleBlack, titlePurple, subtitle, menuItems}) {

  console.log(menuItems);
  
  let studio = menuItems.find(o => o.title === 'Studio');
  let podcast = menuItems.find(o => o.title === 'Podcasts');
  let blog = menuItems.find(o => o.title === 'Blog');

  let sVerb = studio.verb
  let sHnbTitle = studio.hnbTitle
  let sCardTitle = studio.cardSubTitle
  let sImage = studio.metaData.image
  let pVerb = podcast.verb
  let pHnbTitle = podcast.hnbTitle
  let pCardTitle = podcast.cardSubTitle
  let pImage = podcast.metaData.image
  let bVerb = blog.verb
let bHnbTitle = blog.hnbTitle
  let bCardTitle = blog.cardSubTitle
  let bImage = blog.metaData.image

  return (
    <div className="relative bg-gray-50 pt-20 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {titleBlack} 
            <br className="sm:hidden" />
            <span className="text-purple-600"> {titlePurple}</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            {subtitle}
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <Link href="/blog">
              <a>
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={bImage} alt={bHnbTitle} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm leading-5 font-medium text-indigo-600">
                        {bVerb}
                    </p>
                    <div className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        {bHnbTitle}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {bCardTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <Link href="/podcasts">
              <a>
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={pImage} alt={pHnbTitle} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm leading-5 font-medium text-indigo-600">
                      {pVerb}
                    </p>
                    <div className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        {pHnbTitle}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {pCardTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <Link href="/studio">
              <a>
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={sImage} alt={sHnbTitle} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm leading-5 font-medium text-indigo-600">
                      {sVerb}
                    </p>
                    <div className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        {sHnbTitle}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {sCardTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}