import React from 'react';
import SubscribeFormStacked from './subscribe-form-stacked'

export default function SubscribeFormWrapper({title, cta}) {

  return (
    <div className="max-w-2xl mx-auto mt-16 font-extrabold w-full">
      <div className="block text-xl text-gray-700 pb-4 w-full justify-center">
        <p className="text-center font-extrabold">{title}</p>
      </div>
      <SubscribeFormStacked 
        cta={cta}
        margin={'sm:mx-24 md:mx-32 mt-4'}
        formID="fc4bbab7-b488-11ea-a3d0-06b4694bee2a"
      />
    </div>
  )
}