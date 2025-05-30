import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { banners } from '../Data/Data';
import { BannerType } from '../Interface/interface';
import Search from './Search';

type HeroProps = {
  searchBar: boolean;
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ searchBar, setSearchBar, setOpenCart  }) => {
  
  const heroBanners: BannerType[] = banners;
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroBanners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroBanners.length]);


  return (
    <section className='container md:w-[95%] lg:w-full mx-auto md:pt-3'>
      <Search searchBar={searchBar} setSearchBar={setSearchBar} />
      <div className='md:rounded-2xl overflow-hidden w-full h-[100vh] md:h-[600px] flex relative'>
        <Navbar setSearchBar={setSearchBar} setOpenCart={setOpenCart} />
        <div className='flex transition-transform duration-1000 ease-in-out'
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {heroBanners?.map(hero => (
            <div
              key={hero.id}
              className='w-full h-full flex-shrink-0 text-white relative overflow-hidden'
            >
              <img className='w-full h-full object-cover' src={hero.banner} alt={hero.text} />
              <div className='absolute left-0 right-0 bottom-10'>
                <div className='px-6 md:px-10 lg:px-16'>
                  <h1 className='md:max-w-[600px] lg:max-w-[900px] text-2xl md:text-4xl lg:text-6xl font-extrabold font-[Crimson] mb-3 tracking-wid lg:leading-18'>{hero.text}</h1>
                  <div className='md:flex items-center justify-between'>
                    <p className='max-w-[500px] text-[17px] mb-3'>{hero.sub_text}</p>
                    <button className='bg-white hover:bg-[#c1380d] duration-300 text-black hover:text-white text-[14px] font-medium font-[Crimson] px-5 py-3 rounded-full cursor-pointer'>Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero