import React from 'react';
import Fab from '@mui/material/Fab';
import EmailIcon from '@mui/icons-material/Email';
import './index.css';

const EmailButton = () => {
    const emailAddress = 'cyftorreguada@gmail.com';
  
    const handleButtonClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };
  
    return (
      <div className="email-button-container" style={{ textAlign: 'right' }}>
        <Fab
          color="primary"
          aria-label="email"
          onClick={handleButtonClick}
        >
          <EmailIcon />
        </Fab>
      </div>
    );
  };
  
  export default EmailButton;