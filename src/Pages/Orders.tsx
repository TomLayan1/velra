import React from 'react';
import { orders } from '../Data/Data';
import orderImg from '../assets/velra/chair/insta-1.jpg'
import Footer from '../Components/Footer';
import { OrdersType } from '../Interface/interface';
import { Link } from 'react-router-dom';

const Orders:React.FC = () => {
  const userOrders: OrdersType[] = orders;

  return (
    <>
      <section className='w-full bg-[#f4f4f4dc] scroll py-5'>
        <div className='container w-[95%] md:w-[90%] mx-auto bg-white rounded-4xl overflow-hidden custom_shadow'>
          <div className='w-full flex'>
            <div className='w-full h-full lg:w-[60%] py-4 lg:pt-2 px-4 overflow-y-scroll scroll'>
              <h1 className='text-3xl text-[#c1380d] font-bold mb-5'>My Orders</h1>
              {userOrders?.length > 0
              ?  <table className='w-full'>
                  <thead>
                    <tr className=''>
                      <td className='text-center font-bold p-2 border order_img'>Product Image</td>
                      <td className='text-center font-bold p-2 border'>Product Name</td>
                      <td className='text-center font-bold p-2 border'>Quantity</td>
                      <td className='text-center font-bold p-2 border'>Price</td>
                    </tr>
                  </thead>
                  <tbody>
                    {userOrders?.map(order => (
                      <tr key={order.id}>
                        <td className=' p-2 border order_img'>
                          <img className='w-[50px] mx-auto order_img' src={order.img} alt={order.name} />
                        </td>
                        <td className='text-center p-2 border'>{order.name}</td>
                        <td className='text-center p-2 border'>{order.quantity}</td>
                        <td className='text-center p-2 border'>${Number(order.price).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              : <div className='h-[500px] flex flex-col justify-center items-center'>
                  <h3 className='text-xl text-[#c1380d] font-bold'>You have no order</h3>
                  <p className='text-[#c1380d]'>Go to <Link to={'/shop'} className='font-bold cursor-pointer'>Shop</Link> to purchase item</p>
                </div>
              }
            </div>

            <div className='w-[40%] hidden lg:block'>
              <img src={orderImg} alt='Chair' />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Orders