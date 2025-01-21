import React from 'react';
import './Testimonials.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import abd from '../../assets/images/abd.png';
import abdu from '../../assets/images/abdu.jpg';    

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>What our clients say about us</p>
        </div>
        <div className="testimonials-carousel" data-aos="fade-up" data-aos-delay="100">
          <Carousel>
            <Carousel.Item>
              <div className="testimonial-item">
                <img src={abd } alt="John Doe" className="testimonial-img" />
                <p>"Nile Tax Services helped me save a lot on my taxes!"</p>
                <h4>John Doe</h4>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial-item">
                <img src={abdu}  alt="Jane Smith" className="testimonial-img" />
                <p>"Professional and reliable service."</p>
                <h4>Jane Smith</h4>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial-item">
                <img src={abd} alt="Bob Johnson" className="testimonial-img" />
                <p>"Highly recommend for business tax needs."</p>
                <h4>Bob Johnson</h4>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;