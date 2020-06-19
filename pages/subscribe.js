import React from 'react';
import Layout from '../components/layout'
import SubscribePanel from '../components/subscribe-panel'
import ExitIntentDiv from '../components/exit-intent-div'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

import { GlobalProvider } from '../context/GlobalState'

export default function Subscribe() {
    
  return (
    <GlobalProvider>
      <Layout>
        <Head>
          <title>Here Now Body</title>
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
        <SubscribePanel />
        <ExitIntentDiv />
      </Layout>
    </GlobalProvider>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
