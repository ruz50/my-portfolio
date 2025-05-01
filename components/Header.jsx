import Image from 'next/image'
import React from 'react'
import { assets } from '../public/assets/assets'
import { motion } from 'motion/react'

const Header = ({ isDarkMode }) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 mt-32 md:mt-34'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={assets.logoImg }
          alt='my-profile-image'
          className='rounded-full w-32 '
        />
      </motion.div>
      <motion.h3
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi! I'm Ruzanna Serobyan{' '}
        <Image src={assets.wave} alt='wave' className='w-6' />
      </motion.h3>
      <motion.h1
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        frontend web developer and seo specialist based in Yerevan.
      </motion.h1>
      <motion.p
        className='max-w-2xl mx-auto font-Ovo'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        I am a Frontend Web Developer and SEO Specialist with a passion for
        creating beautiful and functional websites. I have experience in HTML,
        CSS, JavaScript, React, and Next.js. I am also skilled in SEO best
        practices and have a strong understanding of how to optimize websites
        for search engines.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
          href='#contact'
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Contact me{' '}
          <Image
            src={assets.right_arrow_white}
            alt='contact-me-link'
            className='w-4'
          />
        </motion.a>
        <motion.a
          href='public/assets/ruzanna-serobyan-cv.pdf'
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:border-white bg-white dark:text-black'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          My resume{' '}
          <Image
            src={assets.download_icon}
            alt='download icon'
            className='w-4'
          />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
