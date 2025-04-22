import React from 'react';
import { feature } from '../Data/Data';

const Features:React.FC = () => {

  return (
    <section className='container mx-auto pt-10 pb-10'>
      <div>
        <h4 className='text-center font-bold tracking-widest mb-12'>FEATURES</h4>
        <div className='w-[90%] mx-auto lg:flex  h-[250px]'>
          <div className='w-full lg:w-auto md:w-auto flex gap-4 mb-4 lg:mb-0 mr-4'>
            {feature?.map((item, index) => (
              index !== 2 && <div key={item.id} className='w-[50%] lg:w-auto relative overflow-hidden rounded-3xl'>
                <img src={item.img} alt={item.name} className='hover:scale-110 duration-300' />
                <p className='absolute z-10 right-3.5 bottom-3.5 bg-white p-1.5 md:p-2.5 rounded-full text-[14px]'>{item.name}</p>
              </div>
            ))}
          </div>
          <div className='flex lg:flex-col gap-4'>
            {feature?.map(item => (
              item.imgs?.map(item => (
                <div key={item.id} className='lg:w-auto relative overflow-hidden rounded-3xl'>
                  <img src={item.img} className='hover:scale-110 duration-300' />
                  <p className='absolute z-10 right-3.5 bottom-3.5 bg-white p-1.5 md:p-2.5 rounded-full text-[14px]'>{item.name}</p>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features