import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export default function SubscribeFormHorizontal() {
  // Use context to access global state
  const {setExitIntentModal} = useContext(GlobalContext);

  return (
    <div className="email-octopus-form-wrapper flex-shrink-0">
      <form method="post"
        action="https://emailoctopus.com/lists/31c04bae-b48a-11ea-a3d0-06b4694bee2a/members/embedded/1.3s/add"
        className="email-octopus-form flex items-center"
        data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
      >
        <div className="bg-gray-200 text-gray-400 rounded-l-lg rounded-r-none h-12 flex items-center pl-3 pr-0 mr-0 hidden sm:flex">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current text-gray-500 w-4 h-4"
            >
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
          </span>
        </div>
        <div className="email-octopus-form-row w-56 sm:w-64">
            <input 
              id="field_0" 
              name="field_0"
              type="email" 
              className="bg-gray-200 placeholder-gray-600 text-sm font-light focus:outline-none rounded-l-lg sm:rounded-l-none rounded-r-lg h-12 pr-0 pl-3 block w-full appearance-none leading-normal"
              placeholder="Get tips and stories weekly">
          </input>
        </div>  
        <div className="email-octopus-form-row-hp w-1" aria-hidden="true">
            <input 
              type="text" 
              name="hp31c04bae-b48a-11ea-a3d0-06b4694bee2a"
              tabIndex="-1"
              autoComplete="nope">  
            </input>
        </div>
        <div className="email-octopus-form-row-subscribe">
            <input 
              type="hidden"
              name="successRedirectUrl">
            </input>
            <button 
              type="submit"
              className="bg-purple-500 hover:bg-purple-400 w-30 text-white text-xs font-medium ml-2 h-12 px-4 rounded leading-5"
              onClick={() => setExitIntentModal()} >
              Start healing
            </button>
        </div>
      </form>
      <div className="flex items-center">
        <p className="email-octopus-success-message text-center font-semibold text-purple-700 pl-5"></p>
        <p className="email-octopus-error-message text-center font-semibold text-purple-700 pl-5"></p>
      </div>
      <style jsx global>{`
        .grecaptcha-badge { 
          visibility: hidden;
        }
      `}</style>
    </div>
  )
}