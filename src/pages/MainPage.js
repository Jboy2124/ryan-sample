import React from 'react'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

const MainPage = () => {
  return (
    <div className='bg-[#DFF6FF]'>
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Contact />
    </div>
  )
}

export default MainPage