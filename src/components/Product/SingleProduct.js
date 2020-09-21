import React from 'react'
import ProductHistory from './ProductHistory'
import ProductDescription from './ProductDescription';
import ProductDetail from './ProductDetail';
import ProductCheckout from './ProductCheckout';
         
function SingleProduct() {
    return (
        <div className="singleproduct">
            
            <ProductHistory/>
            <ProductDescription/>
            <ProductDetail/>            
            <ProductCheckout/>
        </div>
    )
}

export default SingleProduct
