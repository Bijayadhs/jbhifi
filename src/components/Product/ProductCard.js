import React from 'react';
import './Product.css';
// import SingleProduct from './SingleProduct';


function ProductCard({ product }) {
    const { onSale, title, productName, rating, image, ticketPrice, offPrice, isLiked } = product;

    return (
        <div className="productCard">
            <div className={onSale ? "onSale" : "New Release"} >{onSale ? 'ON SALE' : null}</div>
            <div className="container">
                <img className="logoTitle" src={title} alt='samsung' />
                <h3 className="productName">{productName}</h3>
                <div className="rating">{rating}</div>
                <img className="image" src={image} alt={productName} />
                <div className="product_footer">
                    <div className="square">
                        <h3>Ticket ${ticketPrice}</h3>
                        <h2>${ticketPrice - offPrice}</h2>
                        <h3>${offPrice} OFF^</h3>
                    </div>
                    <div className="wishlist">
                        {isLiked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                    </div>
                    <div className="addCart">
                        <i className="fas fa-cart-plus"></i>
                        <button >Click Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
