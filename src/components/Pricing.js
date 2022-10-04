import React, { useState } from 'react'
import '../css/Price.css'

const Pricing = () => {
    const [rem, setRem] = useState(true)
  return (
    <div className='main_pricing'>
        <h1>Pricing</h1>
        <span>We offer two options. A full-service
             package that will get you more online
             press and interview articles (a requirement
              for Instagram verification), and a submission-only package for
             those who already have online press and interviews.
             </span>
        <h5>All prices are in USD</h5>
        {
            rem? (
                <article className='green_div'>
                We now have 24/7 order processing for extra fast turnaround times
                <span onClick={()=> {
                    setRem(false)
                }}>x</span>
                </article> 
            ) : null
        }
           
       <div className="card_div">
       <ul className='first_card'>
           <li className='Card_name'>Standard</li>
           <li className='Card_amount'>
               <p>$</p>
               <span>55</span>
           </li>
           <li>For any profile</li>
           <li>Verification submission</li>
           <li>Case study for Instagram</li>
           <li>Fast turnaround time (3 to 6 hours)</li>
           <li className='buttonPrice'>
               <span>Get Started</span>
           </li>
           
       </ul>
        <ul className='second_card'>
        <li className='Card_name'>Premium</li>
           <li className='Card_amount'>
               <p>$</p>
               <span>200</span></li>
           <li>For any profile</li>
           <li>Interview Article</li>
           <li>2 Press Publications</li>
           <li>Case study for Instagram</li>
           <li>Fast turnaround time (6 to 24 hours)</li>
           <li className='buttonPrice'>
               <span>Get Started</span>
           </li>
        </ul>
       </div>
    </div>
  )
 }

export default Pricing