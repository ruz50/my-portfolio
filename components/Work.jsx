import React from 'react'
import { assets, workData } from '../public/assets/assets'
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
      <motion.div
        className='text-center mb-2 text-lg font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My portfolio{' '}
      </motion.div>
      <motion.div
        className='text-center text-5xl font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My latest work
      </motion.div>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 dark:text-black my-10 cursor-pointer'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {workData.map((project, index) => (
          <motion.a
              href={project.link}
            key={index}
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group hover:shadow-[4px_4px_0_#000] cursor-pointer'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 '>
              <div>
                <div className='font-semibold'>{project.title}</div>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='send-icon' className='w-5' />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>


    </motion.div>
  )
}

export default Work
