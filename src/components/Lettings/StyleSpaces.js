import React from "react";
import card1 from "../../image1.jpg"; // Ensure the path is correct
import card2 from "../../image2.jpg";
import card3 from "../../image2.jpg";
import card4 from "../../image1.jpg";
import card5 from "../../image2.jpg";
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
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#f5f5f5", // Subtle light background to contrast blue/black
      }}
    >
      <h3 className="text-center fw-bold mb-4 modern-heading">
        Find spaces that suit your style
      </h3>
      <div className="spaces-grid">
        {spaces.map((space, index) => (
          <motion.div
            className="card space-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="image-container">
              <img
                src={space.image}
                className="card-img-top rounded image-hover"
                alt={`Image of ${space.title}`}
                style={{ height: "200px", objectFit: "cover" }}
              />
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
