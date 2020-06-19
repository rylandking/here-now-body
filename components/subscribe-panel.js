import React, {useContext} from 'react'
import { useRouter } from 'next/router'
import SubscribeReasons from './subscribe-reasons'

import { GlobalContext } from '../context/GlobalState';


export default function SubscribePanel() {
  // Use context to access global state
  const {subscribeModalView, toggleSubscribeModal} = useContext(GlobalContext);
  const router = useRouter()

  let modalOrPage;
  let background;
  let exitButton;

  if (router.pathname == '/subscribe') {
    modalOrPage = `fixed inset-x-0 inset-0 h-full bg-gray-50 flex flex-col justify-center`
    background = 'hidden'
    exitButton = 'hidden'
  } else {
    modalOrPage = `fixed inset-x-0 inset-0 h-full bg-gray-50 flex flex-col justify-center ${subscribeModalView ? '' : 'hidden'}`
    background = ''
    exitButton = ''
  }
  
  return (
      <div className={modalOrPage}>
        {/* Grey background */}
        <div 
          className={`fixed inset-0 transition-opacity ${background}`}
          onClick={() => toggleSubscribeModal(subscribeModalView)}
        >
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>
        {/* Modal itself */}
        <div className="bg-white h-full md:h-auto md:mx-auto md:w-full md:max-w-2xl z-10">
          <div className={`relative bg-white py-8 px-4 md:shadow-md md:px-10`}>
            {/* Exit button */}
            <div 
              className="sm:block absolute top-0 right-0 pt-4 pr-4"
              onClick={() => toggleSubscribeModal(subscribeModalView)}
            >
              <button 
                type="button" 
                className={`text-gray-600 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition ease-in-out duration-150 ${exitButton}`}
                aria-label="Close">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md"> 
              <h2 className="mb-10 text-center text-3xl leading-9 font-extrabold tracking-wide text-gray-900">
                Join a community finding love for their here now body.
              </h2>
              <SubscribeReasons reason={'Latest Science'} />
              <SubscribeReasons reason={'Real Stories'} />
              <SubscribeReasons reason={'Actionable Tips'} />
              <SubscribeReasons reason={'Free, Forever'} />
            </div>

            <form action="#" method="POST">
              <div className="mt-10 mx-8 md:mx-28">
                {/* Input */}
                <div className="flex-shrink-0 flex mb-4">
                  <div className="bg-gray-200 text-gray-400 rounded-r-none h-16 flex items-center pl-3 pr-0 mr-0">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        className="fill-current text-gray-500"
                      >
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                      </svg>
                    </span>
                  </div>
                  <div className="w-full">
                    <input
                      className="bg-gray-200 placeholder-gray-600 text-base font-light focus:outline-none h-16 pr-0 pl-3 block w-full appearance-none leading-normal"
                      type="email"
                      placeholder="herenow@body.com"
                    />
                  </div>
                </div>
                {/* Button */}
                <span className="block w-full h-16 shadow-sm">
                  <button type="submit" className="w-full h-full items-center flex justify-center py-2 px-4 border border-transparent text-base font-medium text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-500 focus:shadow-outline-purple active:bg-purple-500 transition duration-150 ease-in-out">
                    <span className="align-middle inline-block">Start Feeling Better</span>
                  </button>
                </span>
              </div>
            </form>
            {/* Footer */}
            <div className="mt-6">
              <div className="relative">
                
                <div className="relative flex justify-center text-sm leading-5">
                  <span className="px-2 bg-white text-gray-500">
                    Powered by Email Octopus
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}