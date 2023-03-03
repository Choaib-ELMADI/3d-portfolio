import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { navLinks } from '../constants'
import { logotransparent, menu, close } from '../assets'

import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__nav'>
      <div className='app__nav-main'>
        <Link 
          to="/"
          className='app__nav-home'
          onClick={ () => {
            setActive("");
            window.scrollTo(0, 0);
          }
          }
        >
          <img src={ logotransparent } alt="logo" className='app__nav-logo' />
        </Link>

        <ul className='app__nav-links'>
          {
            navLinks.map((link) => (
              <li 
                key={ link.id }
                className={ active === link.title ? 'active' : '' }
                onClick={ () => setActive(link.title) }
              >
                <a href={`#${ link.id }`}>
                  { link.title }
                </a>
              </li>
            ))
          }
        </ul>

        <div className="app__nav-links-small">
          <img 
            src={ !toggle ? menu : close } 
            alt='menu'
            onClick={ () => setToggle(!toggle) }
          />
        </div>

        { toggle &&
          <ul className='app__nav-links small'>
            {
              navLinks.map((link) => (
                <li 
                  key={ link.id }
                  className={ active === link.title ? 'active' : '' }
                  onClick={ () => {
                    setToggle(!toggle)
                    setActive(link.title);
                  }
                  }
                >
                  <a href={`#${ link.id }`}>
                    { link.title }
                  </a>
                </li>
              ))
            }
          </ul>
        }
      </div>
    </nav>
  )
}

export default Navbar