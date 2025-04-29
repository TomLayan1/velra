import React, { useState } from 'react';
import { Slider } from "@radix-ui/themes";
import { categoryFilter, brands } from '../Data/Data';
import { CategoryFilterType, BrandType } from '../Interface/interface';

const Filter:React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  console.log(selectedBrands);

  const handleCategoryFilter = (name: string) => {
    setSelectedCategory(prev => prev.includes(name) ? prev.filter(categoryName => categoryName !== name) : [...prev, name]);
  }

  const handleBrandFilter = (name: string) => {
    setSelectedBrands(prev => prev.includes(name) ? prev.filter(brandName => brandName !== name) : [...prev, name]
    );
  };

  const velraCategory: CategoryFilterType[] = categoryFilter
  const velraBrand: BrandType[] = brands;
  return (
    <div className='w-[23%] bg-gray-300 p-3'>
      <h1 className='text-3xl text-[#c1380d] font-bold mb-6'>Filter</h1>
      <div className='mb-4'>
        <h2 className='text-xl font-bold mb-3'>By Price</h2>
        <Slider defaultValue={[25, 75]} color="tomato" />
      </div>
      <div className='mb-4'>
        <h2 className='text-xl font-bold mb-2'>By Category</h2>
        <div className='flex flex-col gap-1 py-2'>
          {velraCategory?.map(category => (
            <div key={category.id} className='flex items-center gap-3'>
              <input
                id={category.name}
                className='border w-3.5 h-3.5'
                type='checkbox'
                checked={selectedCategory.includes(category.name)}
                onChange={() => handleCategoryFilter(category.name)}
              />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='mb-4'>
        <h2 className='text-xl font-bold mb-3'>By Brand</h2>
          <div className='flex flex-col gap-1 py-2'>
            {velraBrand?.map(brand => (
              <div key={brand.name} className='flex items-center gap-3'>
                <input
                  id={brand.name}
                  className='border w-3.5 h-3.5'
                  type='checkbox'
                  checked={selectedBrands.includes(brand.name)}
                  onChange={() => handleBrandFilter(brand.name)}
                />
                <p>{brand.name}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Filter