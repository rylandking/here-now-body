import React from 'react';
import Layout from '../components/layout'
import SubscribePanel from '../components/subscribe-panel'
import Meta from '../components/meta'
import { getSubscribeModal, getSubscriberBenefits, getMetaData } from '../lib/api'
import useScript from '../hooks/useScript';

import { GlobalProvider } from '../context/GlobalState'

export default function Subscribe({subscribeModalData, subscriberBenefitsData, metaDataData}) {

  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/formEmbed.js');
  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/recaptcha.js');

  let meta = metaDataData.find(o => o.title === 'Subscribe');
  
  let pageTitle = meta.name;
  let pageDescription = meta.description;
  let pageImage = meta.image;

  return (
    <GlobalProvider>
      <Layout>
        <Meta 
          title={pageTitle} 
          description={pageDescription} 
          thumbnailImage={pageImage} 
          pageType={'website'}
        />
        <SubscribePanel 
          title={subscribeModalData[0].title} 
          cta={subscribeModalData[0].buttonCTA} 
          benefits={subscriberBenefitsData} 
        />
      </Layout>
    </GlobalProvider>
  )
}

export async function getStaticProps({ subscribeModalData, subscriberBenefitsData, metaDataData }) {
  const subscribeModal = await getSubscribeModal(subscribeModalData)
  const subscriberBenefits = await getSubscriberBenefits(subscriberBenefitsData)
  const metaData = await getMetaData(metaDataData)
  return {
    props: {
      subscribeModalData: subscribeModal || null,
      subscriberBenefitsData: subscriberBenefits || null,
      metaDataData: metaData || null,
    },
  }
}
