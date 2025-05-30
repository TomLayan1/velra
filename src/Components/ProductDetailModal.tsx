import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import type { RootState, AppDispatch } from "../Redux/Store";
import { addToCart, increaseQuantity, decreaseQuantity } from '../Redux/cart/cartReducer';


type ProductDetailModalProps = {
  productDetail: boolean;
  setProductDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ productDetail, setProductDetail }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const selectedProduct = useSelector((state: RootState) => state.product.selectedProduct);
  const dispatch = useDispatch<AppDispatch>();

  const addQuantity = () => {
    if (quantity < 10) {
      setQuantity(prev => prev + 1);
    }
  }

  const reduceQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
    else{
      setQuantity(1);
    }
  }

  return (
    <>
      {productDetail && <div className='w-full h-[100vh] bg-[#d6d4d457] fixed top-0 left-0 z-10 flex items-center justify-center'>
        <div className='bg-white w-[90%] md:w-[550px] p-4'>
          <div className='w-full flex items-center justify-between mb-5'>
            <p className='text-xl text-[#c1380d] font-bold'>Product Details</p>
            <FaTimes onClick={() => {setQuantity(1); setProductDetail(false)}} className='cursor-pointer' />
          </div>
          <div className='flex flex-col md:flex-row gap-3.5 md:gap-7'>
            <div className=''>
              <img className='max-w-[150px] md:max-w-[200px] mb-4' src={selectedProduct?.img} alt={selectedProduct?.title} />
            </div>
            <div className=''>
              <p className='text-base font-bold uppercase mb-2'>{selectedProduct?.title}</p>
              <div className='flex text-[#c1380d] mb-2'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
              </div>
              <p className='text-[15px] mb-3'>{selectedProduct?.short_description}</p>
              <h3 className='text-2xl mb-3.5'>${Number(selectedProduct?.price).toLocaleString()}</h3>
              <div className='w-[126px] border-2 border-black flex items-center justify-between mb-3.5'>
                <FaMinus onClick={() => {reduceQuantity(); dispatch(decreaseQuantity(selectedProduct?.id as number))}} size={38} className='p-3 border-r-2 border-black hover:bg-black hover:text-white duration-300 cursor-pointer' />
                <p className='text-center'>{quantity}</p>
                <FaPlus onClick={() => { addQuantity(); dispatch(increaseQuantity(selectedProduct?.id as number)) }} size={38} className='p-3 border-l-2 border-black hover:bg-black hover:text-white duration-300 cursor-pointer' />
              </div>
              <button onClick={() => { setProductDetail(false); setQuantity(1); selectedProduct && dispatch(addToCart({ ...selectedProduct, quantity })) }} className='bg-black hover:bg-[#c1380d] duration-300 py-3 px-6 text-white text-[15px] cursor-pointer rounded-full'>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default ProductDetailModal