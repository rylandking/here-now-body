import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'
import Meta from '../components/meta'
import { getAllPostsForHome, getSubscribeModal, getSubscriberBenefits, getBlogPageMetaData } from '../lib/api'
import useScript from '../hooks/useScript';

import { GlobalProvider } from '../context/GlobalState'

export default function Index({ allPosts, subscribeModalData, subscriberBenefitsData, blogMetaDataData }) {

  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/formEmbed.js');
  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/recaptcha.js');
    
  let pageTitle = blogMetaDataData[0].name;
  let pageDescription = blogMetaDataData[0].description;
  let pageImage = blogMetaDataData[0].image;
  
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

export async function getStaticProps({ preview = false, subscribeModalData, subscriberBenefitsData, blogMetaDataData }) {
  const allPosts = await getAllPostsForHome(preview)
  const subscribeModal = await getSubscribeModal(subscribeModalData)
  const blogMetaData = await getBlogPageMetaData(blogMetaDataData)
  const subscriberBenefits = await getSubscriberBenefits(subscriberBenefitsData)
  
  return {
    props: { 
      allPosts, 
      preview,
      subscribeModalData: subscribeModal || null,
      subscriberBenefitsData: subscriberBenefits || null,
      blogMetaDataData: blogMetaData || null,
     },
  }
}