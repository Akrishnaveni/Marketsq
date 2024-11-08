import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Brisphere</h1>
      <nav>
        <a href="#home">Discover</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
      </nav>
    </header>
  );
};

export default Header;
