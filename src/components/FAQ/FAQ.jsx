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
              <a data-bs-toggle="collapse" className="collapsed" href="#faq1">
                What services do you offer?
                <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </a>
              <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                <p>
                  We offer comprehensive tax solutions, expert financial advisory, business consulting, and bookkeeping and accounting services.
                </p>
              </div>
            </li>
            <li>
              <i className="bi bi-question-circle"></i>
              <a data-bs-toggle="collapse" className="collapsed" href="#faq2">
                How can I contact you?
                <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </a>
              <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                <p>
                  You can contact us via phone at +1 571-306-9039 or email at admin@nilefinancialservices.com. You can also visit our contact page for more information.
                </p>
              </div>
            </li>
            <li>
              <i className="bi bi-question-circle"></i>
              <a data-bs-toggle="collapse" className="collapsed" href="#faq3">
                What is your refund policy?
                <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </a>
              <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Our refund policy is designed to ensure customer satisfaction. Please contact us directly for more details about our refund policy.
                </p>
              </div>
            </li>
            <li>
              <i className="bi bi-question-circle"></i>
              <a data-bs-toggle="collapse" className="collapsed" href="#faq4">
                Do you offer online consultations?
                <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </a>
              <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Yes, we offer online consultations to accommodate our clients' needs. Please contact us to schedule an appointment.
                </p>
              </div>
            </li>
            <li>
              <i className="bi bi-question-circle"></i>
              <a data-bs-toggle="collapse" className="collapsed" href="#faq5">
                How do I schedule an appointment?
                <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </a>
              <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  You can schedule an appointment by contacting us via phone or email. We will work with you to find a convenient time for your consultation.
                </p>
              </div>
            </li>
            <li>
              <i className="bi bi-question-circle"></i>
              <a data-bs-toggle="collapse" className="collapsed" href="#faq6">
                What are your office hours?
                <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </a>
              <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Our office hours are Monday to Friday, 9 AM to 5 PM. We are also available for appointments outside of these hours upon request.
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

