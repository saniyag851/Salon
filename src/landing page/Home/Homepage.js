import React from 'react'
import Hero from "./Hero"

import Navbar from "../Navbar"
import Footer from '../Footer'
import Technology from './Technology'
import Cards from "./Cards"
import Excellence from "./Excellence"
function homepage() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Technology/>
    <Cards/>
    <Excellence/>
    <Footer/>
    </>
  )
}

export default homepage;
