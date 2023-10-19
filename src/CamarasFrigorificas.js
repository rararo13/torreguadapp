import React from 'react';
import './Servicios.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './img/logo.svg'
import uno from "./img/1.jpeg"
import dos from "./img/2.jpeg"
import tres from "./img/3.jpeg"


const CamarasFrigorificas = () => {
    const images = [
        { uno }, { logo }, { dos }, { logo }, { tres }, { logo }
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
            <h2 className="servicio-titulo">Cámaras Frigoríficas</h2>
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