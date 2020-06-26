import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'
import Meta from '../components/meta'
import { getAllPostsForHome, getSubscribeModal, getSubscriberBenefits, getPodcastPageMetaData } from '../lib/api'
import useScript from '../hooks/useScript';

import { GlobalProvider } from '../context/GlobalState'

export default function Index({ allPosts, subscribeModalData, subscriberBenefitsData, podcastMetaDataData }) {

  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/formEmbed.js');
  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/recaptcha.js');
    
  let pageTitle = podcastMetaDataData[0].name;
  let pageDescription = podcastMetaDataData[0].description;
  let pageImage = podcastMetaDataData[0].image;
  
  return (
    <GlobalProvider>
      <Layout>
        <Meta 
          title={pageTitle} 
          description={pageDescription} 
          thumbnailImage={pageImage} 
          pageType={'website'}
        />
        <HomeLayout 
          posts={allPosts}
          title={subscribeModalData[0].title}
          cta={subscribeModalData[0].buttonCTA}
          benefits={subscriberBenefitsData}
        />
      </Layout>
    </GlobalProvider>
  )
}

export async function getStaticProps({ preview = false, subscribeModalData, subscriberBenefitsData, podcastMetaDataData }) {
  const allPosts = await getAllPostsForHome(preview)
  const subscribeModal = await getSubscribeModal(subscribeModalData)
  const podcastMetaData = await getPodcastPageMetaData(podcastMetaDataData)
  const subscriberBenefits = await getSubscriberBenefits(subscriberBenefitsData)
  
  return {
    props: { 
      allPosts, 
      preview,
      subscribeModalData: subscribeModal || null,
      subscriberBenefitsData: subscriberBenefits || null,
      podcastMetaDataData: podcastMetaData || null,
     },
  }
}
