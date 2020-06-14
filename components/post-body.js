import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function PostBody({ content, thanks, signOff, tweetEmbed }) {
  
  const tweetId = tweetEmbed.split('status/')[1].split('?')[0];
  
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent blocks={content} className={markdownStyles.markdown} />
      <p className="text-lg mb-8">{signOff}</p>
      <h2 className="text-2xl font-bold mb-4">Support</h2>
      <span className="text-lg">
        <BlockContent blocks={thanks} className={markdownStyles.markdown} />
      </span>
      <div className="flex justify-center mt-4">
        <TwitterTweetEmbed tweetId={tweetId} />
      </div>
      <style jsx global>{`
          a {
            text-decoration: underline;
          }
          h1, h2, h3, h4, h5, h6 {
            color: #6b46c1;
          }
      `}</style>
    </div>
  )
}
