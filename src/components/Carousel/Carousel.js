import React, { useState, useEffect } from "react";
import "./Carousel.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

function Carousel({ carouselImage }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    while (selected > 6) {
      setTimeout(() => {
        setSelected((p) => p + 1);
        selected++;
      }, 1000);
    }

    return () => clearTimeout();
  }, []);

  console.log(selected);
  return (
    <div>
      <img
        src={`img/${carouselImage[selected]}.webp`}
        alt={carouselImage[selected]}
      />
    </div>
  );
}

export default Carousel;
