import React from 'react'
import Header from '../components/Header'
import "../css/style.css"
import "../css/mobile.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Payment from '../components/Payment'
import Main from '../components/Main'

const Index = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/Payment' element={<Payment/>} />
          </Routes>
        </BrowserRouter>


    </div>
  )
}

export default Index