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
import { ProductsType } from '../Interface/interface'

const Home:React.FC = () => {
  const [productDetail, setProductDetail] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductsType | null>(null)
  console.log(selectedProduct)
  return (
    <div className='bg-white'>
      <Hero />
      <About />
      <Categories />
      <Products setProductDetail={setProductDetail} setSelectedProduct={setSelectedProduct} />
      <ProductDetailModal productDetail={productDetail} setProductDetail={setProductDetail} selectedProduct={selectedProduct} />
      <How />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home