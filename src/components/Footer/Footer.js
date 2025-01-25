import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiAmericanexpress, SiTrustpilot } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="brand">
            <h5>Capital Stay</h5>
            <p>Your Dubai Home | Your London Home</p>
          </div>
          <p>
            Stay with us at one of our centrally located apartments and you'll find yourself in a unique property in an exceptional location. 
            In the heart of the city, right where you want to be, with a 24-hour host on call!
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-column">
            <h6>Explore</h6>
            <ul className="list-unstyled">
              <li>Dubai Marina</li>
              <li>Business Bay</li>
              <li>Downtown Dubai</li>
              <li>Jumeirah Beach Residence</li>
              <li>Dubailand</li>
              <li>Palm Jumeirah</li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Stay Types</h6>
            <ul className="list-unstyled">
              <li>Studio Apartments</li>
              <li>1 Bedroom Apartments</li>
              <li>2 Bedroom Apartments</li>
              <li>3 Bedroom Apartments</li>
              <li>Villas</li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Property Management</li>
              <li>Sales</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <p>Capital Stay Dubai, 4th Floor, The Binary Tower, Business Bay, Dubai</p>
          <p>+971 54 704 7913</p>
          <p>Email: <a href="mailto:hellodubai@capitalstayuae.com">hellodubai@capitalstayuae.com</a></p>
        </div>

        {/* Social and Payment Icons */}
        <div className="footer-icons">
          <div className="social-icons">
            <a href="#" className="facebook"><FaFacebookF /></a>
            <a href="#" className="instagram"><FaInstagram /></a>
            <a href="#" className="email"><FaEnvelope /></a>
            <a href="#" className="whatsapp"><FaWhatsapp /></a>
          </div>
          <div className="payment-icons">
            <div className="payment-icon visa"><SiVisa /></div>
            <div className="payment-icon mastercard"><SiMastercard /></div>
            <SiAmericanexpress />
            <SiTrustpilot />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom text-center">
          <p>&copy; {new Date().getFullYear()} Capital Stay. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
