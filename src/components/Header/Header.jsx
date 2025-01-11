import React from 'react'

import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="logo.png" alt="Blog Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            About
          </li>
          <li>
        <Link to="/services">Services</Link>    
          </li>
          <li>
          <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header