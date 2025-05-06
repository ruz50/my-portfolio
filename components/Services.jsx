import React from 'react'
import { assets, serviceData } from '../public/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      id='services'
      className='w-full px-[12%] py-10 scroll-mt-20 flex flex-col items-center justify-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className='text-center mb-2 text-lg font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        What I offer
      </motion.div>
      <motion.div className='text-center text-5xl font-Ovo'
      initial={{ opacity: 0 , y: -20}}
      whileInView={{ opacity: 1 , y : 0}}
      transition={{ duration: 0.5 , delay: 0.5}}
      >My Services</motion.div>
      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 , delay: 0.7}}>
        I offer modern front-end web development using frameworks like React, Next.js, and various CSS tools to build responsive, high-performing websites. Alongside development, I provide SEO services including website audits, keyword research, and on-page optimization to help improve visibility and search rankings.
      </motion.p>

      <motion.div
          className="flex gap-6 my-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 dark:hover:bg-[#2a004a] dark:hover:bg-opacity-50 dark:border-white dark:shadow-white'
            whileHover={{ scale: 1.05 }}
          >
            <Image src={icon} alt='service-icons' className='w-10' />
            <div className='text-lg my-4 text-gray-700 dark:text-white'>
              {title}
            </div>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
              {description}
            </p>
            <a href="#contact" className='flex items-center gap-2 text-sm mt-5'>
              Know more{' '}
              <Image src={assets.right_arrow} alt='read-more' className='w-4' />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
