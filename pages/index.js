import Cards from '../components/cards'
import Categories from '../components/categories'
import CategoriesControl from '../components/categories-control'
import Header from '../components/header'
import Layout from '../components/layout'
import TaraTab from '../components/tara-tab'
import ExitIntentDiv from '../components/exit-intent-div'
import SubscribePanel from '../components/subscribe-panel'
import { getAllPostsForHome, getSubscribeModal, getSubscriberBenefits } from '../lib/api'
import useScript from '../hooks/useScript';
import Head from 'next/head'

import { GlobalProvider } from '../context/GlobalState'

export default function Index({ allPosts, subscribeModalData, subscriberBenefitsData }) {

  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/formEmbed.js');
  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/recaptcha.js');
    
  let metaDataName = allPosts[0].metaData.name;
  let metaDataDescription = allPosts[0].metaData.description;
  let metaDataImage = allPosts[0].metaData.image;
  
  return (
    <GlobalProvider>
      <Layout>
        <Head>
          <title>Here Now Body by Tara Lynn</title>
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
          <meta property="og:title" content={metaDataName}/>
          <meta name="twitter:title" content={metaDataName}/>
          <meta property="description" content={metaDataDescription}/>
          <meta property="og:description" content={metaDataDescription}/>
          <meta name="twitter:description" content={metaDataDescription}/>
          <meta property="og:image" content={metaDataImage}/>
          <meta property="og:image:height" content="630"/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image" content={metaDataImage}/>
          <meta name="twitter:image" content={metaDataImage}/>      
          <meta name="twitter:card" content="summary_large_image"/>  
          <meta property="og:site_name" content={metaDataName} />
          <meta name="twitter:site" content="@herenowbody"/>
          <meta name="twitter:creator" content="@herenowbody"/>
        </Head>

        <div className="h-screen block">
          <Header />
          <div className="flex" style={{ height: 'calc(100% - 65px)' }}>
            <Categories posts={allPosts} />
            <Cards posts={allPosts} />
          </div>
          <CategoriesControl />
        </div>
        <TaraTab posts={allPosts} />
        <ExitIntentDiv />
        <SubscribePanel
          title={subscribeModalData[0].title} 
          cta={subscribeModalData[0].buttonCTA} 
          benefits={subscriberBenefitsData}
        />
      </Layout>
    </GlobalProvider>
  )
}

export async function getStaticProps({ preview = false, subscribeModalData, subscriberBenefitsData }) {
  const allPosts = await getAllPostsForHome(preview)
  const subscribeModal = await getSubscribeModal(subscribeModalData)
  const subscriberBenefits = await getSubscriberBenefits(subscriberBenefitsData)
  
  return {
    props: { 
      allPosts, 
      preview,
      subscribeModalData: subscribeModal || null,
      subscriberBenefitsData: subscriberBenefits || null,
     },
  }
}
