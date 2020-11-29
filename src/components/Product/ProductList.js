import React from 'react';
import ProductCard from './ProductCard';
import {productData} from './data';
import {v4 as uuidv4} from 'uuid'

function ProductList({setHot}) {
    

    return (
        <div className="products">            
            {productData.map((card) => 
                <ProductCard  key={uuidv4()} card={card} setHot={setHot}/>
                )}            
        </div>
    )
}

export default ProductList
