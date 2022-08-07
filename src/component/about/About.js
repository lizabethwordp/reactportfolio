import React from 'react'
import './about.css'
import bks from '../../assets/bks.jpg'
import {FaAward} from 'react-icons/fa'
import {TbMilitaryAward} from 'react-icons/tb'
import {BsFolderFill} from 'react-icons/bs'

const About = () => {
  return (
    <div>
      <section id='about'>
       <h5>Get to Know</h5>
       <h1>About Me</h1>

       <div className='container about__container'>
        <div className='about_me'>
          <div className='about__me-image'>
            <img src={bks} alt='me'></img>
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
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
            sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam 
            est, qui dolorem ipsum, quia dolor sit amet consectetur adipiscing velit, sed quia non numquam do eius 
            modi tempora incididunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
            veniam, quis nostrumd exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
            commodi consequatur? DQuis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam 
            nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? 33 At 
            vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum 
            deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non 
            provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
            eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis 
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis 
            aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. 
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias 
            consequatur aut perferendis doloribus asperiores repellat.
            </p>

            <a href='#contact' className='btn btn-primary'>Get in Touch</a>
         </div>
      </div>
      </section>
      
    </div>
  )
}

export default About

