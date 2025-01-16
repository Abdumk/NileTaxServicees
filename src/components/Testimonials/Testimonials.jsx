import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>What our clients say about us</p>
        </div>
        <div className="testimonials-list" data-aos="fade-up" data-aos-delay="100">
          <ul>
            <li>"Nile Tax Services helped me save a lot on my taxes!" - John Doe</li>
            <li>"Professional and reliable service." - Jane Smith</li>
            <li>"Highly recommend for business tax needs." - Bob Johnson</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;