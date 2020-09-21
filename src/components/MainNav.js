import React from 'react'
import logo from '../img/jb-hi-fi-logo-vector.svg'

function MainNav() {
    return (
        <div className="mainNav">
            <div className="mainNav__logo">
                <img src={logo} />
            </div>
            <div className="mainNav__search">
            <i className="fa fa-search"></i>
            <input className="mainNav__input" type="text" placeholder="Search products..."/>
            </div>
            <ul className="mainNav__list">
                <li><a href="#"><i className="fas fa-gift"></i>Gift Cards</a></li>
                <li><a href="#"><i className="fas fa-gift"></i>Stores</a></li>
                <li><a href="#"><i className="fas fa-gift"></i>Help & Support Cards</a></li>
                <li><a href="#"><i className="fas fa-gift"></i>My account</a></li>
                <li><a href="#"><i className="fas fa-gift"></i>My cart</a></li>
            </ul>
        </div>
    )
}

export default MainNav
