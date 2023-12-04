import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Hero from './Hero'
import Ourservice from '../pages/Ourservice'
import Contact from '../pages/Contact'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/ourservice' element={<Ourservice/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
      
    </div>
  )
}

export default AllRoutes
