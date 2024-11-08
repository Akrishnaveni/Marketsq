import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Services from "./components/Services";
import OrderForm from "./components/OrderForm";
import OrderComplete from "./components/OrderComplete";
import "./App.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});

  const handleBookClick = () => setShowForm(true);

  const handleFormSubmit = (data) => {
    setOrderDetails(data);
    setOrderComplete(true);
    setShowForm(false);
  };

  return (
    <div>
      <Header />
      {!showForm && !orderComplete && (
        <>
          <Home onBook={handleBookClick} />
          <Discover />
          <Services />
        </>
      )}
      {showForm && <OrderForm onSubmit={handleFormSubmit} />}
      {orderComplete && <OrderComplete details={orderDetails} />}
    </div>
  );
};

export default App;
