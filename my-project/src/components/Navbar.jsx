import React from "react";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">FOOD</div>
      <ul className="navbar-links">
        <li>
          Food 
        </li>
        <li>
          Home
        </li>
        <li>
          Cart
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;