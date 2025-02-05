import React from "react";
import pic1 from "../../pic1.jpg";
import pic2 from "../../pic2.jpg";
import "./Team.css";

const TeamSection = () => {
  const teamMembers = [
    { id: 1, src: pic1, alt: "Team Member 1" },
    { id: 2, src: pic2, alt: "Team Member 2" },
    { id: 3, src: pic1, alt: "Team Member 3" },
    { id: 4, src: pic2, alt: "Team Member 4" },
    { id: 5, src: pic1, alt: "Team Member 5" },
    { id: 6, src: pic2, alt: "Team Member 6" },
  ];

  return (
    <div className="team-section">
      {/* Circular lines */}
      <div className="circle-lines">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="150" stroke="rgba(0, 68, 204, 0.2)" strokeWidth="2" fill="none" />
          <circle cx="400" cy="400" r="250" stroke="rgba(0, 68, 204, 0.1)" strokeWidth="2" fill="none" />
          <circle cx="400" cy="400" r="350" stroke="rgba(0, 68, 204, 0.05)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Central text */}
      <div className="central-text">
        <h2>Our Team</h2>
        <p>
          Meet the dedicated professionals who drive our success through quality,
          equality, and integrity.
        </p>
      </div>

      {/* Team members */}
      <div className="circles">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="circle"
            style={{
              "--x": `${50 + Math.cos(index * (Math.PI / 3)) * 30}%`,
              "--y": `${50 + Math.sin(index * (Math.PI / 3)) * 30}%`,
              "--size": `${100 + (index % 2 === 0 ? 40 : 20)}px`,
            }}
          >
            <img src={member.src} alt={member.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
