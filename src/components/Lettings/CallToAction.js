import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import image from '../../image1.jpg';

function CallToAction() {
  return (
    <div
      className="container-fluid my-5 py-5"
      style={{
        backgroundImage: `url(${image})`, // Corrected to use url() with the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="container text-center text-white py-4">
        <h2 className="fw-bold">Rent Your Property Confidently with Capital Stay</h2>
        <p className="lead">
          With live-support, quick signup, and highly-rated guests, hosting on Capital Stay feels like a holiday.
        </p>
        <button className="btn btn-primary rounded-pill px-4 py-2">
          List Your Property
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
