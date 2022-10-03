import React, { useState } from 'react'
import Logo from "../asset/oie_transparent.png"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import Mobile from './Mobile'

const Header = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='Header'>
        <img src={Logo} alt="Logo"/>

        <nav className='HeaderNav'>
            <ul>
                <li>Home</li>
                <li>How It Works</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Support</li>
                <li>Get Started</li>
            </ul>
        </nav>
        <div className='MyMenu'>
            <span className='Menu'>Menu</span>
            {
                toggle?  <AiOutlineClose className='Icons' onClick={()=> setToggle(false)}/> : <AiOutlineMenu className='Icons' onClick={()=> setToggle(true)}/>
            }
        </div>
        {
            toggle ? 
            <div className='Mobile'>
            <Mobile/>
            </div> 
        : null
        }
    </div>
  )
}

export default Header