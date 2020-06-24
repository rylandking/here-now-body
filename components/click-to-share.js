import React from 'react';

export default function ClickToShare({title, slug}) {
  return (
    <div className="max-w-2xl mx-auto mt-20 font-semibold flex justify-center">
      <div className="flex mr-4 px-0 line mb-3 text-gray-400">
        
      </div>
      <div className="flex">
        <span className="mr-4 md:mr-6">CLICK ICON TO SHARE</span>
        <a className="mr-3 md:mr-4 cursor-pointer" href={`https://www.facebook.com/sharer/sharer.php?u=https://herenowbody.com/posts/${slug}`} target="_blank">
            <svg className="fill-current text-purple-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
        </a>
        <a className="mr-3 md:mr-4 cursor-pointer" href={`https://twitter.com/intent/tweet?url=https://herenowbody.com/posts/${slug}&via=HereNowBody&text=${title}`} target="_blank">
          <svg className="fill-current text-purple-700" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </a>
        <a className="cursor-pointer" href={`https://www.linkedin.com/sharing/share-offsite/?url=https://herenowbody.com/posts/${slug}`} target="_blank">
          <svg className="fill-current text-purple-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
      <div className="flex line mb-3 ml-4 text-gray-400">
      
      </div>
      <style jsx>{`
          .line {
            width: 60px;
            border-bottom: 2px solid;
          }
          @media only screen and (max-width: 600px) {
            .line {
              display: none;
            }
          }
      `}</style>
    </div>
  )
}