import React from 'react'
import Link from 'next/link'

export default function flyOutMenuItem({icon, title, subtitle, link}) {

  return (
    <Link href={link}>
      <a className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-purple-100 transition ease-in-out duration-150">
        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-purple-500 text-white sm:h-12 sm:w-12 ">
        {icon}
        </div>
        <div className="space-y-1">
          <p className="text-base leading-6 font-medium text-gray-900">
            {title}
          </p>
          <p className="text-sm leading-5 text-gray-500">
            {subtitle}
          </p>
        </div>
      </a>
    </Link>
  )
}