import Link from 'next/link'

const CoolFacts = () => {
  return (
    <section className='pt-16 pb-16 bg-accents_2'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div>
              <h2 className='text-xl md:text-2xl lg:text-3xl mb-12'>
                <strong className='text-2xl lg:text-4xl'>Our</strong> Core Values
              </h2>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 ml-auto pb-2'>
            <div className='text-4xl text-primary'>
              <i className='flaticon-diversity'></i>
            </div>
            <h3 className='block text-base font-bold uppercase tracking-wide my-2'>
              Diverse Services
            </h3>
            <p className='mb-6 text-accents_7'>
              PraeLegal Afghanistan is linked with a network of full-service law firms that are able
              to help clients successfully by navigating through the local legal and business
              terrain.
            </p>
          </div>
          <div className='col-lg-4 col-md-6 col-lg-3 ml-auto pb-2'>
            <div className='text-4xl text-primary'>
              <i className='flaticon-guide'></i>
            </div>
            <h3 className='block text-base font-bold uppercase tracking-wide my-2'>
              Guiding Principles
            </h3>
            <p className='mb-6 text-accents_7'>
              PraeLegal Afghanistan provides professional development support to help its lawyers
              grow professionally and improve their capability to deliver high-level client service.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'></div>
          <div className='col-lg-4 col-md-6 ml-auto pb-2'>
            <div className='text-4xl text-primary'>
              <i className='flaticon-customer'></i>
            </div>
            <h3 className='block text-base font-bold uppercase tracking-wide my-2'>
              Client-Oriented
            </h3>
            <p className='mb-6 text-accents_7'>
              PraeLegal Afghanistan’s central purpose is to assist clients to make better business
              decisions and transactions.
            </p>
          </div>
          <div className='col-lg-4 col-md-6 ml-auto pb-2'>
            <div className='text-4xl text-primary'>
              <i className='flaticon-book'></i>
            </div>
            <h3 className='block text-base font-bold uppercase tracking-wide my-2'>
              Industry Knowledge
            </h3>
            <p className='mb-6 text-accents_7'>
              Paralegal Afghanistan consists of professional lawyers with reliable legal skills,
              knowledge of domestic market and industry expertise capable of ensuring transnational
              cooperation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CoolFacts
