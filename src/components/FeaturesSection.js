import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeadset, FaWifi, FaBook, FaClock, FaShieldAlt, FaGem } from "react-icons/fa";
import Pic from "../image2.jpg";

const FeaturesSection = () => {
  return (
    <section className="features-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h2 className="fw-bold text-primary mb-3">Peace of Mind with Every Booking</h2>
            <p className="text-muted">
              From fresh towels to late checkout, our app puts you in control.
            </p>
            <div className="row gy-4 mt-4">
              {/* Feature Cards */}
              {[
                { icon: <FaHeadset />, title: "24/7 Customer Service", desc: "We’re always on hand to help." },
                { icon: <FaWifi />, title: "One-tap WiFi Access", desc: "Free WiFi access in every home." },
                { icon: <FaBook />, title: "Community Guides", desc: "Find out what to do and where to go." },
                { icon: <FaClock />, title: "Request Late Checkout", desc: "We’re flexible to fit your needs." },
                { icon: <FaShieldAlt />, title: "Peace of Mind", desc: "Book with the Primestay Promise." },
                { icon: <FaGem />, title: "Carefully Vetted Homes", desc: "Our experts vet every single rental." },
              ].map((feature, index) => (
                <div className="col-6 d-flex" key={index}>
                  <div className="icon bg-primary text-white rounded-circle p-3 me-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{feature.title}</h6>
                    <p className="small text-muted">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6">
            <div className="image-wrapper rounded shadow overflow-hidden">
              <img
                src={Pic}
                alt="Family enjoying the stay"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .features-section {
          background: #f9f9f9;
        }
        .features-section .icon {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .features-section .image-wrapper img {
          border-top-left-radius: 30%;
          object-fit: cover;
        }
        .features-section .image-wrapper {
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
