import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
        <div>
        <Image src={assets.profile_img} alt='my-profile-image' className='rounded-full w-32 '/>
        </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Ruzanna Serobyan <Image src={assets.wave} alt='wave' className='w-6' />
        </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        frontend web developer and seo specialist based in Yerevan.
    </h1>
    <p className='max-w-2xl mx-auto font-Ovo'>
        I am a Frontend Web Developer and SEO Specialist with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, React, and Next.js. I am also skilled in SEO best practices and have a strong understanding of how to optimize websites for search engines.
    </p>

    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact me  <Image src={assets.right_arrow_white} alt='contact-me-link' className='w-4'/></a>
        <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My resume  <Image src={assets.download_icon} alt='download icon' className='w-4'/></a>
    </div>
    </div>
  )
}

export default Header
