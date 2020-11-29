import React from 'react';
import './Product.css';
// import SingleProduct from './SingleProduct';


function ProductCard({card,setHot}) {

    return (
        <div className="productCard">
            <div className={card.onSale?"onSale":null} >{card.onSale?'ON SALE':null}</div>
            <div className="container">
                    <img className="logoTitle" src={card.title} alt='samsung'/>
                    <h3 className="productName">{card.product}</h3>
                    <div className="rating">{card.rating}</div>
                    <img className="image" src={card.image} alt={card.productname}/>
                    <div className="product_footer">
                        <div className="square">
                            <h3>Ticket ${card.ticketPrice}</h3>
                            <h2>${card.ticketPrice-card.offPrice}</h2>
                            <h3>${card.offPrice} OFF^</h3>
                        </div>
                        <div className="wishlist">
                            {card.isLiked ?<i className="fas fa-heart"></i>:<i className="far fa-heart"></i>}
                        </div>
                        <div className="addCart">
                        <i className="fas fa-cart-plus"></i>
                        <button onClick={()=>setHot(card.hot)}>Click Me</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ProductCard
