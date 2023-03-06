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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_rbyqrrj', 
      'template_z4t83ye',
      {
        from_name: form.name,
        to_name: 'Choaib',
        from_email: form.email,
        to_email: 'choaibelmadi.js@gmail.com',
        message: form.message,
      },
      'BzsAxBDR2VcTFgclc',
    ).then(() => {
      setLoading(false);
      alert("Thank You! I will get back to you as soon as possible.");
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong.")
    });
  };

  return (
    <div className='app__contact' style={{
      paddingBottom: '6rem'
    }}>
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