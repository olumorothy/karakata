import React from "react";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">Karakata</span>
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
