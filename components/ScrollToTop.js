import React, { useState, useEffect } from 'react'

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }
  return (
    <>
      {show && (
        <div className='z-50 fixed rounded-sm bottom-6 right-6 w-8 h-8 flex items-center justify-center cursor-pointer transition-all opacity-80 hover:opacity-100 bg-primary'>
          <div className='text-3xl text-accents_9' onClick={handleClick}>
            <i className='flaticon-up-arrows'></i>
          </div>
        </div>
      )}
    </>
  )
}

export default ScrollToTop
