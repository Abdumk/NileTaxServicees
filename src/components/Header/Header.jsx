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
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Services
          </li>
          <li>
           Contact us
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header