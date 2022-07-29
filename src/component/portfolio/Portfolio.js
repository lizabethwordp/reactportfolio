import React from 'react'
import './portfolio.css'
import infantreg1 from '../../assets/infantreg1.png'

const arr = [
  {
    id: 1,
    image: infantreg1,
    name: 'InfantReg Database App',
    github: 'https://github.com/dmarinere/Pheonix-Data-Record',
    demo: 'https://infantreg.azurewebsites.net/'
  },
  {
    id: 2,
    image: infantreg1,
    name: 'InfantReg Database App',
    github: 'https://github.com/dmarinere/Pheonix-Data-Record',
    demo: 'https://infantreg.azurewebsites.net/'
  },
  {
    id: 3,
    image: infantreg1,
    name: 'InfantReg Database App',
    github: 'https://github.com/dmarinere/Pheonix-Data-Record',
    demo: 'https://infantreg.azurewebsites.net/'
  },
  {
    id: 4,
    image: infantreg1,
    name: 'InfantReg Database App',
    github: 'https://github.com/dmarinere/Pheonix-Data-Record',
    demo: 'https://infantreg.azurewebsites.net/'
  },
  {
    id: 5,
    image: infantreg1,
    name: 'InfantReg Database App',
    github: 'https://github.com/dmarinere/Pheonix-Data-Record',
    demo: 'https://infantreg.azurewebsites.net/'
  },
  {
    id: 6,
    image: infantreg1,
    name: 'InfantReg Database App',
    github: 'https://github.com/dmarinere/Pheonix-Data-Record',
    demo: 'https://infantreg.azurewebsites.net/'
  }
]
const Portfolio = () => {
  return (
    <div>
     <section id='portfolio'>
        <h5>My Works and Collaborations</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>
      

          {
            arr.map(({id, image, name, github, demo}) =>{
              return(
                <article key={id} className='pt__items'>
                  <div className='pt__items-image'>
                    <img src={image} alt={name}></img>
                  </div>
                  <h3>{name}</h3>
                  <div className='pt__items-cta'>
                    <a href = {github} className='btn'>Github</a>
                    <a href= {demo} className='btn btn-primary' >Live Demo</a>
                
                  </div>
              </article>
              )

            })
            
          }

          
         
        </div>
      
      </section>
    </div>
  )
}

export default Portfolio
