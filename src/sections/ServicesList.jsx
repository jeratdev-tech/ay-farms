// ServicesList.js
import React from "react";
import "./ServicesList.css"; // Import your CSS file

const services = [
  {
    label: "Crop Farming",
    subtext:
      " - We specialize in growing a variety of crops using innovative and sustainable farming methods.",
    subtext1:
      "- Our large-scale operations ensure high yields and quality produce.",
  },
  {
    label: "Loan Issuance",
    subtext:
      " - Eligibility Criteria: Small-scale farmers with proven potential",
    subtext1:
      " - Application Process: Simple steps to apply online or at our office.",
    subtext2:
      " - Benefits and Terms: Low-interest rates, flexible repayment options.",
  },
  {
    label: "Animal Rearing",
    subtext: "- Types of Animals: Cattle, poultry, and goats.",
    subtext1: "- Farming Practices: High standards of animal care and hygiene.",
    subtext2:
      "- Market Availability: Regular supply to local and regional markets.",
  },
  {
    label: "Training",
    subtext:
      "- Programs Offered: Modern farming techniques, business management, and more.",
    subtext1:
      "- Schedule and Duration: Monthly sessions, each lasting 2 weeks.",
    subtext2:
      "- Registration Process: Online registration or visit our office.",
  },
  {
    label: "Agricultural Investment",
    subtext:
      " - Opportunities Available: Investment in crop production, livestock, and infrastructure.",
    subtext1:
      " - Potential Returns: Competitive returns with detailed financial reports.",
    subtext2:
      " - How to Get Started: Contact us to learn more about investment opportunities.",
  },
];

const ServicesList = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h2 className="service-label">{service.label}</h2>
          <p className="service-subtext">{service.subtext}</p>
          <p className="service-subtext">{service.subtext1}</p>
          {service.subtext2 && (
            <p className="service-subtext">{service.subtext2}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
