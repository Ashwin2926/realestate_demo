import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import logo from "../../logo.png"; // Adjust the path to your logo
import { FaHome, FaBuilding, FaInfoCircle, FaPhone } from "react-icons/fa";

function Navbar({ toggleForm }) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll tracking effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // Add the scrolled class
      } else {
        setIsScrolled(false); // Remove the scrolled class
      }
    };

    // Attach the scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar navbar-expand-lg sticky-top ${
        isScrolled ? "scrolled" : "bg-light"
      }`}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        {/* Toggler for mobile view */}
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

        {/* Navbar links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-4 align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <FaHome className="me-1" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/properties">
                <FaBuilding className="me-1" /> Properties
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <FaInfoCircle className="me-1" /> About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <FaPhone className="me-1" /> Contact Us
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" onClick={toggleForm}>
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