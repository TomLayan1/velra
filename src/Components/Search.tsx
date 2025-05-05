import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Redux/Store';
import { useNavigate } from 'react-router-dom';
import { searchProducts } from '../Redux/Products/productReducer';

type SearchPropsType = {
  searchBar: boolean;
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>
}


const Search:React.FC<SearchPropsType> = ({ searchBar, setSearchBar}) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(searchProducts(searchInput));
      navigate(`/shop?query=${encodeURIComponent(searchInput)}`);
    }
  }

  return (
   <div className='absolute w-[90%] container mx-auto top-20 left-0 right-0 flex justify-end z-1 overflow-hidden'>
           <div>
             <div className={`w-full bg-white/100 md:w-[300px] border border-white flex items-center px-2 gap-2 duration-150 ease-in-out ${searchBar ? 'translate-x-0' : 'translate-x-full'}`}>
               <input
                 id='search'
                 value={searchInput}
                 onChange={(e) => setSearchInput(e.target.value)}
                 onKeyDown={handleKeyDown}
                 className='w-full md:w-[300px] text-[15px] text- font-medium py-2 outline-0'
                 placeholder='Search here'
              />
              <FaTimes onClick={() => setSearchBar(false)} className='text-[#c1380d] cursor-pointer' />
             </div>
           </div>
         </div>
  )
}

export default Search