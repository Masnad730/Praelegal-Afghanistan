import Header from './Header'
import Carousel from './Carousel'

const HeroBackground = ({ activePage }) => {
  if (activePage === 'home') {
    return (
      <div className='relative'>
        <Carousel />
        <div className='absolute top-0 lg:top-2 left-0 w-full'>
          <Header activePage={activePage} />
        </div>
      </div>
    )
  } else return <Header activePage={activePage} />
}

export default HeroBackground
