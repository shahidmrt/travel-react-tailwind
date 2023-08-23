import React from 'react'

import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-400 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1>BEACHES. </h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                <FaFacebook className='icons'/>
                <FaTwitter className='icons text-sky-500'/>
                <FaPinterest className='icons text-purple-500'/>
                <FaInstagram className='icons'/>
                <FaYoutube className='icons text-red-500'/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
