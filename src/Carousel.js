import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'
import cubierta1 from "./img/Cubierta1.jpg"
import cubierta2 from "./img/Cubierta2.jpg"
import cubierta3 from "./img/Cubierta3.jpg"
import cubierta6 from "./img/Cubierta6.jpg"
import camara3 from "./img/Camara3.jpg"
import camara6 from "./img/Camara6.jpg"
import camara7 from "./img/Camara7.jpg"
import camara8 from "./img/Camara8.jpg"
import cerrramiento1 from "./img/Cerramiento1.jpg"
import cerrramiento3 from "./img/Cerramiento3.jpg"
import cerrramiento5 from "./img/Cerramiento5.jpg"
import revestimiento1 from "./img/Revestimiento1.jpg"
import revestimiento2 from "./img/Revestimiento2.jpg"
import fachada1 from "./img/Fachada1.jpg"
import fachada2 from "./img/Fachada2.jpg"
import fachada3 from "./img/Fachada3.jpg"


const Carousel = () => {
  const images = {
   cubierta1, cubierta2,cubierta3,cubierta6,camara3,camara6,camara7,
   camara8,cerrramiento1,cerrramiento3,cerrramiento5,revestimiento1,revestimiento2,
   fachada1,fachada2,fachada3}
    // Agrega más URLs de imágenes según sea necesario
  ;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
    <div className="carousel">
      <h2>Nuestros Trabajos</h2>
      <Slider {...settings}>
        {Object.keys(images).map((key, index) => (
          <div key={index} className="carousel-image-container">
            <img src={images[key]} alt={`imagen-${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;