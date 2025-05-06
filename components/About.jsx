import Image from 'next/image'
import React from 'react'
import { assets, infoList, toolsData } from '../public/assets/assets'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id='about'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className='text-center mb-2 text-lg font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Introduction
      </motion.div>
      <motion.div
        className='text-center text-5xl font-Ovo'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About me
      </motion.div>
      <motion.div
        className='flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >

        <motion.div
          className='flex flex-col items-center justify-center '
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className='mb-10 max-w-2xl font-Ovo text-center'>
          I'm a front-end developer and SEO specialist. I have a strong interest in creating modern, responsive, and accessible web interfaces. I am always improving my skills in web development and search engine optimization. My goal is to build fast, user-friendly websites that look great and rank well in search engines.
          </p>
          <motion.ul
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:border-white dark:hover:shadow-white dark:hover:bg-[#2a004a] dark:hover:bg-opacity-50'
                whileHover={{ scale: 1.05}}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className='w-7 mt-3'
                />
                <div className='my-4 font-semibold text-gray-700 dark:text-white'>
                  {title}
                </div>
                <p className='text-gray-600 text-sm dark:text-white'>
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div className='my-6 text-gray-700 font-Ovo dark:text-white'
          initial={{ opacity: 0 , y: 20}}
          whileInView={{ opacity: 1 , y : 0}}
          transition={{ duration: 1.3 , delay: 0.5}}>
            Technologies I Work With
          </motion.div>
          <motion.ul className='flex items-center gap-3 sm:gap-5'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 , delay: 0.6}}>
            {toolsData.map((tools, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover hover:-translate-y-1 duration-500'
              >
                <Image src={tools} alt='tools' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
