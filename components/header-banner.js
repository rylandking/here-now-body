import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState';

export default function HeaderBanner({icon, title, bg, cursor}) {
  // Use context to access global state
  const { setCategory } = useContext(GlobalContext);
  
  return (
    <div className="w-5/6 lg:w-3/4">
      <a>
        <div 
          className={`md:pl-4 py-1 sm:py-0 ${cursor} h-full w-full flex justify-center md:justify-start items-start space-x-1 ${bg} transition ease-in-out duration-150`}
          onClick={() => {
            setCategory("all")
          }}
        >
          <div className="flex-shrink-0 flex items-center justify-center text-white h-10 w-10 sm:h-12 sm:w-12">
            <div className="mt-4 md:mt-3">
            {icon}
            </div>
          </div>
          <div className="self-center">
            <p className="text-base leading-6 font-bold text-white pb-0 md:pb-1">
              {title}
            </p>
          </div>
        </div>
      </a>
    </div>
  )
}