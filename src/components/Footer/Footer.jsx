import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [isUsefulLinksOpen, setIsUsefulLinksOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const usefulLinksRef = useRef(null);
  const servicesRef = useRef(null);

  const toggleUsefulLinks = () => {
    setIsUsefulLinksOpen(!isUsefulLinksOpen);
    if (!isUsefulLinksOpen) {
      usefulLinksRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (!isServicesOpen) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center text-center">
            {/* Newsletter content */}
          </div>
        </div>
      </div>

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="/" className="d-flex align-items-center" onClick={scrollToTop}>
              <span className="sitename">Nile Tax Services</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>Dumfries, VA, United States, 22025</p>
              <p>Manassas Park, VA · Woodbridge, VA · Prince William County, VA · Dumfries, VA · Montclair, VA</p>
              <p className="mt-3"><strong>Phone:</strong> 
              <span>+1 571-306-9039</span> <Link to="tel:+15713069039" className="ms-2">
                            <i className="bi bi-telephone-fill"></i> {/* Bootstrap icon */}
                           </Link></p>
              <p className="mt-3"><strong>Email:</strong> 
              <span>admin@nilefinancialservices.com</span>
              <Link to="mailto:admin@nilefinancialservices.com"className="ms-2">
            <i className="bi bi-envelope align-items-center"></i>
           </Link> </p>
            </div>
          </div>

              
          <div className="col-lg-2 col-md-3 footer-links" ref={usefulLinksRef}>
            <h4 onClick={toggleUsefulLinks} className="dropdown-toggle">Useful Links</h4>
            <ul className={isUsefulLinksOpen ? 'open' : ''}>
              <li><i className="bi bi-chevron-right"></i> <Link to="/" onClick={scrollToTop}>Home</Link> </li>  
              <li><i className="bi bi-chevron-right"></i> <Link to="/about" onClick={scrollToTop}>About us</Link> </li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/services" onClick={scrollToTop}>Services</Link> </li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/contact" onClick={scrollToTop}>Contact us</Link> </li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/faq" onClick={scrollToTop}>FAQ</Link> </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links" ref={servicesRef}>
            <h4 onClick={toggleServices} className="dropdown-toggle">Our Services</h4>
            <ul className={isServicesOpen ? 'open' : ''}>
              <li><i className=""></i> Bookkeeping</li>
              <li><i className=" "></i> Business Consulting</li>
              <li><i className=" "></i> Audit Representation</li>
              <li><i className=" "></i> Financial Advisory</li>
              <li><i className=" "></i> Tax Preparation</li>
              <li><i className=" "></i> Tax Planning</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 footer-social">
            <h4>Follow Us</h4>
            <p>Stay connected with us through our social media channels for the latest updates and insights.</p>
            <div className="social-links d-flex">
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
              <Link to="https://wa.me/+15713069039" className="whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp"></i>
              </Link>
            </div>
            <br/> 
            <br/>
            <Link to="/pp" onClick={scrollToTop}>Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>&copy; 2025 Nile Tax Services. All rights reserved.</p>
      
      </div>
    </footer>
  );
}

export default Footer;