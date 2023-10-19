import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './img/logo.svg';
import './Carousel.css'
import uno from "./img/1.jpeg"
import dos from "./img/2.jpeg"
import tres from "./img/3.jpeg"

const Carousel = () => {
  const images = [
   {uno},{logo},{dos},{logo},{tres},{logo}
    // Agrega más URLs de imágenes según sea necesario
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div>
      <h2>Nuestros Trabajos</h2>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index} className="carousel-image-container">
            <img src={imageUrl.logo} alt={`imagen-${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;