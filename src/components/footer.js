import React from 'react';
import '../pages/styles/footer.css'
import youtubeIcon from '../assets/youtube-black-modified.png';
import spotifyIcon from '../assets/spotify-black-modified.png';
import appleMusicIcon from '../assets/apple-black-modified.png';
import instagramIcon from '../assets/insta-black-modified.png';

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
        {isMobile ?  <p className='credits'>© 2023 YEAB AYALEW </p>: <p>©2023  YEAB AYALEW</p>}
        </div>
      </div>
    </div>
  );
}
