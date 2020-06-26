import React, { useContext } from 'react';
import Link from 'next/link'
import SubscribeFormHorizontal from './subscribe-form-horizonal'

import { GlobalContext } from '../context/GlobalState';


export default function  HeaderBar () {
  // Use context to access global state
  const { subscribeModalView, toggleSubscribeModal, setExitIntentModal } = useContext(GlobalContext);

  return (    
      <div className="flex w-full border-b items-center justify-between">
        <SubscribeFormHorizontal />
      
        <div className="w-full lg:w-1/4 flex justify-end flex-shrink-0 text-sm font-semibold pr-3 flex items-center">
          <div 
            onClick={() => {toggleSubscribeModal(subscribeModalView); setExitIntentModal()}} 
            className="text-sm font-semibold text-white cursor-pointer bg-purple-400 py-2 sm:py-3 px-2 mr-4 md:mr-8 rounded-lg lg:hidden">
            <a>Subscribe</a>
          </div>
          <div className="text-sm md:text-base font-bold text-purple-700 cursor-pointer mr-4 md:mr-8 hidden sm:flex">
            <Link href="/about">
              <a>
                About
              </a>
            </Link>
          </div>
          <div className="text-sm md:text-base font-bold text-purple-700 cursor-pointer mr-4 md:mr-8">
            <Link href="/blog">
              <a>
                Blog
              </a>
            </Link>
          </div>
          <div className="text-sm md:text-base font-bold text-purple-700 cursor-pointer mr-4 md:mr-8">
            <Link href="/podcasts">
              <a>
                Podcast
              </a>
            </Link>
          </div>
          <div className="text-sm md:text-base font-bold text-purple-700 cursor-pointer mr-5">
            <Link href="/studio">
              <a>
                Studio
              </a>
            </Link>
          </div>
        </div>
      </div> 
    
  );
};
