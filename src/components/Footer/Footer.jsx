import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
  return (
    <>
    <footer id="footer" className="footer">

<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center text-center">
      
    </div>
  </div>
</div>

<div className="container footer-top">
  <div className="row gy-4">
    <div className="col-lg-4 col-md-6 footer-about">
      <Link to="index.html" className="d-flex align-items-center">
        <span className="sitename"> Nile Tax Services</span>
      </Link>
      <div className="footer-contact pt-3">
        <p>Dumfries, VA, United States, 22025</p>
        <p>Manassas Park, VA · Woodbridge, VA · Prince William County, VA · Dumfries, VA · Montclair, VA</p>
        <p className="mt-3"><strong>Phone:</strong> <span>+1 571-306-9039</span></p>
        <p><strong>Email:</strong> <span>admin@nilefinancialservices.com</span></p>
      </div>
    </div>

    <div className="col-lg-2 col-md-3 footer-links">
      <h4>Useful Links</h4>
      <ul>
        <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link> </li>  
        <li><i className="bi bi-chevron-right"></i> <Link to="/about">About us</Link> </li>
        <li><i className="bi bi-chevron-right"></i> <Link to="/services">Services</Link> </li>
        <li><i className="bi bi-chevron-right"></i> <Link to="/contact">Contact us</Link> </li>
        <li><i className="bi bi-chevron-right"></i> <Link to="/faq">FAQ</Link> </li>

      </ul>
    </div>

    <div className="col-lg-2 col-md-3 footer-links">
      <h4>Our Services</h4>
      <ul>
        <li><i className=""></i> Bookkeeping</li>
        <li><i className=" "></i> Business Consulting</li>
        <li><i className=" "></i> Audit Representation</li>
        <li><i className=" "></i> Financial Advisory</li>
        <li><i className=" "></i> Tax Preparation</li>
        <li><i className=" "></i> Tax Planning</li>

      </ul>
    </div>

    <div className="col-lg-4 col-md-12">
      <h4>Follow Us</h4>
      <p> connected with us through our social media channels for the latest updates and insights.</p>
      <div className="social-links d-flex">
      <Link  to=""><i className="bi bi-twitter-x"></i></Link> 
      <Link  to=""><i className="bi bi-facebook"></i></Link>
      <Link  to=""><i className="bi bi-instagram"></i></Link>
      <Link  to=""><i className="bi bi-linkedin"></i></Link>
      </div>
      <br/> 
      <br/>
      <Link  to="/pp">Privacy Policy</Link>

    </div>

  </div>
</div>

<div className="container copyright text-center mt-4">
  {/* <p>© <span>Copyright</span> <strong className="px-1 sitename">BizLand</strong> <span>All Rights Reserved</span></p> */}
  <p>&copy; 2025 Nile Tax Services. All rights reserved.</p>
      
  <div className="credits">
    {/* All the links in the footer should remain intact. */}
    {/* You can delete the links only if you've purchased the pro version. */}
    {/* Licensing information: https://bootstrapmade.com/license/ */}
    {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
    Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
  </div>
</div>

</footer>

      </>
  );
}

export default Footer;
