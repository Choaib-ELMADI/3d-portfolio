import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { github } from '../assets'
import { SectionWrapper } from '../hoc/index'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import './Works.css'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <Tilt className='app__project-card'>
      <motion.div
        variants={ fadeIn("up", "spring", 0.5*index, 0.75) }
        className='app__project-card-inner'
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
        >
          <img src={ image } alt="icon" />
          <div className="app__project-card-info">
            <div 
              onClick={ () => window.open(source_code_link, "_blank") }
            >
              <img src={ github } alt="github" />
            </div>
          </div>
        </div>

        <div className='app__project-desc'>
          <h3>{ name }</h3>
          <p>{ description }</p>
        </div>

        <div className='app__project-tags'>
          {
            tags.map((tag, i) => (
              <p 
                key={ `tag-${ i }` } 
                style={{
                  color: tag.color,
                }}
              >
                #{ tag.name }
              </p>
            ))
          }
        </div>
      </motion.div>
    </Tilt>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={ textVariant() }
        className='app__about-intro'
        style={{
          marginTop: '3rem',
        }}
      >
        <p>My Projects</p>
        <h1>Work.</h1>
      </motion.div>

      <motion.p
        variants={ fadeIn("", "", 0.1, 1) }
        className='app__about-text'
      >
        Following projects showcases my skills and experience through real-world 
        examples of my work. Each project is briefly described with links to code 
        repositories and live demo in it. It reflects my ability to solve complex 
        problems, work with different technologies, and manage projects effectively.
      </motion.p>

      <div className="app__project-cards">
        {
          projects.map((project, index) => (
            <ProjectCard key={ project.title } index={ index } { ...project } />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")