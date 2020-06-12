import AllStories from '../components/all-stories'
import Cards from '../components/cards'
import Categories from '../components/categories'
import CategoriesControl from '../components/categories-control'
import Header from '../components/header'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Here Now Body</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Here Now Body by Tara Dirocco"/>
          <meta name="twitter:title" content="PLACEHOLDER"/>
          <meta property="description" content="PLACEHOLDER"/>
          <meta property="og:description" content="PLACEHOLDER"/>
          <meta name="twitter:description" content="PLACEHOLDER"/>
          <meta property="og:image" content="PLACEHOLDER"/>
          <meta property="og:image:height" content="630"/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image" content="PLACEHOLDER"/>
          <meta name="twitter:image" content="PLACEHOLDER"/>      
          <meta name="twitter:card" content="summary_large_image"/>  
          <meta property="og:site_name" content="Here Now Body" />
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
        
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
