import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeadset, FaWifi, FaBook, FaClock, FaShieldAlt, FaGem } from "react-icons/fa";
import Pic from "../../image2.jpg";
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
    <section className="features-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h2 className="fw-bold text-black mb-3">Peace of Mind with Every Booking</h2>
            <p className="text-muted">
              From fresh towels to late checkout, our app puts you in control.
            </p>
            <div className="divider"></div>
            <div className="row gy-4 mt-4">
              {features.map((feature, index) => (
                <div className="col-6" key={index}>
                  <div className="card p-3 shadow-sm border-0 rounded-3">
                    <div className="icon mb-3">{feature.icon}</div>
                    <h6 className="mb-1">{feature.title}</h6>
                    <p className="small text-muted">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6">
            <div className="image-wrapper">
              <img
                src={Pic}
                alt="Family enjoying the stay"
                className="img-fluid"
              />
              <div className="image-overlay">
                <h3 style={{color: "#fff"}}>Your Trusted Partner in Luxury Rentals</h3>
                <button className="btn btn-primary px-4 py-2 rounded-pill shadow-sm mt-3">Explore Rentals</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anemities;
