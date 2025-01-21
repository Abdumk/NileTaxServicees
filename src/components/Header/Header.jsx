import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Miniheader from '../Miniheader/Miniheader';
import logo from '../../assets/images/nileblacklogo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Miniheader />
      <header>
        <div className="logo">
          <Link to="/" onClick={scrollToTop}>
            <img src={logo} alt="Nile Tax Services Logo" />
          </Link>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav ref={menuRef} className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li>
              <Link to="/" onClick={() => { closeMenu(); scrollToTop(); }}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => { closeMenu(); scrollToTop(); }}>About us</Link>
            </li>
            <li>
              <Link to="/services" onClick={() => { closeMenu(); scrollToTop(); }}>Services</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => { closeMenu(); scrollToTop(); }}>Contact us</Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => { closeMenu(); scrollToTop(); }}>FAQ?</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;