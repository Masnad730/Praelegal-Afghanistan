import { useState } from 'react'
import axios from 'axios'
import { useSnackbar } from 'react-simple-snackbar'

import Layout from './../components/layout/Layout'
import Loader from './../components/Loader'

const options = {
  position: 'top-right',
  style: {
    backgroundColor: '#222446',
    color: '#fff',
    fontSize: '14px',
    textAlign: 'center',
  },
  closeStyle: {
    color: '#fff',
    fontSize: '16px',
  },
}
export default function Contact() {
  const [openSnackbar, closeSnackbar] = useSnackbar(options)
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInfo({ ...userInfo, [name]: value })
  }
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const res = await axios
      .post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
        username: 'admin',
        password: 'I6FR%0^hD@Z[@',
      })
      .then(async (res) => {
        await axios
          .post(
            'https://wpbackend.navisa.af/wp-json/wp/v2/praelegal-enquires',
            {
              title: 'User Enquiry - Praelegal Afghanistan',
              status: 'publish',
              fields: {
                name: userInfo.name,
                email: userInfo.email,
                message: userInfo.message,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${res.data.token}`,
              },
            }
          )
          .then((res) => {
            setLoading(false)
            if (res.status === 201) {
              openSnackbar('Your message has been submitted successfully.')
              setLoading(false)
            } else {
              openSnackbar('There was an error trying to send your message, Please try again.')
              setLoading(false)
            }
            return res.data
          })
          .catch((err) => {
            console.log(err)
            setLoading(false)
            openSnackbar(
              'There was an error trying to send your message, Please check your network connection and try again.'
            )
          })
      })
      .catch((err) => {
        console.log(err)
      })
    setUserInfo({
      name: '',
      email: '',
      message: '',
    })
  }
  return (
    <Layout
      title='Contact Us - PraeLegal Afghanistan'
      canonical='https://praelegal.af/contact-us/'
      descriptionContent='Contact Us.Ansori Street, Shahri Now, District 10, Kabul, Afghanistan . +93 786 06 01 01. info@praelegal.af'
      activePage='contact'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12 order-3 order-lg-1'>
            <div className='mt-0 lg:mt-16 mb-16 lg:mb-20'>
              <iframe
                className='outline-none focus:outline-none'
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6573.188889417662!2d69.17287680000003!3d34.538501600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1617276306046!5m2!1sen!2s'
                width='100%'
                height='480'
                allowFullScreen
                loading='lazy'
              ></iframe>
            </div>
          </div>

          <div className='col-lg-5 col-md-12 order-1 order-lg-2'>
            <div className='bg-accents_2 p-4 mb-12 mt-12 lg:mt-0 lg:mb-0'>
              <div className='flex items-start mb-4'>
                <div className='text-2xl pt-1'>
                  <i className='flaticon-pin'></i>
                </div>
                <div className='ml-4'>
                  <h5 className='text-sm md:text-base'>Address</h5>
                  <address className='not-italic text-sm md:text-base'>
                    Ansori Street, Shahri Now,
                    <br /> Kabul, Afghanistan
                  </address>
                </div>
              </div>
              <div className='flex items-start mb-4'>
                <div className='text-2xl pt-1'>
                  <i className='flaticon-phone-call'></i>
                </div>
                <div className='ml-4'>
                  <h5 className='text-sm md:text-base'>Phone</h5>
                  <div className='text-sm'>+93 786 06 01 01</div>
                </div>
              </div>
              <div className='flex items-start mb-4'>
                <div className='text-2xl pt-1'>
                  <i className='flaticon-mail'></i>
                </div>
                <div className='ml-4'>
                  <h5 className='text-sm md:text-base'>Email</h5>
                  <div className='text-sm md:text-base'>info@praelegal.af</div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-7 col-md-12 order-2 order-lg-3'>
            <div>
              <div className='mb-12'>
                <h2 className='text-xl sm:text-2xl lg:text-4xl mb-5'>Get in Touch</h2>
                <div className='w-20 h-1 bg-primary'></div>
              </div>
              <div className='mb-12'>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <input
                        className='mb-4'
                        type='text'
                        name='name'
                        value={userInfo.name}
                        onChange={handleChange}
                        placeholder='Name'
                        required
                      />
                    </div>
                    <div className='col-lg-6'>
                      <input
                        className='mb-4'
                        type='email'
                        name='email'
                        value={userInfo.email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                      />
                    </div>
                    <div className='col-12'>
                      <textarea
                        className='mb-4'
                        cols='30'
                        rows='5'
                        name='message'
                        value={userInfo.message}
                        onChange={handleChange}
                        placeholder='Tell us more about what you need?'
                      ></textarea>
                    </div>
                    <div className='col-12'>
                      <button
                        className='bg-accents_2 mb-4 w-full flex items-center justify-center'
                        type='submit'
                      >
                        {loading ? (
                          <Loader color='#222446' height='25' width='25' />
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
