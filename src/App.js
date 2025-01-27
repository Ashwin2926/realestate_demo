import React, { useState } from "react";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Hero/HeroSection";
import ExploreOptionsPage from "./components/Hero/Explore";
import Amenities from "./components/Anemities/Anemities";
import Lettings from "./components/Lettings/Lettings";
import StyleSpaces from "./components/Lettings/StyleSpaces";
import CallToAction from "./components/Lettings/CallToAction";
import TeamSection from "./components/Team/Team";
import AboutUs from "./components/AboutUs/About";
import FAQ from "./components/Offers/Offers";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
       <Navbar toggleForm={toggleForm} />
      <LandingPage />
      <AboutUs/>
      <ExploreOptionsPage/>
      <Amenities/>
      <FAQ/> 
      <StyleSpaces/> 
      {/* <PropertyList/> */}
      <CallToAction showForm={showForm} toggleForm={toggleForm} />
      <TeamSection/>
      <Lettings/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
