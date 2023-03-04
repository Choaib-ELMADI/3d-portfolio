import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'

import { experiences } from '../constants'
import { SectionWrapper } from '../hoc/index'
import { textVariant } from '../utils/motion'
import './Experience.css'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1d1836',
      color: '#fff'
    }}
    contentArrowStyle={{
      borderRight: '7px solid #aaa6c3'
    }}
    date={ experience.date }
    iconStyle={{
      background: experience.iconBg
    }}
    icon={
      <div>
        <img 
          src={ experience.icon } 
          alt={ experience.company_name } 
          style={{
            width: '80%',
            height: '80%',
            objectFit: 'cover',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
    }
  >
    <h3 className='app__timeline-title'>{ experience.title }</h3>
    <p 
      style={{ 
        margin: 0,
        color: '#aaa6c3'
     }}
    >
      { experience.company_name }
    </p>
    <ul
      style={{
        marginTop: '.5rem'
      }}
    >
      {
        experience.points.map((point, i) => (
          <li
            key={ `experience-point-${ i }` }
            style={{
              marginLeft: '1.25rem',
              fontSize: '14px'
            }}
          >
            { point }
          </li>
        ))
      }
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div
        variants={ textVariant() }
        className='app__about-intro'
        style={{
          marginTop: '4rem',
          textAlign: 'center'
        }}
      >
        <p>What I have done so far</p>
        <h1>Work Experience.</h1>
      </motion.div>

      <div className='app__timeline'>
        <VerticalTimeline>
          {
            experiences.map((exp, i) => (
              <ExperienceCard key={ i } experience={ exp } />
            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")