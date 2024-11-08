import React from "react";
import "./OrderComplete.css";

const OrderComplete = ({ details }) => {
  return (
    <section id="order-complete">
      <h2>Order Complete</h2>
      <p>Thank you for booking with us, {details.name}!</p>
      <p>Check-in: {details.checkIn}</p>
      <p>Check-out: {details.checkOut}</p>
      <p>Rooms: {details.rooms}</p>
      <button>Contact Us</button>
    </section>
  );
};

export default OrderComplete;
