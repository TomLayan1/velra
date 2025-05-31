import React, { useState } from 'react';
import signupChair from '../assets/velra/chair/insta-5.jpg';
import { Link } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import googleIcon from '../assets/google.png'

const Signup:React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  return (
    <section className='w-full h-screen flex items-center justify-center bg-[#cca770 relative overflow-hidden'>
      <div className='h-full absolute top-0 -left-48 -z-10 flex items-center'>
        <h1 className='text-[900px] text-black/25 font-[Crims0n]'>V</h1>
      </div>
      <div className='container w-[95%] lg:w-[60%] mx-auto bg-white/100 overflow-hidden flex rounded-2xl custom_shadow'>
        <div className='w-[60%] p-5'>
          <Link to={'/'}>
            <h1 className='text-2xl md:text-3xl font-bold font-[Crimson] mb-8'>Velra</h1>
          </Link>
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
              <div className='w-full'>
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
              <button className='w-full bg-black hover:bg-[#c1380d] text-white py-2 duration-200 cursor-pointer mb-3'>Sign in</button>
              <button className='w-full bg-black hover:bg-[#c1380d] text-white py-2 duration-200 flex items-center justify-center gap-2.5 cursor-pointer mb-3'>
                <img className='w-[20px]' src={googleIcon} alt='google-icon' />
                Sign in with google
              </button>
              <p className='text-[14px] text-center'>Already have an account? <Link to='/login' className='hover:text-[#c1380d] duration-200 font-bold cursor-pointer'>Login</Link></p>
            </div>
          </form>
        </div>
        <div className='w-[40%] relative'>
          <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center'>
            <h1 className='text-5xl font-[Crimson] font-bold tracking-widest'>Welcome</h1>
          </div>
          <img className='w-full h-full' src={signupChair} alt='Chair' />
        </div>
      </div>
      <div className='w-[400px] h-[400px] bg-black/25 absolute -bottom-40 -right-48 -z-10 rounded-full flex items-center justify-center'>
        <div className='w-[250px] h-[250px] rounded-full bg-white'></div>
      </div>
    </section>
  )
}

export default Signup