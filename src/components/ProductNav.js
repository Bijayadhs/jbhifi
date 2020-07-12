import React from 'react'
import {Link} from 'react-router-dom'

function ProductNav() {
    return (
        <div>
            <ul className="product-nav">
                <li className="collection">
                    <Link className="nav-link" to='/collection'>New Catalogue</Link>
                </li>
            
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Computers & Tablets</Link>
                </li>
                <li  className="collection">
                    <Link className="nav-link" to='/collection'>TVs</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Headphones, Speakers & Audio</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Smart Home</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Mobile Phone</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Gaming</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Movies & TV Shows</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Music</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Cameras</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Drones & Robitics</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Health, Fitness & Wearables</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>DJ</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Car Gears</Link>
                </li>
                <li className="collection">
                    <Link className="nav-link" to='/collection'>Home Appliances</Link>
                </li>
            </ul>
        </div>
    )
}

export default ProductNav
