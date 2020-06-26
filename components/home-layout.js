import React from 'react';
import Cards from '../components/cards'
import Categories from '../components/categories'
import CategoriesControl from '../components/categories-control'
import Header from '../components/header'
import TaraTab from '../components/tara-tab'
import ExitIntentDiv from '../components/exit-intent-div'
import SubscribePanel from '../components/subscribe-panel'

export default function HomeLayout({ posts, title, cta, benefits }) {
  // allPosts, subscribeModalData, subscriberBenefitsData
  return (
    <>
    <div className="h-screen block">
      <Header />
      <div className="flex" style={{ height: 'calc(100% - 65px)' }}>
        <Categories posts={posts} />
        <Cards posts={posts} />
      </div>
      <CategoriesControl />
    </div>
    <TaraTab posts={posts} />
    <ExitIntentDiv />
    <SubscribePanel
      title={title} 
      cta={cta} 
      benefits={benefits}
    />
    </>
  )
}
