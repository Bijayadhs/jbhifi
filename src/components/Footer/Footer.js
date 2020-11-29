import React from 'react';
import './Footer.css';
import SignupOffer from './SignupOffer'
import FooterNavbar from './FooterNavbar'

function Footer() {
    return (
        <div className="footer">
            <SignupOffer />
            <FooterNavbar />          
        </div>
    )
}

export default Footer
