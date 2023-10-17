import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './logo.svg';

const Carousel = () => {
  const images = [
   {logo},{logo},{logo}
    // Agrega más URLs de imágenes según sea necesario
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Mi Carrusel de Imágenes</h2>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
                      {console.log(imageUrl)}

            <img src={imageUrl.logo} alt={`imagen-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;