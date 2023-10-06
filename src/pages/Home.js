
import Sandman from '../assets/sandman-logo.png';
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';
import * as React from 'react';
import './styles/Home.css'
import Popup from '../components/popup';

const isMobile = window.innerWidth <= 768; 

const Home = () => {
  return (
    <div className='main'>
      <Popup />
      <video src={Concert} muted="true" autoplay="true" preload="auto" loop="true" playsinline="true" />
      <div className="content">
        <div className='image-container'>
          <div className='image-wrapper'>
            {isMobile ? <img src={Sandman} alt="Sandman Logo" className='artist-logo-mobile' /> : <img src={Sandman} alt="Sandman Logo" className='artist-logo' />}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;
