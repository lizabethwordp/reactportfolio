import React from 'react'
import './testimonials.css'
import avatar from '../../assets/avatar.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const arr = [
  {
    image: avatar,
    name: 'John Bull',
    review:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
 
    image: avatar,
    name: 'John Bull',
    review:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
   
    image: avatar,
    name: 'John Bull',
    review:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]
const Testimonials = () => {
  return (
    <div>
      <section id='testimonilas'>
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        
        {
            arr.map(({image, name, review}, index) =>{
              return(
                <SwiperSlide key={index} className='testimonials'>
                <div className='client__content'>
                  <img src={image} alt='avatar img'></img>
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'> 
                    {review}
                  </small>
              </SwiperSlide>
              )

            })
            
          }
         

          
        </Swiper>
      </section>
    </div>
  )
}

export default Testimonials
