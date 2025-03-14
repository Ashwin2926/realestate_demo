import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import resultImage from "../../assets/background.jpg";

const ResultsPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scriptLoaded = useRef(false);
  const [iframeHeight, setIframeHeight] = useState("900px");

  const adjustIframeHeight = () => {
    const iframe = document.getElementById("apartmentIframe");
    if (iframe && iframe.contentWindow) {
      setIframeHeight(`${iframe.contentWindow.document.body.scrollHeight}px`);
    }
  };

  useEffect(() => {
    window.addEventListener("message", adjustIframeHeight);
    return () => window.removeEventListener("message", adjustIframeHeight);
  }, []);

  useEffect(() => {
    const smoobuURL = "https://login.smoobu.com/en/booking-tool/iframe/720452";
    const iframeContainer = document.getElementById("apartmentIframeAll");

    if (iframeContainer) iframeContainer.innerHTML = "";

    if (!scriptLoaded.current) {
      scriptLoaded.current = true;
      const script = document.createElement("script");
      script.id = "smoobuScript";
      script.src = "https://login.smoobu.com/js/Settings/BookingToolIframe.js";
      script.async = true;

      script.onload = () => {
        if (window.BookingToolIframe) {
          window.BookingToolIframe.initialize({
            url: smoobuURL,
            baseUrl: "https://login.smoobu.com",
            target: "#apartmentIframeAll",
          });
          setLoading(false);
        }
      };

      script.onerror = () => {
        setError("Failed to load booking data. Please try again later.");
        setLoading(false);
      };

      document.body.appendChild(script);
    } else {
      if (iframeContainer && !iframeContainer.hasChildNodes()) {
        window.BookingToolIframe?.initialize({
          url: smoobuURL,
          baseUrl: "https://login.smoobu.com",
          target: "#apartmentIframeAll",
        });
      }
      setLoading(false);
    }

    return () => {
      const existingScript = document.getElementById("smoobuScript");
      if (existingScript) document.body.removeChild(existingScript);
    };
  }, []);

  if (loading) return <p className="text-center mt-5">Loading available apartments...</p>;
  if (error) return <p className="text-danger text-center mt-5">{error}</p>;

  return (
    <div
      className="results-page container-fluid d-flex justify-content-center align-items-start"
      style={{
        paddingTop: "150px",
        minHeight: "100vh",
        background: `url(${resultImage}) no-repeat center center/cover`,
      }}
    >
      <div
        className="bg-transparent p-4 rounded"
        style={{
          maxWidth: "1400px",
          width: "100%",
          backdropFilter: "blur(2px)",

          borderRadius: "16px",
        }}
      >
         <h2 className="text-center mb-4 text-white" style={{ fontSize: "2rem", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase" }}>Find Your Dream Apartment</h2>

        <div
          id="apartmentIframeAll"
          style={{
            border: "none",
            borderRadius: "12px",
           
            overflow: "hidden",
            minHeight: iframeHeight,
            margin: "0 auto",
     
            padding: "10px",
            transition: "min-height 0.3s ease",
          }}
        ></div>
      </div>

      <style>{`
        #apartmentIframeAll .card {
          background: transparent !important;
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
};

export default ResultsPage;
