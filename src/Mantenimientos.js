import React from 'react';
import './Servicios.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import mantenimiento1 from "./img/Mantenimiento1.jpeg"
import mantenimiento2 from "./img/Mantenimiento2.jpeg"
import mantenimiento3 from "./img/Mantenimiento3.jpeg"
import mantenimiento4 from "./img/Mantenimiento4.jpeg"
import mantenimiento5 from "./img/Mantenimiento5.jpeg"
import mantenimiento6 from "./img/Mantenimiento6.jpeg"
import mantenimiento7 from "./img/Mantenimiento7.jpeg"
import mantenimiento8 from "./img/Mantenimiento8.jpeg"
import mantenimiento9 from "./img/Mantenimiento9.jpeg"





const Mantenimientos = () => {
  
    const images = {
        mantenimiento1,mantenimiento2,mantenimiento3,mantenimiento4,mantenimiento5,mantenimiento6,mantenimiento7,mantenimiento8,mantenimiento9
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="servicio-container">
            <h2 className="servicio-titulo">Mantenimientos</h2>

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
                    Con nuestro mantenimiento permitimos la conservación de cubiertas de los edificios en un estado óptimo.
                </p>
                <h2>Características</h2>
                <ul>
                    <li>
                        <p>1.	Verificamiento de fijaciones, solapes y uniones</p>
                    </li>
                    <li>
                        <p>2.	Los techos requieren limpieza con frecuencia</p>
                    </li>
                    <li>
                        <p>3.	Revisamos dilataciones de los sellados existentes causados por los agentes externos</p>
                    </li>
                    <li>
                        <p>4.	Recambio de remateria y sustitución de tornillería en mal estado</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Mantenimientos;