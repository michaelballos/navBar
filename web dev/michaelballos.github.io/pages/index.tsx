import React from 'react'
import ParallaxPlain from '../components/ParallaxPlain'
import FirstName from '../components/FirstName'
import ParallaxTechVaporwave from '../components/ParallaxTechVaporwave'
import ICanWrite from '../components/ICanWrite'
import ContactInfo from '../components/ContactInfo'
import LastName from '../components/LastName'
import 'animate.css'

const HomePage = () => {
  return (
    <div className='container'>
      <ParallaxPlain />
      <div className='nameContainer'>
        <FirstName />
        <LastName />
      </div>
      <ParallaxPlain />
      <ParallaxTechVaporwave />
    </div>
  )
}

export default HomePage
