import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc/index'
import { technologies } from '../constants'

import './Tech.css'

const Tech = () => {
  return (
    <div className='app__techs'>
      {
        technologies.map((tech) => (
          <div className='app__tech' key={ tech.name }>
            <BallCanvas icon={ tech.icon } />
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, "")