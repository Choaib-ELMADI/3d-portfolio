import React from 'react'
import { motion } from 'framer-motion'

import { SectionWrapper } from '../hoc/index'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

import './Feedbacks.css'

const TestimonialCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div 
    variants={ fadeIn("", "spring", index * 0.5, 0.75) }
    className='app__testimonial'
  >
    <p className='quote'>"</p>
    <p className='testimonial'>{ testimonial }</p>
    <div className='content'>
      <div className='left'>
        <span><span className='user'>@</span>{ name }</span> 
        <p><span>{ designation }</span> of <span>{ company }</span></p>
      </div>
      <div className='right'>
        <img src={ image } alt="image" />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='app__feedbacks'>
      <div className='app__feedbacks-inner'>
        <motion.div 
          variants={ textVariant() }
          className='app__about-intro'
        >
          <p>What others say</p>
          <h1>Testimonials.</h1>
        </motion.div>
      </div>

      <div className='app__testimonials'>
        <div className="app__testimonials-inner">
          {
            testimonials.map((testimonial, i) => (
              <TestimonialCard key={ i } index={ i } { ...testimonial } />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")