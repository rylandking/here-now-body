import React, { useEffect, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export default function ExitIntentDiv() {
  // Use context to access global state
  const {subscribeModalView, toggleSubscribeModal, exitIntentModalViewed, setExitIntentModal} = useContext(GlobalContext);

  const setExitIntentStartFromLocalStorage = () => {
    // Ensure we get to client side first, then we can access the localStorage variable to set the state
    if (typeof window !== 'undefined') {
      // If exitIntentModalViewed inside localStorage is set to true, then set the new page state's exitIntentModalViewed to true.
      if ((localStorage.getItem('exitIntentModalViewed') == "true")) {
        // If the timer is less old than the new timestamp, allow the exit modal to happen (exitIntentModalViewed remains false)
        if ((localStorage.getItem('exitIntentModalViewedTimer')) < (+ new Date())) {
          return  
        }
        
        useEffect(() => { 
          setExitIntentModal()
        }, [])
      }
    }
  }
  setExitIntentStartFromLocalStorage()

  const setExitIntentStateinLocalStorage = () => {
    localStorage.setItem('exitIntentModalViewed', true );
    // Set timer for 2 days out
    localStorage.setItem('exitIntentModalViewedTimer', + new Date() + 1000*60*60*4)
  }

  return (
    <div 
      className="w-full fixed top-0 p-1 z-0"
      onMouseOut={() => {
        if (exitIntentModalViewed == false) {
          toggleSubscribeModal(subscribeModalView) }
          setExitIntentModal()
          setExitIntentStateinLocalStorage()
        }
      }
    ></div>
  )  
}



