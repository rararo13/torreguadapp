import React from 'react';
import './Servicios.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cubierta1 from "./img/Cubierta1.jpg"
import cubierta2 from "./img/Cubierta2.jpg"
import cubierta3 from "./img/Cubierta3.jpg"
import cubierta4 from "./img/Cubierta4.jpg"
import cubierta5 from "./img/Cubierta5.jpg"
import cubierta6 from "./img/Cubierta6.jpg"
import cubierta7 from "./img/Cubierta7.jpg"
import cubierta8 from "./img/Cubierta8.jpg"
import cubierta9 from "./img/Cubierta9.jpg"
import cubierta10 from "./img/Cubierta10.jpg"
import cubierta11 from "./img/Cubierta11.jpg"




const Cubiertas = () => {
  const images = 
    {
      cubierta1,cubierta2,cubierta3,cubierta4,cubierta5,cubierta6,cubierta7,
    cubierta8,cubierta9,cubierta10,cubierta11
  }

   ;
 
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
        {Object.keys(images).map((key, index) => (
          <div key={index} className="carousel-image-container">
            <img src={images[key]} alt={`imagen-${index}`} className="carousel-image" />
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