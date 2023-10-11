import Link from 'next/link'
import Layout from '../../components/layout/Layout'

export default function Events() {
  return (
    <Layout
      title='Practice Areas - PraeLegal Afghanistan'
      canonical='https://praelegal.af/events/'
      descriptionContent=''
      activePage='insight'
    >
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-lg-7'>
            <div className='text-center'>
              <div className='mt-16'>
                <h1 className='text-xl sm:text-2xl lg:text-3xl'>Insights</h1>
                <div className='relative l-separator__center'></div>
              </div>
              <p>Find out the recent events and insights.</p>
            </div>
          </div>
        </div>
        <div className='row pt-14'>
          <div className='col-12'>
            <div className='border-b border-accents_4 pb-3'>
              <div className='text-xl sm:text-2xl lg:text-3xl'>Recent Events</div>
            </div>
          </div>
        </div>
        <div className='row py-8'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <Link href='/events/praelegal-second-general-global-meeting-2014/' passHref>
              <a>
                <div className='mb-12 border border-accents_4 p-2'>
                  <div>
                    <img src='/images/qatar-meeting-2014/2.jpg' alt='' />
                  </div>
                  <div className='text-center mt-4 text-sm h-11 text-primary font-openSans'>
                    <span>14 - 15 SEPTEMBER, 2014 QATAR</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <Link href='/events/praelegal-uzbekistan-conference-2019/' passHref>
              <a>
                <div className='mb-12 border border-accents_4 p-2'>
                  <div>
                    <img src='/images/uzbekistan-conference-2019/3.JPG' alt='' />
                  </div>
                  <div className='text-center mt-4 text-sm h-11 text-primary font-openSans'>
                    <span>15 - 16 November, 2019 Uzbekistan</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
