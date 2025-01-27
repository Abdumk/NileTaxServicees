import React from 'react';
import aboutimg from '../../assets/images/king.jpg';
import './About.css'; // Import the CSS file for additional styling

import Testimonials from './../Testimonials/Testimonials';

function About() {
  return (
    <>
    <section id="about" className="about section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p><span>Find Out More</span> <span className="description-title">About Us</span></p>
      </div>{/* End Section Title */}

      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src={aboutimg} alt="About Us" className="img-fluid" />
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="about-content ps-0 ps-lg-3">
              <h3>Introduction</h3>
              <p className="fst-italic">
                Welcome to Nile Financial Services. We are dedicated to providing comprehensive tax solutions and financial advice to help you achieve your goals. Our experienced team is committed to delivering high-quality services tailored to your needs.
              </p>
              <h3>Our Purpose</h3>
              <p className="fst-italic">
                At Nile Financial Services, our mission is to provide comprehensive tax solutions and financial advice to help you achieve your goals. Our experienced team is committed to delivering high-quality services tailored to your needs.
              </p>
              <ul>
                <li>
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <h4>Individual & Business Tax Preparation</h4>
                    <p> Accurate tax preparation services for individuals and businesses, ensuring compliance and maximizing outcomes.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-fullscreen-exit"></i>
                  <div>
                    <h4>Bookkeeping/Accounting</h4>
                    <p> Reliable bookkeeping and accounting services to keep financial records organized and up-to-date.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-briefcase"></i>
                  <div>
                    <h4>E-file & Fast Refunds</h4>
                    <p>Quick and secure e-filing with fast tax refunds for smoother and faster processing.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-book"></i>
                  <div>
                    <h4>Affordable Rates & Personalized Service</h4>
                    <p>Cost-effective, personalized services tailored to meet your unique financial needs.
                    </p>
                  </div>
                </li>
             
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <Testimonials /> */}
    <Testimonials />

    </>
  );
}

export default About;