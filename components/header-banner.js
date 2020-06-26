import React from 'react'

export default function HeaderBanner({icon, title, subtitle, bg}) {
  
  return (
    <a className={`pl-3 py-1 sm:py-0 w-full lg:w-5/6 xl:w-2/3 flex items-start space-x-4 rounded-lg ${bg} transition ease-in-out duration-150`}>
      <div className="flex-shrink-0 flex items-center justify-center text-white h-10 w-10 sm:h-12 sm:w-12">
        {icon}
      </div>
      <div className="self-center">
        <p className="text-base leading-6 font-bold text-white pt-0 sm:pt-1">
          {title}
        </p>
        <p className="text-sm leading-5 text-white hidden sm:flex pb-1">
          {subtitle}
        </p>
      </div>
    </a>
  )
}