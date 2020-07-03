import client, { previewClient } from './sanity'
import sanityImage from '@sanity/image-url'

const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

const postFields = `
  name,
  title,
  date,
  description,
  signOff,
  tweetEmbed,
  'slug': slug.current,
  'thumbnailImage': thumbnailImage.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
  'categoryNew': categoryNew->{name, bgColor, 'icon': icon.asset->url},
  'contentType': contentType->{name, svgIcon},
  'metaData': metaData->{name, description, 'image': image.asset->url},
`
const aboutFields = `
  titleBlack,
  titlePurple,
  subtitle,
  descriptionTitle,
  descriptionContent,
  educationTitle,
  educationSubtitle,
  educationHeaderOne,
  educationContentOne,
  educationHeaderTwo,
  educationContentTwo,
  educationHeaderThree,
  educationContentThree,
  exploreTitleBlack,
  exploreTitlePurple,
  exploreSubtitle,
`

const getClient = (preview) => (preview ? previewClient : client)

export const imageBuilder = sanityImage(client)

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      content,
      thanksJoinListCTA
    }`,
    { slug }
  )
  return data[0]
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(date desc, _updatedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
        thanksJoinListCTA
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
        thanksJoinListCTA
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}

export async function getTestimonials() {
  const testimonials = await client.fetch(`*[_type == 'testimonials' && live == true] | order(date desc){ 
    name, 
    workTitle, 
    'image': image.asset->url, 
    quote, 
    url, 
  }[0...2]`)
  
  return testimonials
}

export async function getSubscribeModal() {
  const subscribeModal = await client.fetch(`*[_type == 'subscribe']{ 
    title, 
    buttonCTA, 
  }`)
  
  return subscribeModal
}

export async function getIndexPageMetaData() {
  const indexPageMetaData = await client.fetch(`*[_type == 'metaData']{ 
    name,
    description,
    'image': image.asset->url,
  }`)
  
  return indexPageMetaData
}

export async function getSubscribePageMetaData() {
  const subscribePageMetaData = await client.fetch(`*[_type == 'metaDataSubscribePage']{ 
    name,
    description,
    'image': image.asset->url,
  }`)
  
  return subscribePageMetaData
}

export async function getPodcastPageMetaData() {
  const podcastPageMetaData = await client.fetch(`*[_type == 'metaDataPodcastPage']{ 
    name,
    description,
    'image': image.asset->url,
  }`)
  
  return podcastPageMetaData
}

export async function getBlogPageMetaData() {
  const blogPageMetaData = await client.fetch(`*[_type == 'metaDataBlogPage']{ 
    name,
    description,
    'image': image.asset->url,
  }`)
  
  return blogPageMetaData
}

export async function getStudioPageMetaData() {
  const studioPageMetaData = await client.fetch(`*[_type == 'metaDataStudioPage']{ 
    name,
    description,
    'image': image.asset->url,
  }`)
  
  return studioPageMetaData
}

export async function getSubscriberBenefits() {
  const subscriberBenefits = await client.fetch(`*[_type == 'subscriberBenefits']{ 
    title,
  }`)
  
  return subscriberBenefits
}

export async function getMenuItems() {
  const menuItems = await client.fetch(`*[_type == 'flyOutMenuItem']{ 
    title,
    subTitle,
    welcome,
    cardSubTitle,
  }`)
  
  return menuItems
}

export async function getAuthors() {
  const authors = await client.fetch(`*[_type == 'author'] { 
    name, 
    jobTitle, 
    'picture': picture.asset->url, 
  }`)
  
  return authors
}

export async function getAbout() {
  const abouts = await client.fetch(`*[_type == 'about'] { 
    ${aboutFields}
  }`)
  
  return abouts
}

export async function getAboutMeta() {
  const aboutMeta = await client.fetch(`*[_type == 'metaDataAboutPage'] { 
    name,
    description,
    'author': author->{'picture': picture.asset->url},
  }`)
  
  return aboutMeta
}