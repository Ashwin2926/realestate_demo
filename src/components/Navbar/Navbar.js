import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import "./Navbar.css";
import logo from "../../logo.png"; // Adjust path if needed

const sectionMappings = {
  properties: "style-spaces",
  aboutus: "about-us",
  amenities: "amenities",
  faq: "faq",
  lettings: "lettings",
  team: "team",
  testimonials: "testimonials",
};

function Navbar({ toggleForm }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle Navbar Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Mobile Menu Toggle
  const handleToggle = (event) => {
    event.stopPropagation(); // Prevents event bubbling
    setIsNavOpen((prev) => !prev);
    document.body.style.overflow = !isNavOpen ? "hidden" : "auto"; // Prevent background scrolling
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isNavOpen && !event.target.closest(".navbar-nav") && !event.target.closest(".navbar-toggler")) {
        setIsNavOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isNavOpen]);

  // Handle link click (Scroll or Navigate)
  const handleLinkClick = (event, path) => {
    event.preventDefault();
    setIsNavOpen(false);
    document.body.style.overflow = "auto";

    if (path === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/");
    } else if (location.pathname === "/" && sectionMappings[path]) {
      const section = document.getElementById(sectionMappings[path]);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${path}`);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : "transparent"}`}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a className="navbar-brand me-auto" href="/" onClick={(e) => handleLinkClick(e, "")}>
          <img src={logo} alt="Logo" className="logo" />
        </a>

        {/* Mobile Menu Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          {isNavOpen ? <FaTimes size={28} color="white" /> : <FaBars size={28} color="white" />}
        </button>

        {/* Navbar Links */}
        <div className={`navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center ms-auto">
            {[
              { path: "", label: "Home" },
              { path: "properties", label: "Properties" },
              { path: "aboutus", label: "About Us" },
              { path: "team", label: "Team" },
              { path: "testimonials", label: "Testimonials" },
              { path: "contactus", label: "Contact Us" },
            ].map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={`/${link.path}`} onClick={(e) => handleLinkClick(e, link.path)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <button className="btn list-property-btn" onClick={() => { toggleForm(); setIsNavOpen(false); }}>
                List Your Property
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
