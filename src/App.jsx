import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='app__nav'>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className='app__stars'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App