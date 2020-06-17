import React from 'react';
import SubscribeReasons from './subscribe-reasons';

export default function Subscribe() {

  // Make the input in the header a component

  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

          <div class="sm:mx-auto sm:w-full sm:max-w-md"> 
            <h2 class="mt-6 mb-10 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Join a community overcoming pain.
            </h2>
            <SubscribeReasons reason={'Real Stories'} />
            <SubscribeReasons reason={'Actionable Tips'} />
            <SubscribeReasons reason={'Free, Forever'} />
          </div>

          <form action="#" method="POST">
            <div class="mt-10 mx-10">
              <div className="flex-shrink-0 hidden md:flex mb-4 ">
                <div className="bg-gray-200 text-gray-400 rounded-l-lg rounded-r-none h-12 flex items-center pl-3 pr-0 mr-0">
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
                <div className="w-full">
                  <input
                    className="bg-gray-200 placeholder-gray-600 text-sm font-light focus:outline-none rounded-l-none rounded-r-lg h-12 pr-0 pl-3 block w-full appearance-none leading-normal"
                    type="email"
                    placeholder="herenow@body.com"
                  />
                </div>
              </div>
              <span class="block w-full h-12 shadow-sm">
                <button type="submit" class="w-full h-full items-center flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-500 focus:shadow-outline-purple active:bg-purple-500 transition duration-150 ease-in-out">
                  <span className="align-middle inline-block">Start Feeling Better</span>
                </button>
              </span>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm leading-5">
                <span class="px-2 bg-white text-gray-500">
                  powered by Email Octopus
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
