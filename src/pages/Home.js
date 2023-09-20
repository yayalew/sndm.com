import React from 'react';
import Sandman from '../assets/sandman-logo.png';
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';
import './styles/Home.css'


const isMobile = window.innerWidth <= 768; // Set your desired mobile breakpoint


const Home = () => {
  return (
    <div className='main'>
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
