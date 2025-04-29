import React, { useState } from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import How from '../Components/How'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
import Cart from '../Components/Cart'

type HomePropsType = {
  searchBar: boolean;
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  setProductDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<HomePropsType> = ({ searchBar, setSearchBar, setOpenCart, setProductDetail }) => {

  return (
    <div className='bg-white'>
      <Hero searchBar={searchBar} setSearchBar={setSearchBar} setOpenCart={setOpenCart} />
      <About />
      <Categories />
      <Products setProductDetail={setProductDetail} />
      <How />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home