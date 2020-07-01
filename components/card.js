import React, { useContext } from 'react';
import Link from 'next/link'

import { GlobalContext } from '../context/GlobalState';

const Card = ({
  title,
  thumbnailImage,
  slug,
  contentType,
  categoryNew,
  categorySlug,
  bgColor
}) => {   
  // Use context to access global state
  const {categoryView} = useContext(GlobalContext);

  let icon;

  if (contentType == "Studio") {
    icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 100 100">
      <g transform="translate(50 50) scale(0.69 0.69) rotate(0) translate(-50 -50)">
        <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
          <path fill="#FFFFFF" d="M20,4l-4,2.3V5c0-1.1-0.9-2-2-2H2C0.9,3,0,3.9,0,5v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-1.3l4,2.3V4z   M14,15H2V5h12L14,15z M18,12.6l-2-1.1V8.6l2-1.1V12.6z"></path>
        </svg>
      </g>
    </svg>;
  } else if (contentType == "Article") {
    icon = <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
  } else if (contentType == "Podcast") {
    icon = <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>;
  }
  
  return (
    <Link href={`/posts/[slug]`} as={`/posts/${slug}`}>
      <div className={`h-56 flex rounded-lg bg-cover
        ${(categoryView === categorySlug || categoryView === 'all') ? "":"hidden"}`}
        style={{ backgroundImage: 'url(' + thumbnailImage + ')' }}
      >
        <div className={`h-full flex flex-col col-span-1 bg-black bg-opacity-25 w-full rounded-lg pt-4 pb-2 px-4 justify-between leading-normal cursor-pointer`}>
          <div className="mb-8">
            <div className="text-white font-bold text-lg tracking-wide mb-2">
              {title}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <p className="text-sm text-white flex items-center">
                {icon}
                <span className="pl-1">{contentType}</span>
              </p>
            </div>
            <div className="flex text-sm text-center justify-center">
              <div className={`inline-flex items-center justify-center w-32 py-1 rounded-full text-xs font-normal leading-5 ${bgColor} text-gray-700`}>
                <span>{categoryNew}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
