import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "High Speed Internet",
      description: "Reliable and fast internet provided.",
    },
    {
      title: "Healthy Meals",
      description: "Nutritious food to keep you energized.",
    },
    {
      title: "Homely Stay",
      description: "Comfortable rooms for a homely experience.",
    },
    { title: "Transportation", description: "Easy transport arrangements." },
    {
      title: "Food Delivery",
      description: "On-demand food delivery available.",
    },
    { title: "Tourism", description: "Guided tours and activities available." },
    { title: "Job", description: "Stay productive with ample work resources." },
    {
      title: "Rental Service",
      description: "Equipment rental for work needs.",
    },
  ];

  return (
    <section id="services">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
