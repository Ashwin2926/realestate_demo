import React from "react";
import AboutImage from '../../pic2.jpg';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2 className="text-center fw-bold mb-5">About Us</h2>

      {/* First Row */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0 image-wrapper">
          <img
            src={AboutImage} // Replace with actual image URL
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">What Capital Stay Rentals Offers</h3>
          <p>
            Capital Stay offers a comprehensive management service, guest communication, pricing & revenue management, and a user-friendly online portal where landlords can manage their properties. To our guests, we deliver a seamless booking experience with instant booking confirmation and secure payment options.
          </p>
          <p>
            We provide personalized guest services, tailoring experiences such as concierge assistance and local activities. Our round-the-clock customer support ensures a stress-free experience by addressing any queries or issues during their stay.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="row align-items-center">
        <div className="col-md-12 order-md-1">
          <h3 className="fw-bold mb-3">Why Capital Stay Holiday Homes is a Perfect Choice</h3>
          <p>
            Holiday homes offer home-like comfort, often providing more space and amenities than traditional hotel rooms. This allows guests to enjoy a more comfortable and personalized experience. Renting a holiday home is cost-effective for families or groups, as it can be more economical than booking multiple hotel rooms. Additionally, kitchen facilities help save on dining costs.
          </p>
          <p>
            Holiday homes are located in unique, scenic settings, from beachside villas to mountain cabins, offering travelers a chance to stay in places that may not have hotel options. Staying in a holiday home provides an authentic local experience, allowing guests to immerse themselves in the local culture and discover hidden gems not highlighted in typical tourist guides.
          </p>
          <p>
            Guests also benefit from privacy and flexibility, setting their own schedules, cooking meals, and enjoying leisure activities at their own pace. Overall, holiday homes offer a blend of comfort, cost-effectiveness, and unique experiences for travelers while providing property owners with a lucrative and flexible investment opportunity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
