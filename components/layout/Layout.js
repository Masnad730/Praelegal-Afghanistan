import React from 'react'
import Head from 'next/head'

import Footer from './../Footer'
import HeroBackground from '../HeroBackground'

const Layout = ({ children, title, canonical, descriptionContent, jsonLD, activePage }) => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='canonical' href={canonical} />
        <meta name='description' content={descriptionContent} />
        <meta name='keywords' content='' />

        <meta property='og:title' content='PraeLegal Afghanistan' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://praelegal.af/' />
        <meta
          property='og:image'
          content='https://praelegal.af/images/PraelegalAF-Logo-Large.png'
        />
        <meta property='og:site_name' content='PraeLegal Afghanistan' />
        <meta
          property='og:description'
          content='PraeLegal Afghanistan law firm is part of the PraeLegal International network,that have successful legal skills, local market knowledge and industry expertise, having strong ties with the business community and are able to provide cross-border cooperation.'
        />
        <meta
          property='og:image:secure_url'
          content='https://praelegal.af/images/PraelegalAF-Logo-Large.png'
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='PraeLegal Afghanistan' />
        <meta
          name='twitter:description'
          content='PraeLegal Afghanistan law firm is part of the PraeLegal International network,that have successful legal skills, local market knowledge and industry expertise, having strong ties with the business community and are able to provide cross-border cooperation.'
        />
        <meta
          name='twitter:image'
          content='https://praelegal.af/images/PraelegalAF-Logo-Large.png'
        />
        <title>{title}</title>
        <script type='application/ld+json'>{jsonLD}</script>
      </Head>
      <HeroBackground activePage={activePage} />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
