import React from 'react'

export default function SubscribeReasons({reason}) {
  return (
    <div className="flex justify-center ">
      <div className="flex">
        <div className="flex w-1/6">
          <svg 
            fill="currentColor" 
            width="36" 
            height="36"
            viewBox="0 0 20 20"
            className="text-purple-600">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <div className="flex w-5/6 justify-start items-center">
          <p className="flex self-center text-lg font-light pl-2">{reason}</p>
        </div>
      </div>
    </div>
  )
}