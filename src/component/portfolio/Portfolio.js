import React from 'react'
import './portfolio.css'
import infantreg1 from '../../assets/infantreg1.png'
import me from '../../assets/me.jpg'
import me1 from '../../assets/me1.jpg'
import me2 from '../../assets/me2.jpg'
import me3 from '../../assets/me3.jpg'
import download from '../../assets/download.jpg'


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
    image: me,
    name: 'CRUD App',
    github: '',
    demo: ''
  },
  {
    id: 3,
    image: me3,
    name: 'coming soon',
    github: '',
    demo: 'https://infantreg.azurewebsites.net/'
  },
  {
    id: 4,
    image: me2,
    name: 'coming soon',
    github: '',
    demo: ''
  },
  {
    id: 5,
    image: me3,
    name: 'coming soon',
    github: '',
    demo: ''
  },
  {
    id: 6,
    image: download,
    name: 'coming soon',
    github: '',
    demo: ''
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
                    <a href = {github} className='btn' target='_blank'>Github</a>
                    <a href= {demo} className='btn btn-primary' target='_blank' >Live Demo</a>
                
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
