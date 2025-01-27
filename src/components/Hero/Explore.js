import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Explore.css"; // Import CSS for styles
import image1 from '../../image1.jpg';

function ExploreOptionsPage() {
  const locations = [
    {
      name: "Downtown Dubai",
      description:
        "Dubai Downtown is a vibrant, modern district known for its iconic landmarks, luxury shopping, and bustling nightlife, featuring the Burj Khalifa, Dubai Mall, and Dubai Fountain.",
      image: image1,
    },
    {
      name: "Dubai Marina",
      description:
        "Dubai Marina is a luxurious waterfront district known for its stunning skyline, upscale dining, shopping, and vibrant nightlife.",
      image: image1,
    },
    {
      name: "Jumeirah Village Circle",
      description:
        "Jumeirah Village Circle is a tranquil residential community in Dubai offering a blend of modern villas, townhouses, and apartments with lush green spaces and family-friendly amenities.",
      image: image1,
    },
    {
      name: "Business Bay",
      description:
        "Business Bay is a bustling commercial hub featuring high-rise offices, residential buildings, and luxury hotels along the Dubai Canal, catering to businesses and professionals.",
      image: image1,
    },
  ];

  return (
    <div className="explore-page container-fluid py-5">
      <main>
        <h2 className="text-center fw-bold mb-5">Holiday Homes Dubai: Explore Your Options</h2>
        <div className="row justify-content-center">
          {locations.map((location, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card explore-card h-100 shadow-sm">
                <div className="image-wrapper">
                  <img src={location.image} className="card-img-top" alt={location.name} />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{location.name}</h5>
                  <p className="card-text text-muted">{location.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ExploreOptionsPage;
