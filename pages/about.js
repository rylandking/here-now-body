import Layout from '../components/layout'
import Meta from '../components/meta'
import AboutNav from '../components/about-nav'
import AboutTitle from '../components/about-title'
import AboutIntro from '../components/about-intro'
import AboutEducation from '../components/about-education'
import AboutContent from '../components/about-content'

import { getAllPostsForHome, getSubscribeModal, getSubscriberBenefits, getBlogPageMetaData, getMenuItems, getAuthors } from '../lib/api'
import useScript from '../hooks/useScript';

import { GlobalProvider } from '../context/GlobalState'

export default function Index({ allPosts, subscribeModalData, subscriberBenefitsData, blogMetaDataData, menuItemsData, authorsData }) {

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
        <AboutNav
          menuItems={menuItemsData}
        />
        <div class="py-6 bg-gray-50 overflow-hidden lg:py-16">
          <div class="relative  mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <AboutTitle />
            <AboutIntro />
            <AboutEducation />
            <AboutContent />
          </div>
        </div>
      </Layout>
    </GlobalProvider>
  )
}

export async function getStaticProps({ preview = false, subscribeModalData, subscriberBenefitsData, blogMetaDataData, menuItemsData, authorsData }) {
  const allPosts = await getAllPostsForHome(preview)
  const subscribeModal = await getSubscribeModal(subscribeModalData)
  const blogMetaData = await getBlogPageMetaData(blogMetaDataData)
  const subscriberBenefits = await getSubscriberBenefits(subscriberBenefitsData)
  const menuItems = await getMenuItems(menuItemsData)
  const authors = await getAuthors(authorsData)
  
  return {
    props: { 
      allPosts, 
      preview,
      subscribeModalData: subscribeModal || null,
      subscriberBenefitsData: subscriberBenefits || null,
      blogMetaDataData: blogMetaData || null,
      menuItemsData: menuItems || null,
      authorsData: authors || null,
     },
  }
}
