import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from '../lib/api'

export default function CoverImage({ title, url, categoryNew, contentType, contentTypeIcon, bgColor, slug }) {
  
  return (
    <div
      className={`h-56 col-span-1 pt-4 pb-2 px-4 flex flex-col justify-between leading-normal bg-cover bg-center`}
      style={{ backgroundImage: 'url(' + url + '?h=300)' }}
    >
      <Link href="/">
        <a>
          <div>
            <svg fill="currentColor" width="40" height="40" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fill="#fff"></path>
            </svg>
          </div>
        </a>
      </Link>
      <div className="flex mb-8 h-48 items-center justify-center">
        <div className="text-white font-bold text-3xl tracking-wide">
          {title}
        </div>
      </div>
      <div className="flex items-center justify-between">
          <div className="flex">
            <p className="text-sm text-white flex items-center">
              <img src={contentTypeIcon} alt="" style={{width:'24px', height:'24px'}}/>
              <span className="pl-1">{contentType}</span>
            </p>
          </div>
          <div className="text-sm text-center justify-center">
            <div className={`inline-flex items-center justify-center w-32 py-1 rounded-full text-xs font-normal leading-5 ${bgColor} text-gray-700`}>
              <span>{categoryNew}</span>
            </div>
          </div>
        </div>
    </div>
 
  )
}
