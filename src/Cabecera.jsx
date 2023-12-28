import React from 'react';
import cabeceraImage from './img/cabecera.jpeg';

const Cabecera = () => {
  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <img
        src={cabeceraImage}
        alt="Cabecera"
        style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
      />
    </div>
  );
}

export default Cabecera;