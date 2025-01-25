import React from "react";
import lettingImage from '../../image1.jpg';
import "bootstrap/dist/css/bootstrap.min.css";

function Lettings() {
  return (
    <div className="container my-5">
      {/* Lettings Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h2 className="fw-bold mb-3">Lettings</h2>
          <p className="text-muted">
            Affordable renting in key locations in Dubai. Live with us in your dream home
            for a minimum of 1 month stay. We accommodate hundreds of families, working
            professionals, and students just like you! Most of our properties come with concierge
            services.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src={lettingImage} // Image in public folder
            alt="Lettings"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Stay with Us Section */}
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <h2 className="fw-bold mb-3">Stay with us</h2>
          <p className="text-muted">
            Stay with us in one of our modern apartments in fantastic tourist destinations. All
            within short distances of Dubai's key features. Efficient check-in, check-out, 24-hour
            on-call experienced host, luxury bed linens, towels, and toiletries.
          </p>
        </div>
        <div className="col-lg-6 order-lg-1">
          <img
            src={lettingImage} // Image in public folder
            alt="Stay with us"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default Lettings;
