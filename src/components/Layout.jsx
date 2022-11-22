import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'

import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Announcement from '../pages/Announcement'
import Gallery from '../pages/Gallery'
import Members from '../pages/Members'
import Dashboard from '../pages/Dashboard'
import SliderAdmin from '../admin/adminPages/SliderAdmin'
import ActivityAdmin from '../admin/adminPages/ActivityAdmin'

function Layout() {
  return (
    <section className='h-full text-white bg-black'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="usermembers" element={<Members/>} /> 
        <Route path="announcement" element={<Announcement />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={<Login />} />  
        <Route path="dashboard/*" element={<Dashboard/>} /> 
      </Routes>
    </section>
  )
}

export default Layout