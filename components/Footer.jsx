import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center '>
        <Image src={isDarkMode ? assets.logo_dark :assets.logo} alt='logo' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto '>
        <Image src={isDarkMode? assets.mail_icon_dark :assets.mail_icon} alt='mail' className='w-6 mx-auto mb-2'/>
        sruzan50@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t-[0.5px] border-gray-400 mx-[10%] mt-12 py-6 '>
        <p>© 2025 Ruzanna Serobyan. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 cursor-pointer'>
            <li><a target='_blank' href="https://github.com/ruz50">GitHub</a></li>
            <li><a target='_blank' href="https://github.com/ruz50">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
