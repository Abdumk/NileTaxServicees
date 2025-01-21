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
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-file-earmark-text"></i>
          </div>
          <div  className="stretched-link">
            <h3>Tax Preparation</h3>
          </div>
          <p>Assistance with preparing and filing your tax returns accurately and on time.</p>
        </div>
      </div>{/* End Service Item */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-graph-up"></i>
          </div>
          <div  className="stretched-link">
            <h3>Tax Planning</h3>
          </div>
          <p> Strategic planning to minimize tax liabilities and maximize financial benefits.</p>
        </div>
      </div>{/* End Service Item */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-journal"></i>
          </div>
          <div className="stretched-link">
            <h3>Bookkeeping</h3>
          </div>
          <p>Accurate and efficient recording of financial transactions to maintain organized and up-to-date financial records.</p>
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

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-check-circle"></i>
          </div>
          <div className="stretched-link">
            <h3>Audit Representation </h3>
          </div>
          <p> Professional representation during IRS or state tax audits to ensure compliance and resolve issues.</p>
        </div>
      </div>{/* End Service Item */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-lightbulb"></i>
          </div>
          <div className="stretched-link">
            <h3>Financial Advisory</h3>
          </div>
          {/* <p>Return your taxes with Zero Accounting services
1. Account Preparation for Business
2. Tax filling
3. Preparation of Financial report
4.Personal income tax filling & Property Tax .
5. Financial consultation

Kindly contact zero Accounting services Authorized Accounting firm located near Thimphu swimming pool.whatsapp 77370793 or 77221936</p>*/}
          <p>Personalized financial advice to help you achieve your financial goals and secure your future.</p> 
        </div>
      </div>{/* End Service Item */}
      
    </div>
  </div>

</section>

  )
}

export default OurService