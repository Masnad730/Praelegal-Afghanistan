const SearchBar = ({ showSearchBar, setShowSearchBar }) => {
  return (
    <div className='w-full'>
      <div className='fixed w-2/3 top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white transition-custom'>
        <div className='p-10'>
          <button
            onClick={() => setShowSearchBar(!showSearchBar)}
            className='flex items-center justify-end w-full mb-8 pr-0 text-accents_6'
          >
            <i className='flaticon-cancel'></i>
          </button>
          <div className='border border-primary'>
            <form className='flex'>
              <input className='mb-0' type='text' placeholder='What are you looking for?' />
              <button type='submit' className='bg-primary text-white'>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={showSearchBar ? 'body-overlay transition-custom' : 'hidden'}></div>
    </div>
  )
}
export default SearchBar
