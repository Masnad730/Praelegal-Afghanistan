import Link from 'next/link'

export default function FirstPage() {
  return (
    <div
      className='h-screen min-w-full p-0 m-0 relative'
      style={{
        backgroundImage: "url('/images/bg-main-page.jpg')",
        backgroundSize: 'cover',
        backgroundBlendMode: 'normal',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className='absolute top-0 lg:top-20 left-1/2 transform -translate-x-1/2'>
        <div className='container'>
          <div className='row justify-between mt-16'>
            <div className='col-lg-5 mb-12'>
              <div>
                <a href='https://www.praelegal.de/'>
                  <img
                    className='w-full h-full hover:scale-125 transition-custom'
                    src='/images/PraelegalInter-Logo.png'
                    alt=''
                  />
                </a>
              </div>
            </div>
            <div className='col-lg-5'>
              <div>
                <Link href='/home/' passHref>
                  <a>
                    <img
                      className='w-full h-full hover:scale-125 transition-custom'
                      src='/images/PraelegalAF-Logo-Large.png'
                      alt=''
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
