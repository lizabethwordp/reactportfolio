import React from 'react'
import './index.css'
import Header from './component/header/Header'
import Nav from './component/navbar/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'

import Portfolio from './component/portfolio/Portfolio'
// import Testimonials from './component/testimonials/Testimonials'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Certificates from './component/certificates/Certificates'



function App() {
  return (

    <>
      <Header />
      <Nav/>
      <About/>
      <Experience/>
     
      <Portfolio/>
<<<<<<< HEAD
      {/* <Testimonials/> */}
=======
      // <Testimonials/>
>>>>>>> 5e476589c8364f15266f594c316a0aa69ea4be56
      <Certificates/>
      <Contact/>
      <Footer/>
    </>

  )

}

export default App
