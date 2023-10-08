import Sandman from '../assets/sandman-logo.png';
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';
import { useState, useEffect } from 'react';
import './styles/Home.css';
import Popup from '../components/popup';

const isMobile = window.innerWidth <= 768;

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showStreamingModal, setShowStreamingModal] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = Sandman;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  const handleOpenStreamingModal = () => {
    setShowStreamingModal(true);
  }

  const handleCloseStreamingModal = () => {
    setShowStreamingModal(false);
  }

  return (
    <div className='main'>
      <Popup onPress={handleOpenStreamingModal} showStreamingModal={showStreamingModal} onClose={handleCloseStreamingModal} />
      <video src={Concert} muted="true" autoPlay="true" preload="auto" loop="true" playsInline="true" />
      <div className="home-content">
        <div className='image-container'>
          <div className='image-wrapper'>
            {isMobile ? <img src={Sandman} alt="Sandman Logo" className='artist-logo-mobile' /> : <img src={Sandman} alt="Sandman Logo" className='artist-logo' />}
            {!imageLoaded && <div className="loading-spinner" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
