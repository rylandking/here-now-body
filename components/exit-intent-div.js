import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export default function ExitIntentDiv() {
  // Use context to access global state
  const {subscribeModalView, toggleSubscribeModal, exitIntentModalViewed, setExitIntentModal} = useContext(GlobalContext);

  return (
    <div 
      className="w-full absolute top-0 p-1 z-0"
      onMouseOut={() => {
        if (exitIntentModalViewed == false) {
          toggleSubscribeModal(subscribeModalView)}
          setExitIntentModal()
        }
      }
    ></div>
  )
}



