import React, {useContext} from 'react'
import { useRouter } from 'next/router'
import SubscribeReasons from './subscribe-reasons'

import { GlobalContext } from '../context/GlobalState';
import SubscribeFormStacked from './subscribe-form-stacked';


export default function SubscribePanel({title, cta, benefits}) {
  // Use context to access global state
  const {subscribeModalView, toggleSubscribeModal} = useContext(GlobalContext);
  const router = useRouter()

  let modalOrPage;
  let background;
  let exitButton;
  let formID;

  if (router.pathname == '/subscribe') {
    modalOrPage = `fixed inset-x-0 inset-0 h-full bg-gray-50 flex flex-col justify-center`
    background = 'hidden'
    exitButton = 'hidden'
    formID = '3720d073-b40f-11ea-a3d0-06b4694bee2a'
  } else if (router.pathname == '/') {
    modalOrPage = `fixed inset-x-0 inset-0 h-full bg-gray-50 flex flex-col justify-center ${subscribeModalView ? '' : 'hidden'}`
    background = ''
    exitButton = ''
    formID = '91c4edaf-afd5-11ea-a3d0-06b4694bee2a'
  } else  {
    modalOrPage = `fixed inset-x-0 inset-0 h-full bg-gray-50 flex flex-col justify-center ${subscribeModalView ? '' : 'hidden'}`
    background = ''
    exitButton = ''
    formID = 'a4b19c9e-b489-11ea-a3d0-06b4694bee2a'
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
            <h2 className="mb-10 text-center leading-9 text-3xl font-extrabold tracking-wide text-gray-900">
              {title}
            </h2>
            {benefits.map((benefit) => (
              <SubscribeReasons key={benefit.title} reason={benefit.title} />
            ))}
          </div>
          <SubscribeFormStacked
            cta={cta}
            margin={'mx-6 sm:mx-20 mt-10'}
            formID = {formID}
          />
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