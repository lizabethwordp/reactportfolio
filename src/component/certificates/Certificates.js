import React from 'react'
import './certificates.css'
import microsoft from '../../assets/microsoft.jpg'
import csbootcamp from '../../assets/csbootcamp.jpg'
import udacity from '../../assets/udacity.jpg'

const arr = [
  {
    id: 1,
    image: microsoft,
    name: 'Software Development Career Progression Program',
    name1: 'Microsoft/Elev8'
    
  },
  {
    id: 2,
    image: csbootcamp,
    name: 'Cyber Security Bootcamp',
    name1: 'SkillLogic'
  },
  {
    id: 3,
    image: udacity,
    name: 'Python Programming Foundations',
    name1: 'Udacity',
   
  },
  // {
  //   id: 4,
  //   image: infantreg1,
  //   name: 'ReactJS E-Degree',
  //   name1: 'Udemy'
    
  // },
  // {
  //   id: 5,
  //   image: infantreg1,
  //   name: 'Google IT Support Certification',
  //   name1: 'Google',
   
  // },
  
]
const Certificates = () => {
  return (
    <div>
     <section id='certificates'>
        <h5>My Certifications</h5>
        <h2>Certications</h2>

        <div className='container certificates__container'>
      

          {
            arr.map(({id, image, name, name1}) =>{
              return(
                <article key={id} className='ct__items'>
                  <div className='ct__items-image'>
                    <img src={image} alt={name}></img>
                  </div>
                  <h5>{name}</h5>
                  
                  <h2>{name1}</h2>
                  
                
                  
              </article>
              )

            })
            
          }

          
         
        </div>
      
      </section>
    </div>
  )
}

export default Certificates

