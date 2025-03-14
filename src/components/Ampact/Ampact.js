import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ampact.css";
import image from "../../image1.jpg";

const Ampact = () => {
  return (
    <div className="container-fluid p-5 raja-container">
      {/* Header Section */}
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h6 className="section-subtitle">The Raja Ampat</h6>
          <h1 className="section-title">
            The Unmatched Beauty of the Archipelago
          </h1>
        </div>
        <div className="col-lg-6">
          <p className="section-description">
            Raja Ampat, with its unparalleled natural beauty, offers a
            spectacular panoramic view of the archipelago, captivating visitors
            with its natural wonders and incredible underwater treasures.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="row mt-5 g-4 card-container">
        {/* Location Card */}
        <div className="col-md-3">
          <div className="custom-card location-card fade-in">
            <img src={image} alt="Location" className="card-image" />
            <p className="card-text">See a true location</p>
            <button className="expand-icon">⤢</button>
          </div>
        </div>

        {/* Weather Card */}
        <div className="col-md-3">
          <div className="custom-card weather-card fade-in">
            <img src={image} alt="Weather" className="card-image" />
            <div className="weather-overlay">
              <h2>32°</h2>
              <p>Sunny</p>
            </div>
            <button className="expand-icon">⤢</button>
          </div>
        </div>

        {/* Rating Card */}
        <div className="col-md-3">
          <div className="custom-card rating-card fade-in">
            <div className="avatar-group">
              {Array(4).fill().map((_, index) => (
                <img key={index} src={image} alt="User" className="avatar" />
              ))}
            </div>
            <h3>⭐ 4.6K</h3>
            <p>The most beautiful diving destinations in the world</p>
          </div>
        </div>

        {/* Beach Card */}
        <div className="col-md-3">
          <div className="custom-card island-card fade-in">
            <img src={image} alt="Beach" className="card-image" />
            <p className="card-text">
              The most beautiful beaches on the island of Papua
            </p>
            <div className="slider-nav">
              <button className="slider-btn">◀</button>
              <button className="slider-btn">▶</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ampact;
