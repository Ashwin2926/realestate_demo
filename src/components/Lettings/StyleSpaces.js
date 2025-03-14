import React from "react";
import card1 from "../../assets/styles/villa.jpg"; // Ensure the path is correct
import card2 from "../../assets/styles/calm.jpg";
import card3 from "../../assets/styles/water.jpg";
import card4 from "../../assets/styles/city.jpg";
import card5 from "../../assets/styles/mountains.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion"; // For animations
import "./Spaces.css"; // Add custom styles in an external file

function StyleSpaces() {
  const spaces = [
    { image: card1, title: "Villa" },
    { image: card2, title: "Calm & Elegant" },
    { image: card3, title: "Waterfront" },
    { image: card4, title: "City Center" },
    { image: card5, title: "Mountains & Landscape" },
  ];

  return (
    <div id="style-spaces"
      className="container-fluid py-5"
      style={{
        backgroundColor: "#f5f5f5", // Subtle light background to contrast blue/black
      }}
    >
      <h3 className="text-center fw-bold mb-2 modern-heading refined-heading">
         Spaces that Match Your Style
      </h3>
      <div className="spaces-grid">
        {spaces.map((space, index) => (
          <motion.div
            className="card space-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          >
            <div className="image-container">
              <img
                src={space.image}
                className="card-img-top rounded image-hover"
                alt={`Image of ${space.title}`}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="image-overlay"></div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold gradient-badge">
                {space.title}
              </h5>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default StyleSpaces;
