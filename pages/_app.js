import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import SnackbarProvider from 'react-simple-snackbar'
import NProgress from 'nprogress'
import Router from 'next/router'

import '../styles/base.css'
import '../styles/grid.css'
import '../styles/main.css'
import '../styles/nprogress.css'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import ScrollToTop from '../components/ScrollToTop'

Router.events.on('routeChangeStart', (url) => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
      </Head>
      <SnackbarProvider>
        <ScrollToTop showBelow={300} />
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  )
}

export default MyApp
