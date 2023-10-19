import React from 'react';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './index.css'; // Asegúrate de tener este archivo de estilos

const WhatsappButton = () => {
  const phoneNumber = '34605261935';

  const handleButtonClick = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <div className="whatsapp-button-container">
      <Fab
        color="success"
        aria-label="whatsapp"
        onClick={handleButtonClick}
      >
        <WhatsAppIcon />
      </Fab>
    </div>
  );
};

export default WhatsappButton;