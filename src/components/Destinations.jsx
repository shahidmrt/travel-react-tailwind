import React from 'react'
import boraboora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import keywest from '../assets/keywest.jpg'

const Destinations = () => {
  return (
    <div className='destinaiton-sec max-w-[1240px] mx-auto py-16 px-4 text-center '>
      <h1>All Inclusive Resorts</h1>
      <p className='py-4'>On the Caribben's Best Beaches</p>
      <div className=' grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 '>
          <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={boraboora} alt="" />
          <img className='w-full h-full object-cover' src={borabora2} alt="" />
          <img className='w-full h-full object-cover' src={maldives} alt="" />
          <img className='w-full h-full object-cover' src={maldives2} alt="" />
          <img className='w-full h-full object-cover' src={keywest} alt="" />
      </div>
    </div>
  )
}

export default Destinations
