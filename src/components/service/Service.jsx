import React from 'react';
import './Service.css';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Services = () => {
  return (
    <section id="services" className="services">
      <h3>Our Services</h3>
      <div className="service-grid">
        <div className="service-card">
          <HomeIcon className="service-icon" />
          <div className="service-info">
            <h4>Residential Moving</h4>
            <p>We handle all your household moving needs with care and efficiency.</p>
          </div>
        </div>
        <div className="service-card">
          <BusinessIcon className="service-icon" />
          <div className="service-info">
            <h4>Commercial Moving</h4>
            <p>Expert service for office relocations with minimal downtime.</p>
          </div>
        </div>
        <div className="service-card">
          <LocalShippingIcon className="service-icon" />
          <div className="service-info">
            <h4>Packing Services</h4>
            <p>Professional packing for all your items, from fragile to bulky.</p>
          </div>
        </div>
        <div className="service-card">
          <LocalShippingIcon className="service-icon" />
          <div className="service-info">
            <h4>Delivery Services</h4>
            <p>Professional packing for all your items, from fragile to bulky.</p>
          </div>
        </div>
        <div className="service-card">
          <LocalShippingIcon className="service-icon" />
          <div className="service-info">
            <h4> Long-Distance</h4>
            <p>Reliable and secure long-distance moving for interstate or cross-country relocations.</p>
          </div>
        </div>
        <div className="service-card">
          <LocalShippingIcon className="service-icon" />
          <div className="service-info">
            <h4>Furniture Assembly</h4>
            <p>Quick and efficient furniture assembly, no matter how complex.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
