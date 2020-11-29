import React, { useState } from "react";
import ProductList from "./Product/ProductList";
import Ad from "./Ad/Ad";
import Carousel from "react-bootstrap/Carousel";
import Catelogue from "./Catelogue/Catelogue";

function Home() {
  const catelogueImage = ["catelogue-1", "catelogue-2", "catelogue-3"];
  const carouselImage = [
    "carousel-1",
    "carousel-2",
    "carousel-3",
    "carousel-4",
    "carousel-5",
    "carousel-6",
  ];
  const adImage = ["50monthinterest", "buyclickdeliver"];

  const [hot, setHot] = useState(false);
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"img/carouselImage"}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <Catelogue catelogueImage={catelogueImage} />
      {hot ? <h1 className="container">What's Hot</h1> : ""}
      <ProductList setHot={setHot} />
      <Ad src={adImage[0]} alt="ad1" />
      <h1>Others</h1>
      <ProductList />
      <Ad src={adImage[1]} alt="ad2" />
      <div className="discount container">
        ^Discounts apply to most recent previous ticketed/advertised price. As
        we negotiate on price, products are likely to have sold below
        ticketed/advertised price in stores prior to the discount offer. Prices
        may differ at airport & express stores.
      </div>
    </div>
  );
}

export default Home;
