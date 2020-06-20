import React from 'react';
import Layout from '../components/layout'
import SubscribePanel from '../components/subscribe-panel'
import SubscribeFormStacked from '../components/subscribe-form-stacked';
import { getSubscribeModal, getSubscriberBenefits } from '../lib/api'
import Head from 'next/head'

import { GlobalProvider } from '../context/GlobalState'

export default function Subscribe({subscribeModalData, subscriberBenefitsData}) {
  
  return (
    <GlobalProvider>
      <Layout>
        <Head>
          <title>Subscribe | Here Now Body by Tara Lynn</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="PLACE_HOLDER"/>
          <meta name="twitter:title" content="PLACE_HOLDER"/>
          <meta property="description" content="PLACE_HOLDER"/>
          <meta property="og:description" content="PLACE_HOLDER"/>
          <meta name="twitter:description" content="PLACE_HOLDER"/>
          <meta property="og:image" content="PLACE_HOLDER"/>
          <meta property="og:image:height" content="630"/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image" content="PLACE_HOLDER"/>
          <meta name="twitter:image" content="PLACE_HOLDER"/>      
          <meta name="twitter:card" content="summary_large_image"/>  
          <meta property="og:site_name" content="PLACE_HOLDER" />
          <meta name="twitter:site" content="@herenowbody"/>
          <meta name="twitter:creator" content="@herenowbody"/>
        </Head>
        <SubscribePanel 
          title={subscribeModalData[0].title} 
          cta={subscribeModalData[0].buttonCTA} 
          benefits={subscriberBenefitsData} 
        />
      </Layout>
    </GlobalProvider>
  )
}

export async function getStaticProps({ subscribeModalData, subscriberBenefitsData }) {
  const subscribeModal = await getSubscribeModal(subscribeModalData)
  const subscriberBenefits = await getSubscriberBenefits(subscriberBenefitsData)
  return {
    props: {
      subscribeModalData: subscribeModal || null,
      subscriberBenefitsData: subscriberBenefits || null,
    },
  }
}
