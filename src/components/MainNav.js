import React from 'react';
import logo from '../img/jb-hi-fi-logo-vector.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'

function MainNav() {
  return (
    <div className="main-nav">
      <div className="menu-bar">
        <FontAwesomeIcon icon={faBars} size="lg" /></div>
      <div className="main-nav__logo">
        <img src={logo} alt='logo' />
      </div>
      <div className="main-nav__search">
        <i className="fa fa-search"></i>
        <input className="main-nav__input" type="text" placeholder="Search products..." />
      </div>
      <ul className="main-nav__list">
        <li><a href="/"><i className="fas fa-gift"></i>Gift Cards</a></li>
        <li><a href="/"><i className="fas fa-map-pin "></i>Stores</a></li>
        <li><a href="/"><i className="fas fa-question-circle"></i>Help & Support Cards</a></li>
        <li><a href="/"><i className="fas fa-user-circle"></i>My account</a></li>
        <li><a href="/"><i className="fas fa-shopping-cart"></i>My cart</a></li>
      </ul>
    </div>
  )
}

export default MainNav;
