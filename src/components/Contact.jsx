import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc/index'
import { slideIn } from '../utils/motion'

import './Contact.css'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className='app__contact'>
      <motion.div
        variants={ slideIn("left", "tween", 0.2, 1 ) }
        className='app__contact-form'
      >
        <p>Get in touch</p>
        <h1>Contact.</h1>
        <form
          ref={ formRef }
          onSubmit={ handleSubmit }
        >
          <label className='label'>
            <span>Your Name</span>
            <input 
              type="text"
              name="name"
              value={ form.name }
              onChange={ handleChange }
              placeholder="What's your name ?"
              required
            />
          </label>

          <label className='label'>
            <span>Your Email</span>
            <input 
              type="email"
              name="email"
              value={ form.email }
              onChange={ handleChange }
              placeholder="What's your email ?"
              required
            />
          </label>

          <label className='label'>
            <span>Your Message</span>
            <textarea 
              rows={ 5 }
              name="message"
              value={ form.message }
              onChange={ handleChange }
              placeholder="What's your message ?"
              required
            />
          </label>

          <button type='submit'>
            { loading ? 'Sending...' : 'Send' }
          </button>
        </form>
      </motion.div>

      <motion.div 
        variants={ slideIn("right", "tween", 0.2, 1 ) }
        className='app__contact-earth'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")