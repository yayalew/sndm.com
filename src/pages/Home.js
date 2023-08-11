import React from 'react';
import "../index.css"
import Sandman from '../assets/sandman-logo.png';
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';


const Home = () => {
    return (
      <div className="main">
        <video src={Concert} autoPlay loop muted />
        <div className="content">
          <div>
            <img src={Sandman} alt="Sandman Logo" className="artist-logo-home" />
          </div>
        </div>
      </div>
    );
  };
 
export default Home;
