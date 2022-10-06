import React from 'react'
import Header from '../components/Header'
import "../css/style.css"
import "../css/mobile.css"
import Home from '../components/Home.js'
import HowItWork from '../components/HowItWork'
import Pricing from '../components/Pricing'
import About from '../components/About'
import Faq from '../components/Faq'
import Blog from '../components/Blog'
import Expert from '../components/Expert'
const Index = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <HowItWork/>
        <Pricing/>
        <About/>
        <Faq/>
        <Blog/>
        <Expert/>

    </div>
  )
}

export default Index