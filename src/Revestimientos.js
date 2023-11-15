import React from 'react';
import './Servicios.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import revestimiento1 from "./img/Revestimiento1.jpg"
import revestimiento2 from "./img/Revestimiento2.jpg"



const Revestimientos = () => {
    const images = {
        revestimiento1,revestimiento2
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
            <h2 className="servicio-titulo">Revestimientos en PVC</h2>

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
                    Tenemos los revestimientos en PVC, con gran variedad de modelos y colores.
                </p>
                <h2>Características</h2>
                <ul>
                    <li>
                        <p>•	Panel decorativo de PVC, tienen gran variedad de colores y diseños.</p>
                    </li>
                    <li>
                        <p>•	Se utilizan para mejorar la apariencia de una habitación o de un edificio.</p>
                    </li>
                </ul>
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

export default Revestimientos;