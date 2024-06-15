import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='exp_title'>Skills I possess</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
          <div className='exp__cybersecurity'>
            <h5>DevOps Engineer</h5>
            <div className='exp__content'>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Scripting</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Container management</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Automation</h4> 
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Configuration management</h4> 
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Cloud technologies</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Monitoring and Security</h4>
              </article>
            </div>
          </div>

        <div className='exp__cybersecurity'>
          <h5>Cyber Security</h5>
          <div className='exp__content'>
            <article className='exp__details'>
               <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4>Windows and LINUX OS</h4>
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4>Virtualization: VMware, VirtualBox</h4>
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4>Vulnerability Assessments and Penetration Testing </h4> 
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4>Network Protocols: TCP/IP, UDP, SSH, FTP, HTTP, SMB, DHCP </h4> 
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4>Data Privacy Impact Assessments (DPIA’s)</h4>
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4>Task Management: Miro</h4>
            </article>

          </div>

        </div>
        <div className='exp__softwaredev'>
          <h5>Software Development</h5>
          <div className='exp__content'>
          
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4> Python</h4>
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4> ReactJS</h4>
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4> HTML/CSS</h4>
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4>Libraries: JQuery, Bootstrap, Django</h4>
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4>Task Management: Miro</h4>
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4>DevOps: Git, Azure, Heroku</h4>
            </article>
            <article className='exp__details'>
              <BsFillCheckCircleFill className='exp__details-icon'/>
              <h4>MSSQL, Oracle, MongoDB</h4>
            </article>
            
          </div>
        </div>

      </div>
    </section> 
    
  )
}

export default Experience
