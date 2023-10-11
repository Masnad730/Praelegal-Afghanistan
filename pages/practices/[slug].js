import Link from 'next/link'

import PracticeAreas from '../../components/PracticeAreas'
import Layout from '../../components/layout/Layout'
import { getAllPracticesCustomFields } from '../../lib/api'

export default function PracticeArea({ practice, practices }) {
  return (
    <Layout
      title={`${practice.acf.area} | PraeLegal Afghanistan`}
      canonical={`https://praelegal.af/${practice.slug}`}
      descriptionContent={practice.acf.description.substring(0, 160)}
    >
      <div className='border-b border-secondary'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-lg-12'>
              <div className='relative'>
                <div
                  className='relative w-full bg-h__practice'
                  style={{
                    backgroundImage: `url(${practice.acf.image.url})`,
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'normal',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                  }}
                ></div>
                <div className='absolute left-1 right-1 lg:left-10 bottom-12 lg:w-max bg-black-opacity-7'>
                  <div className='box-clip'>
                    <div className='pb-4 px-8'>
                      <div className='pl-8 border-l-4 border-primary'>
                        <h1 className='text-xl md:text-2xl lg:text-4xl text-accents_0'>
                          {practice.acf.area}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row pb-12'>
          <div className='col-lg-8'>
            <div>
              <div className='border-b border-secondary mt-10 mb-6 lg:mb-8'>
                <ul className='flex flex-col lg:flex-row text-sm mb-2'>
                  <li className='bc__arrow pr-2.5 last:pr-0 uppercase last:text-primary'>
                    <Link href='/practices' passHref>
                      <a>practices</a>
                    </Link>
                  </li>
                  <li className='bc__arrow pr-2.5 last:pr-0 uppercase last:text-primary'>
                    <span>{practice.acf.area}</span>
                  </li>
                </ul>
              </div>
              <div className='whitespace-pre-wrap mb-8'>
                <div
                  className='dashed'
                  dangerouslySetInnerHTML={{ __html: practice.acf.description }}
                ></div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='pt-10'>
              <div className='mt-2 pb-4 bg-accents_1'>
                <div className='px-4'>
                  <PracticeAreas selectedArea={practice.acf.area} allArea={practices} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const practices = await getAllPracticesCustomFields()
  const paths = practices.map((practice) => ({
    params: { slug: practice.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const practices = await getAllPracticesCustomFields()
  return {
    props: {
      practice: practices.find((practice) => practice.slug === params.slug) || {},
      practices,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
