import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import How from '../Components/How'

const Home:React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Categories />
      <Products />
      <How />
    </div>
  )
}

export default Home