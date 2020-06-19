import Cards from '../components/cards'
import Categories from '../components/categories'
import CategoriesControl from '../components/categories-control'
import Header from '../components/header'
import Layout from '../components/layout'
import TaraTab from '../components/tara-tab'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

import { GlobalProvider } from '../context/GlobalState'

export default function Index({ allPosts }) {
    
  let metaDataName = allPosts[0].metaData.name;
  let metaDataDescription = allPosts[0].metaData.description;
  let metaDataImage = allPosts[0].metaData.image;
  
  return (
    <GlobalProvider>
      <Layout>
        <Head>
          <title>Here Now Body</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
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
