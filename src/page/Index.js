import React from 'react'
import Header from '../components/Header'
import "../css/style.css"
import "../css/mobile.css"
import Home from '../components/Home.js'
import HowItWork from '../components/HowItWork'

const Index = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <HowItWork/>
    </div>
  )
}

export default Index