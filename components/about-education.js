import React from 'react'
import markdownStyles from './about-markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'

export default function AboutEducation({title, subtitle, headerOne, contentOne, headerTwo, contentTwo, headerThree, contentThree,}) {
  return (
      <div className="relative mt-20 space-x-4 max-w-3xl">
        <div className="mb-6 mx-4">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {title}
          </h2>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            {subtitle}
          </p>
        </div>
        <div className="mt-6 grid gap-6 border-t-2 border-gray-100 pt-10 grid-cols-1 lg:row-gap-6">
          <div className="shadow-sm pb-2 rounded-lg">
            <h3 className="mb-1 text-xl leading-7 font-semibold text-gray-900">
              {headerOne}
            </h3>
            <BlockContent 
              blocks={contentOne}
              className={markdownStyles.markdown} 
            />
          </div>
          <div className="shadow-sm pb-2 rounded-lg">
            <h3 className="mt-2 mb-1 text-xl leading-7 font-semibold text-gray-900">
              {headerTwo}
            </h3>
            <BlockContent 
              blocks={contentTwo}
              className={markdownStyles.markdown} 
            />
          </div>
          <div className="shadow-sm rounded-lg">
            <h3 className="mt-2 mb-1 text-xl leading-7 font-semibold text-gray-900">
              {headerThree}
            </h3>
            <BlockContent 
              blocks={contentThree}
              className={markdownStyles.markdown} 
            />
          </div>
        </div>
      </div>
      
    
  )
}