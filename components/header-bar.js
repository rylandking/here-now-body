import React, { useContext } from 'react';
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
            className="text-sm font-semibold text-purple-700 cursor-pointer mr-2 md:mr-8 lg:hidden">
            <a>GET NEW CONTENT</a>
          </div>
          <div className="text-base font-bold text-purple-700 cursor-pointer mr-8 hidden md:flex">
            About
          </div>
          <div className="text-base font-bold text-purple-700 cursor-pointer mr-8 hidden md:flex">
            Blog
          </div>
          <div className="text-base font-bold text-purple-700 cursor-pointer mr-8 hidden md:flex">
            Podcast
          </div>
          <div className="text-base font-bold text-purple-700 cursor-pointer mr-5 hidden md:flex">
            Studio
          </div>
        </div>
      </div> 
    
  );
};
