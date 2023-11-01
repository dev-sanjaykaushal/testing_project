import React from 'react'
import Navbar from '../Component.js/Navbar'
import Footer from '../Component.js/Footer'
import Banner from '../Component.js/home/Banner'
import CardComponent from '../Component.js/home/CardComponent'
import TrackComponent from '../Component.js/home/TrackComponent'
import SignupComponent from '../Component.js/home/SignupComponent'
import CarouselComponent from '../Component.js/home/CarouselComponent'



const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <CardComponent/>
      <TrackComponent/>
      <SignupComponent/>
      <CarouselComponent/>
      <Footer/>
    </>
  )
}

export default Home
