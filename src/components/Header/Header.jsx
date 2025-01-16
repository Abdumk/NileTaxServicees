import React from 'react'

import { Link } from 'react-router-dom';
import './Header.css'
import Miniheader from '../Miniheader/Miniheader';
import logo from '../../assets/images/logo.jpg'; 

function Header() {
  return (
    <>
    <Miniheader />
    
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Nile Tax Services Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About us</Link>
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
    </>
  )
}

export default Header