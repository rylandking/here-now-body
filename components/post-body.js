import markdownStyles from './markdown-styles.module.css'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import BlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const serializers = {
  types: {
    youtube: ({node}) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} />)
    }
  }
}

export default function PostBody({ content, thanks, signOff, tweetEmbed }) {
  
  const tweetId = tweetEmbed.split('status/')[1].split('?')[0];
  
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent 
        blocks={content}
        serializers={serializers}
        className={markdownStyles.markdown} 
      />
      <h2 className="text-2xl font-bold mb-4">Support</h2>
      <span className="text-lg">
        <BlockContent 
          blocks={thanks} 
          className={markdownStyles.markdown} 
        />
      </span>
      <p className="text-lg my-6">{signOff}</p>
      <div className="flex justify-center mt-4 mx-10 md:mx-0">
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
