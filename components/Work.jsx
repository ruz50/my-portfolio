import React from 'react'
import { assets, workData } from '../assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className='text-center mb-2 text-lg font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My portfolio{' '}
      </motion.h4>
      <motion.h2
        className='text-center text-5xl font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My latest work
      </motion.h2>
      <motion.p
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
        incidunt quo iusto, quos, nam eaque hic quae odit distinctio ducimus,
        aliquam adipisci quibusdam voluptate velit id. Earum, cupiditate nisi
        fuga rem aut corrupti, ducimus asperiores, aliquam at molestias
        obcaecati architecto.
      </motion.p>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 dark:text-black my-10 cursor-pointer'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group hover:shadow-[4px_4px_0_#000] cursor-pointer'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 '>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='send-icon' className='w-5' />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href=''
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500 dark:text-white dark:border-white dark:hover:bg-[#2a004a] dark:hover:bg-opacity-50'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Show more{' '}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt='right-arrow-bold'
          className='w-4'
        />
      </motion.a>
    </motion.div>
  )
}

export default Work
