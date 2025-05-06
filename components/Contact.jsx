import Image from 'next/image'
import React from 'react'
import { assets } from '../public/assets/assets'
import { useState } from 'react'
import { motion } from 'motion/react'

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState('')

  const onSubmit = async event => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', '6a2297d8-6067-4219-831b-c5dc59170201')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }

  return (
    <motion.div
      id='contact'
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] '
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
        Connect with me{' '}
      </motion.div>
      <motion.div
        className='text-center text-5xl font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Get in touch
      </motion.div>
      <motion.p
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I'd love to hear from you! Whether you have a question, a project in
        mind or feedback, please use the form below to get in touch with me.
      </motion.p>

      <motion.form
        className='max-w-2xl mx-auto'
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10'>
          <motion.input
            type='text'
            placeholder='Enter your name'
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#2a004a] dark:border-white/90'
            name='name'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 , delay: 1.1 }}
          />
          <motion.input
            type='email'
            placeholder='Enter your email'
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#2a004a] dark:border-white/90'
            name='email'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 , delay: 1.2 }}
          />
        </div>
        <motion.textarea
          rows='6'
          placeholder='Enter your message'
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-[#2a004a] dark:border-white/90'
          name='message'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 , delay: 1.3 }}
        ></motion.textarea>
        <motion.button
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:text-white dark:border dark:border-white/50 dark:hover:bg-[#2a004a] dark:hover:bg-opacity-50'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Submit now{' '}
          <Image
            src={assets.right_arrow_white}
            alt='right-arrow-white'
            className='w-4'
          />
        </motion.button>
        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
