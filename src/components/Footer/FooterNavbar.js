import React from 'react';

function FooterNavbar() {
    return (
        <div>
            <div className="primary-navbar">
                <div className="container">
                    <ul className="footer-list">
                        {/* <li><img className="footer-logo" src={'img/logo.svg'} alt="JB HI-FI" /></li> */}
                        <li className="footer-logo">JB HI-FI</li>
                        <li>COVID-19 Updates</li>
                        <li>Help & Support</li>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Consumer Guarantees/Faulty Products</li>
                        <li>JB Hi-Fi Solutions</li>
                        <li>BYOD Portal</li>
                        <li>Investors</li>
                        <li>Gift cards</li>
                    </ul>
                </div>

            </div>
            <div className="secondary-navbar">
                <div className="container">
                    <div className="payment">
                        <div className="payment__text">We accept</div>
                        <ul className="payment__card">
                            <li>Gift Card</li>
                            <li>Master card</li>
                            <li>Paypal</li>
                        </ul>
                    </div>
                    <div className="terms-policy">
                        <ul className="footer-list">
                            <li>Terms of use</li>
                            <li>Website terms of sale</li>
                            <li>Privacy policy</li>
                            <li>Advertised offers</li>
                            <li>Catalogue Corrections</li>
                            <li>Competitions</li>
                            <li>Scam Alerts</li>                            
                        </ul>
                        <div className="copyright">©2020 JB Hi-Fi All rights reserved</div>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default FooterNavbar
