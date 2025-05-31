import React, { useState } from 'react';
import loginChair from '../assets/velra/chair/insta-3.jpg';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Login:React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <section className='w-full h-screen flex items-center justify-center bg-[#cca770 relative overflow-hidden'>
      <div className='h-full absolute top-0 -left-48 -z-10 flex items-center'>
        <Link to={'/'}>
          <h1 className='text-[900px] text-black/25 font-[Crims0n]'>V</h1>
        </Link>
      </div>
      <div className='container w-[95%] lg:w-[54%] mx-auto bg-white/100 overflow-hidden flex rounded-2xl custom_shadow'>
        <div className='w-[60%] p-5'>
          <h1 className='text-2xl md:text-3xl font-bold font-[Crimson] mb-'>Velra</h1>
          <form className='w-full h-[400px] flex items-center'>
            <div className='w-full'>
              <p></p>
              <input 
                type='email'
                placeholder='Email'
                className='w-full border p-1.5 outline-0 text-[15px] bg-white mb-6'
              />
              <div className='flex items-center gap-1.5 border pr-1.5 mb-6'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  className='w-full p-1.5 outline-0 text-[15px] bg-white'
                />
                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaRegEye size={16} /> : <FaRegEyeSlash size={16} />}
                </div>
              </div>
              <button className='w-full bg-black hover:bg-[#c1380d] text-white py-2 duration-200 cursor-pointer mb-3'>Login</button>
              <p className='text-[14px] text-center'>Don't have an account? <Link to='/sign-up' className='hover:text-[#c1380d] duration-200 font-bold cursor-pointer'>Sign up</Link></p>
            </div>
          </form>
        </div>
        <div className='w-[40%] relative'>
          <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center'>
            <h1 className='text-3xl text-center font-[Crimson] font-bold tracking-widest'>Enjoy Shopping with us</h1>
          </div>
          <img className='w-full h-full' src={loginChair} alt='Chair' />
        </div>
      </div>
      <div className='w-[400px] h-[400px] bg-black/25 absolute -bottom-40 -right-48 -z-10 rounded-full flex items-center justify-center'>
        <div className='w-[250px] h-[250px] rounded-full bg-white'></div>
      </div>
    </section>
  )
}

export default Login