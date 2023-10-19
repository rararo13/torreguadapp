import React from 'react';
import './Servicios.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './img/logo.svg'
import uno from "./img/1.jpeg"
import dos from "./img/2.jpeg"
import tres from "./img/3.jpeg"


const Cubiertas = () => {
  const images = [
    {uno},{logo},{dos},{logo},{tres},{logo}
     // Agrega más URLs de imágenes según sea necesario
   ];
 
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
   };
    return (
      <div className="servicio-container">
        <h2 className="servicio-titulo">Cubiertas</h2>

        <div>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index} className="carousel-image-container">
            <img src={imageUrl.logo} alt={`imagen-${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
        <div>
        <p class="parrafo">
        Montamos todo tipo de cubiertas metálicas con sus correspondientes canalones y remateria para la estanquidad de la cubierta.
        </p>
          <h2>Ventajas</h2>
          <ul>
          <li>
            <p>1.	Aislamiento térmico y acústico eficiente.</p>
          </li>
          <li>
            <p>2.	Durabilidad y resistencia a cualquier tipo de impacto.</p>
          </li>
          <li>
            <p>3.	Fácil instalación y mantenimiento. </p>
          </li>
          <li>
            <p>4.	Alta resistencia a la deformación y a la tracción.</p>
          </li>
          <li>
            <p>5.	Bajo costo de mantenimiento a largo plazo.</p>
          </li>
        </ul>
        </div>
      </div>
    );
  };
  
  export default Cubiertas;