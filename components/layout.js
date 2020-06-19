import React from 'react'
import ExitIntentDiv from '../components/exit-intent-div'
import SubscribePanel from '../components/subscribe-panel'

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen">   
        <main>{children}</main>
      </div>
      <ExitIntentDiv />
      <SubscribePanel />
    </>
  )
}
