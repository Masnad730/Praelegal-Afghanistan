import { getAllPracticesCustomFields } from '../../lib/api'
import Layout from '../../components/layout/Layout'
import Practice from '../../components/SinglePractice'

export default function Practices({ practices }) {
  return (
    <Layout
      title='Practice Areas - PraeLegal Afghanistan'
      canonical='https://praelegal.af/practices'
      descriptionContent='Praelegal Afghanistan practice many areas of law such as Corporate Law, Investment Law, Tax Law, Banking and Finance, Intellectual Property,Business Crimes and Compliance,... and more'
      activePage='practices'
    >
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-lg-7'>
            <div className='text-center mt-8 md:mt-10 lg:mt-16'>
              <h1 className='text-xl sm:text-2xl lg:text-5xl'>
                Our <span className='text-primary'>Practices</span>
              </h1>
              <div className='relative l-separator__center'></div>
            </div>
          </div>
        </div>
        <div className='row justify-center'>
          <div className='col-lg-10'>
            <div className='text-center mb-8 md:mb-10 lg:mb-16'>
              <p>
                PraeLegal Afghanistan law firm provides full-service to its Clients. The following
                highlights a general description of many of our practice areas, but there are many
                specialized and nuanced areas of law that we also practice.
              </p>
            </div>
          </div>
        </div>
        <div className='row mt-8 mb-16'>
          {practices.map((practice) => (
            <Practice
              area={practice.acf.area}
              slug={practice.slug}
              image={practice.acf.image.url || ''}
              imageTitle={practice.acf.area}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const practices = await getAllPracticesCustomFields()
  return {
    props: {
      practices,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
