import React from 'react'
import ParallaxPlain from '../components/ParallaxPlain'
import FirstName from '../components/FirstName'
import ParallaxTechVaporwave from '../components/ParallaxTechVaporwave'
import LastName from '../components/LastName'
import 'animate.css'

const HomePage = () => {
  return (
    <div className='container'>
      <ParallaxPlain />
      <ParallaxPlain />
      <ParallaxTechVaporwave />
    </div>
  )
}

export default HomePage
