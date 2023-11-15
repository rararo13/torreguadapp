import './App.css';
import MainFeaturedPost from './Cabecera';
import React from 'react';
import WhatsappButton from './WhatsAppButton';
import Carousel from './Carousel';
import Card from './Card';
import SobreNosotros from './SobreNosotros';
import portada from './img/portada.jpeg'
import Cubiertas from './Cubiertas'
import Fachadas from './Fachadas'
import Cerramientos from './Cerramientos'
import CamarasFrigorificas from './CamarasFrigorificas'
import Revestimientos from './Revestimientos'
import Mantenimientos from './Mantenimientos'
import Footer from './Footer'
import EmailButton from './EmailButton';




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
      <div style={{ flex: '1 0 auto', marginTop: '70px' }}>
        <Card componente={<Cubiertas />} titulo={"Cubiertas"} />
        <div style={{ marginRight: '10px' }}></div>
        <Card componente={<Fachadas />} titulo={"Fachadas"}/>
        <div style={{ marginRight: '10px' }}></div>
        <Card componente={<Cerramientos />} titulo={"Cerramientos"}  />
      </div>
      <div style={{ flex: '1 0 auto', marginTop: '70px' }}>
        <Card componente={<CamarasFrigorificas />} titulo={"Cubiertas"}  />
        <div style={{ marginRight: '10px' }}></div>
        <Card componente={<Revestimientos />} titulo={"Revestimientos"} />
        <div style={{ marginRight: '10px' }}></div>
        <Card componente={<Mantenimientos />} titulo={"Mantenimientos"} />
      </div>
      <SobreNosotros />
      <WhatsappButton />
      <EmailButton />
      <Footer/>
    </>
  );
}

export default App;
