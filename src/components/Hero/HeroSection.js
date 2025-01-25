import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";
import "./SearchFilters.css";
import image1 from '../../image1.jpg';
import image2 from '../../image2.jpg';
import image3 from '../../image3.jpg';
import image4 from '../../image4.jpg';

function LandingPage() {
  const [currentBackground, setCurrentBackground] = useState(0);

  const backgroundImages = [
    image1, // Corrected path for public folder
    image2,
    image3,
    image4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="landing-page container-fluid">
      <main className="text-center">
        <div
          className="hero-section d-flex flex-column justify-content-center align-items-center text-white"
          style={{
            height: "75vh",
            backgroundImage: `url(${backgroundImages[currentBackground]})`,
          }}
        >
          <h1 className="fw-bold display-4">Short-term rental homes in Dubai.</h1>
          <p className="text-white-50 mb-4 lead">
            Discover your home away from home in Dubai, ideal for both leisure and business stays.
          </p>
          <div
            className="search-bar container d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 p-3"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Where do you want to stay?"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Choose your preferred dates"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Add Guests"
            />
            <button className="btn search-btn">Search</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
