import React from 'react';
import ProductList from './Product/ProductList'
import Carousel from './Carousel/Carousel'


function Home() {
    return (
        <div>
                        <Carousel />

            <ProductList  />

            {/* <Carousal />
            <WhatsHot/>
            <IntrestFree />
            <WatsHot />
            <BuyClickDeliver /> */}
        </div>
    )
}

export default Home
