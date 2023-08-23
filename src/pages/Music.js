import React, { useState } from 'react';
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';
import Spotify from '../assets/spotify-icon-green-logo-8.png';
import AppleMusic from '../assets/apple-music-icon.png';
import Youtube from '../assets/youtube-icon.png';
import './styles/Music.css'

const Music = () => {
  const [activeIframe, setActiveIframe] = useState('youtube'); // Default to 'youtube'

  const handleIconClick = (iframeType) => {
    setActiveIframe(iframeType);
  };

  return (
    <div className="music-container">
      <video src={Concert} muted="true" autoplay="true" preload="auto" loop="true" playsinline="true"  />
      <div className="content">
        <div className="icons">
          
          <Icon
            image={AppleMusic}
            type="apple-music"
            activeIframe={activeIframe}
            handleIconClick={handleIconClick}
          />
          <Icon
            image={Spotify}
            type="spotify"
            activeIframe={activeIframe}
            handleIconClick={handleIconClick}
          />
          <Icon
            image={Youtube}
            type="youtube"
            activeIframe={activeIframe}
            handleIconClick={handleIconClick}
          />
        </div>
        <IframeContainer activeIframe={activeIframe} />
      </div>
    </div>
  );
};

const Icon = ({ image, type, activeIframe, handleIconClick }) => (
  <div
    className={`icon ${type} ${activeIframe === type ? 'active' : ''}`}
    onClick={() => handleIconClick(type)}
  >
    <img src={image} alt={`${type} Icon`} />
  </div>
);

const IframeContainer = ({ activeIframe }) => {
  const iframeURLs = {
    spotify: "https://open.spotify.com/embed/artist/2UytYzhVi9dPgPi9FIFGI4?utm_source=generator&theme=0",
    'apple-music': "https://embed.music.apple.com/us/album/nice-guys-finish-last/1642443459",
                    
    youtube: [
      "https://www.youtube.com/embed/nCuoVZrY35E",
      "https://www.youtube.com/embed/-VSrkb9anlo",
      "https://www.youtube.com/embed/hynrjn3vgKg",
      "https://www.youtube.com/embed/fvGBOm2P08M",
      

    ],
  };

  return (
    <div className="iframe-container">
      {activeIframe === 'youtube' && (
        <div className="videos">
          {iframeURLs.youtube.map((url, index) => (
            <iframe
              key={index}
              title={`youtube-${index}`}
              src={url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          ))}
        </div>
      )}
      {activeIframe !== 'youtube' && (
        <iframe
          title={activeIframe}
          src={iframeURLs[activeIframe]}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default Music;
