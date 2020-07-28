import React from 'react';
import './Product.css';
// import SingleProduct from './SingleProduct';


function Products({p}) {

    return (
        <div className="product">
            <div className={p.onSale?"onSale":null} >{p.onSale?'ON SALE':null}</div>
            <div className="container">
                    <div className="logoTitle">{p.logotitle}</div>
                    <h3 className="productName">{p.name}</h3>
                    <div className="rating">{p.rating}</div>
                    <img src={p.image} alt={p.productname}/>
                    <div className="product_footer">
                        <div className="square">
                            <h3>Ticket ${p.ticket}</h3>
                            <h2>${p.ticket-p.off}</h2>
                            <h3>${p.off} OFF^</h3>
                        </div>
                        <div className="wishlist">
                        <i className="far fa-heart"></i>
                        </div>
                        <div className="addCart">
                        <i className="fas fa-cart-plus"></i>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Products
