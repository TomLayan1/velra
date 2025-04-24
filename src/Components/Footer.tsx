import React from 'react';
import { navLinks } from '../Data/Data';

// Socials
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";




const Footer:React.FC = () => {
  const socialLink = [
    {
      id: 1,
      icon: <FaFacebook size={30} className='bg-gray-400 p-2 text-white rounded-full cursor-pointer' />
    },
    {
      id: 2,
      icon: <FaInstagram size={30} className='bg-gray-400 p-2 text-white rounded-full cursor-pointer' />
    },
    {
      id: 3,
      icon: <FaPinterest size={30} className='bg-gray-400 p-2 text-white rounded-full cursor-pointer' />
    },
    {
      id: 4,
      icon: <FaTiktok size={30} className='bg-gray-400 p-2 text-white rounded-full cursor-pointer' />
    },
    {
      id: 5,
      icon: <FaTelegramPlane size={30} className='bg-gray-400 p-2 text-white rounded-full cursor-pointer' />
    }
  ]

  return (
    <footer className='container mx-auto pt-16 pb-5 md:py-16'>
      <div className='w-[90%] mx-auto'>
        <div className='md:flex items-baseline justify-between mb-16 lg:mb-20'>
          <div className='md:w-[40%] mb-6 lg:mb-0'>
            <h1 className='text-4xl font-bold font-[Crimson] mb-3.5'>Velra</h1>
            <p className='text-[15px] text-gray-400'>At Velra, we believe that every home deserves beauty, comfort, and timeless style — because your space should inspire the way you live.</p>
          </div>
          <div className='flex flex-col flex-wrap md:flex-row gap-4 md:gap-7 w-[35%]'>
            {navLinks?.map(link => (
              <li key={link.id} className='list-none text-[15px] text-gray-400 cursor-pointer'>{link.nav}</li>
            ))}
          </div>
        </div>

        <div className='w-full flex flex-col-reverse md:flex-row justify-between gap-10 lg:gap-0'>
          <div className='lg:w-[40%] lg:flex items-baseline-last justify-between'>
            <div className='lg:w-[90px] flex md:flex-none md:grid md:grid-cols-2 gap-3 mb-7 lg:mb-0'>
              {socialLink?.map(social => (
                <div key={social.id}>
                  {social.icon}
                </div>
              ))}
            </div>
            <div className='text-[15px] text-gray-400'>
              <p>&copy - copyright</p>
              <p>All Rights reserved</p>
            </div>
          </div>

          <div className='w-[35%]'>
            <div className='mb-9'>
              <p className='font-bold mb-3'>Contact Us</p>
              <p className='text-gray-400 text-[15px]'>+1(888)777-66-55</p>
              <p className='text-gray-400 text-[15px]'>hello@velra.com</p>
            </div>
            <div>
              <p className='font-bold mb-3'>Location</p>
              <p className='text-gray-400 text-[15px]'>United States</p>
              <p className='text-gray-400 text-[15px]'>Los Angelis</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer