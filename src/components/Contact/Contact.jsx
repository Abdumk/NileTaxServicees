import React from 'react'
import TawkToWidget from '../../services/TawkToWidget'
import { Link } from 'react-router-dom';

 

function Contact() {
  return (
    <section id="contact" className="contact section">
        <TawkToWidget />

  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Contact</h2>
    <p><span>Need Help?</span> <span className="description-title"> <p>Get in touch with us for more information</p></span></p>
  </div>{/* End Section Title */}

  <div className="container" data-aos="fade-up" data-aos-delay="100">

    <div className="row gy-4">

      <div className="col-lg-5">

        <div className="info-wrap">
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>4128 ASHMERE CIR,MONTCLAIR VA 22025</p>
            </div>

            
          </div>{
          /* End Info Item */}
 <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Service Area</h3>
              <p>Alexandria, VA · Fairfax, VA · Washington, DC · Maryland</p> 
            </div>
          </div>


{/*End info item */}
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <i className="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <p className="mt-3"><strong>Phone:</strong> 
              <span>+1 571-306-9039</span> <Link to="tel:+15713069039" className="ms-2">
                            <i className="bi bi-telephone-fill"></i> {/* Bootstrap icon */}
                           </Link></p>
           
            </div>
          </div>{/* End Info Item */}

          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p className="mt-3"><strong>Email:</strong> 
              <span>admin@nilefinancialservices.com</span>
              <Link to="mailto:admin@nilefinancialservices.com"className="ms-2"><i className="bi bi-envelope "></i> </Link> </p>
            </div>
          </div>{/* End Info Item */}

         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24886.135354122882!2d-77.46986866775732!3d38.76904965256095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65b73e923b1b9%3A0xa7bc0b3cef6f871c!2sManassas%20Park%2C%20VA%2020111!5e0!3m2!1sen!2sus!4v1737069085464!5m2!1sen!2sus" 
            frameBorder="0" 
            style={{ border: 0, width: '100%', height: '270px' }}
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">

           </iframe>
        </div>
      </div>

    </div>
  </div>

</section>

  )
}

export default Contact