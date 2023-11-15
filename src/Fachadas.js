import React from 'react';
import './Servicios.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fachada1 from "./img/Fachada1.jpg"
import fachada2 from "./img/Fachada2.jpg"
import fachada3 from "./img/Fachada3.jpg"




const Fachadas = () => {
    const images =  {
        fachada1,fachada2,fachada3};

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
                    {Object.keys(images).map((key, index) => (
                        <div key={index} className="carousel-image-container">
                            <img src={images[key]} alt={`imagen-${index}`} className="carousel-image" />
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