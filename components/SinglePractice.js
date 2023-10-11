import Link from 'next/link'

const Practice = ({ area, slug, image, imageTitle }) => {
  return (
    <div className='col-lg-3 col-md-6 mb-8'>
      <div className='shadow-custom rounded-md'>
        <Link href={`/practices/${slug}`} passHref>
          <a>
            <figure className='h-40 cursor-pointer'>
              <img
                className='w-full h-full object-cover'
                src={image}
                alt={imageTitle}
                loading='lazy'
              />
              <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-100 custom-transition bg-black-opacity-4'></div>
            </figure>
          </a>
        </Link>
        <div className='px-3 py-4 text-center'>
          <h3 className='text-base sm:text-lg lg:text-xl h-20'>{area}</h3>
          <div className='mt-4'>
            <Link href={`/practices/${slug}`} passHref>
              <a className='flex items-center justify-center text-primary'>
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
  )
}
export default Practice
