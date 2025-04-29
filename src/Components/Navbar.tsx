import React, { useState } from 'react';
import { navLinks } from '../Data/Data';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { PiBagSimpleBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

type NavPropsType = {
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavPropsType> = ({ setSearchBar, setOpenCart }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  return (
    <>
      {showMenu && <div className='w-full h-[100vh] bg-[#d6d4d4c5] lg:hidden fixed top-0 left-0 z-10'></div>}
      <div className='bg-[#2120202e] absolute w-full top-0 md:top-3 left-0 z-10 text-white rounded-tl-2xl rounded-tr-2xl'>
        <div className='container p-4 md:px-8 lg:py-0 mx-auto flex justify-between items-center'>
          <h1 className='text-4xl font-bold font-[Crimson]'>Velra</h1>
          <div className={`fixed lg:static top-0 right-0 w-[50%] lg:w-auto h-[100vh] lg:h-16 pt-20 lg:pt-0 duration-300 lg:translate-x-0 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'} flex lg:items-center px-7 lg:rounded-bl-3xl lg:rounded-br-3xl`}>
            <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7'>
              {navLinks?.map(link => (
                <Link to={link.path} onClick={() => { setShowMenu(false) }} className='list-none cursor-pointer' key={link.id}>{link.nav}</Link>          
              ))}
            </nav>
          </div>
          <div className='flex items-center gap-4 sm:gap-7'>
            <FaSearch onClick={() => setSearchBar(true)} className='cursor-pointer' size={20} />
            <PiBagSimpleBold onClick={() => setOpenCart(true)} className='cursor-pointer' size={20} />
            <IoPerson className='cursor-pointer' size={20} />
            <button className='bg-white hover:bg-[#c1380d] duration-300 py-2 px-5 rounded-full text-black hover:text-white text-[14px] font-[Crimson] cursor-pointer'>Sign Up</button>
            <div onClick={() => setShowMenu(!showMenu)} className='flex items-center cursor-pointer lg:hidden'>
              {!showMenu ? <FaBars size={20} /> : <FaTimes className='text-black z-50' size={20} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar