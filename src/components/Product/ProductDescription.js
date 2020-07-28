import React from 'react'

function ProductDescription() {
    return (
        
        <div className="product__discription">
                <div className="product__image">
                        <img src='' alt='samsung'/>
                        <div className="product__scroll"></div>
                        <div className="product__icons"></div>
                </div>
                <div className="productMainDescription">
                <h2>SAMSUNG</h2>
                <h1>Samsung Q70T 65" QLED Ultra HD 4K Smart TV [2020]</h1>
                <h4>Model:QA65Q70TAWXXY  SKU:434299</h4>
                <ul>
                    <li>Quantum Dot - Unleash vivid colour at a range of brightness levels.</li>
                    <li>200Hz Motion Rate - Clarity in motion, keep up with the action.</li>
                    <li>Ambient Mode + - Turns your blank screen into a beautiful display personalised to your space and style.</li>
                </ul>
                <i>stars</i>
            </div>
        </div>
    )
}

export default ProductDescription
