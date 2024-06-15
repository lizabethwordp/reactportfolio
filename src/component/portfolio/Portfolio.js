import React from 'react'
import './portfolio.css'
import infantreg1 from '../../assets/infantreg1.png'
import me from '../../assets/me.jpg'
import me1 from '../../assets/me1.jpg'
import me2 from '../../assets/me2.jpg'
import me3 from '../../assets/me3.jpg'
import rockpaperscissors from '../../assets/rockpaperscissors.png'
import Grafana from '../../assets/Grafana.png'
import download from '../../assets/download.jpg'
import testodogwu from '../../assets/testodogwu.png'


const arr = [
  {
    id: 1,
    image: testodogwu,
    name: 'User Management App',
    github: 'https://github.com/lizabethwordp/testodogwu',
    demo: 'https://github.com/lizabethwordp/sequelized-node-crud'
  },
  {
    id: 2,
    image: Grafana,
    name: 'Grafana',
    github: '',
    demo: ''
  },
  {
    id: 3,
    image: me2,
    name: 'coming soon',
    github: '',
    demo: ''
  },
  {
    id: 4,
    image: me3,
    name: 'coming soon',
    github: '',
    demo: ''
  },
  {
    id: 5,
    image: rockpaperscissors,
    name: 'rock-paper-scissors',
    github: 'https://github.com/lizabethwordp/rock-paper-scissors',
    demo: 'https://replit.com/@lizabethwordp/Elev8rockpaperscissorsstart'
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
