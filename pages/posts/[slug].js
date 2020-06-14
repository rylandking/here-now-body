import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import ClickToShare from '../../components/click-to-share'
import Testimonials from '../../components/testimonials'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { SITE_NAME } from '../../lib/constants'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {SITE_NAME}
                </title>
              </Head>
              <Meta 
                  title= {post.title}
                  thumbnailImage={post.thumbnailImage}
                  description={post.description}
                  slug={post.slug}
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
                <Testimonials />
              </Container>
              </article>
          </>
        )}
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
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
