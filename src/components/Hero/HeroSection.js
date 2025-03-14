import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./HeroSection.css";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHeadset, FaHome } from "react-icons/fa";
import image1 from "../../assets/background.jpg";
import image2 from "../../assets/background2.jpg";
import image3 from "../../assets/background3.jpg";
import image4 from "../../assets/background4.jpg";

const backgroundImages = [image1, image2, image3, image4];

function LandingPage() {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [nextBackground, setNextBackground] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentBackground(nextBackground);
        setNextBackground((prev) => (prev + 1) % backgroundImages.length);
        setIsFading(false);
      }, 1000); // Increased time for smoother transition
    }, 7000);
    return () => clearInterval(interval);
  }, [nextBackground]);

  return (
    <div className="landing-page container-fluid p-0">
      <main className="text-center">

        {/* Background container */}
        <div className="background-container">
          <div
            className="background current"
            style={{ backgroundImage: `url(${backgroundImages[currentBackground]})` }}
          ></div>
          <div
            className={`background next ${isFading ? "fade-in" : ""}`}
            style={{ backgroundImage: `url(${backgroundImages[nextBackground]})` }}
          ></div>
          <div className="background-overlay"></div>
        </div>

        {/* Fixed Hero Section Content */}
        <div className="hero-content">
          <motion.h1
            className="fw-bold display-4 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Capital Stay<span className="text-primary">.</span>
          </motion.h1>

          <motion.h2
            className="fw-bold mb-3 text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-primary">Discover</span> Your Dream Home in Dubai
          </motion.h2>

          <motion.p
            className="mb-4 lead text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Find exclusive properties tailored to your lifestyle. Luxury apartments, villas, and more.
          </motion.p>

          <motion.button
            className="btn btn-outline-primary mt-3"
            onClick={() => navigate("/results")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            aria-label="Explore available properties"
          >
            Explore Properties
          </motion.button>
        </div>

        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <h2 className="fw-bold">Why Choose <span className="text-primary">Capital Stay?</span></h2>
          <p className="lead text-muted mb-5">
            Elevate your lifestyle with Dubai’s most trusted real estate provider.
          </p>
          <div className="container">
            <div className="row justify-content-center gap-4">
              {[
                {
                  title: "🏡 Premium Properties",
                  text: "Discover our curated selection of luxury apartments, villas, and exclusive estates in prime locations.",
                  icon: <FaHome className="text-primary display-4 mb-3" />,
                },
                {
                  title: "🔒 Trusted & Secure",
                  text: "Our reputation is built on transparency and integrity. We ensure 100% secure transactions and professional guidance.",
                  icon: <FaShieldAlt className="text-primary display-4 mb-3" />,
                },
                {
                  title: "📞 Personalized Support",
                  text: "We offer round-the-clock assistance, helping you find the perfect home with expert advice and market insights.",
                  icon: <FaHeadset className="text-primary display-4 mb-3" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="col-md-4 d-flex flex-column align-items-center text-center p-4 rounded shadow-lg bg-white why-card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                  <h4 className="fw-bold">{item.title}</h4>
                  <p className="text-muted">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
