import React from 'react';
import useScript from '../hooks/useScript';

export default function SubscribeFormStacked({cta, margin, formID}) {

  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/formEmbed.js');
  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/recaptcha.js');

  return (
    <div className={`email-octopus-form-wrapper block ${margin}`}>
      <form 
        method="post"
        action={`https://emailoctopus.com/lists/${formID}/members/embedded/1.3s/add`}
        className="email-octopus-form"
        data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
      >   
        <div className="mt-4 mx-2 md:mx-8 flex">
          <div className="block w-full">
            {/* Input */}
            <div className="flex-shrink-0 flex">
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
              <div className="email-octopus-form-row w-full">
                <input 
                  id={`${formID}`}
                  name="field_0"
                  type="email" 
                  className="bg-gray-200 placeholder-gray-600 text-base font-light focus:outline-none h-16 pr-0 pl-3 block w-full appearance-none leading-normal"
                  placeholder="Get tips and stories each week"
                  >
                </input>
              </div>
            </div>
            {/* Do not remove this div, otherwise we risk bot sign-ups */}
            <div className="email-octopus-form-row-hp" aria-hidden="true">
              <input 
                type="text" 
                name={`hp${formID}`}
                tabIndex="-1"
                autoComplete="nope">
              </input>
            </div>
            {/* Button */}
            <span className="email-octopus-form-row-subscribe block w-full h-16 shadow-sm">
              <input 
                type="hidden"
                name="successRedirectUrl"
              >
              </input>
              <button 
                type="submit"
                className="w-full h-full items-center flex justify-center py-2 px-4 border border-transparent text-base font-medium text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-500 focus:shadow-outline-purple active:bg-purple-500 transition duration-150 ease-in-out">
                <span className="align-middle inline-block">{cta}</span>
              </button>
            </span> 
          </div>             
        </div>
      </form>
      <p className="email-octopus-success-message text-center font-semibold text-purple-700 mt-8"></p>
      <p className="email-octopus-error-message text-center font-semibold text-purple-700 mt-8"></p>
    </div>
  )
}