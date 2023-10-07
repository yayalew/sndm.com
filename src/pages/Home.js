
import Sandman from '../assets/sandman-logo.png';
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';
import { useState } from 'react';
import './styles/Home.css'
import Popup from '../components/popup';

const isMobile = window.innerWidth <= 768; 


const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className='main'>
      <Popup />
      <video src={Concert} muted="true" autoplay="true" preload="auto" loop="true" playsinline="true" />
      <div className="content">
        <div className='image-container'>
          <div className='image-wrapper'>
            {isMobile ? <img src={Sandman} alt="Sandman Logo" className='artist-logo-mobile' onLoad={handleImageLoad} /> : <img src={Sandman} alt="Sandman Logo" className='artist-logo' onLoad={handleImageLoad} />}
            {!imageLoaded && <div className="loading-spinner" />}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;
