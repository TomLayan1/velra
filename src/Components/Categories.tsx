import React from 'react';
import { category } from '../Data/Data';

const Categories:React.FC = () => {

  return (
    <section className='container mx-auto pt-10 pb-20'>
      <div>
        <h4 className='md:text-[20px] text-center font-bold tracking-widest mb-12'>CATEGORIES</h4>
        <div className='w-[90%] mx-auto lg:flex lg:h-[250px]'>
          <div className='w-full lg:w-auto flex gap-4 mb-4 lg:mb-0 mr-4'>
            {category?.map((item, index) => (
              index !== 2 && <div key={item.id} className='w-[50%] lg:w-auto relative overflow-hidden rounded-3xl category_img_container'>
                <img src={item.img} alt={item.name} className='hover:scale-110 duration-300 category_img' />
                <div className='w-full bg-[#00000023] absolute z-10 top-0 left-0 h-full flex items-center justify-center'>
                  <p className='text-2xl md:text-4xl text-white font-bold font-[Crimson]'>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex lg:flex-col gap-4'>
            {category?.map(item => (
              item.imgs?.map(item => (
                <div key={item.id} className='lg:w-auto relative overflow-hidden rounded-3xl category_img_container'>
                  <img src={item.img} className='hover:scale-110 duration-300 category_img' />
                  <div className='w-full bg-[#00000023] absolute z-10 top-0 left-0 h-full flex items-center justify-center'>
                    <p className='text-2xl md:text-4xl text-white font-bold font-[Crimson]'>{item.name}</p>
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories