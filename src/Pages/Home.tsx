import React, { useState } from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import How from '../Components/How'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
import ProductDetailModal from '../Components/ProductDetailModal'
import Cart from '../Components/Cart'

const Home:React.FC = () => {
  const [productDetail, setProductDetail] = useState<boolean>(false);
  // const [selectedProduct, setSelectedProduct] = useState<ProductsType | null>(null);
  const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <div className='bg-white'>
      <Hero setOpenCart={setOpenCart} />
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
      <About />
      <Categories />
      <Products setProductDetail={setProductDetail} />
      <ProductDetailModal productDetail={productDetail} setProductDetail={setProductDetail} />
      <How />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home