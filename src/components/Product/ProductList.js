<<<<<<< HEAD
import React from 'react';
import ProductCard from './ProductCard';
import {productData} from './data';
import {v4 as uuidv4} from 'uuid'
=======
import React from 'react'
import Product from './Product'
import AppleImage from '../../img/apple.jpg'
import {v4 as uuid} from 'uuid';
>>>>>>> cd69a6d0c443db27b9d6d20abb2dccee8a660e3c

function ProductList({setHot}) {
    

    return (
<<<<<<< HEAD
        <div className="products">            
            {productData.map((card) => 
                <ProductCard  key={uuidv4()} card={card} setHot={setHot}/>
                )}            
=======
        <div className="products">
            
            {product.map((p) => <Product key={uuid()}  p={p}/>
                )}
            
>>>>>>> cd69a6d0c443db27b9d6d20abb2dccee8a660e3c
        </div>
    )
}

export default ProductList
