import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import './About.css'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='app__service-card'>
      <motion.div
        variants={ fadeIn("right", "spring", 0.5*index, 0.75) }
        className='app__service-card-inner'
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
        >
          <img src={ icon } alt="icon" />
          <h3>{ title }</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div 
        variants={ textVariant() }
        className='app__about-intro'
      >
        <p>Introduction</p>
        <h1>Overview.</h1>
      </motion.div>

      <motion.p
        variants={ fadeIn("", "", 0.1, 1) }
        className='app__about-text'
      >
        I am an engineering student with a passion for programming. 
        I am currently a junior front-end developer and I am 
        always looking to learn about the latest technologies 
        in web development. In addition to my interest in 
        programming, I am also deeply fascinated by robotics 
        and electronics.
      </motion.p>

      <div className="app__about-cards">
        {
          services.map((service, index) => (
            <ServiceCard key={ service.title } index={ index } { ...service } />
          ))
        }
      </div>
    </>
  )
}

export default About