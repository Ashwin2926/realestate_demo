import React from "react";
import card1 from "../../image1.jpg"; // Ensure the path is correct
import card2 from "../../image2.jpg";
import card3 from "../../image2.jpg";
import card4 from "../../image1.jpg";
import card5 from "../../image2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <div className="container my-5">
      <h3 className="text-center fw-bold mb-4">
        Find spaces that suit your style
      </h3>
      <div
        className="d-flex flex-wrap justify-content-center gap-3"
        style={{
          scrollSnapType: "x mandatory",
          overflowX: "auto",
          overflowY: "hidden",
          padding: "10px",
        }}
      >
        {spaces.map((space, index) => (
          <div
            key={index}
            className="card border-0 shadow-sm"
            style={{
              width: "calc(100% - 20px)", // Full width for small screens
              maxWidth: "250px", // Limit card width for larger screens
              scrollSnapAlign: "center",
              flex: "0 0 auto",
            }}
          >
            <div className="image-container">
              <img
                src={space.image}
                className="card-img-top rounded image-hover"
                alt={space.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">{space.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StyleSpaces;
