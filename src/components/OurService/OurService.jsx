import React from 'react'

function OurService() {
  return (
    <section id="services" className="services section">

  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Our Services</h2>
    <p><span>Check Our</span> <span className="description-title">Services</span></p>
  </div>{/* End Section Title */}

  <div className="container">
    <div className="row gy-4">
      

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-graph-up"></i>
          </div>
          <div  className="stretched-link">
            <h3>Tax Planning & Consultation</h3>
          </div>
          <p> Professional guidance to reduce tax liabilities and maximize financial outcomes through strategic planning and advice.</p>
        </div>
      </div>{/* End Service Item */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-journal"></i>
          </div>
          <div className="stretched-link">
            <h3>Bookkeeping/Accounting</h3>
          </div>
          <p>Precise financial management, tracking income, expenses, and accounts to maintain accurate business records.</p>
        </div>
      </div>{/* End Service Item */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-briefcase"></i>
          </div>
          <div className="stretched-link">
            <h3>E-file & Fast Refunds</h3>
          </div>
          <p> Reliable electronic tax filing for faster processing and quick access to refunds directly from tax authorities.
          </p>
        </div>
      </div>{/* End Service Item */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-check-circle"></i>
          </div>
          <div className="stretched-link">
            <h3>Affordable Rates & Personalized Service</h3>
          </div>
          <p>Budget-friendly financial services customized to meet individual and business needs with care and precision.</p>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-file-earmark-text"></i>
          </div>
          <div  className="stretched-link">
            <h3>Individual & Business Tax Preparation</h3>
          </div>
          <p>Expert tax preparation services tailored to individuals and businesses, ensuring accurate and compliant filings.</p>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-briefcase"></i>
          </div>
          <div className="stretched-link">
            <h3>Business Consulting</h3>
          </div>
          <p>Expert advice to help businesses improve operations, financial performance, and growth strategies.</p>
        </div>
      </div>{/* End Service Item */}
       
      
    </div>
  </div>

</section>

  )
}

export default OurService