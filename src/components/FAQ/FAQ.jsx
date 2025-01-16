import React from 'react';
import './FAQ.css'; // Import the CSS file for additional styling

function FAQ() {
  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services</p>
        </div>
        <div className="faq-list" data-aos="fade-up" data-aos-delay="100">
          <ul>
            <li>
              <i className="bi bi-question-circle"></i>
              <a data-bs-toggle="collapse" className="collapse" href="#faq1">What services do you offer?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></a>
              <div id="faq1" className="collapse show" data-bs-parent=".faq-list">
                <p>
                  We offer comprehensive tax solutions, expert financial advisory, business consulting, and bookkeeping and accounting services.
                </p>
              </div>
            </li>
            <li>
              <i className="bi bi-question-circle"></i>
              <a data-bs-toggle="collapse" href="#faq2" className="collapsed">How can I contact you?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></a>
              <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                <p>
                  You can contact us via phone at +1 571-306-9039 or email at admin@nilefinancialservices.com. You can also visit our contact page for more information.
                </p>
              </div>
            </li>
            <li>
              <i className="bi bi-question-circle"></i>
              <a data-bs-toggle="collapse" href="#faq3" className="collapsed">What is your refund policy?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></a>
              <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Our refund policy is designed to ensure customer satisfaction. Please contact us directly for more details about our refund policy.
                </p>
              </div>
            </li>
            <li>
              <i className="bi bi-question-circle"></i>
              <a data-bs-toggle="collapse" href="#faq4" className="collapsed">Do you offer online consultations?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></a>
              <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Yes, we offer online consultations to accommodate our clients' needs. Please contact us to schedule an appointment.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FAQ;


// import React from 'react'
// import aboutimg from '../../assets/images/ab3.jpg'
// import aboutimg from '../../assets/images/king.jpg'


// function About() {
//   return (
//     <section id="about" className="about section light-background">

//   {
//   <div className="container section-title" data-aos="fade-up">
//     <h2>About</h2>
//     <p><span>Find Out More</span> <span className="description-title">About Us</span></p>
//   </div>

//   <div className="container">
//     <div className="row gy-3">

//       <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
//         <img src={aboutimg} alt="" className="img-fluid" />
//       </div>

//       <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
//         <div className="about-content ps-0 ps-lg-3">
//         <h3>Our Purpose</h3>
//         <p className="fst-italic">
//                 At Nile Tax Services, our mission is to provide comprehensive tax solutions and financial advice to help you achieve your goals. Our experienced team is committed to delivering high-quality services tailored to your needs.
//               </p>
//           <ul>
//             <li>
//               <i className="bi bi-diagram-3"></i>
//               <div>
//                 <h4>Ullamco laboris nisi ut aliquip consequat</h4>
//                 <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
//               </div>
//             </li>
//             <li>
//               <i className="bi bi-fullscreen-exit"></i>
//               <div>
//                 <h4>Magnam soluta odio exercitationem reprehenderi</h4>
//                 <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
//               </div>
//             </li>
//           </ul>
//           <p>
//             Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum
//           </p>
//         </div>
//       </div>

//     </div>
//   </div>

// </section>

//   )
// }

// export default About