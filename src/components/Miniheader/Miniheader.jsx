import React from 'react';
import './Miniheader.css';
import { Link } from 'react-router-dom';

function Miniheader() {
  return (
    <header id="header" className="header">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <Link to="mailto:contact@example.com">admin@nilefinancialservices.com</Link>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+1 571-306-9039</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <Link to="https://twitter.com/Nilefinancials1" className="twitter" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="https://facebook.com/NILETAXSERVICES" className="facebook" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="https://instagram.com/nilefinancialservices_/" className="instagram" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="https://linkedin.com/in/king-demissie-5a882191/" className="linkedin" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link to="https://wa.me/+1 571-306-9039" className="whatsapp" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Miniheader;