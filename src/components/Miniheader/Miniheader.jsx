import React from 'react'
import './Miniheader.css'
import { Link } from 'react-router-dom';

function Miniheader() {
  return (
    <header id="header" class="header sticky-top">
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
      <Link to="#" className="twitter">
        <i className="bi bi-twitter-x"></i>
      </Link>
      <Link to="#" className="facebook">
        <i className="bi bi-facebook"></i>
      </Link>
      <Link to="#" className="instagram">
        <i className="bi bi-instagram"></i>
      </Link>
      <Link to="#" className="linkedin">
        <i className="bi bi-linkedin"></i>
      </Link>
    </div>
  </div>
</div>
</header>

  )
}

export default Miniheader