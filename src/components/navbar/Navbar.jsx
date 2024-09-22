import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/MoveEsy-Logo.jpeg" alt="MoveEasy Logo" className="logo" />
        {/* <h1>MoveEasy</h1> */}
      </div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
