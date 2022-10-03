import React from 'react'
import {AiOutlineArrowDown} from "react-icons/ai"

const Home = () => {
  return (
    <div className='HomeContainer'>
        <div className='H1'><h1>Get Verified on Instagram</h1></div>
        <p>
        Let us help you get verified on Instagram. No bots or gimmicks, a 100% human-powered service to help you get a blue tick.
        </p>
        <div className='Button'>GET STARTED TODAY <AiOutlineArrowDown className='BtnT'/></div>
    </div>
  )
}

export default Home