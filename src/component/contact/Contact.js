import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4tjyrxw', 'template_mwfiqnr', form.current, '2MXrufyfN7kEFOFFt')
      e.target.reset()
  };
  return (
    <div>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2> Contact Me</h2>

        <div className='container contact__container'>
            <div className='contact__options'>
              <article className='contact__option'>
                <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5 className='email'>ajoseanuoluwapo8@gmail.com</h5>
                <a href='mailto:ajoseanuoluwapo8@gmail.com' target='_blank'>Send a Mail</a>
              </article>
              <article className='contact__option'>
                <SiWhatsapp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
                <h5 className='email'>+2347053969621</h5>
                <a href='http://api.whatsapp.com/send?phone+2347053969621' target='_blank'>Send a Message</a>
              </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Your full Name' required/>
              <input type='email' name='email' placeholder='Your Email' required/>
              <textarea name='message' rows='8' placeholder='Your Message' required/>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>

        </div>
      </section>
      
    </div>
  )
}

export default Contact



