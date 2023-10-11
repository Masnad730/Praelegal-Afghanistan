import { useState, useEffect } from 'react'
import Link from 'next/link'

import SearchBar from './SearchBar'
import ResponsiveHeader from '../components/ResponsiveHeader'

const Header = ({ activePage }) => {
  const [height, setHeight] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setHeight(window.pageYOffset > 150))
    }
  }, [])
  return (
    <>
      <div className='block lg:hidden'>
        <ResponsiveHeader activePage={activePage} />
      </div>
      <div className='hidden lg:block'>
        <header
          className={
            height
              ? 'fixed top-0 w-full bg-secondary text-accents_0 z-50 shadow-custom'
              : activePage === 'home'
              ? 'bg-transparent text-accents_0 custom-transition w-full'
              : 'bg-secondary text-accents_0 custom-transition w-full'
          }
        >
          <div className='container'>
            <div className='row items-center'>
              <div className='col-lg-4'>
                <div className='py-2'>
                  <Link href='/' passHref>
                    <a>
                      <img
                        src='/images/PraelegalAF-Logo-Large-2.png'
                        alt=''
                        width='203'
                        height='57'
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className='col-lg-8'>
                <div className='flex items-center justify-end'>
                  <nav className='flex'>
                    <ul className='flex items-center justify-between w-full'>
                      <li className='mr-8 last:mr-0 py-4'>
                        <Link href='/home' passHref>
                          <a
                            className={
                              activePage === 'home' ? 'text-primary' : 'hover:text-primary'
                            }
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className='mr-8 last:mr-0 py-4 group'>
                        <a className='relative flex items-center' href='#'>
                          <span
                            className={
                              activePage === 'why-us' || activePage === 'team'
                                ? 'text-primary mr-2'
                                : 'hover:text-primary mr-2'
                            }
                          >
                            About us
                          </span>
                          <i className='fas fa-angle-down'></i>
                          <ul className='hidden opacity-0 absolute left-0 top-0 z-50 py-2 mt-8 px-4py-2.5 w-48 max bg-black text-white group-hover:block group-hover:opacity-100'>
                            <li className='px-5 py-2 text-sm'>
                              <Link href='/why-us' passHref>
                                <a
                                  className={
                                    activePage === 'why-us' ? 'text-primary' : 'hover:text-primary'
                                  }
                                >
                                  Why us
                                </a>
                              </Link>
                            </li>
                            <li className='px-5 py-2 text-sm'>
                              <Link href='/team' passHref>
                                <a
                                  className={
                                    activePage === 'team' ? 'text-primary' : 'hover:text-primary'
                                  }
                                >
                                  Our team
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </a>
                      </li>
                      <li className='mr-8 last:mr-0 py-4'>
                        <Link href='/practices' passHref>
                          <a
                            className={
                              activePage === 'practices' ? 'text-primary' : 'hover:text-primary'
                            }
                          >
                            Practice areas
                          </a>
                        </Link>
                      </li>
                      <li className='mr-8 last:mr-0 py-4'>
                        <Link href='/events' passHref>
                          <a
                            className={
                              activePage === 'insight' ? 'text-primary' : 'hover:text-primary'
                            }
                          >
                            Insights
                          </a>
                        </Link>
                      </li>
                      <li className='mr-8 last:mr-0 py-4'>
                        <Link href='/contact-us' passHref>
                          <a
                            className={
                              activePage === 'contact' ? 'text-primary' : 'hover:text-primary'
                            }
                          >
                            Contact us
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <div>
                    <button
                      onClick={() => setShowSearchBar(!showSearchBar)}
                      className='border-none'
                    >
                      <i className='fas fa-search'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showSearchBar && (
            <SearchBar showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar} />
          )}
        </header>
      </div>
    </>
  )
}
export default Header
