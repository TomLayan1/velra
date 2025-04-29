import React from 'react'
import { testimonialsTwo } from '../Data/Data'

const Testimonial:React.FC = () => {
  return (
    <section className='bg-black px-4 py-12 overflow-x-hidden'>
      <h2 className='text-2xl md:text-3xl text-[#c1380d] text-center font-bold mb-10 md:mb-16'>Don't just take our word for it</h2>
      <div className='scrolling_testimonial_wrapper flex gap-7'>
        {testimonialsTwo?.map(item => (
          <div key={item.id} className='bg-white p-5 rounded-2xl'>
            <div className='flex flex-col justify-between w-[260px] md:w-[300px] h-[130px]'>
              <p className=''>{item.comment}</p>
              <p className=' font-bold'>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial