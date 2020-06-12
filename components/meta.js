import Head from 'next/head'

export default function Meta({title, description, thumbnailImage}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title}/>
      <meta property="description" content={description}/>
      <meta property="og:description" content={description}/>
      <meta name="twitter:description" content={description}/>
      <meta property="og:image" content={thumbnailImage}/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image" content={thumbnailImage}/>
      <meta name="twitter:image" content={thumbnailImage}/>      
      <meta name="twitter:card" content="summary_large_image"/>  
      <meta property="og:site_name" content="Here Now Body" />
      <meta name="twitter:site" content="@herenowbody"/>
      <meta name="twitter:creator" content="@herenowbody"/>
    </Head>
  )
}
