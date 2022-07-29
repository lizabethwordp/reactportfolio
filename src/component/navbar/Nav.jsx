import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {SiAboutdotme} from 'react-icons/si'
import {TbCertificate} from 'react-icons/tb'
import {MdOutlineLaptopChromebook} from 'react-icons/md'
import {IoMdContact} from 'react-icons/io'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  const {activeNav, setActiveNav} = useState('#')
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome></FaHome></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === 'about' ? 'active': ''}><SiAboutdotme/></a>
        <a href="#certificates" onClick={() => setActiveNav('#certificates')} className={activeNav === 'certificates' ? 'active': ''}><TbCertificate/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === 'experience' ? 'active': ''}><MdOutlineLaptopChromebook/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === 'contact' ? 'active': ''}><IoMdContact/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === 'services' ? 'active': ''}><RiServiceLine/></a>
        
    </nav>
  )
}

export default Nav
