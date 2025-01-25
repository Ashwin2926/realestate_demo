// Testimonials.js
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Found Capital Stay through a recommendation from my friend who stayed a year ago.",
      name: "Lillian Smith",
    },
    {
      text: "Stayed for a month during/in-between my house purchase, was excellent.",
      name: "John Donn",
    },
    {
      text: "Tom did a great job helping me find exactly what I was looking for in a home.",
      name: "Anthony Scotsman",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">What They're Saying About Us</h2>
        <Carousel interval={5000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex flex-column align-items-center text-center">
                <p className="fs-5 fst-italic">"{testimonial.text}"</p>
                <p className="fw-bold">- {testimonial.name}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
