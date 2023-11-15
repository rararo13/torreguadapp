import React from 'react';
import './Servicios.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cerrramiento1 from "./img/Cerramiento1.jpg"
import cerrramiento2 from "./img/Cerramiento2.jpg"
import cerrramiento3 from "./img/Cerramiento3.jpg"
import cerrramiento4 from "./img/Cerramiento4.jpg"
import cerrramiento5 from "./img/Cerramiento5.jpg"



const Cerramientos = () => {
    const images = {
        cerrramiento1,cerrramiento2,cerrramiento3,cerrramiento4,cerrramiento5
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
            <h2 className="servicio-titulo">Cerramientos</h2>

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
                    Realizamos todo tipo de montajes de cerramientos interiores, adaptándonos siempre a tus necesidades en su mayoría sin estructura metálica, pero con gran resistencia.
                </p>
                <h2>Ventajas</h2>
                <ul>
                    <li>
                        <p>1.	Almacenes industriales.</p>
                    </li>
                    <li>
                        <p>2.	Almacenes frigoríficos.</p>
                    </li>
                    <li>
                        <p>3.	Almacenes comerciales. </p>
                    </li>
                    <li>
                        <p>4.	Almacenes logísticos.</p>
                    </li>
                    <li>
                        <p>5.	Eficiencia energética y aislamiento térmico.</p>
                    </li>
                    <li>
                        <p>6.	Resistencia y durabilidad que garantiza la protección de los productos almacenados.</p>
                    </li>
                    <li>
                        <p>7.	Versatilidad y adaptabilidad en el diseño.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Cerramientos;