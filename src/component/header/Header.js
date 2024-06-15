import React from 'react'
import './header.css'
import CTA from './CTA'
import introimg from '../../assets/introimg.jpeg'
import Socials from './Socials'

const Header = () => {
  return (
   <header>
      <div className='.container header__container'>
        <h5>Hello I am</h5>
        <h1>Ajose Anuoluwapo Elizabeth</h1>
        <h5 className='text-light'>DevOps Engineer</h5>
          <CTA/>
          <Socials/>

        <div className='me'>
          <img src={introimg} alt="my image"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
   </header>
  )
}

export default Header
