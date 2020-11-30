import React from 'react';
import ProductList from './Product/ProductList'
import Carousel from './Carousel/Carousel'
import Catelogue from './Catelogue/Catelogue'


function Home() {
  return (
    <div>
      <Carousel />
      <Catelogue />

      <ProductList />

      {/* <Carousal />
            <WhatsHot/>
            <IntrestFree />
            <WatsHot />
            <BuyClickDeliver /> */}
    </div>
  )
}

export default Home;
