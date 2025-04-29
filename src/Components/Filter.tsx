import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Slider } from "@radix-ui/themes";
import { categoryFilter, brands } from '../Data/Data';
import { CategoryFilterType, BrandType } from '../Interface/interface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../Redux/Store';
import { RootState } from '../Redux/Store';
import { handleCategoryFilter, handleBrandsFilter } from '../Redux/Products/productReducer';


const Filter: React.FC = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(true)
  const velraCategory: CategoryFilterType[] = categoryFilter
  const velraBrand: BrandType[] = brands;

  const dispatch = useDispatch<AppDispatch>();
  const selectedCategory = useSelector((state: RootState) => state.product.selectedCategory);
  const selectedBrands = useSelector((state: RootState) => state.product.selectedBrands);

  return (
    <div className='w-full md:w-[50%] lg:w-[23%] bg-gray-300 lg:h-auto p-3 mb-3.5 relative'>
      <h1 className='text-3xl text-[#c1380d] font-bold mb-4 hidden lg:block'>Filter</h1>
      <div onClick={() => setOpenFilter(!openFilter)} className='w-full flex items-center justify-between py-2.5 px-1.5 lg:hidden'>
        <h1 className='text-xl md:text-2xl text-[#c1380d] font-bold'>Filter</h1>
        {!openFilter ? <FaAngleDown size={20} /> : <FaAngleUp size={20} />}
      </div>
      <div className={`bg-gray-300 w-full lg:w-auto px-3 ${!openFilter ? 'h-0' : 'h-[350px]'} lg:h-auto duration-200 overflow-hidden absolute lg:static left-0 top-20 z-10`}>
        <div className='mb-4 mt-3'>
          <h2 className='text-xl font-bold mb-3'>By Price</h2>
          <Slider defaultValue={[25, 75]} color="tomato" />
        </div>
        <div className='flex lg:flex-col gap-4'>
          <div className='w-[50%] lg:w-full mb-4'>
            <h2 className='text-xl font-bold mb-2'>By Category</h2>
            <div className='flex flex-col gap-1 py-2'>
              {velraCategory?.map(category => (
                <div key={category.id} className='flex items-center gap-3'>
                  <input
                    id={category.name}
                    className='border w-3.5 h-3.5'
                    type='checkbox'
                    checked={selectedCategory.includes(category.name)}
                    onChange={() => dispatch(handleCategoryFilter(category.name))}
                  />
                  <p>{category.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-[50%] lg:w-full mb-'>
            <h2 className='text-xl font-bold mb-3'>By Brand</h2>
              <div className='flex flex-col gap-1 py-2'>
                {velraBrand?.map(brand => (
                  <div key={brand.name} className='flex items-center gap-3'>
                    <input
                      id={brand.name}
                      className='border w-3.5 h-3.5'
                      type='checkbox'
                      checked={selectedBrands.includes(brand.name)}
                      onChange={() => dispatch(handleBrandsFilter(brand.name))}
                    />
                    <p>{brand.name}</p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter