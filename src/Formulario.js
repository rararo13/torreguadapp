import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Formulario.css';

const Formulario = () => {
  const [emailData, setEmailData] = useState({
    to_email: 'cyftorreguada@gmail.com', // Reemplaza con tu destinatario
    from_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_fhhqrdd',
      'template_74blv04',
      emailData,
      'si6Kf2NQyvK-OwxZE'
    )
      .then((response) => {
        console.log('Correo enviado con éxito:', response);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <label>
        Tu Correo:
        <input
          type="email"
          name="from_email"
          value={emailData.from_email}
          onChange={handleChange}
          className="input-field"
        />
      </label>
      <br />
      <label>
        Asunto:
        <input
          type="text"
          name="subject"
          value={emailData.subject}
          onChange={handleChange}
          className="input-field"
        />
      </label>
      <br />
      <label>
        Mensaje:
        <textarea
          name="message"
          value={emailData.message}
          onChange={handleChange}
          className="textarea-field"
        />
      </label>
      <br />
      <button type="submit" className="submit-button">
        Enviar Correo
      </button>
    </form>
  );
};

export default Formulario;