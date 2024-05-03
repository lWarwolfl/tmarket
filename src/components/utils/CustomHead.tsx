import preview from '@public/preview.jpg'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface CustomHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player'
  keywords?: string[]
}

export default function CustomHead(props: CustomHeadProps) {
  const router = useRouter()

  const seo = {
    title: 'TMarket: Your One-Stop Online Shopping Destination',
    description:
      'Explore TMarket, the leading e-commerce platform that brings you a vast selection of products from trusted sellers worldwide. Enjoy seamless shopping experiences with secure payment options and fast delivery.',
    keywords: [
      'TMarket',
      'online shopping',
      'e-commerce platform',
      'buy online',
      'secure payment',
      'fast delivery',
    ],
    url: router.asPath,
    image: preview.src,
    twitterCardType: 'summary',
    ...props,
  } satisfies CustomHeadProps

  return (
    <Head>
      {/* Primary Meta Tags */}
      <meta name="viewport" content="width=device-width, height=device-height" />
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta name="author" content="Sina Kheiri" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter */}
      <meta property="twitter:card" content={seo.twitterCardType} />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />
    </Head>
  )
}
