import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update the mobile state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setShowSearch(window.scrollY > 200); // Show search bar after scrolling 200px
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky-top navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-primary" href="/">Demo</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center">
            {showSearch && !isMobile && (
              <li className="nav-item">
                <div className="d-flex gap-2">
                  <input
                    type="text"
                    className="form-control w-auto"
                    placeholder="Search here..."
                  />
                  <button className="btn btn-primary">Search</button>
                </div>
              </li>
            )}
            {isMobile && (
              <li className="nav-item">
                <button
                  className="btn btn-outline-primary rounded-circle"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="bi bi-search"></i>
                </button>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">AED</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">Help</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">List a Property</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">Owners Login</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary rounded-pill px-3">
                Menu
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal for mobile search */}
      {isMobile && (
        <div
          className="modal fade"
          id="searchModal"
          tabIndex="-1"
          aria-labelledby="searchModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="searchModalLabel">Search</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your search query..."
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
