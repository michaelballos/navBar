import React from 'react'

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className='contactButtons'>
        <div className='phone'>
          Phone
          <a href='tel:3162262223' className='phoneNumber' />
        </div>
        <div className='email'>
          Email
          <a href='mailto:ballos.michael@gmail.com' className='gmail' />
        </div>
        <div className='twitter'>
          Twitter
          <a href='https://twitter.com/michael_ballos' className='twitterHandle' />
        </div>
      </div>
    </>
  )
}

export default ContactInfo
