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
                <h4>Cloud Platforms: AWS, Azure, Nutanix</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Containerization: Docker, Kubernetes, ACR, OpenShift</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Virtualization: Nginx, Apache, VMware</h4> 
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Configuration management: Ansible</h4> 
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>CI/CD: Jenkins, Gitlab, AWS CodePipeline, Azure Pipeline</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Monitoring and Logging: ELK Stack, Grafana</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>IAC: Terraform, AWS CloudFormation</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>API Management: KONG</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Scripting: Bash Scripting, PowerShell Scripting</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Version Control: Git, Github, Gitlab, AWS CodeCommit, Azure DevOps</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Database: MySQL, MSSQL, ElasticSearch, Oracle</h4>
              </article>
              <article className='exp__details'>
                <BsFillCheckCircleFill className='exp__details-icon'/>
                <h4>Collaboration and Documentation: Confluence, Jira, Freshdesk</h4>
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
        
       

      </div>
    </section> 
    
  )
}

export default Experience
