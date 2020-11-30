import React from 'react'
import ProductCard from './ProductCard'
// import AppleImage from '../../img/apple.jpg'
import { v4 as uuid } from 'uuid';
import { productData } from './data.js';

function ProductList() {


    return (
        <div className="products">

            {productData.map((p) => <ProductCard key={uuid()} product={p} />
            )}

        </div>
    )
}

export default ProductList
