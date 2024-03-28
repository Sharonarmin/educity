import React, { useState } from 'react'
import Navbar from './componenets/Navbar/Navbar'
import Hero from './componenets/Hero/Hero'
import Programs from './componenets/Programms/Programs'
import Title from './componenets/Title/Title'
import About from './componenets/About/About'
import Campus from './componenets/Campus/Campus'
import Testimonials from './componenets/Testimonials/Testimonials'
import Contact from './componenets/Contact/Contact'
import Footer from './componenets/Footer/Footer'
import VideoPlayer from './componenets/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState,setPlayState] =  useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='OUR PROGRAM' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subtitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subtitle='Testimonials' title='What Student Says'/>
      <Testimonials/>
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      </div>
    </div>
  )
}

export default App
