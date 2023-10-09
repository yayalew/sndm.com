import React, { useState } from 'react';
import './styles/Home.css';
import Popup from '../components/popup';
import Sandman from '../assets/sandman-logo.png';
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';

const isMobile = window.innerWidth <= 768;

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showStreamingModal, setShowStreamingModal] = useState(false);
  const [startRotation, setStartRotation] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleOpenStreamingModal = () => {
    setShowStreamingModal(true);
  };

  const handleCloseStreamingModal = () => {
    setShowStreamingModal(false);
    setStartRotation(true); // Start the rotation when modal is closed
    playVideo(); // Play the video when the modal is closed
  };

  const playVideo = () => {
    const videoElement = document.getElementById('home_video');
    videoElement && videoElement.play().catch(error => {
      console.error('Error playing the video:', error);
    });
  };

  return (
    <div className='main'>
      <Popup onPress={handleOpenStreamingModal} showStreamingModal={showStreamingModal} onClose={handleCloseStreamingModal} />
      <video id='home_video' src={Concert} muted autoPlay preload='auto' loop playsInline />
      <div className='home-content'>
        <div className='image-container'>
          <div className='image-wrapper'>
            {isMobile ? (
              <img src={Sandman} alt='Sandman Logo' className={startRotation ? 'artist-logo-mobile rotate' : 'artist-logo-mobile'} onLoad={handleImageLoad} />
            ) : (
              <img src={Sandman} alt='Sandman Logo' className={startRotation ? 'artist-logo rotate' : 'artist-logo'} onLoad={handleImageLoad} />
            )}
            {!imageLoaded && <div className='loading-spinner' />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
