import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function LandingPage() {
  return (
    <div className="landing-page container-fluid">
      <main className="text-center">
        <div
          className="hero-section d-flex flex-column justify-content-center align-items-center text-white"
          style={{
            height: "75vh", // Full viewport height
            backgroundImage: `url('image4.jpg')`, // Replace with actual image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "20px", // Soften edges
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" // Add subtle shadow
          }}
        >
          <h1 className="fw-bold display-4">Short-term rental homes in Dubai.</h1>
          <p className="text-white-50 mb-4 lead">
            Discover your home away from home in Dubai, ideal for both leisure and business stays.
          </p>
          <div className="search-bar d-flex justify-content-center gap-2">
            <input
              type="text"
              className="form-control w-auto"
              placeholder="Where do you want to stay?"
            />
            <input
              type="text"
              className="form-control w-auto"
              placeholder="Choose your preferred dates"
            />
            <input
              type="text"
              className="form-control w-auto"
              placeholder="Add Guests"
            />
            <button className="btn btn-warning">Search</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
