import React from "react";

function MainNav() {
  return (
    <div className="main-nav">
      <div className="main-nav__logo"></div>
      <input
        className="main-nav__search"
        type="text"
        autoFocus
        placeholder="Search products..."
      />

      <ul className="main-nav__list">
        <li>
          <a href="#home">
            <i className="fab fa-cc-discover"></i>Gift Cards
          </a>
        </li>
        <li>
          <a href="#home">
            <i className="fas fa-map-marker-alt"></i>Stores
          </a>
        </li>
        <li>
          <a href="#home">
            <i className="fas fa-question-circle"></i>Help & Support
          </a>
        </li>
        <li>
          <a href="#home">
            <i className="fas fa-user"></i>My Account
          </a>
        </li>
        <li>
          <a href="#home">
            <i className="fas fa-shopping-cart"></i>My Cart
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
