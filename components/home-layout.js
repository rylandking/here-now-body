import React from 'react';
import Cards from '../components/cards'
import Categories from '../components/categories'
import CategoriesControl from '../components/categories-control'
import Header from '../components/header'
import TaraTab from '../components/tara-tab'
import ExitIntentDiv from '../components/exit-intent-div'
import SubscribePanel from '../components/subscribe-panel'
import { useRouter } from 'next/router';

export default function HomeLayout({ posts, title, cta, benefits, menuItems, authors }) {

  const router = useRouter()
  let filteredPosts

  // Filter out all posts not of the relevant contentType when on a specific page.
  // This makes it so we only show categories that exist from the content within each contentType or page.
  if (router.pathname == `/podcasts`) {
    filteredPosts = posts.filter(post => post.contentType.name === "Podcast");
  } else if (router.pathname == '/blog') {
    filteredPosts = posts.filter(post => post.contentType.name === "Article");
  } else if (router.pathname == '/studio') {
    filteredPosts = posts.filter(post => post.contentType.name === "Studio");
  } else {
    filteredPosts = posts;
  }
  
  return (
    <>
    <div className="h-screen block">
      <Header
        menuItems={menuItems}
      />
      <div className="flex" style={{ height: 'calc(100% - 65px)' }}>
        <Categories posts={filteredPosts} />
        <Cards 
          posts={filteredPosts} 
          menuItems={menuItems}
          authors={authors}
        />
      </div>
      <CategoriesControl />
    </div>
    <TaraTab authors={authors} />
    <ExitIntentDiv />
    <SubscribePanel
      title={title} 
      cta={cta} 
      benefits={benefits}
    />
    </>
  )
}
