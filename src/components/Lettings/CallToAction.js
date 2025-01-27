import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../image1.jpg";
function CallToAction({ showForm, toggleForm }) {
    return (
      <>
        <div
          className="container-fluid my-5 py-5"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="container text-center text-white py-4">
            <h2 className="fw-bold text-white" >Rent Your Property Confidently with Capital Stay</h2>
            <p className="lead text-white">
              With live-support, quick signup, and highly-rated guests, hosting on
              Capital Stay feels like a holiday.
            </p>
            <button
              className="btn btn-primary rounded-pill px-4 py-2"
              onClick={toggleForm}
            >
              List Your Property
            </button>
          </div>
        </div>
  
        {showForm && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center overflow-auto"
            style={{ zIndex: 1050 }}
          >
            <div className="bg-white p-4 rounded shadow-lg w-75 w-md-50" style={{ maxHeight: "90vh", overflowY: "auto" }}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold">Request a Quote</h3>
                <button
                  className="btn-close"
                  onClick={toggleForm}
                  aria-label="Close"
                ></button>
              </div>
  
              <form>
                <h4>Representative Information</h4>
                <div className="mb-3">
                <label className="form-label">First Name*</label>
                <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                <label className="form-label">Last Name*</label>
                <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                <label className="form-label">Phone Number*</label>
                <input type="tel" className="form-control" required />
                </div>
                <div className="mb-3">
                <label className="form-label">Your Email*</label>
                <input type="email" className="form-control" required />
                </div>

                <h4>Property Information</h4>
                <div className="mb-3">
                <label className="form-label">Select Property Type</label>
                <select className="form-select">
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Studio</option>
                </select>
                </div>
                <div className="mb-3">
                <label className="form-label">Select Unit Type</label>
                <select className="form-select">
                    <option>1 Bedroom</option>
                    <option>2 Bedrooms</option>
                    <option>3 Bedrooms</option>
                </select>
                </div>
                <div className="mb-3">
                <label className="form-label">City*</label>
                <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                <label className="form-label">Description*</label>
                <textarea
                    className="form-control"
                    rows="4"
                    required
                ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                Submit
                </button>
                </form>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default CallToAction;
  



