import React from 'react';
import contactBg from '../assets/velra/contactBg.jpg';

const Contact:React.FC = () => {
  return (
    <section className='container mx-auto py-10'>
      <div className='w-[90%] mx-auto overflow-hidden'>
        <div className='lg:w-[88%] rounded-3xl mx-auto relative overflow-hidden'>
          <img className='w-full' src={contactBg} alt='Contact background image' />
          <div className='w-full h-full absolute top-0 left-0'>biubu</div>
        </div>
      </div>
    </section>
  )
}

export default Contact