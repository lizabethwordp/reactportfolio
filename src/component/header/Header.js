import React from 'react'
import './header.css'
import CTA from './CTA'
import nysc from '../../assets/nysc.jpeg'
import Socials from './Socials'

const Header = () => {
  return (
   <header>
      <div className='.container header__container'>
        <h5>Hello I am</h5>
        <h1>Ajose Elizabeth</h1>
        <h5 className='text-light'>Cyber Security Analyst</h5>
        <CTA/>
        <Socials/>

        <div className='me'>
          <img src={nysc} alt="my image"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
   </header>
  )
}

export default Header
