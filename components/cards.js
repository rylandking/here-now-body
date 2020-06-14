import React, {useContext} from 'react';
import Card from './card';

import { GlobalContext } from '../context/GlobalState';

const Cards = ({ posts }) => {
  // Use context to access global state
  const {filterView} = useContext(GlobalContext);
  
  return (
    <div className={`
      p-5 grid grid-flow-row grid-row-height xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-full overflow-y-scroll
      ${filterView ? "hidden": ""}
    `}>
      {posts.map((post) => (
        <Card 
          key={post.slug}
          title={post.title}
          thumbnailImage={post.thumbnailImage}
          date={post.date}
          contentType={post.contentType.name}
          contentTypeIcon={post.contentType.icon}
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
