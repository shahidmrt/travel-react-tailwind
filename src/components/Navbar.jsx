// import React from 'react'
import {BsPerson} from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube} from 'react-icons/fa'
import { useState } from 'react'


const Navbar = () => {
  const [nav, setNav]=useState(false);
  const [logo, setLogo]= useState(false)
  const handleNav=()=>{
     setNav(!nav)
     setLogo(!logo)
  }

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
         <h1 className={`${logo? 'hidden' : 'block'}`}>BEACHES.</h1>
         {/* <h1 className={`hidden md:block`}>BEACHES.</h1> */}
      </div>

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Book</li>
      </ul>
      <div className='hidden md:flex gap-3'>
        <BiSearch size={20}/>
        <BsPerson size={20}/>
      </div>

          {/* hamburger */}
      <div onClick={handleNav} className='md:hidden z-10 font-bold'>
        {nav ? <AiOutlineClose className='text-black' size={20}/> :  <HiOutlineMenuAlt4 className='' size={20}/> }
         
      </div>

      {/* mobile menus dropdown */}
      <div className={`absolute  ${nav ? 'left-0' : "left-[-100%]"} top-0 w-full bg-gray-100/90 text-black px-4 py-6 flex flex-col md:hidden` }>
      <ul className=''>
        <h1 className=''>BEACHES. </h1>
        <li className='border-b'>Home</li>
        <li className='border-b'>Destination</li>
        <li className='border-b'>Travel</li>
        <li className='border-b'>Views</li>
        <li className='border-b'>Book</li>
        <div className='flex flex-col '>
          <button className='my-6'>Search</button>
          <button className=''>Account</button>
        </div>
        <div className=' flex justify-between my-6'>
          <FaFacebook className='icons'/>
          <FaTwitter className='icons'/>
          <FaPinterest className='icons'/>
          <FaInstagram className='icons'/>
          <FaYoutube className='icons'/>
        </div>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
