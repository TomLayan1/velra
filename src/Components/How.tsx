import React from 'react'
import grouped from '../assets/grouped.png'

const How:React.FC = () => {
  return (
    <section className = 'pt-10 lg:pt-10 pb-20'>
      <div className='container mx-auto'>
        <div className='w-[90%] mx-auto flex justify-evenly items-center gap-6'>
          <div className='md:w-[50%] lg:w-[40%]'>
            <h1 className='text-5xl font-bold mb-8 leading-16'>Our Process <br /><span className='lg:ml-36'>Your Comfort</span></h1>
            <p className='mb-8 text-gray-500'>It all starts with nature. Our wood is sourced from sustainable forests, ensuring each piece supports both your home and the planet. We pair eco-conscious materials with skilled craftsmanship to create furniture that’s not only beautiful and durable, but also responsibly made.</p>
            <button className='bg-black text-white text-[14px] font-medium px-5 py-3 rounded-full cursor-pointer'>Learn More</button>
          </div>
          <div className='hidden md:block w-[50%] lg:w-[40%]'>
            <img src={grouped} alt='Furnitures' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default How