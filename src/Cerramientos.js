import React from 'react';
import './Servicios.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './img/logo.svg'
import uno from "./img/1.jpeg"
import dos from "./img/2.jpeg"
import tres from "./img/3.jpeg"


const Cerramientos = () => {
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
            <h2 className="servicio-titulo">Cerramientos</h2>

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