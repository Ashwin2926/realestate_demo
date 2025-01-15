import React from "react";
import FeaturesSection from "./components/FeaturesSection";
import PropertyList from "./components/Property/PropertyList";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Hero/HeroSection";
import ExploreOptionsPage from "./components/Hero/Explore";

function App() {
  return (
    <>
      <Navbar/>
      <LandingPage />
      <ExploreOptionsPage/>
      <FeaturesSection />
      <PropertyList/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
