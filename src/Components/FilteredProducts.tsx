import React from 'react'
import { products } from '../Data/Data'
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../Redux/Products/productReducer';
import { AppDispatch } from '../Redux/Store';
import { ProductsType } from '../Interface/interface';
import { selectedFilteredProducts } from '../Utils/selector';


type FilteredProductsPropType = {
  setProductDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilteredProducts: React.FC<FilteredProductsPropType> = ({ setProductDetail }) => {
    const velraProducts: ProductsType[] = products;
  
    const dispatch = useDispatch<AppDispatch>();
    const filteredProducts = useSelector(selectedFilteredProducts);
  
    const handleSelectProduct = (id: number) => {
      const isSelected = velraProducts?.find(item => (item.id === id));
  
      isSelected && dispatch(selectProduct(isSelected))
    }
    
  return (
    <div className='w-[84%] h-full p-3 pb-5 overflow-y-scroll filtered_scroll'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10'>
        {filteredProducts?.map(product => (
          <div key={product.id} onClick={() => {setProductDetail(true); handleSelectProduct(product.id)}} className='cursor-pointer overflow-hidden rounded-3xl custom_shadow pb-4'>
            <div className='relative mb-4'>
              <img src={product.img} />
              <FaRegHeart size={35} className='bg-[#c1380d] p-2 text-white rounded-full absolute top-3 right-3 cursor-pointer' />
            </div>
            <div className='px-2'>
              <div className='flex items-baseline justify-between mb-4 text-sm lg:text-base'>
                <p className='w-[60%] uppercase font-medium leading-4 md:leading-5 overflow-hidden overflow-ellipsis text-nowrap'>{product.title}</p>
                <p>${Number(product.price).toLocaleString()}</p>
              </div>
              <div className='flex text-[#c1380d]'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilteredProducts