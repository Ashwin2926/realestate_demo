import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";
import profile from "../../pic1.jpg";

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
      image: profile,
      stars: 4,
    },
    {
      text: "Tom did a great job helping me find exactly what I was looking for in a home.",
      name: "Anthony Scotsman",
      image: profile,
      stars: 5,
    },
    {
      text: "Capital Stay is fantastic. The service exceeded my expectations.",
      name: "Sandra Wilson",
      image: profile,
      stars: 4,
    },
    {
      text: "Great experience! Will definitely use their service again.",
      name: "Michael Lee",
      image: profile,
      stars: 5,
    },
    {
      text: "Great experience! Will definitely use their service again.",
      name: "Ashwin Lee",
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
        <Carousel
          interval={5000}
          indicators={true}
          className="testimonials-carousel"
        >
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <div className="card testimonial-card text-center">
                  <div className="card-body">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle mb-4 profile-image"
                    />
                    <p className="testimonial-text mb-3">
                      "{testimonial.text}"
                    </p>
                    <div className="mb-3 stars">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <i
                          key={i}
                          className="bi bi-star-fill text-warning"
                        ></i>
                      ))}
                      {Array.from({ length: 5 - testimonial.stars }).map(
                        (_, i) => (
                          <i
                            key={i}
                            className="bi bi-star text-muted"
                          ></i>
                        )
                      )}
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
