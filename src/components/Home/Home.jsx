import React from 'react'
import './Home.css';
// import banner from '../../assets/images/aa3.jpg'; 
import banner from '../../assets/images/Banner4.jpg'; 
// import refundImage from '../../assets/images/Garante.jpg'; 
import refundImage from '../../assets/images/Banner.jpg'; 



import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function Home() {
  return (
    <>
        {/* <div className="home">
            <h1>Welcome to Nile Tax Service</h1>
            <p>Get your taxes done with us</p>
        </div> */}

        <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
      <div className="content">
        <h1>Welcome to Nile Tax Services</h1>
        <p>Explore our services and offerings.</p>
      </div>
 <section id="featured-services" className="featured-services section">
    <div className="container">
      <div className="row gy-4">
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-activity icon"></i>
            </div>
            <h4>
              <a href="" className="stretched-link">Comprehensive Tax Solutions</a>
            </h4>
            <p>We provide a full range of tax services to meet the needs of individuals and businesses. Our services ensure compliance with tax regulations and aim to maximize financial outcomes. Our experienced team is here to guide you.</p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-bounding-box-circles icon"></i>
            </div>
            <h4>
              <a href="" className="stretched-link">Expert Financial Advisory</a>
            </h4>
            <p>Our team offers personalized financial advice to help you achieve your financial goals and secure your future. We take the time to understand your unique financial situation and provide tailored solutions for informed decisions.</p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-calendar4-week icon"></i>
            </div>
            <h4>
              <a href="" className="stretched-link">Business Consulting</a>
            </h4>
            <p>We assist businesses in improving operations, financial performance, and growth strategies through expert consulting services. Our consultants work closely with you to identify opportunities for improvement and implement effective solutions.</p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-broadcast icon"></i>
            </div>
            <h4>
              <a href="" className="stretched-link">Bookkeeping and Accounting</a>
            </h4>
            <p>We offer accurate and efficient bookkeeping and accounting services to keep your financial records organized and up-to-date. Our services include managing accounts payable and receivable, payroll processing, and financial reporting.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
    <div className="container">
    <p>We provide comprehensive tax solutions to individuals and businesses. Our team of experienced professionals is dedicated to helping you navigate the complexities of tax regulations and maximize your financial outcomes.</p>

   <h2>  Helping is our priority</h2> 
    <p>
    This website exists to provide potential clients with information concerning our firm, low-pressure approach to personal and professional services. In Nile Financial Services LLC, We have an excellent client-retention rate, and we are extremely proud of the high-quality bookkeeping and tax filing services.
    </p>
       <h2>The Perfect Solution</h2>
<p>Please, feel free to browse our website to see the various services we are offering, as well as the many helpful resources we provide. When you are ready to learn more about what we can do for you, we encourage you to contact us.</p>

</div>
<section id="why-work-with-us" className="why-work-with-us section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Why Work With Us?</h2>
          <p>Discover the reasons to choose us as your trusted partner</p>
        </div>
        <div className="points-list" data-aos="fade-up" data-aos-delay="100">
          <ul>
            <li>
              <i className="bi bi-check-circle"></i> We deliver high-quality solutions tailored to your needs.
            </li>
            <li>
              <i className="bi bi-check-circle"></i> Our team has extensive experience across industries.
            </li>
            <li>
              <i className="bi bi-check-circle"></i> We prioritize customer satisfaction and long-term relationships.
            </li>
            <li>
              <i className="bi bi-check-circle"></i> Innovative and cost-effective services to ensure value.
            </li>
            <li>
              <i className="bi bi-check-circle"></i> Dedicated support and fast response times.
            </li>
          </ul>
        </div>
        {/* <h2>We Transform Your Problems into Creative Solutions</h2>
<p>The IRS issues more than 9 out of 10 refunds in less than 21 days. However, it’s possible your tax return may require additional review and take longer. Where’s My Refund? has the most up to date information available about your refund. The tool is updated no more than once a day so you don’t need to check more often.</p>
        <p>At Nile Tax Services, we understand that every client is unique and has specific needs. That's why we take the time to get to know you and your business, so we can provide the best possible solutions. Our team of experts is dedicated to helping you achieve your financial goals and maximize your tax savings. Whether you need help with tax planning, preparation, or representation, we have the knowledge and experience to guide you through the process. Contact us today to learn more about how we can help you succeed.</p>
        <p>You will get personalized refund information based on the processing of your tax return. The tool will provide an actual refund date as soon as the IRS processes your tax return and approves your refund.</p> */}
            {/* <h2>We Transform Your Problems into Creative Solutions</h2>
          <p>The IRS issues more than 9 out of 10 refunds in less than 21 days. However, it’s possible your tax return may require additional review and take longer. Where’s My Refund? has the most up to date information available about your refund. The tool is updated no more than once a day so you don’t need to check more often.</p>
          <p>At Nile Tax Services, we understand that every client is unique and has specific needs. That's why we take the time to get to know you and your business, so we can provide the best possible solutions. Our team of experts is dedicated to helping you achieve your financial goals and maximize your tax savings. Whether you need help with tax planning, preparation, or representation, we have the knowledge and experience to guide you through the process. Contact us today to learn more about how we can help you succeed.</p>
          <p>You will get personalized refund information based on the processing of your tax return. The tool will provide an actual refund date as soon as the IRS processes your tax return and approves your refund.</p>
          <div className="row">
            <div className="col-lg-8">
              <p>You can use Where’s My Refund to start checking on the status of your return within 24 hours after we have received your e-filed return or 4 weeks after you mail a paper return. Where’s My Refund? has a tracker that displays progress through 3 stages:</p>
              <ul>
                <li>Return Received</li>
                <li>Refund Approved</li>
                <li>Refund Sent</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <img src={refundImage} alt="Refund Tracker" style={{ height: '300px', width: '200px' }} />
            </div>
          </div> */}
                    {/* <h2>We Transform Your Problems into Creative Solutions</h2>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <img src={refundImage} alt="Refund Tracker" className="img-fluid" style={{ height: '500px', width: '450px' }} />
            </div>
            <div className="col-lg-8">
              <p>The IRS issues more than 9 out of 10 refunds in less than 21 days. However, it’s possible your tax return may require additional review and take longer. Where’s My Refund? has the most up to date information available about your refund. The tool is updated no more than once a day so you don’t need to check more often.</p>
              <p>At Nile Tax Services, we understand that every client is unique and has specific needs. That's why we take the time to get to know you and your business, so we can provide the best possible solutions. Our team of experts is dedicated to helping you achieve your financial goals and maximize your tax savings. Whether you need help with tax planning, preparation, or representation, we have the knowledge and experience to guide you through the process. Contact us today to learn more about how we can help you succeed.</p>
              <p>You will get personalized refund information based on the processing of your tax return. The tool will provide an actual refund date as soon as the IRS processes your tax return and approves your refund.</p>
              <p>You can use Where’s My Refund to start checking on the status of your return within 24 hours after we have received your e-filed return or 4 weeks after you mail a paper return. Where’s My Refund? has a tracker that displays progress through 3 stages:</p>
              <ul>
                <li>Refund Sent</li>
                <li>Return Received</li>
                <li>Refund Approved</li>
              </ul>
            </div>
          </div> */}
            <div className="transform-section">
            <h2>We Transform Your Problems into Creative Solutions</h2>
            <div className="row align-items-center">
              <div className="col-lg-4">
                <img src={refundImage} alt="Refund Tracker" className="img-fluid" />
              </div>
              <div className="col-lg-8">
                <p>The IRS issues more than 9 out of 10 refunds in less than 21 days. However, it’s possible your tax return may require additional review and take longer. Where’s My Refund? has the most up to date information available about your refund. The tool is updated no more than once a day so you don’t need to check more often.</p>
                <p>At Nile Tax Services, we understand that every client is unique and has specific needs. That's why we take the time to get to know you and your business, so we can provide the best possible solutions. Our team of experts is dedicated to helping you achieve your financial goals and maximize your tax savings. Whether you need help with tax planning, preparation, or representation, we have the knowledge and experience to guide you through the process. Contact us today to learn more about how we can help you succeed.</p>
                <p>You will get personalized refund information based on the processing of your tax return. The tool will provide an actual refund date as soon as the IRS processes your tax return and approves your refund.</p>
                <p>You can use Where’s My Refund to start checking on the status of your return within 24 hours after we have received your e-filed return or 4 weeks after you mail a paper return. Where’s My Refund? has a tracker that displays progress through 3 stages:</p>
                <ul className="refund-stages">
                  <li>Refund Sent</li>
                  <li>Return Received</li>
                  <li>Refund Approved</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default Home