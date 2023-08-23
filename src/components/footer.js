import React from 'react';
import './footer.css';
import youtubeIcon from '../assets/youtube-icon.png';
import spotifyIcon from '../assets/spotify-icon-green-logo-8.png';
import appleMusicIcon from '../assets/apple-music-icon.png';
import instagramIcon from '../assets/instagram.png';

const isMobile = window.innerWidth <= 768; // Set your desired mobile breakpoint


export default function Footer() {
  return (
    <div className="footer">
      <div className="info-box">
        <div className="links">
          <a href="https://www.youtube.com/channel/UCZUrFCfwoOkA8oJrX9WIoPw" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" />
          </a>
          <a href="https://open.spotify.com/artist/2UytYzhVi9dPgPi9FIFGI4?si=qBUop9j-TcC3RCsGA2Ul0A" target="_blank" rel="noopener noreferrer">
            <img src={spotifyIcon} alt="Spotify" />
          </a>
          <a href="https://music.apple.com/us/artist/sandman/1473060600" target="_blank" rel="noopener noreferrer">
            <img src={appleMusicIcon} alt="Apple Music" />
          </a>
          <a href="https://instagram.com/sandmanxo" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
        <div className="text">
        {isMobile ? null : <p>© 2023 Copyright -  PROUDLY CREATED BY YEAB AYALEW</p>}
        </div>
      </div>
    </div>
  );
}
