import React from 'react'
import Navbar from '../components/Navbar'
import  Hero  from '../section/Hero'
import Feature from '../section/Feature'
import Today from '../section/Today'
import Footer from "../section/Footer"

function HomePage() {
  return (
    <>
    <Navbar />
    <Hero />
    <Feature />
     <Today />
    <Footer />
    </>
  
  )
}

export default HomePage