import React from "react";
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

function App() {
  return (
    <>
      <Navbar/>
      <LandingPage />
      <ExploreOptionsPage/>
      <Amenities/> 
      <StyleSpaces/> 
      {/* <PropertyList/> */}
      <CallToAction/>
      <TeamSection/>
      <Lettings/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
