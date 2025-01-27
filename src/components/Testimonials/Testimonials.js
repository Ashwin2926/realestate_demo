import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";
import profile from '../../pic1.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Found Capital Stay through a recommendation from my friend who stayed a year ago.",
      name: "Lillian Smith",
      image: profile,
      stars: 5,
    },
    {
      text: "Stayed for a month during/in-between my house purchase, was excellent.",
      name: "John Donn",
      image: profile, // Replace with actual image URL
      stars: 4,
    },
    {
      text: "Tom did a great job helping me find exactly what I was looking for in a home.",
      name: "Anthony Scotsman",
      image: profile, // Replace with actual image URL
      stars: 5,
    },
    {
      text: "Capital Stay is fantastic. The service exceeded my expectations.",
      name: "Sandra Wilson",
      image: profile, // Replace with actual image URL
      stars: 4,
    },
    {
      text: "Great experience! Will definitely use their service again.",
      name: "Michael Lee",
      image: profile, // Replace with actual image URL
      stars: 5,
    },
    {
      text: "Great experience! Will definitely use their service again.",
      name: "Ashwin Lee",
      image: profile, // Replace with actual image URL
      stars: 5,
    },
  ];

  return (
    <section className="py-5 bg-light testimonials">
      <div className="container">
        <h2 className="text-center mb-5">What They're Saying About Us</h2>
        <Carousel interval={5000} indicators={false}>
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
            <Carousel.Item key={i}>
              <div className="row g-4 justify-content-center">
                {testimonials.slice(i * 2, i * 2 + 2).map((testimonial, index) => (
                  <div className="col-md-5" key={index}>
                    <div className="card testimonial-card">
                      <div className="card-body text-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-circle mb-3"
                          width="80"
                          height="80"
                        />
                        <p className="fst-italic mb-2">"{testimonial.text}"</p>
                        <div className="mb-2">
                          {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                            <i key={starIndex} className="bi bi-star-fill text-warning"></i>
                          ))}
                          {Array.from({ length: 5 - testimonial.stars }).map((_, starIndex) => (
                            <i key={starIndex} className="bi bi-star text-muted"></i>
                          ))}
                        </div>
                        <p className="fw-bold mb-0">- {testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
