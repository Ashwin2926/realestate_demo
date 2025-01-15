// AvailableProperties.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AvailableProperties() {
  const properties = [
    {
      title: "Luxury Apartment in Downtown Dubai",
      image: "image3.jpg",
      price: "AED 12,000/month",
    },
    {
      title: "Spacious Villa with Pool",
      image: "image4.jpg",
      price: "AED 25,000/month",
    },
    {
      title: "Modern Studio in Business Bay",
      image: "image3.jpg",
      price: "AED 8,000/month",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Available Properties</h2>
        <div className="row">
          {properties.map((property, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <img
                  src={property.image}
                  className="card-img-top"
                  alt={property.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text">{property.price}</p>
                  <a href="/" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AvailableProperties;
