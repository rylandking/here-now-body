import React from 'react';
import SubscribeFormStacked from './subscribe-form-stacked'

export default function SubscribeFormWrapper({title, cta}) {

  return (
    <div className="max-w-2xl mx-auto mt-16 font-semibold w-full">
      <div className="block text-xl font-medium text-gray-700 pb-4 w-full justify-center">
        <p className="text-center">{title}</p>
      </div>
      <SubscribeFormStacked 
        cta={cta}
        margin={'sm:mx-24 md:mx-32 mt-4'}
      />
    </div>
  )
}