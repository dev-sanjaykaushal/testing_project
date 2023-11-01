import React from 'react'
import Navbar from '../Component.js/Navbar'
import AboutComponent from '../Component.js/About/AboutComponent'
import Footer from '../Component.js/Footer'
import TrackComponent from '../Component.js/home/TrackComponent'
import SignupComponent from '../Component.js/home/SignupComponent'
import CarouselComponent from '../Component.js/home/CarouselComponent'

const About = () => {
  return (
    <>
      <Navbar/>
      <AboutComponent/>
      <TrackComponent/>
      <SignupComponent/>
      <CarouselComponent/>
      <Footer/>
    </>
  )
}

export default About
