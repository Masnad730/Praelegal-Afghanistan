const CallToAction = () => {
  return (
    <section
      className='py-28'
      style={{
        background: 'rgb(0,0,0)',
        background:
          'radial-gradient(circle, rgba(255,255,255,0.5606617647058824) 0%, rgba(255,255,255,0.65) 59%, rgba(0,0,0,0.11248249299719892) 100%), url(/images/img1.jpg) no-repeat scroll center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='container'>
        <div className='text-center'>
          <h3 className='text-4xl mb-4'>Join the Lawyee</h3>
          <p className='mb-9'>
            If you would like to apply for membership, simply fill out your detail on our
            application form.
          </p>
          <button className='bg-white border-none'>Apply for the membership</button>
        </div>
      </div>
    </section>
  )
}
export default CallToAction
