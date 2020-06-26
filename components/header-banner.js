import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState';

export default function HeaderBanner({icon, title, subtitle, bg}) {
  // Use context to access global state
  const { setCategory } = useContext(GlobalContext);
  
  return (
      <div className="w-5/6 lg:w-3/4">
          <a>
            <div 
              className={`md:pl-3 py-1 sm:py-0 cursor-pointer h-full w-full flex justify-center md:justify-start items-start space-x-1 md:space-x-4 ${bg} transition ease-in-out duration-150`}
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
                <p className="text-base leading-6 font-bold text-white pt-0 md:pt-1">
                  {title}
                </p>
                <p className="text-sm leading-5 text-white hidden md:flex pb-1">
                  {subtitle}
                </p>
              </div>
            </div>
          </a>
      </div>
  )
}