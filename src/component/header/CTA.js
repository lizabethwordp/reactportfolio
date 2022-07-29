import React from 'react'
import cs from '../../assets/cs.pdf'
import softwarecv from '../../assets/softwarecv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cs} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Get in Touch</a>
    </div>
  )
}

export default CTA
