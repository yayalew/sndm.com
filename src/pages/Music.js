import React, { useState } from 'react';
import "../index.css"
import Sandman from '../assets/SANDMAN1111.png';
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';
import Spotify from '../assets/spotify-icon-green-logo-8.png';
import AppleMusic from '../assets/apple-music-icon.png';
import Youtube from '../assets/youtube-icon.png';

const Music = () => {
    const [activeIframe, setActiveIframe] = useState('youtube'); // Default to 'youtube'

    const handleIconClick = (iframeType) => {
        setActiveIframe(iframeType);
    };

    return (
        <div className="main">
            <video src={Concert} autoPlay loop muted />
            <div className="content">
                <div className="music-container">
                    <div className="icons">
                        <div
                            className={`icon spotify-icon ${activeIframe === 'spotify' ? 'active' : ''}`}
                            onClick={() => handleIconClick('spotify')}
                        >
                            <img className='music-icons' src={Spotify} alt="Spotify Icon" />
                        </div>
                        <div
                            className={`icon apple-music-icon ${activeIframe === 'apple-music' ? 'active' : ''}`}
                            onClick={() => handleIconClick('apple-music')}
                        >
                            <img className='music-icons' src={AppleMusic} alt="Apple Music Icon" />
                        </div>
                        <div
                            className={`icon youtube ${activeIframe === 'youtube' ? 'active' : ''}`}
                            onClick={() => handleIconClick('youtube')}
                        >
                            <img className='music-icons' src={Youtube} alt="YouTube Icon" />
                        </div>
                    </div>
                    <div className="iframe-container">
                        {activeIframe === 'spotify' && (
                            <iframe
                                title='spotify'
                                className='iframe spotify'
                                src="https://open.spotify.com/embed/artist/2UytYzhVi9dPgPi9FIFGI4?utm_source=generator&theme=0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            />
                        )}
                        {activeIframe === 'apple-music' && (
                            <iframe
                                title='apple-music'
                                className='iframe apple-music'
                                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                src="https://embed.music.apple.com/us/album/nice-guys-finish-last/1642443459"
                            />
                        )}
                        {activeIframe === 'youtube' && (
                            <div className='videos'>
                            <iframe
                                title="youtube"
                                className='iframe youtube'
                                src="https://www.youtube.com/embed/-VSrkb9anlo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            />
                            <iframe
                                title="youtube"
                                className='iframe youtube'
                                src="https://www.youtube.com/embed/hynrjn3vgKg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            />
                            <iframe
                                title="youtube"
                                className='iframe youtube'
                                src="https://www.youtube.com/embed/fvGBOm2P08M"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Music;
