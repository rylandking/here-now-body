import Head from 'next/head'

export default function Meta({title, description, thumbnailImage, pageType}) {
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta property="og:type" content={pageType} />
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
