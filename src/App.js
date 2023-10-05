import './App.css';
import MainFeaturedPost from './Cabecera';
import SobreNosotros from './SobreNosotros';




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
    <><MainFeaturedPost post={mainFeaturedPost}></MainFeaturedPost> 
   <SobreNosotros></SobreNosotros>
    </>
  );
}

export default App;
