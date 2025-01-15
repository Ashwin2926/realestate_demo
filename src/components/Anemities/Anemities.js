// Amenities.js
import React from 'react';
import './Amenities.css';

const Amenities = () => {
  const amenities = [
    {
      icon: 'fas fa-headset',
      title: '24/7 customer service',
      description: 'We’re always on hand to help.',
    },
    {
      icon: 'fas fa-wifi',
      title: 'One-tap WiFi access',
      description: 'Free wifi access in every home.',
    },
    {
      icon: 'fas fa-map-signs',
      title: 'Community guides',
      description: 'Find out what to do and where to go.',
    },
    {
      icon: 'fas fa-clock',
      title: 'Request late checkout',
      description: 'We’re flexible to fit your needs.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Peace of mind',
      description: 'Book with the Primestay Promise.',
    },
    {
      icon: 'fas fa-gem',
      title: 'Carefully vetted homes',
      description: 'Our experts vet every single rental.',
    },
  ];

  return (
    <section className="amenities">
      <h2 className="section-title">Peace of mind with every booking</h2>
      <p className="section-subtitle">
        From fresh towels to late checkout, our app puts you in control.
      </p>
      <div className="amenities-list">
        {amenities.map((amenity, index) => (
          <div className="amenity-item" key={index}>
            <i className={amenity.icon}></i>
            <h3>{amenity.title}</h3>
            <p>{amenity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
