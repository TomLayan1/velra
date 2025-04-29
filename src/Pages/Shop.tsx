import React from 'react'
import Navbar from '../Components/Navbar'
import Cart from '../Components/Cart';
import shopBanner from '../assets/velra/shop-banner.jpg';
import Filter from '../Components/Filter';
import FilteredProducts from '../Components/FilteredProducts';
import Footer from '../Components/Footer';

type ShopPropsType = {
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  setProductDetail: React.Dispatch<React.SetStateAction<boolean>>
}
const Shop: React.FC<ShopPropsType> = ({ openCart, setSearchBar, setOpenCart, setProductDetail }) => {

  return (
    <>
      <div className='container w-[95%] lg:w-[90%] mx-auto md:pt-3'>
        <div>
          <div className='w-full h-[160px] lg:h-[360px] relative overflow-hidden rounded-4xl'>
            <img className='w-full h-full' src={shopBanner} alt='Shop banner' />
            <Navbar setSearchBar={setSearchBar} setOpenCart={setOpenCart} />
          </div>
        </div>
        <Cart openCart={openCart} setOpenCart={setOpenCart} />
        <div className='w-full lg:h-[680px] overflow-y-hidden pt-9 lg:flex gap-10'>
          <Filter />
          <FilteredProducts setProductDetail={setProductDetail} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Shop