import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

// Import all components (ensure paths are correct)
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/Hero/HeroSection";
import ExploreOptionsPage from "./components/Hero/Explore";
import Amenities from "./components/Anemities/Anemities";
import Lettings from "./components/Lettings/Lettings";
import StyleSpaces from "./components/Lettings/StyleSpaces";
import CallToAction from "./components/Lettings/CallToAction";
import TeamSection from "./components/Team/Team";
import AboutUs from "./components/AboutUs/About";
import FAQ from "./components/Offers/Offers";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import ResultsPage from "./components/Hero/Results";
import Testimonials from "./components/Testimonials/Testimonials";
import Ampact from "./components/Ampact/Ampact";
import { useNavigate } from "react-router-dom";

const sectionMappings = {
  properties: "style-spaces",
  aboutus: "about-us",
  amenities: "amenities",
  faq: "faq",
  lettings: "lettings",
  team: "team",
  testimonials: "testimonials"
};

function App() {
  const [showForm, setShowForm] = useState(false);

  // Toggles the form display
  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <Router>
      {/* Persistent Navbar */}
      <Navbar toggleForm={toggleForm} />
      <MainContent showForm={showForm} toggleForm={toggleForm} />
      {/* Persistent Footer */}
      <Footer />
    </Router>
  );
}

function MainContent({ showForm, toggleForm }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    if (sectionMappings[path]) {
      const section = document.getElementById(sectionMappings[path]);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { replace: true });
        setTimeout(() => {
          const sectionAfterNavigate = document.getElementById(sectionMappings[path]);
          if (sectionAfterNavigate) {
            sectionAfterNavigate.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [location, navigate]);

  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          <>
            <LandingPage />
            <div id="about-us">
              <AboutUs />
            </div>
            <ExploreOptionsPage />
            <div id="amenities">
              <Amenities />
            </div>
            <div id="faq">
              <FAQ />
            </div>
            <div id="style-spaces">
              <StyleSpaces />
            </div>
            <CallToAction showForm={showForm} toggleForm={toggleForm} />
            <Ampact />
            <div id="team">
              <TeamSection />
            </div>
            <div id="lettings">
              <Lettings />
            </div>
            <div id="testimonials">
              <Testimonials />
            </div>
            <FloatingButtons />
          </>
        }
      />
      {/* Results Page */}
      <Route path="/results" element={<ResultsPage />} />
      {/* Redirect any unknown route to home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
