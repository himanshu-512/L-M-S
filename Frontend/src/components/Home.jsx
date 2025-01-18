import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './pages/student/HeroSection'
import Courses from './pages/student/Courses'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Courses />
      
    </div>
  )
}

export default Home