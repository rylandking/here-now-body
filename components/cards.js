import React, {useContext} from 'react';
import { useRouter } from 'next/router';
import Card from './card';
import CardBanner from './card-banner';

import { GlobalContext } from '../context/GlobalState';

const Cards = ({ posts, menuItems, authors }) => {
  // Use context to access global state
  const {filterView} = useContext(GlobalContext);
  const router = useRouter()

  let postsToDisplay =[]

  if (router.pathname == `/podcasts`) {
    postsToDisplay = posts.filter(function (post) {
      return post.contentType.name == "Podcast"
    })
  } else if (router.pathname == '/blog') {
    postsToDisplay = posts.filter(function (post) {
      return post.contentType.name == "Article"
    })
  } else if (router.pathname == '/studio') {
    postsToDisplay = posts.filter(function (post) {
      return post.contentType.name == "Studio"
    })
  } else {
    postsToDisplay = posts
  }
  
  return (
    <div className={`
      p-5 grid grid-flow-row grid-row-height xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-full overflow-y-scroll
      ${filterView ? "hidden md:grid": ""}
    `}>
      <CardBanner
        menuItems={menuItems}
        authors={authors}
      />
      {postsToDisplay.map((post) => (
        <Card 
          key={post.slug}
          title={post.title}
          thumbnailImage={post.thumbnailImage}
          date={post.date}
          contentType={post.contentType.name}
          contentTypeIcon={post.contentType.svgIcon}
          slug={post.slug}
          categoryNew={post.categoryNew.name}
          bgColor={post.categoryNew.bgColor}
          categorySlug={post.categoryNew.name.replace(/\s+/g, '-').toLowerCase()}
        />
      ))}
      <style jsx>{`
        .grid-row-height {
          grid-auto-rows: 14rem;
        }
        @media (min-width: 768px) {
          .articles-w {
            width: calc(100% - 222px);
          }
        }
      `}</style>
    </div>
  );
};

export default Cards;
