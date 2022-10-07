import React from 'react'
import OneImg from "../asset/pic1.webp"
import TwoImg from "../asset/icon1.png"
import ThreeImg from "../asset/pic2.webp"
import Fourmg from "../asset/icon2.png"
import FiveImg from "../asset/pic3.webp"
import SixImg from "../asset/icon 3.png"
import "../css/Chi.css"
import "../css/ChiM.css"
import {AiOutlineArrowDown} from "react-icons/ai"

const HowItWork = () => {
  return (
    <div class="main">
        
        <div class="container">
           
            <div class="con">
                 <div class="image"><img src={OneImg} alt="OneImg"/></div>
                 <div class="txt">
                    <div class="icon">
                          <img src={TwoImg} alt="TwoImg"/>
                            <h3>Step 1</h3>
                </div>
                <h1>Check your eligibility</h1>
                <p> – A minimum of 500 followers.</p>

                    <p> – A public account, with a profile picture.</p>

                   <p> – A minimum of 6 posts with a good level of engagement.</p>
                   <div className='ButtonG'>GET STARTED TODAY <AiOutlineArrowDown/></div>
                
            </div>
        </div>
        </div>
        <div class="container">
           
            <div class="cont">
            <div class="imager"><img src={ThreeImg} alt="ThreeImg"/></div>
            <div class="text">
                <div class="iconer">
                    <img src={Fourmg} alt="Favour"/>
                    <h3>Step 2</h3>
                </div>
                <h1>We will write PR articles about you</h1>
                <p> 
                    We will start working on your articles which will be published 
                    on two of our high quality personal blogs which will also be listed on Google.
                </p>
                
            </div>
        </div>
        </div>
        <div class="container">
          
            <div class="con">
            <div class="image"><img src={FiveImg} alt="FiveImg"/></div>
            <div class="txt">
                <div class="icon">
                    <img src={SixImg} alt="SixImg"/>
                    <h3>Step 3</h3>
                </div>
                <h1>We submit your account</h1>
                <p> 
                    We will submit your request for verification through the Facebook Media Partner 
                    Panel (the only legit way to submit these kind of requests with the highest success rate).
                </p>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default HowItWork