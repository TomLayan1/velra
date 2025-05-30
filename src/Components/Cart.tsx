import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import type { RootState, AppDispatch } from "../Redux/Store";
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../Redux/cart/cartReducer';




type CartType = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}


const Cart:React.FC<CartType> = ({ openCart, setOpenCart }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useSelector((state: RootState) => state.cart.cart);
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
    else {
      setQuantity(1);
    }
  }

  const subTotal: number = cart.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
  const shippingFee: number = subTotal / 10;
  const totalPrice: number = subTotal + shippingFee;

  return (
    <>
      {openCart && <div className='w-full h-[100vh] bg-[#d6d4d457] fixed top-0 left-0 z-10'></div>}
      <div className={`w-full lg:w-[50%] h-[100vh] fixed top-0 right-0 z-40 bg-white overflow-y-scroll scroll duration-300 ease-in-out ${ openCart ? 'translate-x-0' : 'translate-x-full'} `}>
        <div className='p-6'>
          <div className='w-full flex items-center justify-between mb-10 py-2 border-b border-gray-400'>
            <h1 className='text-3xl text-[#c1380d] font-bold'>Your Cart</h1>
            <FaTimes onClick={() => setOpenCart(false)} className='cursor-pointer' />
          </div>

          <div className='w-full'>
            {cart?.map(item => (
              <div key={item.id} className='border p-3 mb-4'>
                <p className='text-base font-bold mb-2'>{item.title}</p>
                <div className='w-full flex flex-col md:flex-row justify-between'>
                  
                  <div className='w-full md:w-[34%] flex gap-5'>
                    <img className='w-[120px]' src={item.img} alt='name of product in the cart' />
                    <div className='mt-[25px'>
                      <p className='text-[13px]'>Each</p>
                      <p className='text-[15px] font-bold'>${Number(item.price).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className='w-full md:w-[62%] flex gap-8 md:gap-14'>
                    <div className='pt-'>
                      <p className='text-[13px] mb-2'>Quantity</p>
                      <div className='w-[126px] border-2 border-black flex items-center justify-between mb-3.5'>
                        <FaMinus onClick={() => { reduceQuantity(); dispatch(decreaseQuantity(item.id as number)) }} size={38} className='p-3 border-r-2 border-black hover:bg-black hover:text-white duration-300 cursor-pointer' />
                        <p className='text-center'>{item.quantity}</p>
                        <FaPlus onClick={() => { addQuantity(); dispatch(increaseQuantity(item.id as number)) }} size={38} className='p-3 border-l-2 border-black hover:bg-black hover:text-white duration-300 cursor-pointer' />
                      </div>
                    </div>
                    <div className='flex gap-6 md:gap-28'>
                      <div>
                        <p className='text-[13px]'>Subtotal</p>
                        <p className='text-[15px] font-bold'>${(Number(item.price) * item.quantity).toLocaleString()}</p>
                      </div>
                      <FaTrashCan onClick={() => dispatch(removeFromCart(item.id))} className='cursor-pointer hover:text-[#c1380d] duration-300 mt-6' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='md:w-[330px] border p-4 mt-10'>
            <div className='flex items-center justify-between mb-2'>
              <p className='font-bold'>Subtotal</p>
              <p className='font-bold'>${subTotal ? subTotal.toLocaleString() : '00.00'}</p>
            </div>
            <div className='flex items-center justify-between mb-2'>
              <p className='font-bold'>Shipping cost</p>
              <p className='font-bold'>${shippingFee ? shippingFee.toLocaleString() : '00.00'}</p>
            </div>
            <div className='flex items-center justify-between mb-4'>
              <p className='font-bold text-[#c1380d]'>Total</p>
              <p className='font-bold text-[#c1380d]'>${totalPrice ? totalPrice.toLocaleString() : '00.00'}</p>
            </div>
            <button className='w-full bg-black hover:bg-[#c1380d] duration-300 text-white py-2 cursor-pointer'>CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart