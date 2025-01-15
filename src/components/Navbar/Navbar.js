import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Navbar.css'

function Navbar() {
  const [showSearch, setShowSearch] = useState(false); // State for showing search bar in navbar
  const [isScrolled, setIsScrolled] = useState(false); // State to track page scroll

  // Toggle the search bar visibility
  const toggleSearch = () => setShowSearch(!showSearch);

  // Track scrolling to update `isScrolled`
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky-top navbar navbar-expand-lg bg-light shadow-sm ${isScrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fw-bold text-primary" href="/">
          Demo
        </a>

        {/* Toggler button for mobile view */}
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

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center">
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">
                AED
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">
                List a Property
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">
                Owners Login
              </a>
            </li>

            {/* Search Bar for larger screens */}
            {isScrolled && (
              <div className="d-none d-lg-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search..."
                  style={{ maxWidth: "200px" }}
                />
              </div>
            )}

            {/* Button for mobile search */}
            <li className="nav-item d-lg-none">
              <button className="btn btn-outline-primary" onClick={toggleSearch}>
                <i className="bi bi-search"></i> {/* Bootstrap Icon */}
              </button>
            </li>

            {/* Menu Button */}
            <li className="nav-item">
              <button className="btn btn-outline-primary rounded-pill px-3">
                Menu
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Search bar dropdown for mobile */}
      {showSearch && (
        <div className="search-bar bg-light p-3 shadow-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
          />
          <button className="btn btn-primary mt-2 w-100" onClick={toggleSearch}>
            Search
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
