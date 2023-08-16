import React from "react";
import logo from "../assets/AABcoders_logo.png"; // Import your logo image
import "../styles/header.css"; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#title">Home</a>
          </li>
          <li className="nav-item">
            <a href="#whats-hot">What's Hot</a>
          </li>
          <li className="nav-item">
            <a href="#know-your-size">Know Your Size</a>
          </li>
          <li className="nav-item">
            <a href="#outfit-recommender">Outfit Recommender</a>
          </li>
          <li className="nav-item">
            <a href="#size-availibilty">Check Size Availabilty</a>
          </li>
        </ul>
      </nav>
      <div className="store-experience">Walmart-In store experience</div>
    </header>
  );
};

export default Header;
