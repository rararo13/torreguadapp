import React from 'react';
import './Servicios.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import camara1 from "./img/Camara1.png"
import camara2 from "./img/Camara2.jpg"
import camara3 from "./img/Camara3.jpg"
import camara4 from "./img/Camara4.jpg"
import camara5 from "./img/Camara5.jpg"
import camara6 from "./img/Camara6.jpg"
import camara7 from "./img/Camara7.jpg"
import camara8 from "./img/Camara8.jpg"
import camara9 from "./img/Camara9.jpg"


const CamarasFrigorificas = () => {
    const images = {
        camara1,camara2,camara3,camara4,camara5,camara6,camara7,
        camara8,camara9
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
            <h2 className="servicio-titulo">Cámaras Frigoríficas</h2>
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
                    Realizamos su montaje adaptándonos a todas vuestras necesidades.
                </p>
                <h2>Ventajas</h2>
                <ul>
                    <li>
                        <p>1.	Soporta cualquier tipo de temperaturas.</p>
                    </li>
                    <li>
                        <p>2.	Su manipulación es sencilla.</p>
                    </li>
                    <li>
                        <p>3.	Acabado estético</p>
                    </li>
                    <li>
                        <p>4.	Favorece la impermeabilización</p>
                    </li>
                    <li>
                        <p>5.	Resistencia a la corrosión</p>
                    </li>
                    <li>
                        <p>6.	Factibilidad en la limpieza</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CamarasFrigorificas;