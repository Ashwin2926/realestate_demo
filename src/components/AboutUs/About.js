import React from "react";
import AboutImage from '../../assets/about.jpg';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2 className="text-center fw-bold mb-4">About Us</h2>

      {/* First Row */}
      <div className="row align-items-center mb-5">
        {/* Image Column */}
        <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <div className="image-wrapper">
            <img
              src={AboutImage} 
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Text Column */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">What Capital Stay Rentals Offers</h3>
          <p>
            Capital Stay provides full-service property management, seamless guest communication, and advanced revenue management. Our user-friendly portal allows landlords to oversee their properties effortlessly.
          </p>
          <p>
            Guests enjoy an intuitive booking experience with instant confirmations and secure payments. We offer personalized concierge services and 24/7 customer support for a stress-free stay.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="row align-items-center">
        <div className="col-md-12">
          <h3 className="fw-bold mb-3">Why Choose Capital Stay Holiday Homes?</h3>
          <p>
            Holiday homes provide spacious, home-like comfort, often featuring more amenities than traditional hotels. This makes them ideal for families and groups seeking cost-effective accommodations.
          </p>
          <p>
            Nestled in scenic locations, from beachfront villas to mountain retreats, our properties offer unique stays beyond conventional hotel options. Guests can experience local culture authentically, discovering hidden gems.
          </p>
          <p>
            Enjoy complete privacy and flexibility—set your own schedule, cook meals, and unwind at your own pace. Holiday homes offer the perfect blend of comfort, affordability, and exclusivity for travelers, while also providing property owners with a lucrative investment opportunity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
