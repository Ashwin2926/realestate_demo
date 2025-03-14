import React, { useEffect } from "react";
import letting1 from "../../assets/lettings/lettings1.jpg";
import letting2 from "../../assets/lettings/lettings2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Lettings.css"; // Updated CSS for styling

function Lettings() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="lettings-container container my-5">
      {/* Lettings Section */}
      <div className="row align-items-center mb-5 fade-in">
        <div className="col-lg-6">
          <h2 className="fw-bold section-title mb-3">Lettings</h2>
          <p className="text-muted">
            Affordable renting in key locations in Dubai. Live with us in your dream home
            for a minimum of 1 month stay. We accommodate hundreds of families, working
            professionals, and students just like you! Most of our properties come with concierge
            services.
          </p>
          <button className="btn btn-primary">View Properties</button>
        </div>
        <div className="col-lg-6">
          <div className="image-wrapper">
            <img
              src={letting1}
              alt="Lettings"
              className="img-fluid letting-image rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="gradient-divider"></div>

      {/* Stay with Us Section */}
      <div className="row align-items-center fade-in">
        <div className="col-lg-6 order-lg-2">
          <h2 className="fw-bold section-title mb-3">Stay with us</h2>
          <p className="text-muted">
            Stay with us in one of our modern apartments in fantastic tourist destinations. All
            within short distances of Dubai's key features. Efficient check-in, check-out, 24-hour
            on-call experienced host, luxury bed linens, towels, and toiletries.
          </p>
          <button className="btn btn-primary">Explore Options</button>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="image-wrapper">
            <img
              src={letting2}
              alt="Stay with us"
              className="img-fluid letting-image rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lettings;
