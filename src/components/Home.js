import React from "react";
import "./Home.css";

const Home = ({ onBook }) => {
  return (
    <section id="home">
      <h2>Work from Ladakh</h2>
      <p>India's first true digital tourism ecosystem</p>
      <div className="booking-details">
        <div>
          <label>Check-in</label>
          <input type="date" />
        </div>
        <div>
          <label>Check-out</label>
          <input type="date" />
        </div>
        <div>
          <label>Rooms</label>
          <input type="number" min="1" defaultValue="1" />
        </div>
        <button onClick={onBook}>Book</button>
      </div>
    </section>
  );
};

export default Home;
