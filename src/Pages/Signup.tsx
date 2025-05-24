import React, { useState } from 'react';
import signupChair from '../assets/velra/chair/insta-5.jpg';
import { Link } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Signup:React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  return (
    <section className='w-full h-screen flex items-center justify-center bg-[#c1370dd2]'>
      <div className='container w-[95%] lg:w-[60%] mx-auto bg-white/100 overflow-hidden flex rounded-2xl custom_shadow'>
        <div className='w-[60%] p-5'>
          <h1 className='text-2xl md:text-3xl font-bold font-[Crimson] mb-8'>Velra</h1>
          <form className='w-full h-[400px] flex items-center'>
            <div className='w-full'>
              <p></p>
              <div className='w-full flex gap-4 mb-6'>
                <div>
                  <input 
                    type='text'
                    placeholder='First name'
                    className='w-full border p-1.5 outline-0 text-[15px] bg-white' />
                </div>
                <div>
                  <input
                    type='text'
                    placeholder='Last name'
                    className='w-full border p-1.5 outline-0 text-[15px] bg-white' />
                </div>
              </div>
              <div className='mb-6'>
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full border p-1.5 outline-0 text-[15px] bg-white'
                />
              </div>
              <div className='mb-6'>
                <input
                 type='text'
                 placeholder='Address'
                 className='w-full border p-1.5 outline-0 text-[15px] bg-white' />
              </div>
              <div className='w-full flex gap-4 mb-6'>
                <div className='mb-'>
                  <div className='flex items-center gap-1.5 border pr-1.5'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Password'
                      className='w-full p-1.5 outline-0 text-[15px] bg-white'
                    />
                    <div onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FaRegEye size={16} /> : <FaRegEyeSlash size={16} />}
                    </div>
                  </div>
                </div>
                <div className='mb-'>
                  <div className='flex items-center gap-1.5 border pr-1.5'>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder='Confirm password'
                      className='w-full p-1.5 outline-0 text-[15px] bg-white'
                    />
                    <div onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? <FaRegEye size={16} /> : <FaRegEyeSlash size={16} />}
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-1 mb-4'>
                <input
                  type='checkbox'
                  checked
                  className='border w-3.5 h-3.5'
                />
                <p className='text-[14px]'>
                  I accept the 
                  <span className='text-[#c1380d] font-bold'>Terms</span>,
                  <span className='text-[#c1380d] font-bold'> Condition</span> &
                  <span className='text-[#c1380d] font-bold'> Privacy Policies</span>
                </p>
              </div>
              <button className='w-full bg-black text-white py-1.5 cursor-pointer mb-3'>Login</button>
              <p className='text-[14px] text-center'>Already have an account? <Link to='/login' className='font-bold cursor-pointer'>Login</Link></p>
            </div>
          </form>
        </div>
        <img className='w-[40%] ' src={signupChair} alt='Chair' />
      </div>
    </section>
  )
}

export default Signup