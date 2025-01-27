import React from 'react';
import './Home.css';
import banner from '../../assets/images/nilebanner.png';

import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Home() {
  return (
    <>
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
      <div className="content">
        <h1 className="content-title">NILE FINANCIAL SERVICES LLC</h1>
        <p className="content-subtitle">Your Trusted Partner for Tax Preparation & Financial Solutions</p>
        <div className="contact-info">
          <p>📞 Call Now: <a href="tel:571-306-9039">571-306-9039</a></p>  <br/>
          <p>🌐 Visit us: <a href="http://www.nilefinancialservices.com" target="_blank" rel="noopener noreferrer">www.nilefinancialservices.com</a></p>
        </div>
        <div className="tax-season">
  <h3 className="tax-season-title">
    <img src="https://img.icons8.com/fluency/48/000000/tax.png" alt="Tax Icon" className="tax-icon" />
    Tax Season 2025 is Here!
  </h3>
  <p className="tax-season-text">Get your taxes done by experts you can trust!</p>
</div>
      </div>
      <section id="featured-services" className="featured-services section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>We provide</h2>
          </div>
          <div className="row gy-4">
            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-file-earmark-text"></i>
                </div>
                <h4>
                  <div className="stretched-link">Individual & Business Tax Preparation</div>
                </h4>
                <p>Our expert team provides comprehensive tax preparation services for both individuals and businesses. We ensure accurate and timely filing, maximizing your deductions and minimizing your liabilities.</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <h4>
                  <div className="stretched-link">E-file & Fast Refunds</div>
                </h4>
                <p>Experience the convenience of electronic filing with our e-file services. Get your refunds faster and securely with our efficient e-filing process, ensuring you receive your money as quickly as possible.</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-calendar-check"></i>
                </div>
                <h4>
                  <div className="stretched-link">Tax Planning & Consultation</div>
                </h4>
                <p>Our tax planning and consultation services help you strategize and plan for future tax obligations. We provide personalized advice to optimize your tax situation and ensure compliance with all regulations.</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-wallet2"></i>
                </div>
                <h4>
                  <div className="stretched-link">Affordable Rates & Personalized Service</div>
                </h4>
                <p>We offer competitive pricing for all our services without compromising on quality. Our personalized approach ensures that each client receives tailored solutions to meet their unique financial needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why-work-with-us" className="why-work-with-us section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Why Choose Us?</h2>
          </div>
          <div className="points-list row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-md-6">
              <div className="point-item">
                <i className="bi bi-check-circle"></i>
                <p>Over 10 years of experience</p>
              </div>
              <div className="point-item">
                <i className="bi bi-check-circle"></i>
                <p>Friendly, professional service</p>
              </div>
              <div className="point-item">
                <i className="bi bi-check-circle"></i>
                <p>Maximum deductions & credits to save you money</p>
              </div>
              <div className="point-item">
                <i className="bi bi-check-circle"></i>
                <p>Safe, secure, and confidential handling of your information</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section id="contact-us-today" className="contact-us-today section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Contact Us Today</h2>
          </div>
          <div className="contact-details row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-md-6">
              <div className="contact-item">
                <i className="bi bi-geo-alt"></i>
                <p>Convenient Location & Flexible Hours</p>
              </div>
              <div className="contact-item">
                <i className="bi bi-clock"></i>
                <p>Fast and Efficient Service</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
