import React from 'react';
import Card from './card';

const Cards = ({ posts }) => {
  return (
    <div className="p-5 grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-full w-full articles-w overflow-y-scroll">
      {posts.map((post) => (
        <Card 
          key={post.slug}
          title={post.title}
          thumbnailImage={post.thumbnailImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          description={post.description}
          categoryNew={post.categoryNew.name}
          categorySlug={post.categoryNew.name.replace(/\s+/g, '-').toLowerCase()}
          type={post.type}
        />
      ))}
      <style jsx>{`
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
