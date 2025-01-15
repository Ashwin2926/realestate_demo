// Testimonials.js
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Testimonials() {
  const testimonials = [
    {
      text: "Primestay made our Dubai stay unforgettable! The property was spotless, and customer service was amazing.",
      name: "John Doe",
    },
    {
      text: "The easiest booking experience I've had! Will definitely use Primestay again.",
      name: "Jane Smith",
    },
    {
      text: "Great homes and great service. I felt at home from the moment I arrived.",
      name: "Carlos Martinez",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">What Our Guests Say</h2>
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <p className="fs-5 fst-italic">"{testimonial.text}"</p>
                <p className="fw-bold">- {testimonial.name}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
