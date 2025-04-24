import React, { useState } from 'react';
import { navLinks } from '../Data/Data';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { PiBagSimpleBold } from "react-icons/pi";

type NavPropsType = {
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavPropsType> = ({ setSearchBar }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  // const [currentPage, setCurrentPage] = useState<string>("Home");

  // const handleNavlinks = (link: string) => {
  //   link && setCurrentPage(link)
  // }
  
  return (
    <>
      {showMenu && <div className='w-full h-[100vh] bg-[#d6d4d4c5] lg:hidden fixed top-0 left-0 z-10'></div>}
      <div className='absolute w-full top-0 left-0 z-10 text-white'>
        <div className='container p-4 md:px-8 lg:py-0 mx-auto flex justify-between items-center'>
          <h1 className='text-4xl'>Velra</h1>
          <div className={`bg-white z- fixed lg:static top-0 right-0 w-[50%] lg:w-auto h-[100vh] lg:h-16 pt-20 lg:pt-0 duration-300 lg:translate-x-0 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'} text-black flex lg:items-center px-7 lg:rounded-bl-3xl lg:rounded-br-3xl`}>
            <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7'>
              {navLinks?.map(link => (
                <li onClick={() => { setShowMenu(false) }} className='list-none cursor-pointer' key={link.id}>{link.nav}</li>          
              ))}
            </nav>
          </div>
          <div className='flex items-center gap-4'>
            <FaSearch onClick={() => setSearchBar(true)} className='cursor-pointer' size={20} />
            <PiBagSimpleBold className='cursor-pointer' size={20} />
            <IoPerson className='cursor-pointer' size={20} />
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