import React from 'react';

export default function TaraTab({posts}) {

  let uniqueAuthors = [];
  let authorAssets = [];

  posts.map(post => {
    let authorName = post.author.name
    let picture = post.author.picture  

    if (uniqueAuthors.indexOf(authorName) === -1) {
      // Adds to the array so it's a part of the next check
      uniqueAuthors.push(authorName) 
      // Adds the assets needed to produce the dynamic JSX
      authorAssets.push({authorName, picture})         
    } 
  })

  return (
    <a href="https://twitter.com/herenowbody" target="_blank">
      <div className="hidden md:flex fixed h-12 w-40 bottom-0 right-0 justify-center border rounded bg-white text-base font-light bg-white">
        <div className="flex h-full justify-center">
          <div className="flex-shrink-0 self-center pr-2">
            <img
              className="h-8 w-8 rounded-full"
              src={authorAssets[0].picture}
              alt="Tara Lynn | Here Now Body"
            />
          </div>
          <span className="self-center"> by {authorAssets[0].authorName}</span>
        </div>
      </div>
    </a>
  )
}
