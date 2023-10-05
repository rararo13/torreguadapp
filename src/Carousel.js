import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const images = [
    './logo.svg',
    'url_de_la_imagen_2',
    'url_de_la_imagen_3',
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
            <img src={imageUrl} alt={`imagen-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;