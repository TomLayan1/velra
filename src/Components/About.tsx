import React from 'react'

const About:React.FC = () => {
  return (
    <section className='container mx-auto pt-20 pb-10'>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto'>
        <h4 className='md:text-[20px] text-center font-bold tracking-widest mb-7 md:mb-12'>ABOUT US</h4>
        <h1 className='text-center md:text-2xl lg:text-3xl uppercase font-bold font-[Crimson] leading-11'>
          At Velra, we bring comfort, style, and quality straight to your doorstep. As a modern furniture eCommerce brand, we make it easy to find pieces that fit your space, <span className='text-gray-500'>your taste, and your lifestyle.
          From timeless classics to contemporary designs, every item in our collection is carefully selected for durability, functionality, and beauty.</span></h1>
      </div>
    </section>
  )
}

export default About