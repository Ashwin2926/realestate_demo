import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import logo from "../../logo.png"; // Replace with the correct path to your logo image

function Navbar({toggleForm}) {
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the search bar visibility
  const toggleSearch = () => setShowSearch(!showSearch);

  // Track scrolling to update `isScrolled`
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky-top navbar navbar-expand-lg bg-light shadow-sm ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            style={{ height: "60px", width: "auto" }} // Adjust the size of the logo here
          />
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
          <ul className="navbar-nav gap-4 align-items-center">
            {/* Links */}
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/properties">
                Properties
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>

            {/* List a Property Button */}
            <li className="nav-item">
              <button
                className="btn btn-primary"
                onClick={toggleForm}
              >
                List Your Property
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
