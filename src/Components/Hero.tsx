import React from 'react'
import Navbar from './Navbar'
import { banners } from '../Data/Data'

const Hero:React.FC = () => {
  return (
    <div className='mx-auto bg-amber-300 w-full'>
      <Navbar />
    </div>
  )
}

export default Hero