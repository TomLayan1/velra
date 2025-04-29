import React, { useMemo, useState } from 'react'
import Navbar from '../Components/Navbar'
import Cart from '../Components/Cart';
import shopBanner from '../assets/velra/shop-banner.jpg';
import Filter from '../Components/Filter';
import FilteredProducts from '../Components/FilteredProducts';
import Footer from '../Components/Footer';
import { products } from '../Data/Data';

type ShopPropsType = {
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  setProductDetail: React.Dispatch<React.SetStateAction<boolean>>
}
const Shop: React.FC<ShopPropsType> = ({ openCart, setSearchBar, setOpenCart, setProductDetail }) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  console.log(selectedBrands);

  const velraProducts = products;

  const filteredProducts = useMemo(() => {
    return velraProducts?.filter(product => {
      const matchedCategory = selectedCategory.length ===0 || selectedCategory.includes(product.category);
      const matchedBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      return matchedCategory && matchedBrand; 
    })
  }, [velraProducts, selectedCategory, selectedBrands]);

  console.log("filteredProducts:", filteredProducts)

  const handleCategoryFilter = (name: string) => {
    setSelectedCategory(prev => prev.includes(name) ? prev.filter(categoryName => categoryName !== name) : [...prev, name]);
  }

  const handleBrandFilter = (name: string) => {
    setSelectedBrands(prev => prev.includes(name) ? prev.filter(brandName => brandName !== name) : [...prev, name]
    );
  };

  return (
    <>
      <div className='container md:w-[95%] lg:w-[90%] mx-auto md:pt-'>
        <div>
          <div className='w-full h-[360px] relative overflow-hidden rounded-bl-4xl rounded-br-4xl'>
            <img className=' object-cover' src={shopBanner} alt='Shop banner' />
            <Navbar setSearchBar={setSearchBar} setOpenCart={setOpenCart} />
          </div>
        </div>
        <Cart openCart={openCart} setOpenCart={setOpenCart} />
        <div className='w-full h-[650px] overflow-y-hidden pt-9 flex gap-10'>
          <Filter 
            selectedCategory={selectedCategory} 
            selectedBrands={selectedBrands} 
            handleCategoryFilter={handleCategoryFilter}
            handleBrandFilter={handleBrandFilter}
          />
          <FilteredProducts setProductDetail={setProductDetail} filteredProducts={filteredProducts} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Shop