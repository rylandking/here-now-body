import Layout from '../components/layout'
import HomeLayout from '../components/home-layout'
import Meta from '../components/meta'
import { getAllPostsForHome, getSubscribeModal, getSubscriberBenefits, getIndexPageMetaData, getMenuItems } from '../lib/api'
import useScript from '../hooks/useScript';

import { GlobalProvider } from '../context/GlobalState'

export default function Index({ allPosts, subscribeModalData, subscriberBenefitsData, indexMetaDataData, menuItemsData }) {

  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/formEmbed.js');
  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/recaptcha.js');
    
  let pageTitle = indexMetaDataData[0].name;
  let pageDescription = indexMetaDataData[0].description;
  let pageImage = indexMetaDataData[0].image;  
  
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
          menuItems={menuItemsData}
        />
      </Layout>
    </GlobalProvider>
  )
}

export async function getStaticProps({ preview = false, subscribeModalData, subscriberBenefitsData, indexMetaDataData, menuItemsData }) {
  const allPosts = await getAllPostsForHome(preview)
  const subscribeModal = await getSubscribeModal(subscribeModalData)
  const indexMetaData = await getIndexPageMetaData(indexMetaDataData)
  const subscriberBenefits = await getSubscriberBenefits(subscriberBenefitsData)
  const menuItems = await getMenuItems(menuItemsData)
  
  return {
    props: { 
      allPosts, 
      preview,
      subscribeModalData: subscribeModal || null,
      subscriberBenefitsData: subscriberBenefits || null,
      indexMetaDataData: indexMetaData || null,
      menuItemsData: menuItems || null,
     },
  }
}
