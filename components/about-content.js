import React from 'react'
import Link from 'next/link'

export default function AboutContent() {
  return (
    <div className="relative bg-gray-50 pt-20 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Explore 
            <span className="text-purple-600"> Here Now Body</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Learn about the latest science from my blog, listen to real stories on my podcast and start healing inside my virtual studio. 
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <Link href="/blog">
              <a>
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm leading-5 font-medium text-indigo-600">
                      <a href="#" className="hover:underline">
                        Read
                      </a>
                    </p>
                    <a className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        Here Now Body Blog
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        Here we summarize the latest science about healing and wellness and provide tips for your life.
                      </p>
                    </a>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <Link href="/podcasts">
              <a>
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm leading-5 font-medium text-indigo-600">
                      <span>
                        Listen
                      </span>
                    </p>
                    <div className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        Here Now Body Pod
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        Here explore journeys of healing from everyday people who learn how to find peace in their bodies here and now.
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
                <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-indigo-600">
                    <span>
                      Watch
                    </span>
                  </p>
                  <div className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Here Now Body Studio
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Here we put our learnings to work with some of my favorite classes.
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