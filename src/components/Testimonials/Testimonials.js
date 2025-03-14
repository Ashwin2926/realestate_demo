import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";
import profile from "../../assets/airbnb.png";
import airbnbLogo from "../../assets/airbnb.png"; // Add Airbnb logo

const Testimonials = () => {
  const testimonials = [
    {
      text: "It was a great and seamless experience. Nice, clean and cozy apartment.",
      name: "Ali Raza - February 2025",
      image: profile,
      stars: 5,
    },
    {
      text: "Really nice place.",
      name: "Nayan - March 2025",
      image: profile,
      stars: 4,
    },
    {
      text: "It was a good stay but some basic items were missing like dish washer, toaster. Rest all was good.",
      name: "Gaurav - February 2025",
      image: profile,
      stars: 5,
    },
  ];

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title text-black">
          What They're Saying About Us
        </h2>
        <Carousel interval={5000} indicators={true} className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <div className="card testimonial-card text-center">
                  <div className="card-body">
                    <div className="profile-container">
                      <img src={testimonial.image} alt={testimonial.name} className="profile-image" />
                      <img src={airbnbLogo} alt="Airbnb Logo" className="airbnb-logo" />
                    </div>
                    <p className="testimonial-text mb-3">"{testimonial.text}"</p>
                    <div className="mb-3 stars">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning"></i>
                      ))}
                      {Array.from({ length: 5 - testimonial.stars }).map((_, i) => (
                        <i key={i} className="bi bi-star text-muted"></i>
                      ))}
                    </div>
                    <h5 className="testimonial-name">- {testimonial.name}</h5>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
