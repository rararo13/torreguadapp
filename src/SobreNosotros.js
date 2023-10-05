import React from 'react';
import './index.css';
import { FaCheck} from 'react-icons/fa'; // Importa los iconos que desees


const SobreNosotros = () => {
  return (
    <div className="sobre-nosotros-container">

      <section className="historia">
        <h2>Sobre TorreGuada</h2>
        <p>
        Empresa dedicada a realizar montajes de paneles sándwich en todas sus áreas, cubiertas, fachadas, cámaras frigoríficas, cerramientos, puertas, revestimientos, canalones etc... Para su estanquidad a lo largo del tiempo.
        </p>
        <p>
        Somos una empresa joven, pero con mucha experiencia. Si necesitas un montaje de paneles sándwich no dudes en contactar con nosotros, nuestra profesionalidad te ayudará a satisfascer sus necesidades.
        </p>
      </section>

      <section className="servicios">
        <h2>Nuestros Servicios</h2>
        <p>
        Nuestros servicios son todos aquellos que tenga que ver con el panel sándwich:
        </p>
        <ul>
          <li>
            <FaCheck className="icon" />
            <p>Cubiertas y Fachadas</p>
          </li>
          <li>
            <FaCheck className="icon" />
            <p>Cerramientos (trastero y casa)</p>
          </li>
          <li>
            <FaCheck className="icon" />
            <p>Cámaras Frigoríficas</p>
          </li>
          <li>
            <FaCheck className="icon" />
            <p>Revestimientos en PVC</p>
          </li>
          <li>
            <FaCheck className="icon" />
            <p>Mantenimientos</p>
          </li>
        </ul>
      </section>

    </div>
  );
};

export default SobreNosotros;