import React from 'react';
import aboutimg from '../../assets/images/king.jpg';
import './About.css'; // Import the CSS file for additional styling

function About() {
  return (
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
                Welcome to Nile Tax Services. We are dedicated to providing comprehensive tax solutions and financial advice to help you achieve your goals. Our experienced team is committed to delivering high-quality services tailored to your needs.
              </p>
              <h3>Our Purpose</h3>
              <p className="fst-italic">
                At Nile Tax Services, our mission is to provide comprehensive tax solutions and financial advice to help you achieve your goals. Our experienced team is committed to delivering high-quality services tailored to your needs.
              </p>
              <ul>
                <li>
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <h4>Comprehensive Tax Solutions</h4>
                    <p>We offer a full range of tax services to meet the needs of individuals and businesses, ensuring compliance and maximizing financial outcomes.</p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-fullscreen-exit"></i>
                  <div>
                    <h4>Expert Financial Advisory</h4>
                    <p>Our team provides personalized financial advice to help you achieve your financial goals and secure your future.</p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-briefcase"></i>
                  <div>
                    <h4>Business Consulting</h4>
                    <p>We assist businesses in improving operations, financial performance, and growth strategies through expert consulting services.</p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-book"></i>
                  <div>
                    <h4>Bookkeeping and Accounting</h4>
                    <p>We offer accurate and efficient bookkeeping and accounting services to keep your financial records organized and up-to-date.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;