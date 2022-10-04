import React from 'react'
import Header from '../components/Header'
import "../css/style.css"
import "../css/mobile.css"
import Home from '../components/Home.js'
import HowItWork from '../components/HowItWork'
import Pricing from '../components/Pricing'
import About from '../components/About'
const Index = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <HowItWork/>
        <Pricing/>
        <About/>

    </div>
  )
}

export default Index