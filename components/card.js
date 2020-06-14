import React, { useContext } from 'react';
import Link from 'next/link'

import { GlobalContext } from '../context/GlobalState';

const Card = ({
  title,
  thumbnailImage,
  slug,
  contentType,
  contentTypeIcon,
  categoryNew,
  categorySlug,
  bgColor
}) => {   
  // Use context to access global state
  const {categoryView} = useContext(GlobalContext);
  
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
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
                <img src={contentTypeIcon} alt="" style={{width:'24px', height:'24px'}}/>
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
