import React from 'react'
import './about.css'
import laptop from '../../assets/laptop.jpg'
import {FaAward} from 'react-icons/fa'
import {TbMilitaryAward} from 'react-icons/tb'
import {BsFolderFill} from 'react-icons/bs'

const About = () => {
  return (
    <div>
      <section id='about'>
       <h5 className='about_title'>Get to Know</h5>
       <h1>About Me</h1>

       <div className='container about__container'>
          <div className='about_me'>
            <div className='about__me-image'>
              <img src={laptop} alt='laptopimg'></img>
            </div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1 year working experience</small>
              </article>

              <article className='about__card'>
                <TbMilitaryAward className='about__icon'/>
                <h5>Certificates</h5>
                <small>Check out my certificates</small>
              </article>

              <article className='about__card'>
                <BsFolderFill className='about__icon'/>
                <h5>Projects</h5>
                <small>Projects I've worked on</small>
              </article>
            </div>

            <p className='about_content'>
              Ajose Anuoluwapo Elizabeth is a DevOps Engineer at NIBSS PLC where she is working closely with department heads, 
              developments teams, editorial staff, IT helpdesk and executives to produce world class financial 
              services. 

            </p>

              <a href='#contact' className='btn btn-primary'>Get in Touch</a>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default About

