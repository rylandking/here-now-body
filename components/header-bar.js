import React, { useContext } from 'react';
import SubscribeFormHorizontal from './subscribe-form-horizonal'

import { GlobalContext } from '../context/GlobalState';


export default function  HeaderBar () {
  // Use context to access global state
  const { subscribeModalView, toggleSubscribeModal, setExitIntentModal } = useContext(GlobalContext);

  return (    
      <div className="flex w-full border-b items-center justify-between">
        <SubscribeFormHorizontal />
      
        <div className="w-full md:w-1/4 flex justify-end flex-shrink-0 text-sm font-semibold pr-3 flex items-center">
          <div 
            onClick={() => {toggleSubscribeModal(subscribeModalView); setExitIntentModal()}} 
            className="text-sm font-semibold text-purple-700 cursor-pointer mr-4 md:hidden">
            <a>GET NEW CONTENT</a>
          </div>
          <a href="https://www.youtube.com/channel/UChwEaaH7HLZ72HJH6Lkql_A" target="_blank" className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current text-purple-700 h-8 w-8"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
          <a href="https://podcasts.apple.com/us/podcast/here-now-body-pod/id1513758454" target="_blank" className="mr-2 md:mr-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-purple-700 h-6 w-6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 4C7 2.34315 8.34315 1 10 1C11.6569 1 13 2.34315 13 4V8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8V4ZM11 14.9291C14.3923 14.4439 17 11.5265 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 10.7614 12.7614 13 10 13C7.23858 13 5 10.7614 5 8C5 7.44772 4.55228 7 4 7C3.44772 7 3 7.44772 3 8C3 11.5265 5.60771 14.4439 9 14.9291V17H6C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H11V14.9291Z"
              />
            </svg>
          </a>
        </div>
      </div> 
    
  );
};
