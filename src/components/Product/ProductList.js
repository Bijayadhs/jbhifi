import React from 'react'
import Product from './Product'
import AppleImage from '../../img/apple.jpg'
import {v4 as uuid} from 'uuid';

function ProductList() {
    const product=[
        {
            "onSale": true,
            "logotitle":"../../img/apple.png",
             "productname":"Apple",
             "rating":4.5,
             "image":AppleImage,
             "ticket":500,
             "off":100
        },
        {
            "onSale": true,
            "logotitle":"/img/ffalcon.png",
             "productname":"Falcon",
             "rating":4.5,
             "image":"/img/falcon.jpg",
             "ticket":500,
             "off":100
        },
        {
            "onSale": false,
            "logotitle":"/img/gopro.png",
             "productname":"GoPro",
             "rating":4.5,
             "image":"/img/gopro.jpg",
             "ticket":500,
             "off":100
        },
        {
            "onSale": true,
            "logotitle":"/img/samsung.png",
             "productname":"Samsung",
             "rating":4.5,
             "image":"/img/samsung.jpg",
             "ticket":500,
             "off":100
        },
        {
            "onSale": false,
            "logotitle":"/img/sony.png",
             "productname":"SONY",
             "rating":4.5,
             "image":"/img/sony.jpg",
             "ticket":500,
             "off":100
        }
        ]
    

        
    return (
        <div className="products">
            
            {product.map((p) => <Product key={uuid()}  p={p}/>
                )}
            
        </div>
    )
}

export default ProductList
