import Link from 'next/link'
import Layout from '../components/layout/Layout'
import CoolFacts from '../components/CoolFacts'

export default function Home() {
  return (
    <Layout
      title='PraeLegal Afghanistan'
      canonical='https://praelegal.af/'
      descriptionContent='PraeLegal Afghanistan law firm is part of the PraeLegal International network,that have successful legal skills, local market knowledge and industry expertise, having strong ties with the business community and are able to provide cross-border cooperation.'
      activePage='home'
    >
      <section className='mt-8 mb-16'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div className='text-center mb-8'>
                <h1 className='text-xl md:text-2xl lg:text-3xl'>
                  Who <span className='text-primary'>We Are</span>
                </h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <p className='text-center text-base lg:text-lg'>
                  PraeLegal Afghanistan law firm is part of the PraeLegal International network,
                  which is an international network consisting of 252 independent law firms in 142
                  countries that have successful legal skills, local market knowledge and industry
                  expertise, having strong ties with the business community and are able to provide
                  cross-border cooperation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CoolFacts />
      <section className='mt-14 lg:mt-20 mb-14'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div>
                <div className='relative w-full overflow-hidden p-box'>
                  <iframe
                    src='https://www.youtube.com/embed/ZVKnizO1ci4'
                    className='absolute top-0 left-0 bottom-0 right-0 w-full h-full border-none'
                  ></iframe>
                </div>
                <div className='mt-8 mb-8 lg:mb-0'>
                  <h2 className='text-lg sm:text-xl lg:text-2xl mb-2'>Why Should You Choose Us?</h2>
                  <p className='mb-3 last:mb-0'>
                    The characteristic of <strong>PraeLegal Afghanistan</strong> is the service
                    quality of its member law firms. Each PraeLegal Afghanistan member law firms
                    abides by a general philosophy of providing excellent service, as well as to the
                    PraeLegal Afghanistan Quality Standards.
                  </p>
                  <p className='mb-3 last:mb-0'>
                    <strong>PraeLegal Afghanistan</strong> is an entry point for you to be
                    experienced locally and globally by knowledgeable business lawyers who can make
                    you succeed with commercial and financial know-how and expertise.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div>
                <div className='border-t border-primary relative'>
                  <span className='bg-secondary text-white px-4 py-1 absolute -top-4 left-4'>
                    <h4>Global Scope</h4>
                  </span>
                  <div className='py-8'>
                    <p>
                      PraeLegal Afghanistan is a global law and consulting firm with its vast
                      network which is spanning 130 countries. PraeLegal Afghanistan is a business
                      network with a friendly environment so connected that the network is a
                      combination of its partners’ expertise and collective know-how. This network
                      is established for commercial companies, local and multinational firms and all
                      people who needs legal assistance.
                    </p>
                  </div>
                </div>
                <div className='border-t border-primary relative'>
                  <span className='bg-secondary text-white px-4 py-1 absolute -top-4 left-4'>
                    <h4>Cross Border Solutions</h4>
                  </span>
                  <div className='py-8'>
                    <p>
                      PraeLegal Afghanistan can rely on its worldwide network to help serve clients’
                      needs practically anywhere around the world.
                    </p>
                  </div>
                </div>
                <div className='border-t border-primary relative'>
                  <span className='bg-secondary text-white px-4 py-1 absolute -top-4 left-4'>
                    <h4>Client Involvement</h4>
                  </span>
                  <div className='py-8'>
                    <p>
                      PraeLegal Afghanistan Network’s central purpose is to assist clients to make
                      better business decisions and transactions. Delivering excellent client
                      service requires a deep understanding of clients’ needs.
                    </p>
                  </div>
                </div>
                <div className='flex items-center justify-end mt-6 mb-2'>
                  <Link href='/why-us' passHref>
                    <a className='flex items-center justify-center pb-1 border-b border-primary nav-all-prc'>
                      <span>Read More</span>
                      <span className='ml-2 text-sm'>
                        <i className='flaticon-arrow-pointing-to-right'></i>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<section className='py-32'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='mb-20 text-center'>
                <h2 className='text-4xl mb-2'>Latest Post From Blog</h2>
                <p className='mb-4'>
                  Green above he cattle god saw day multiply under fill in the cattle fowl a all,
                  living, tree word link available in the service for subdue fruit.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div>
                <div>
                  <img src='/images/news.jpg' alt='' />
                </div>
                <div>
                  <a href=''>22 July, 2018</a>
                  <h3>Chip to Model Collegiate Dises</h3>
                  <p>
                    Elementum libero hac leo integer. Risus hac part duriw feugiat litora cursus
                    hendrerit bibendum per person on elit.Tempus inceptos posuere me.
                  </p>
                  <a href='' className='flex items-center'>
                    Read more
                    <i class='flaticon-right-arrow text-xs ml-2'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'></div>
            <div className='col-lg-4 col-md-6'></div>
          </div>
        </div>
  </section>*/}
    </Layout>
  )
}
