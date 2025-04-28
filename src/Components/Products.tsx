import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { products } from '../Data/Data';
import { ProductsType } from '../Interface/interface';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../Redux/Products/productReducer';
import { AppDispatch } from '../Redux/Store';

type ProductsProps = {
  setProductDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const Products: React.FC<ProductsProps> = ({ setProductDetail }) => {
  const velraProducts: ProductsType[] = products;

  const dispatch = useDispatch<AppDispatch>();

  const handleSelectProduct = (id: number) => {
    const isSelected = velraProducts?.find(item => (item.id === id));

    isSelected && dispatch(selectProduct(isSelected))
  }

  return (
    <section className='container mx-auto pt-10 pb-20'>
      <div>
        <h4 className='text-center font-bold tracking-widest mb-16'>PRODUCTS</h4>
        <div className='w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-10'>
          {velraProducts?.map(product => (
            <div key={product.id} onClick={() => {setProductDetail(true); handleSelectProduct(product.id)}} className='cursor-pointer overflow-hidden rounded-3xl custom_shadow pb-4'>
              <div className='relative mb-4'>
                <img src={product.img} />
                <FaRegHeart size={35} className='bg-[#b84921bf] p-2 text-white rounded-full absolute top-3 right-3 cursor-pointer' />
              </div>
              <div className='px-2'>
                <div className='flex items-baseline justify-between mb-4 text-sm lg:text-base'>
                  <p className='w-[60%] uppercase font-medium leading-4 md:leading-5 overflow-hidden overflow-ellipsis text-nowrap'>{product.title}</p>
                  <p>${Number(product.price).toLocaleString()}</p>
                </div>
                <div className='flex text-[#b84921]'>
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
    </section>
  )
}

export default Products