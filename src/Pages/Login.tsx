import React, { useState } from 'react';
import loginChair from '../assets/velra/chair/insta-3.jpg';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import { Link } from 'react-router-dom';

const Login:React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <section className='w-full h-screen flex items-center justify-center bg-[#c1370dd2]'>
      <div className='container w-[95%] lg:w-[54%] mx-auto bg-white/100 overflow-hidden flex rounded-2xl custom_shadow'>
        <div className='w-[50%] p-5'>
          <h1 className='text-2xl md:text-3xl font-bold font-[Crimson] mb-'>Velra</h1>
          <form className='w-full h-[400px] flex items-center'>
            <div className='w-full'>
              <p></p>
              <input 
                type='email'
                placeholder='Email' 
                className='w-full border p-1.5 outline-0 text-[15px] bg-white mb-6'
              />
              <div className='flex items-center gap-1.5 border pl-1.5 mb-6'>
                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaRegEye size={16} /> : <FaRegEyeSlash size={16} />}
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  className='w-full p-1.5 outline-0 text-[15px] bg-white'
                />
              </div>
              <button className='w-full bg-black text-white py-1.5 cursor-pointer mb-3'>Login</button>
              <p className='text-[14px] text-center'>Don't have an account? <Link to='/sign-up' className='font-bold cursor-pointer'>Sign up</Link></p>
            </div>
          </form>
        </div>
        <img className='w-[50%] ' src={loginChair} alt='Chair' />
      </div>
    </section>
  )
}

export default Login