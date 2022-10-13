import React, { useState } from 'react'
import "../css/Pop.css"

const Pop = () => {
  const [show, setShow] = useState(true)
  return (
    <>
    {
      show?  
        <div className='PopContainer'>
        <div className='PopCard'>
            <h2>Contact live support</h2>
                <span>For</span>
            <p>Zelle or Cash App </p>
            <p>hello@instagambadgeapprovedfrom.com</p>
            <button onClick={()=> {
               setShow(false)
               window.location.reload()

            } } className='PopContactBtn'>Contact</button>
            <span onClick={()=> {
               setShow(false) 
               window.location.reload()

            } } className='Popcancel'>X</span>
        </div>
    </div>
       : null
    }
    </>
  )
}

export default Pop