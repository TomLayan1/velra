import React from 'react';
import loginChair from '../assets/velra/chair/insta-3.jpg';
import { Link } from 'react-router-dom';

const Login:React.FC = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center bg-[#c1370d31]'>
      <div className='container w-[95%] lg:w-[60%] mx-auto bg-white/100 overflow-hidden flex custom_shadow'>
        <div className='w-[50%] p-5'>
          <h1 className='text-2xl md:text-3xl font-bold font-[Crimson] mb-'>Velra</h1>
          <form className='w-full h-[400px] flex items-center'>
            <div className='w-full'>
              <p></p>
              <div className='mb-4'>
                <p className='font-bold mb-1.5'>Username</p>
                <input className='w-full border p-1.5 outline-0' />
              </div>
              <div className='mb-6'>
                <p className='font-bold mb-1.5'>Password</p>
                <input className='w-full border p-1.5 outline-0' />
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