import './App.css';
import MainFeaturedPost from './Cabecera';
import React from 'react';
import WhatsappButton from './WhatsAppButton';
import Carousel from './Carousel';
import Card from './Card';
import SobreNosotros from './SobreNosotros';
import logo from "./logo.svg"



function App() {
  const mainFeaturedPost = {
    title: 'TorreGuada',
    description:
      "Somos una empresa que se dedica a realizar montajes de paneles sándwich en todas sus áreas, cubiertas, fachadas, cámaras frigoríficas, cerramientos, puertas, revestimientos, canalones etc... Para su estanquidad a lo largo del tiempo.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  
  
  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost}/>
      <div style={{display:'inline-flex', justifyContent:'space-between'}}>
        <Card componente={<SobreNosotros/>} titulo={"Sobre Nosotros"} imagen={logo}/>
        <Card componente={<SobreNosotros/>} titulo={"Cabecera"}/>
        <Card componente={<SobreNosotros/>} titulo={"fafafa"}/>
      </div>
      <WhatsappButton/>
      <Carousel />
    </>
  );
}

export default App;
