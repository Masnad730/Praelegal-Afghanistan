import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup,
  Dot,
} from 'pure-react-carousel'

const Slideshow = () => {
  return (
    <CarouselProvider
      orientation={'horizontal'}
      naturalSlideWidth={1280}
      naturalSlideHeight={660}
      totalSlides={5}
      hasMasterSpinner={true}
      isPlaying={true}
      interval={4000}
      infinite={true}
      className='relative'
    >
      <Slider>
        <Slide index={0}>
          <Image hasMasterSpinner={true} className='slide-01' />
        </Slide>
        <Slide index={1}>
          <Image hasMasterSpinner={true} className='slide-02' />
        </Slide>
        <Slide index={2}>
          <Image hasMasterSpinner={true} className='slide-03' />
        </Slide>
        <Slide index={3}>
          <Image hasMasterSpinner={true} className='slide-04' />
        </Slide>
        <Slide index={4}>
          <Image hasMasterSpinner={true} className='slide-05' />
        </Slide>
      </Slider>
      <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex'>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={0}
            className='bg-primary h-1 lg:h-2 w-1 lg:w-2 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={1}
            className='bg-primary h-1 lg:h-2 w-1 lg:w-2 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={2}
            className='bg-primary h-1 lg:h-2 w-1 lg:w-2 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={3}
            className='bg-primary h-1 lg:h-2 w-1 lg:w-2 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={4}
            className='bg-primary h-1 lg:h-2 w-1 lg:w-2 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
      </div>
    </CarouselProvider>
  )
}
export default Slideshow
