import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Features from '../Components/Features'

const Home:React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features />
    </div>
  )
}

export default Home