import Link from 'next/link'

import { getAllSuperioritiesCustomFields } from '../lib/api'
import Layout from '../components/layout/Layout'

export default function WhyUS({ superiorities }) {
  return (
    <Layout
      title='Why Us - PraeLegal Afghanistan'
      canonical='https://praelegal.af/why-us'
      descriptionContent='PraeLegal Afghanistan is an entry point for you to be experienced locally and globally by knowledgeable business lawyers who can make you succeed'
      activePage='why-us'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='my-8 md:my-12 lg:my-16'>
              <h1 className='text-xl md:text-2xl lg:text-3xl tracking-wide'>
                What Makes Our <span className='text-primary'>Network Different?</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {superiorities.map((superiority) => (
        <div id={superiority.id} className='even:bg-article_bg_banner odd:bg-white py-12'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='whitespace-pre-wrap'>
                  <h3 className='text-tertiary mb-4'>{superiority.title.rendered}</h3>
                  <div
                    className='dashed'
                    dangerouslySetInnerHTML={{ __html: superiority.acf.description }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const superiorities = await getAllSuperioritiesCustomFields()

  return {
    props: {
      superiorities,
    },
  }
}
