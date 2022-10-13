import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Pop.css"

const Pop = () => {
  const Nav = useNavigate()
  const [show, setShow] = useState(true)
  return (
    <>
    {
      show?  
        <div className='PopContainer'>
        <div className='PopCard'>
            <h2>Contact live support</h2>
                <span>For</span>
            <p>Zelle or Cash App Payment Info </p>
            <p className='cryptocurr'>Cryptocurrency Wallet:</p>
            <p >1McYCydhgBDdjt12o8LSkQVmAoNE3tsYJK</p>
            <button onClick={()=> {
              Nav('/')
              setShow(false)
              //  window.location.reload()

            } } className='PopContactBtn'>Contact</button>
            <span onClick={()=> {
               setShow(false) 
              Nav('/')
              //  window.location.reload()

            } } className='Popcancel'>X</span>
        </div>
    </div>
       : null
    }
    </>
  )
}

export default Pop