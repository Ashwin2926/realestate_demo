import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./HeroSection.css";
import ReactDatePicker from "react-datepicker";
import image1 from "../../image1.jpg";
import image2 from "../../image2.jpg";
import image3 from "../../image3.jpg";
import image4 from "../../image4.jpg";

function LandingPage() {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const backgroundImages = [image1, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="landing-page container-fluid">
      <main className="text-center">
        <div
          className="hero-section d-flex flex-column justify-content-center align-items-center text-white"
          style={{
            height: "75vh",
            backgroundImage: `url(${backgroundImages[currentBackground]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="fw-bold display-4 mb-4 text-shadow">
          Relax, you’re booking your home
          </h1>
          {/* <p className="lead text-shadow mb-4">
            Book your dream holiday home in just a few clicks.
          </p> */}
          <div className="search-form p-3 rounded shadow">
            <div className="row g-3 align-items-center">
              <div className="col-lg-4 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Where do you want to stay?"
                />
              </div>
              <div className="col-lg-2 col-md-3">
                <ReactDatePicker
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  selectsStart
                  startDate={fromDate}
                  endDate={toDate}
                  minDate={new Date()}
                  placeholderText="From Date"
                  className="form-control"
                />
              </div>
              <div className="col-lg-2 col-md-3">
                <ReactDatePicker
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  selectsEnd
                  startDate={fromDate}
                  endDate={toDate}
                  minDate={fromDate || new Date()}
                  placeholderText="To Date"
                  className="form-control"
                />
              </div>
              <div className="col-lg-2 col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Guests"
                  min="1"
                />
              </div>
              <div className="col-lg-2 col-md-6">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
