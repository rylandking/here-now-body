import Layout from '../components/layout'
import Meta from '../components/meta'
import AboutNav from '../components/about-nav'
import AboutTitle from '../components/about-title'
import AboutDescription from '../components/about-description'
import AboutEducation from '../components/about-education'
import AboutContent from '../components/about-content'

import { getSubscribeModal, getSubscriberBenefits, getBlogPageMetaData, getMenuItems, getAuthors, getAbout } from '../lib/api'
import useScript from '../hooks/useScript';

import { GlobalProvider } from '../context/GlobalState'

export default function Index({ subscribeModalData, subscriberBenefitsData, blogMetaDataData, menuItemsData, authorsData, aboutsData }) {

  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/formEmbed.js');
  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/recaptcha.js');
    
  let pageTitle = blogMetaDataData[0].name;
  let pageDescription = blogMetaDataData[0].description;
  let pageImage = blogMetaDataData[0].image;  

  let titleBlack=aboutsData[0].titleBlack;
  let titlePurple=aboutsData[0].titlePurple;
  let subtitle=aboutsData[0].subtitle;

  let descriptionTitle=aboutsData[0].descriptionTitle;
  let descriptionContent=aboutsData[0].descriptionContent;

  let educationTitle=aboutsData[0].educationTitle;
  let educationSubtitle=aboutsData[0].educationSubtitle;
  let educationHeaderOne=aboutsData[0].educationHeaderOne;
  let educationContentOne=aboutsData[0].educationContentOne;
  let educationHeaderTwo=aboutsData[0].educationHeaderTwo;
  let educationContentTwo=aboutsData[0].educationContentTwo;
  let educationHeaderThree=aboutsData[0].educationHeaderThree;
  let educationContentThree=aboutsData[0].educationContentThree;
  
  let exploreTitleBlack=aboutsData[0].exploreTitleBlack;
  let exploreTitlePurple=aboutsData[0].exploreTitlePurple;
  let exploreSubtitle=aboutsData[0].exploreSubtitle;
  

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
        <div className="py-10 bg-gray-50 overflow-hidden lg:py-16">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <AboutTitle
              titleBlack={titleBlack}
              titlePurple={titlePurple}
              subtitle={subtitle}
            />
            <AboutDescription
              title={descriptionTitle}
              content={descriptionContent}
            />
            <AboutEducation
              title={educationTitle}
              subtitle={educationSubtitle}
              headerOne={educationHeaderOne}
              contentOne={educationContentOne}
              headerTwo={educationHeaderTwo}
              contentTwo={educationContentTwo}
              headerThree={educationHeaderThree}
              contentThree={educationContentThree}
            />
            <AboutContent
              titleBlack={exploreTitleBlack}
              titlePurple={exploreTitlePurple}
              subtitle={exploreSubtitle}
            />
          </div>
        </div>
      </Layout>
    </GlobalProvider>
  )
}

export async function getStaticProps({ subscribeModalData, subscriberBenefitsData, blogMetaDataData, menuItemsData, authorsData, aboutsData }) {
  
  const subscribeModal = await getSubscribeModal(subscribeModalData)
  const blogMetaData = await getBlogPageMetaData(blogMetaDataData)
  const subscriberBenefits = await getSubscriberBenefits(subscriberBenefitsData)
  const menuItems = await getMenuItems(menuItemsData)
  const authors = await getAuthors(authorsData)
  const abouts = await getAbout(aboutsData)
  
  return {
    props: { 
      subscribeModalData: subscribeModal || null,
      subscriberBenefitsData: subscriberBenefits || null,
      blogMetaDataData: blogMetaData || null,
      menuItemsData: menuItems || null,
      authorsData: authors || null,
      aboutsData: abouts || null,
     },
  }
}
