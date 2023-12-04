import React from 'react';
import cabeceraImage from './img/cabecera.jpeg';

const Cabecera = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', width: '100%' }}>
      <img
        src={cabeceraImage}
        alt="Cabecera"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default Cabecera;