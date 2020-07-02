import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import ClickToShare from '../../components/click-to-share'
import Testimonials from '../../components/testimonials'
import Avatar from '../../components/avatar'
import SubscribeFormWrapper from '../../components/subscribe-form-wrapper'
import ExitIntentDiv from '../../components/exit-intent-div'
import SubscribePanel from '../../components/subscribe-panel'
import { getAllPostsWithSlug, getPostAndMorePosts, getTestimonials, getSubscribeModal, getSubscriberBenefits } from '../../lib/api'
import PostTitle from '../../components/post-title'
import useScript from '../../hooks/useScript';

import { GlobalProvider } from '../../context/GlobalState'

export default function Post({ post, preview, testimonialData, subscribeModalData, subscriberBenefitsData }) {

  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/formEmbed.js');
  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/recaptcha.js');

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  
  return (
    <GlobalProvider>
      <Layout preview={preview}>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <Meta 
                  title= {`${post.title} | Here Now Body`}
                  thumbnailImage={post.thumbnailImage}
                  description={post.description}
                  pageType={"article"}
                />
                <PostHeader
                  title={post.title}
                  thumbnailImage={post.thumbnailImage}
                  categoryNew={post.categoryNew.name}
                  bgColor={post.categoryNew.bgColor}
                  contentType={post.contentType.name}
                  contentTypeIcon={post.contentType.icon}
                  author={post.author}
                />
                <Container>
                  <PostBody 
                    content={post.content} 
                    thanks={post.thanksJoinListCTA} 
                    signOff={post.signOff} 
                    tweetEmbed={post.tweetEmbed}
                  />
                  <ClickToShare 
                    title={post.title}
                    slug={post.slug}
                  />
                  <SubscribeFormWrapper
                    title={subscribeModalData[0].title}
                    cta={subscribeModalData[0].buttonCTA}
                  />
                  <Testimonials 
                    testimonialData={testimonialData}
                  />
                </Container>
              </article>
              <Avatar name={post.author.name} picture={post.author.picture} />
              <ExitIntentDiv />
              <SubscribePanel
                title={subscribeModalData[0].title} 
                cta={subscribeModalData[0].buttonCTA} 
                benefits={subscriberBenefitsData}
              />
            </>
          )}
      </Layout>
    </GlobalProvider>
  )
}

export async function getStaticProps({ params, preview = false, testimonialData, subscribeModalData, subscriberBenefitsData }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const testimonials = await getTestimonials(testimonialData)
  const subscribeModal = await getSubscribeModal(subscribeModalData)
  const subscriberBenefits = await getSubscriberBenefits(subscriberBenefitsData)
  return {
    props: {
      preview,
      post: data?.post || null,
      testimonialData: testimonials || null,
      subscribeModalData: subscribeModal || null,
      subscriberBenefitsData: subscriberBenefits || null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
