import React from 'react'
import Navbar from '../Components/Navbar'
import Cart from '../Components/Cart';
import shopBanner from '../assets/velra/shop-banner.jpg';
import Filter from '../Components/Filter';
import FilteredProducts from '../Components/FilteredProducts';

type ShopPropsType = {
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}
const Shop: React.FC<ShopPropsType> = ({ openCart, setSearchBar, setOpenCart }) => {
  return (
    <div className='container md:w-[95%] lg:w-full mx-auto md:pt-'>
      <div>
        <div className='w-full h-[360px] relative overflow-hidden rounded-bl-4xl rounded-br-4xl'>
          <img className=' object-cover' src={shopBanner} alt='Shop banner' />
          <Navbar setSearchBar={setSearchBar} setOpenCart={setOpenCart} />
        </div>
      </div>
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
      <div className='w-full pt-9 flex gap-10'>
        <Filter />
        <FilteredProducts />
      </div>
    </div>
  )
}

export default Shop