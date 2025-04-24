import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import How from '../Components/How'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'

const Home:React.FC = () => {
  return (
    <div className='bg-white'>
      <Hero />
      <About />
      <Categories />
      <Products />
      <How />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home