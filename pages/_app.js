import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../styles/globals.css'

function MyApp({ Component, pageProps, router}) {
  const url = `https://prosperabouar.vercel.app/${router.route}`
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#141516"/>
    </Head>
    <DefaultSeo
        titleTemplate="%s - Abouar Prosper"
        openGraph={{
            type: 'website',
            locale: 'fr_CM',
            url,
            description: '',
            site_name: 'fluidmusic.vercel.app',
            images: []
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/favicon.ico',
            sizes: '76x76'
          },
          {
            rel: 'manifest',
            href: '/manifest.json'
          }
        ]}
        canonical={url}
    />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
