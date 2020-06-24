import React from 'react';
import Layout from '../components/layout'
import SubscribePanel from '../components/subscribe-panel'
import { getSubscribeModal, getSubscriberBenefits, getSubscribePageMetaData } from '../lib/api'
import useScript from '../hooks/useScript';
import Head from 'next/head'

import { GlobalProvider } from '../context/GlobalState'

export default function Subscribe({subscribeModalData, subscriberBenefitsData, subscribePageMetaDataData}) {
  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/formEmbed.js');
  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/recaptcha.js');

  console.log(subscribePageMetaDataData);

  return (
    <GlobalProvider>
      <Layout>
        <Head>
          <title>{subscribePageMetaDataData[0].name}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#000000"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={`${subscribePageMetaDataData[0].name}`}/>
          <meta name="twitter:title" content={`${subscribePageMetaDataData[0].name}`}/>
          <meta property="description" content={`${subscribePageMetaDataData[0].description}`}/>
          <meta property="og:description" content={`${subscribePageMetaDataData[0].description}`}/>
          <meta name="twitter:description" content={`${subscribePageMetaDataData[0].description}`}/>
          <meta property="og:image" content={`${subscribePageMetaDataData[0].image}`}/>
          <meta property="og:image:height" content="630"/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image" content={`${subscribePageMetaDataData[0].image}`}/>
          <meta name="twitter:image" content={`${subscribePageMetaDataData[0].image}`}/>      
          <meta name="twitter:card" content="summary_large_image"/>  
          <meta property="og:site_name" content={`${subscribePageMetaDataData[0].name}`} />
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

export async function getStaticProps({ subscribeModalData, subscriberBenefitsData, subscribePageMetaDataData }) {
  const subscribeModal = await getSubscribeModal(subscribeModalData)
  const subscriberBenefits = await getSubscriberBenefits(subscriberBenefitsData)
  const subscribePageMetaData = await getSubscribePageMetaData(subscribePageMetaDataData)
  return {
    props: {
      subscribeModalData: subscribeModal || null,
      subscriberBenefitsData: subscriberBenefits || null,
      subscribePageMetaDataData: subscribePageMetaData || null,
    },
  }
}
