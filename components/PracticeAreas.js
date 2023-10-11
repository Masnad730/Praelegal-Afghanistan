import Link from 'next/link'

const PracticeAreas = ({ selectedArea, allArea }) => {
  return (
    <section>
      <div>
        <ul>
          {allArea.map((singleArea, index) => {
            if (index < 10 || singleArea.acf.area === selectedArea) {
              return (
                <li
                  className={
                    singleArea.acf.area === selectedArea
                      ? 'mb-1 last:mb-0 py-3 pr-4 relative side-nav__arrow text-primary border-b border-accents_6'
                      : 'mb-1 last:mb-0 py-3 pr-4 relative side-nav__arrow hover:text-primary border-b border-accents_6'
                  }
                >
                  <Link href={`/practices/${singleArea.slug}`} passHref>
                    <a>{singleArea.acf.area}</a>
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </div>
      <div className='flex items-center justify-end mt-6 mb-2'>
        <Link href='/practices' passHref>
          <a className='flex items-center justify-center pb-1 border-b border-primary nav-all-prc'>
            <span>Access All Practices</span>
            <span className='ml-2 text-sm'>
              <i className='flaticon-arrow-pointing-to-right'></i>
            </span>
          </a>
        </Link>
      </div>
    </section>
  )
}
export default PracticeAreas
