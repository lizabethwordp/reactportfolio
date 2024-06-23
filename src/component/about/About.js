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
                <small>3 years working experience</small>
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
            I am an experienced and versatile SRE / DevOps engineer with a proven track record of optimizing cloud infrastructure, enhancing system performance, and driving effective incident response. Adept at leveraging various cloud platforms, including AWS, Azure to achieve cost savings and operational excellence. Experienced in managing and optimizing key components of the DevOps ecosystem, such as version control systems like
            Git (GitHub, Bitbucket, Azure DevOps), continuous integration and deployment pipelines (GitHub Actions, Jenkins, Azure Pipelines, AWS CodePipeline), and container orchestration platforms (AWS EKS, AWS ECS, Kubernetes, ACR). Skilled in configuring and deploying various web servers (Nginx, Apache) and leveraging infrastructure-as-code tools like Terraform, CloudFormation and Ansible for streamlined deployments. Proficient in working with databases including MongoDB, MySQL, and MSSQL, ensuring data integrity and high availability. Skilled in Agile SCRUM and Scrum development methodologies, collaborating effectively with cross- functional teams to deliver high-quality software solutions, develop incident response plans, redesign system architecture for scalability and security, and establish disaster recovery solutions. Strong problem-solving and analytical skills, with a focus on continuous improvement and automation to optimize workflows and increase efficiency. Strong expertise in automation, scripting, and monitoring for efficient infrastructure management. Overall, a dedicated and results-driven DevOps engineer with a deep understanding of software development lifecycles and a passion for creating robust and scalable infrastructure solutions. Ready to contribute expertise, leadership, and technical excellence to drive successful project outcomes.

            </p>

              <a href='#contact' className='btn btn-primary'>Get in Touch</a>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default About

