import React from 'react'
import { motion } from 'framer-motion'

import { ComputersCanvas } from './canvas'

import './Hero.css'

const Hero = () => {
  return (
    <section className='app__hero'>
      <div className='app__hero-text'>
        <div className='app__hero-decoration'>
          <div className="app__hero-deco-circle" />
          <div className="app__hero-deco-line" />
        </div>
        <div className="app__main-text">
          <h1>Hi, I'm <span>Choaib</span></h1>
          <p>I develop 3D visuals, user <br />interfaces, and web applications.</p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="app__hero-bottom">
        <a href="#about">
          <div className='app__hero-scroll'>
            <motion.div
              animate={{
                y: [0, 35, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="app__hero-dot"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero