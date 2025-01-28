import React from "react";
import IRS from "../../assets/images/IRS2.jpg";
import './ServiceItem.css';

const ServiceItem = () => {
  return (
    <div className="service-item-container">
      <img 
        src={IRS}
        alt="Tax Preparation" 
        className="irs-image"
      />
      <div className="service-item-content">
      <h4>
                 Individual & Business Tax Preparation
                </h4>
        <p>
        As an authorized IRS e-file provider, we offer comprehensive tax preparation services for both individuals and businesses. We ensure accurate and timely filing, maximizing your deductions and minimizing your liabilities. With in-depth knowledge of tax laws and regulations, we help you navigate the complexities of tax season with ease. Trust us to handle your tax needs professionally and efficiently, giving you peace of mind.
        </p>
      </div>
    </div>
  
  );
};

export default ServiceItem;
