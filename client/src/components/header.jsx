import React from "react";
import logo from "../assets/AABcoders_logo.png"; // Import your logo image
import "../styles/header.css"; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="store-experience">Walmart-In store experience</div>
    </header>
  );
};

export default Header;
