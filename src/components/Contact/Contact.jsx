import React from 'react'
import TawkToWidget from '../../services/TawkToWidget'

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
              <p>Dumfries, VA, United States, 22025</p>
            </div>

            
          </div>{
          /* End Info Item */}
 <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Service Area</h3>
              <p>Manassas Park, VA · Woodbridge, VA · Prince William County, VA · Dumfries, VA · Montclair, VA</p>
            </div>
          </div>


{/*End info item */}
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <i className="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <p>+1 571-306-9039</p>
            </div>
          </div>{/* End Info Item */}

          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>admin@nilefinancialservices.com</p>
            </div>
          </div>{/* End Info Item */}

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" 
            frameBorder="0" 
            style={{ border: 0, width: '100%', height: '270px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

    </div>
  </div>

</section>

  )
}

export default Contact