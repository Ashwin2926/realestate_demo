

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import discover from "../../assets/discover/discover.jpg";
import discover2 from "../../assets/discover/discover2.jpg";
import discover3 from "../../assets/discover/discover3.jpg";
import discover4 from "../../assets/discover/discover4.jpg";
import "./Explore.css"; // Scoped styles

function ExploreOptionsPage() {
  const locations = [
    {
      name: "Downtown Dubai",
      description:
        "A vibrant district with iconic landmarks, luxury shopping, and an energetic nightlife scene.",
      image: discover,
    },
    {
      name: "Dubai Marina",
      description:
        "A stunning waterfront destination featuring upscale dining, shopping, and breathtaking skyline views.",
      image: discover2,
    },
    {
      name: "Jumeirah Village Circle",
      description:
        "A serene residential community with modern villas, lush greenery, and family-friendly amenities.",
      image: discover3,
    },
    {
      name: "Business Bay",
      description:
        "A dynamic commercial hub with luxury hotels, high-rise offices, and scenic canal views.",
      image: discover4,
    },
  ];

  return (
    <div className="explore-options container-fluid py-5">
      <h2 className="text-center explore-options-heading">
        Discover Holiday Homes in Dubai
      </h2>
      <div className="row justify-content-center">
        {locations.map((location, index) => (
          <motion.div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="explore-options-card">
              <div className="explore-options-image">
                <img src={location.image} alt={location.name} loading="lazy" />
              </div>
              <div className="explore-options-content">
                <h5>{location.name}</h5>
                <p>{location.description}</p>
                <button className="explore-options-btn">Explore</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ExploreOptionsPage;

