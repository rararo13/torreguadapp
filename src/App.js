import './App.css';
import MainFeaturedPost from './Cabecera';
import React from 'react';
import WhatsappButton from './WhatsAppButton';
import Carousel from './Carousel';
import Card from './Card';
import SobreNosotros from './SobreNosotros';
import Formulario from './Formulario';
import logo from "./img/logo.svg"
import portada from './img/portada.jpeg'
import Cubiertas from './Cubiertas'
import Fachadas from './Fachadas'
import Cerramientos from './Cerramientos'
import CamarasFrigorificas from './CamarasFrigorificas'
import Revestimientos from './Revestimientos'
import Mantenimientos from './Mantenimientos'
import Footer from './Footer'




function App() {
  const mainFeaturedPost = {
    title: '',
    description:
      "",
    image: { portada },
    imageText: '',
    linkText: '',
  };


  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Carousel />
      <div style={{ display: 'flex', marginTop: '70px' }}>
        <Card componente={<Cubiertas />} titulo={"Cubiertas"} imagen={logo} />
        <div style={{ marginRight: '10px' }}></div>
        <Card componente={<Fachadas />} titulo={"Fachadas"} imagen={logo} />
        <div style={{ marginRight: '10px' }}></div>
        <Card componente={<Cerramientos />} titulo={"Cerramientos"} imagen={logo} />
      </div>
      <div style={{ display: 'flex', marginTop: '70px' }}>
        <Card componente={<CamarasFrigorificas />} titulo={"Cubiertas"} imagen={logo} />
        <div style={{ marginRight: '10px' }}></div>
        <Card componente={<Revestimientos />} titulo={"Revestimientos"} imagen={logo} />
        <div style={{ marginRight: '10px' }}></div>
        <Card componente={<Mantenimientos />} titulo={"Mantenimientos"} imagen={logo} />
      </div>
      <SobreNosotros />
      <WhatsappButton />
      <Footer/>
    </>
  );
}

export default App;
