import React from 'react';
import './Servicios.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './img/logo.svg'
import uno from "./img/1.jpeg"
import dos from "./img/2.jpeg"
import tres from "./img/3.jpeg"


const Fachadas = () => {
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
            <h2 className="servicio-titulo">Fachadas</h2>

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
                    Nos adaptamos a sus necesidades y gustos en la estética, tenemos gran variedad de colores y bastantes formas de paneles. Consulta nuestro catálogo para quedar satisfech@.
                </p>
                <h2>Ventajas</h2>
                <ul>
                    <li>
                        <p>1.	Elevada resistencia con un peso bajo.</p>
                    </li>
                    <li>
                        <p>2.	Aislamiento térmico bajas y altas temperaturas.</p>
                    </li>
                    <li>
                        <p>3.	Protección frente agentes externos como agua o aire. </p>
                    </li>
                    <li>
                        <p>4.	Montaje sencillo.</p>
                    </li>
                    <li>
                        <p>5.	Larga vida útil.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Fachadas;