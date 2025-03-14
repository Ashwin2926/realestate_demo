import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaHeadset, FaWifi, FaBook, FaClock, FaShieldAlt, FaGem } from "react-icons/fa";
import Pic from "../../assets/peace.jpg";
import "./Anemities.css";

const Anemities = () => {
  const features = [
    { icon: <FaHeadset />, title: "24/7 Customer Service", desc: "We’re always on hand to help." },
    { icon: <FaWifi />, title: "One-tap WiFi Access", desc: "Free WiFi access in every home." },
    { icon: <FaBook />, title: "Community Guides", desc: "Find out what to do and where to go." },
    { icon: <FaClock />, title: "Request Late Checkout", desc: "We’re flexible to fit your needs." },
    { icon: <FaShieldAlt />, title: "Peace of Mind", desc: "Book with the Primestay Promise." },
    { icon: <FaGem />, title: "Carefully Vetted Homes", desc: "Our experts vet every single rental." },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content Section */}
          <div className="col-lg-6">
            <h2 className="fw-bold">Peace of Mind with Every Booking</h2>
            <p className="text-muted">From fresh towels to late checkout, our app puts you in control.</p>
            <div className="divider"></div>
            <div className="features-grid">
              {features.map(({ icon, title, desc }, index) => (
                <motion.div 
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="feature-icon">{icon}</div>
                  <h6 className="feature-title">{title}</h6>
                  <p className="feature-desc">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6">
            <motion.div className="image-wrapper">
              <motion.img 
                src={Pic} 
                alt="Luxury Rental Home" 
                className="img-fluid "
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
           
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anemities;
