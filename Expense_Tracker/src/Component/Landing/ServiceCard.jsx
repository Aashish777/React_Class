import React from "react";

const ServiceCard = ({ icon, title, descp }) => {
  return (
    <div className="service-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{descp}</p>
    </div>
  );
};

export default ServiceCard;
