import React from 'react';
import './Servicios.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const Mantenimientos = () => {
    const images = 
      {  };

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