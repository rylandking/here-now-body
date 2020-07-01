import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function CardBanner({menuItems, authors}) {

  const router = useRouter()
  
  let filteredMenuItems;
  let welcome;
  let cardSubTitle;
  let hideShow = '';

  // Filter out all posts not of the relevant contentType when on a specific page.
  // This makes it so we only show categories that exist from the content within each contentType or page.
  if (router.pathname == `/podcasts`) {
    filteredMenuItems = menuItems.filter(menutItem => menutItem.title === "Podcasts");
    welcome = filteredMenuItems[0].welcome;
    cardSubTitle = filteredMenuItems[0].cardSubTitle;
    hideShow = ''
  } else if (router.pathname == '/blog') {
    filteredMenuItems = menuItems.filter(menutItem => menutItem.title === "Blog");
    welcome = filteredMenuItems[0].welcome;
    cardSubTitle = filteredMenuItems[0].cardSubTitle;
    hideShow = ''
  } else if (router.pathname == '/studio') {
    filteredMenuItems = menuItems.filter(menutItem => menutItem.title === "Studio");
    welcome = filteredMenuItems[0].welcome;
    cardSubTitle = filteredMenuItems[0].cardSubTitle;
    hideShow = ''
  } else {
    filteredMenuItems = menuItems;
    hideShow = "hidden"
  }
  
  return (
    <div className={`border-2 border-purple-200 rounded-lg py-1 px-3 ${hideShow}`}>
      <div className="block">
        <h3 className="mt-3 text-lg md:text-xl leading-7 md:leading-6 font-bold text-gray-800">
          {welcome}
        </h3>
        <p className="mt-1 md:mt-3 text-base sm:text-sm leading-5 text-gray-500">
          {cardSubTitle}
        </p>
      </div>
      <Link href="/about">
        <a>
          <div className="mt-6 lg:mt-5 flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={authors[0].picture} alt={`${authors[0].name} of Here Now Body`} />
            </div>
            <div className="ml-3">
              <p className="text-sm leading-5 font-medium text-gray-900">  
                {authors[0].name}
              </p>
              <div className="flex text-sm leading-5 text-gray-500">
                <div>
                  {authors[0].jobTitle}
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}


{/* <div className={`h-56 flex rounded-lg bg-cover`}>
  <div className={`h-full flex flex-col col-span-1 bg-purple-500 w-full rounded-lg pt-4 pb-2 px-4 justify-between leading-normal cursor-pointer`}>
    
    <div className="flex items-center justify-between">
    <div className="flex text-sm text-center justify-center">
        <div className={`inline-flex items-center justify-center w-24 py-0.5 rounded-full text-xs font-normal leading-5 bg-purple-200 text-purple-700`}>
          <span>Testing</span>
        </div>
      </div>
      <div className="flex">
        <p className="text-sm text-white flex items-center">
          i
          <span className="pl-1">Whatever</span>
        </p>
      </div>
    </div>

    <div className="mb-8 block">
      <div className="text-white font-bold text-lg tracking-wide mb-2 flex">
        Here Now Body Blog
      </div>
      <div className="text-white font-medium text-base tracking-wide mb-2 flex">
        Read the latest science about healing and wellness.
      </div>
    </div>

  </div>
</div> */}