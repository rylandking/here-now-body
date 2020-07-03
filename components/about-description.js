import React from 'react'
import markdownStyles from './about-markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'

export default function AboutDescription({title, content}) {
  return (
    <div className="relative mt-12 space-x-4 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div className="mt-10 mx-4 relative lg:mt-0 md:order-last">
        <img className="relative mx-auto" width="430" src="https://cdn.sanity.io/images/xznh1drs/production/e9fd9e732eff115c6c65ecc621f2be21e61c9ac6-478x484.jpg" alt="" />
      </div>
      <div className="relative justify-center space-x-4 mt-12 lg:mt-0">
        <h4 className="text-2xl mx-auto mx-4 mr-2 leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
          {title}
        </h4>
        <span className="mx-auto bg-blue-200">
          <BlockContent 
            blocks={content}
            className={markdownStyles.markdown} 
          />
        </span>
      </div>
    </div>
  )
}