import React from 'react'
import './Miniheader.css'

function Miniheader() {
  return (
    <header id="header" class="header sticky-top">
    <div className="topbar d-flex align-items-center">
  <div className="container d-flex justify-content-center justify-content-md-between">
    <div className="contact-info d-flex align-items-center">
      <i className="bi bi-envelope d-flex align-items-center">
        <a href="mailto:contact@example.com">admin@nilefinancialservices.com</a>
      </i>
      <i className="bi bi-phone d-flex align-items-center ms-4">
        <span>+1 571-306-9039</span>
      </i>
    </div>
    <div className="social-links d-none d-md-flex align-items-center">
      <a href="#" className="twitter">
        <i className="bi bi-twitter-x"></i>
      </a>
      <a href="#" className="facebook">
        <i className="bi bi-facebook"></i>
      </a>
      <a href="#" className="instagram">
        <i className="bi bi-instagram"></i>
      </a>
      <a href="#" className="linkedin">
        <i className="bi bi-linkedin"></i>
      </a>
    </div>
  </div>
</div>
</header>

  )
}

export default Miniheader