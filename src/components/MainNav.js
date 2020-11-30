<<<<<<< HEAD
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
=======
import React from 'react'
import logo from '../img/jb-hi-fi-logo-vector.svg'

function MainNav() {
    return (
        <div className="main-nav">
            <div className="main-nav__logo">
                <img src={logo} />
            </div>
            <div className="main-nav__search">
            <i className="fa fa-search"></i>
            <input className="main-nav__input" type="text" placeholder="Search products..."/>
            </div>
            <ul className="main-nav__list">
                <li><a href="#"><i className="fas fa-gift"></i>Gift Cards</a></li>
                <li><a href="#"><i className="fas fa-map-pin "></i>Stores</a></li>
                <li><a href="#"><i className="fas fa-question-circle"></i>Help & Support Cards</a></li>
                <li><a href="#"><i className="fas fa-user-circle"></i>My account</a></li>
                <li><a href="#"><i className="fas fa-shopping-cart"></i>My cart</a></li>
            </ul>
        </div>
    )
>>>>>>> cd69a6d0c443db27b9d6d20abb2dccee8a660e3c
}

export default MainNav;
